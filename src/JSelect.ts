import { IJSelectOptions } from './Interface/IJSelectOptions';
import { JSelectConfig } from './Config/JSelectConfig';
import {JSelectBuilder} from "./Helpers/JSelectBuilder";

class JSelect {
    private element: HTMLSelectElement;
    private selectionOptions: NodeListOf<HTMLOptionElement>;
    private readonly HTML_SELECT_CLASS: string = 'HTMLSelectElement';

    constructor(element: HTMLElement, options: IJSelectOptions = JSelectConfig.getDefaultOptions()) {
        if (element.constructor.name !== this.HTML_SELECT_CLASS) throw new Error('JSelect can only be instantiated on a HTML select element.');

        this.element = <HTMLSelectElement> element;
        this.element.style.display = 'none';
        this.selectionOptions = this.element.querySelectorAll('option');

        this.setup(options);
    }

    /**
     * @param {IJSelectOptions} options
     *
     * @returns {void}
     */
    private setup(options: IJSelectOptions): void
    {
        const selectContainer: HTMLDivElement = document.createElement('div');

        this.selectionOptions.forEach((selectionOption: HTMLOptionElement) => {
            const selection: HTMLDivElement = document.createElement('div');

            selection.dataset.jselectValue = selectionOption.value;
            selection.innerHTML = selectionOption.innerHTML;

            selectContainer.append(selection);
        });

        this.element.insertAdjacentElement('beforebegin', selectContainer);
    }

    /**
     * @returns void
     */
    public static loadAllWithDefaultOptions(): void
    {
        JSelectBuilder.instantiateAllSelectsOnPage();
    }
}

export { JSelect };