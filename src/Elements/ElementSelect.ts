import { JSelectElement } from './JSelectElement';
import { ElementOptionGroup } from './ElementOptionGroup';
import { ElementOption } from './ElementOption';

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
        const optionGroupElements: NodeListOf<HTMLOptGroupElement> =
            this.originalElement.querySelectorAll('optgroup');

        if (optionGroupElements.length) {
            optionGroupElements.forEach((el: HTMLOptGroupElement): void => {
                this.addSubElement(new ElementOptionGroup(el));
            });

            return;
        }

        const options: NodeListOf<HTMLOptionElement> =
            this.originalElement.querySelectorAll('option');

        if (options.length) {
            options.forEach((option: HTMLOptionElement): void => {
                this.addSubElement(new ElementOption(option));
            });
        }
    }
}

export { ElementSelect };