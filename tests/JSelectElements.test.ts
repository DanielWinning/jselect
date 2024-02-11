/**
 * @jest-environment jsdom
 */
import { ElementOption } from '../src/Elements/ElementOption';
import { ElementOptionGroup } from '../src/Elements/ElementOptionGroup';
import { ElementSelect } from '../src/Elements/ElementSelect';
import {ElementSearch} from "../src/Elements/ElementSearch";

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
});