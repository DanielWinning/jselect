import { JSelectElement } from './JSelectElement';

class ElementOptionsContainer extends JSelectElement
{
    protected buildElement(): HTMLDivElement
    {
        return <HTMLDivElement> this.makeElement('div', ['jselect-options-container', 'jselect-hidden']);
    }
}

export { ElementOptionsContainer };