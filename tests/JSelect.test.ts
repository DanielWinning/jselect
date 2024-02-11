/**
* @jest-environment jsdom
*/
import { JSelect } from '../src/JSelect';

const createSelectHTMLElement = (): HTMLSelectElement => {
    return document.createElement('select');
}

const buildForRender = (withOptGroup: boolean = false): void => {
    const select: HTMLSelectElement = createSelectHTMLElement();
    const option: HTMLOptionElement = document.createElement('option');

    select.classList.add('jselect');
    select.name = 'test';
    option.value = '1';
    option.innerHTML = 'Option One';

    if (withOptGroup) {
        const optionGroup: HTMLOptGroupElement = document.createElement('optgroup');
        optionGroup.append(option);
        select.append(optionGroup);
    } else {
        select.append(option);
    }

    document.body.append(select);
}

const testRender = (withOptGroup: boolean = false) => {
    JSelect.loadAllWithDefaultOptions();

    const jselectContainer: HTMLElement = document.querySelector('.jselect-container');
    const jselectOptionGroup: HTMLElement = document.querySelector('.jselect-optgroup');
    const jselectOption: HTMLElement = document.querySelector('.jselect-option');

    expect(jselectContainer).toBeTruthy();

    if (withOptGroup) {
        expect(jselectOptionGroup).toBeTruthy();
    }

    expect(jselectOption).toBeTruthy();

    expect(jselectContainer.dataset.jselectName).toBe('test');
    expect(jselectOption.dataset.jselectValue).toBe('1');
    expect(jselectOption.innerHTML).toBe('Option One');

}

afterEach((): void => {
    document.body.innerHTML = '';
});

describe('Class: JSelect', (): void => {
    it('should create an instance of JSelect', (): void => {
        const element: HTMLSelectElement = createSelectHTMLElement();

        for (let i: number = 0; i < 5; i++) {
            const option: HTMLOptionElement = document.createElement('option');

            option.value = String(i);
            option.innerHTML = `Option ${i}`;

            element.append(option);
        }

        const jSelect: JSelect = new JSelect(element);

        expect(jSelect).toBeInstanceOf(JSelect);
    });

    it('should throw error when instantiated with incorrect element type', (): void => {
        expect((): void => {
            const element: HTMLDivElement = document.createElement('div');

            new JSelect(element);
        }).toThrow(new Error('JSelect can only be instantiated on a HTML select element.'));
    });

    it('should instantiate for all elements on page', (): void => {
        for (let i: number = 0; i < 5; i++) {
            let select: HTMLSelectElement = createSelectHTMLElement();
            select.classList.add('jselect');
            document.body.append(select);
        }

        expect((): void => {
            JSelect.loadAllWithDefaultOptions();
        }).not.toThrow();
    });

    it('should instantiate when provided empty options', (): void => {
        const select: HTMLSelectElement = createSelectHTMLElement();

        expect((): void => {
           new JSelect(select, {});
       }).not.toThrow();
    });

    it('renders: default, no option groups', (): void => {
        buildForRender();
        testRender();
    });

    it('renders: select containing option groups', (): void => {
        buildForRender(true);
        testRender(true);
    });
});