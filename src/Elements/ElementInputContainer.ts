import { JSelectElement } from './JSelectElement';
import { ElementOptionsContainer } from './ElementOptionsContainer';

class ElementInputContainer extends JSelectElement
{
    protected buildElement(): HTMLDivElement
    {
        return <HTMLDivElement> this.makeElement('div', ['jselect-inputs-container']);
    }

    protected addEventHandlers() {
        this.jselectElement.addEventListener('click', (): void => {
            this.parent.getSubElement(ElementOptionsContainer).toggle();
        });
    }
}

export { ElementInputContainer };