import { JSelectElement } from './JSelectElement';

class ElementSearch extends JSelectElement
{
    protected buildElement(): HTMLDivElement {
        const jselectSearchElement: HTMLInputElement = document.createElement('input');

        jselectSearchElement.type = 'text';
        jselectSearchElement.classList.add('jselect-search-input');

        return jselectSearchElement;
    }
}

export { ElementSearch };