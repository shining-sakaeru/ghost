#!/usr/bin/env node
"use strict";
// Drops and recreates the in-development tables listed in
// core/server/data/schema/in-development.ts so a local database picks up
// changes to their definitions. Their data is discarded.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("../core/server/overrides");
const logging_1 = __importDefault(require("@tryghost/logging"));
const db_1 = __importDefault(require("../core/server/data/db"));
const in_development_1 = require("../core/server/data/schema/in-development");
async function main() {
    try {
        await (0, in_development_1.rebuildInDevelopmentTables)(db_1.default.knex);
    }
    catch (err) {
        logging_1.default.error(err);
        process.exitCode = 1;
    }
    finally {
        await db_1.default.knex.destroy();
    }
}
main();
