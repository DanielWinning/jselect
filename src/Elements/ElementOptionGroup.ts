import { JSelectElement } from './JSelectElement';
import { ElementOption } from './ElementOption';

class ElementOptionGroup extends JSelectElement
{
    /**
     * @inheritDoc
     */
    protected buildElement(): HTMLDivElement
    {
        this.checkElementType(HTMLOptGroupElement);

        const jselectOptionGroupElement: HTMLDivElement = document.createElement('div');
        const labelSpan: HTMLSpanElement = document.createElement('span');

        jselectOptionGroupElement.classList.add('jselect-optgroup');
        labelSpan.classList.add('jselect-optgroup-label');
        labelSpan.innerHTML = (this.originalElement as HTMLOptGroupElement).label;
        jselectOptionGroupElement.append(labelSpan);

        return jselectOptionGroupElement;
    }

    /**
     * @inheritDoc
     */
    protected buildSubElements(): void
    {
        const options: NodeListOf<HTMLOptionElement> = this.originalElement.querySelectorAll('option');

        options.forEach((option: HTMLOptionElement): void => {
            this.addSubElement(new ElementOption(option));
        });
    }
}

export { ElementOptionGroup };