import type { Dictionary } from '../../frame.ts';
import type { ApiConfiguration } from '../../pipeline.ts';
type OptionsFrame = {
    options: Dictionary;
};
type DataFrame = {
    data?: Dictionary;
};
type EditFrame = {
    data?: Dictionary;
    options?: Dictionary;
};
declare const validators: {
    /**
     * @param {object} apiConfig
     * @param {import('@tryghost/api-framework').Frame} frame
     */
    all(apiConfig: ApiConfiguration, frame: OptionsFrame): Promise<void>;
    /**
     * @param {object} apiConfig
     * @param {import('@tryghost/api-framework').Frame} frame
     */
    browse(apiConfig: ApiConfiguration, frame: DataFrame): Promise<never> | undefined;
    read(apiConfig: ApiConfiguration, frame: DataFrame): Promise<never> | undefined;
    /**
     * @param {object} apiConfig
     * @param {import('@tryghost/api-framework').Frame} frame
     */
    add(apiConfig: ApiConfiguration, frame: DataFrame): Promise<never> | undefined;
    /**
     * @param {object} apiConfig
     * @param {import('@tryghost/api-framework').Frame} frame
     */
    edit(apiConfig: ApiConfiguration, frame: EditFrame): Promise<never> | undefined;
    changePassword(apiConfig: ApiConfiguration, frame: DataFrame): Promise<never> | undefined;
    resetPassword(apiConfig: ApiConfiguration, frame: DataFrame): Promise<never> | undefined;
    setup(apiConfig: ApiConfiguration, frame: DataFrame): Promise<never> | undefined;
    publish(apiConfig: ApiConfiguration, frame: DataFrame): Promise<never> | undefined;
};
export default validators;
//# sourceMappingURL=all.d.ts.map