import { JSelectElement } from './JSelectElement';

class ElementOptionsContainer extends JSelectElement
{
    protected buildElement(): HTMLDivElement
    {
        const jselectOptionsElement: HTMLDivElement = document.createElement('div');

        jselectOptionsElement.classList.add('jselect-options-container');

        return jselectOptionsElement;
    }
}

export { ElementOptionsContainer };