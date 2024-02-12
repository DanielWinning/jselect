/**
 * @jest-environment jsdom
 */
import { ElementOption } from '../src/Elements/ElementOption';
import { ElementOptionGroup } from '../src/Elements/ElementOptionGroup';
import { ElementSelect } from '../src/Elements/ElementSelect';
import {ElementSearch} from "../src/Elements/ElementSearch";
import {ElementInputContainer} from "../src/Elements/ElementInputContainer";
import {render} from "sass";
import {ElementOptionsContainer} from "../src/Elements/ElementOptionsContainer";

interface JSelectTestOption {
    group: number;
    element: HTMLOptionElement;
}

const setupElements = (): void => {
    const selectElement: HTMLSelectElement = document.createElement('select');
    const optionGroupElements: Array<HTMLOptGroupElement> = [
        document.createElement('optgroup'),
        document.createElement('optgroup'),
    ];
    const optionElements: Array<JSelectTestOption> = [
        {
            group: 0,
            element: document.createElement('option')
        },
        {
            group: 0,
            element: document.createElement('option')
        },
        {
            group: 1,
            element: document.createElement('option')
        },
        {
            group: 1,
            element: document.createElement('option')
        },
        {
            group: 1,
            element: document.createElement('option')
        },
    ];

    optionElements.forEach((option: JSelectTestOption): void => {
        optionGroupElements[option.group].append(option.element);
    });
    optionGroupElements.forEach((el: HTMLOptGroupElement): void => {
        selectElement.append(el);
    });

    document.body.append(selectElement);
}
const getAllOptions = (): NodeListOf<HTMLOptionElement> => {
    return document.querySelectorAll('option');
}
const getAllOptionGroups = (): NodeListOf<HTMLOptGroupElement> => {
    return document.querySelectorAll('optgroup');
}

beforeEach(setupElements);

afterEach((): void => {
   document.body.innerHTML = '';
});

describe('Classes extending: JSelectElement', (): void => {
    it('should instantiate', (): void => {
        expect((): void => {
            new ElementSelect(document.querySelector('select'));
            new ElementOption(getAllOptions()[0]);
            new ElementOptionGroup(getAllOptionGroups()[0]);
        }).not.toThrow();
    });

    it('should throw an error when instantiated with the wrong element type', (): void => {
        expect((): void => {
            new ElementOption();
        }).toThrow(new Error('Invalid element type. Expected HTMLOptionElement, none provided.'));

        expect((): void => {
            new ElementOption(document.querySelector('select'));
        }).toThrow(new Error('Invalid element type. Expected HTMLOptionElement, got HTMLSelectElement.'))
    });

    it('Should get sub element', () => {
        const selectElement: HTMLSelectElement = document.createElement('select');
        const optGroupElement: HTMLOptGroupElement = document.createElement('optgroup');
        const optionElement: HTMLOptionElement = document.createElement('option');

        optionElement.value = '1';
        optionElement.innerHTML = 'Option One';
        optGroupElement.label = 'Group One';
        optGroupElement.append(optionElement);
        selectElement.append(optionElement);

        const elementSelect: ElementSelect = new ElementSelect(selectElement);

        expect(elementSelect).toBeTruthy();
        expect(elementSelect.getSubElement(ElementOptionsContainer)).toBeTruthy();
    });

    it('Should toggle display', (): void => {
        const elementInputContainer: ElementInputContainer = new ElementInputContainer();

        expect(elementInputContainer).toBeTruthy();

        elementInputContainer.render(document.body, 'afterbegin');

        const renderedElement: HTMLDivElement = document.querySelector('.jselect-inputs-container');

        expect(renderedElement).toBeTruthy();
        expect(renderedElement.classList.contains('jselect-hidden')).toBeFalsy();

        elementInputContainer.toggle();

        expect(renderedElement.classList.contains('jselect-hidden')).toBeTruthy();
    });
});