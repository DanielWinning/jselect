import { IJSelectOptions } from './Interface/IJSelectOptions';
import { JSelectConfig } from './Config/JSelectConfig';
import { JSelectBuilder } from './Helpers/JSelectBuilder';
import {ElementSelect} from "./Elements/ElementSelect";
import {JSelectElement} from "./Elements/JSelectElement";

class JSelect {
    private selector: JSelectElement;
    private htmlSelectElement: HTMLSelectElement;
    private readonly HTML_SELECT_CLASS: string = 'HTMLSelectElement';
    private selectContainer: ElementSelect;
    private settings: IJSelectOptions;

    constructor(element: HTMLElement, settings: IJSelectOptions = JSelectConfig.getDefaultOptions()) {
        if (element.constructor.name !== this.HTML_SELECT_CLASS) throw new Error('JSelect can only be instantiated on a HTML select element.');

        this.setOriginalSelectData(<HTMLSelectElement> element);
        this.settings = JSelectConfig.getAllOptions(settings);
        this.setupElementTree();
    }

    /**
     * @param {HTMLSelectElement} element
     *
     * @returns {void}
     */
    private setOriginalSelectData(element: HTMLSelectElement): void
    {
        this.htmlSelectElement = element;
        this.htmlSelectElement.style.display = 'none';
    }

    private setupElementTree()
    {
        this.selector = new ElementSelect(this.htmlSelectElement);
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