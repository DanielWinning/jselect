import { JSelectElement } from './JSelectElement';

class ElementInputContainer extends JSelectElement
{
    protected buildElement(): HTMLElement
    {
        return this.makeElement('div', 'jselect-inputs-container');
    }
}

export { ElementInputContainer };