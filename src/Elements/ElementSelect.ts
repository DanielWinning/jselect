import { ElementInputContainer } from './ElementInputContainer';
import { ElementOptionGroup } from './ElementOptionGroup';
import { ElementOption } from './ElementOption';
import { ElementSearch } from './ElementSearch';
import { ElementOptionsContainer } from './ElementOptionsContainer';
import { JSelectElement } from './JSelectElement';
import { ElementSearchDropdownArrow } from './ElementSearchDropdownArrow';

class ElementSelect extends JSelectElement
{
    /**
     * @inheritDoc
     */
    protected buildElement(): HTMLDivElement
    {
        this.checkElementType(HTMLSelectElement);

        const jselectSelectElement: HTMLDivElement = document.createElement('div');

        jselectSelectElement.classList.add('jselect-container');
        jselectSelectElement.dataset.jselectName = (this.originalElement as HTMLSelectElement).name;

        return jselectSelectElement;
    }

    /**
     * @inheritDoc
     */
    protected buildSubElements(): void
    {
        const optionsContainer: ElementOptionsContainer = new ElementOptionsContainer(),
            inputContainer: ElementInputContainer = new ElementInputContainer();

        inputContainer.addSubElement(new ElementSearch());
        inputContainer.addSubElement(new ElementSearchDropdownArrow());
        this.addSubElement(inputContainer);
        this.addSubElement(optionsContainer);

        const optionGroupElements: NodeListOf<HTMLOptGroupElement> =
            this.originalElement.querySelectorAll('optgroup');

        if (optionGroupElements.length) {
            optionGroupElements.forEach((el: HTMLOptGroupElement): void => {
                optionsContainer.addSubElement(new ElementOptionGroup(el));
            });

            return;
        }

        const options: NodeListOf<HTMLOptionElement> =
            this.originalElement.querySelectorAll('option');

        if (options.length) {
            options.forEach((option: HTMLOptionElement): void => {
                optionsContainer.addSubElement(new ElementOption(option));
            });
        }
    }
}

export { ElementSelect };