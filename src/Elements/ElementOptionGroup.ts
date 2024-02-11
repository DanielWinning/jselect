import { JSelectElement } from './JSelectElement';

class ElementOptionGroup extends JSelectElement
{
    /**
     * @inheritDoc
     */
    protected buildElement(): HTMLDivElement
    {
        this.checkElementType(HTMLOptGroupElement);

        const jselectOptionGroupElement: HTMLDivElement = document.createElement('div');

        jselectOptionGroupElement.classList.add('jselect-optgroup');

        return jselectOptionGroupElement;
    }
}

export { ElementOptionGroup };