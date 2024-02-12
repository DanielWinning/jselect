import { JSelectElement } from './JSelectElement';

class ElementSearchDropdownArrow extends JSelectElement
{
    protected buildElement(): HTMLElement
    {
        const jselectSearchDropdownContainer: HTMLSpanElement =
            <HTMLSpanElement> this.makeElement('span', 'jselect-search-dropdown-arrow');
        const jselectSearchDropdownImage: HTMLImageElement = new Image();

        jselectSearchDropdownImage.src = 'DropdownArrow.svg';
        jselectSearchDropdownImage.classList.add('jselect-search-dropdown-arrow-img');
        jselectSearchDropdownContainer.append(jselectSearchDropdownImage);

        return jselectSearchDropdownContainer;
    }
}

export { ElementSearchDropdownArrow };