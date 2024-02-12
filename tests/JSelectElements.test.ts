/**
 * @jest-environment jsdom
 */
import { ElementOption } from '../src/Elements/ElementOption';
import { ElementOptionGroup } from '../src/Elements/ElementOptionGroup';
import { ElementSelect } from '../src/Elements/ElementSelect';
import { ElementInputContainer } from '../src/Elements/ElementInputContainer';
import {ElementOptionsContainer} from "../src/Elements/ElementOptionsContainer";
import {JSelectElement} from "../src/Elements/JSelectElement";

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

    optionElements.forEach((option: JSelectTestOption, index: number): void => {
        let i: number = index + 1;
        option.element.value = i.toString();
        option.element.innerHTML = `Option ${i}`;
        optionGroupElements[option.group].append(option.element);
    });
    optionGroupElements.forEach((el: HTMLOptGroupElement, index: number): void => {
        let i: number = index + 1;
        el.label = `Group ${i}`;
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
    it('Should instantiate', (): void => {
        expect((): void => {
            new ElementSelect(document.querySelector('select'));
            new ElementOption(getAllOptions()[0]);
            new ElementOptionGroup(getAllOptionGroups()[0]);
        }).not.toThrow();
    });

    it('Should throw an error when instantiated with the wrong element type', (): void => {
        expect((): void => {
            new ElementOption();
        }).toThrow(new Error('Invalid element type. Expected HTMLOptionElement, none provided.'));

        expect((): void => {
            new ElementOption(document.querySelector('select'));
        }).toThrow(new Error('Invalid element type. Expected HTMLOptionElement, got HTMLSelectElement.'))
    });

    it('Should get sub element', (): void => {
        const selectElement: HTMLSelectElement = document.querySelector('select');
        const elementSelect: ElementSelect = new ElementSelect(selectElement);

        expect(elementSelect).toBeTruthy();

        const elementOptionsContainer: JSelectElement = elementSelect.getSubElement(ElementOptionsContainer);

        expect(elementSelect.getSubElement(ElementOptionsContainer)).toBeTruthy();

        const elementOptGroup: JSelectElement = elementOptionsContainer.getSubElement(ElementOptionGroup, 1);

        expect(elementOptGroup).toBeTruthy();

        const elementOptGroupDOMElement: HTMLElement = elementOptGroup.getDOMElement();

        expect(elementOptGroupDOMElement.querySelector('span.jselect-optgroup-label').innerHTML).toBe('Group 2');
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