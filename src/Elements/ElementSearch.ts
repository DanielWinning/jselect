import { JSelectElement } from './JSelectElement';

class ElementSearch extends JSelectElement
{
    protected buildElement(): HTMLInputElement
    {
        const jselectSearchElement: HTMLInputElement =
            <HTMLInputElement> this.makeElement('input', 'jselect-search-input');

        jselectSearchElement.type = 'text';

        return jselectSearchElement;
    }
}

export { ElementSearch };