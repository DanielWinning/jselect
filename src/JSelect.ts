import { IJSelectOptions } from './Interface/IJSelectOptions';
import { JSelectConfig } from './Config/JSelectConfig';
import { JSelectBuilder } from './Helpers/JSelectBuilder';

class JSelect {
    private htmlSelectElement: HTMLSelectElement;
    private readonly HTML_SELECT_CLASS: string = 'HTMLSelectElement';
    private selectOptions: IJSelectOptions;

    constructor(element: HTMLElement, options: IJSelectOptions = JSelectConfig.getDefaultOptions()) {
        if (element.constructor.name !== this.HTML_SELECT_CLASS) throw new Error('JSelect can only be instantiated on a HTML select element.');

        this.htmlSelectElement = <HTMLSelectElement> element;
        this.htmlSelectElement.style.display = 'none';
        this.selectOptions = JSelectConfig.getAllOptions(options);

        this.renderHTML();
    }

    /**
     * @returns {void}
     */
    private renderHTML(): void
    {

    }

    /**
     * @returns {void}
     */
    public static loadAllWithDefaultOptions(): void
    {
        JSelectBuilder.instantiateAllSelectsOnPage();
    }
}

export { JSelect };