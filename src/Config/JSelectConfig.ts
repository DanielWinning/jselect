import { IJSelectOptions } from '../Interface/IJSelectOptions';

class JSelectConfig
{
    /**
     * @returns {IJSelectOptions}
     */
    public static getDefaultOptions(): IJSelectOptions
    {
        return {
            search: true,
            selected: '',
            placeholder: '-',
            multiple: false
        };
    }

    /**
     * @param {IJSelectOptions} options
     *
     * @returns {IJSelectOptions}
     */
    public static getAllOptions(options: IJSelectOptions): IJSelectOptions
    {
        const defaultOptions: IJSelectOptions = JSelectConfig.getDefaultOptions();

        return {
            search: options.search !== undefined
                ? options.search
                : defaultOptions.search,
            selected: options.selected !== undefined
                ? options.selected
                : defaultOptions.selected,
            placeholder: options.placeholder !== undefined
                ? options.placeholder
                : defaultOptions.placeholder,
            multiple: options.multiple !== undefined
                ? options.multiple
                : defaultOptions.multiple
        }
    }
}

export { JSelectConfig };