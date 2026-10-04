import path from 'node:path';
import moment from 'moment';
/**
 * Base class for Ghost storage adapters.
 *
 * Concrete adapters extend this class and implement the methods listed in
 * `requiredFns`: `exists`, `save`, `serve`, `delete` and `read`.
 */
export class StorageBase {
    constructor() {
        Object.defineProperty(this, 'requiredFns', {
            value: Object.freeze(['exists', 'save', 'serve', 'delete', 'read']),
            writable: false,
        });
    }
    getTargetDir(baseDir) {
        const date = moment();
        const month = date.format('MM');
        const year = date.format('YYYY');
        if (baseDir) {
            return path.join(baseDir, year, month);
        }
        return path.join(year, month);
    }
    generateUnique(dir, name, ext, i) {
        let filename;
        let append = '';
        if (i) {
            append = '-' + i;
        }
        if (ext) {
            filename = name + append + ext;
        }
        else {
            filename = name + append;
        }
        return this.exists(filename, dir).then((exists) => {
            if (exists) {
                i = i + 1;
                return this.generateUnique(dir, name, ext, i);
            }
            else {
                return path.join(dir, filename);
            }
        });
    }
    getUniqueFileName(file, targetDir) {
        const ext = path.extname(file.name);
        let name;
        // poor extension validation
        // .1 or .342 is not a valid extension, .mp4 is though!
        if (!ext.match(/\.\d+$/)) {
            name = this.getSanitizedFileName(path.basename(file.name, ext));
            return this.generateUnique(targetDir, name, ext, 0);
        }
        else {
            name = this.getSanitizedFileName(path.basename(file.name));
            return this.generateUnique(targetDir, name, null, 0);
        }
    }
    getSanitizedFileName(fileName) {
        // below only matches ascii characters, @, and .
        // unicode filenames like город.zip would therefore resolve to ----.zip
        return fileName.replace(/[^\w@.]/gi, '-');
    }
}
//# sourceMappingURL=base.js.map