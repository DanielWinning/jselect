import { JSelectElement } from './JSelectElement';

class ElementOption extends JSelectElement
{
    /**
     * @inheritDoc
     */
    protected buildElement(): HTMLDivElement
    {
        this.checkElementType(HTMLOptionElement);

        const jselectOptionElement: HTMLDivElement = document.createElement('div');

        jselectOptionElement.classList.add('jselect-option');
        jselectOptionElement.dataset.jselectValue = (this.originalElement as HTMLOptionElement).value;
        jselectOptionElement.innerHTML = this.originalElement.innerHTML;

        return jselectOptionElement;
    }
}

export { ElementOption };