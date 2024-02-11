import { IJSelectOptions } from './Interface/IJSelectOptions';
import { JSelectConfig } from './Config/JSelectConfig';
import { JSelectBuilder } from './Helpers/JSelectBuilder';

class JSelect {
    private element: HTMLSelectElement;
    private selectionOptions: NodeListOf<HTMLOptionElement>;
    private readonly HTML_SELECT_CLASS: string = 'HTMLSelectElement';
    private selectOptions: IJSelectOptions;

    constructor(element: HTMLElement, options: IJSelectOptions = JSelectConfig.getDefaultOptions()) {
        if (element.constructor.name !== this.HTML_SELECT_CLASS) throw new Error('JSelect can only be instantiated on a HTML select element.');

        this.element = <HTMLSelectElement> element;
        this.element.style.display = 'none';
        this.selectionOptions = this.element.querySelectorAll('option');
        this.selectOptions = JSelectConfig.getAllOptions(options);

        this.renderHTML();
    }

    /**
     * @returns {void}
     */
    private renderHTML(): void
    {
        const selectContainer: HTMLDivElement = document.createElement('div'),
            selectedContainer: HTMLDivElement = document.createElement('div');

        selectContainer.classList.add('jselect-container');
        selectContainer.append(selectedContainer, this.createOptionsElements());

        this.element.insertAdjacentElement('beforebegin', selectContainer);
    }

    /**
     * @returns {HTMLDivElement}
     */
    private createOptionsElements(): HTMLDivElement
    {
        const optionsContainer: HTMLDivElement = document.createElement('div');

        optionsContainer.classList.add('jselect-options');

        this.selectionOptions.forEach((selectionOption: HTMLOptionElement): void => {
            optionsContainer.append(this.buildOptionElement(selectionOption));
        });

        return optionsContainer;
    }

    /**
     * @param {HTMLOptionElement} element
     *
     * @returns {HTMLDivElement}
     */
    private buildOptionElement(element: HTMLOptionElement): HTMLDivElement
    {
        const selection: HTMLDivElement = document.createElement('div');

        selection.dataset.jselectValue = element.value;
        selection.innerHTML = element.innerHTML;
        selection.classList.add('jselect-option');

        return selection;
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