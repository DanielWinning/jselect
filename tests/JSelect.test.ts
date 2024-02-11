/**
* @jest-environment jsdom
*/
import { JSelect } from '../src/JSelect';

describe('Class: JSelect', () => {
    it('should create an instance of JSelect', (): void => {
        const element: HTMLSelectElement = document.createElement('select');

        for (let i: number = 0; i < 5; i++) {
            const option = document.createElement('option');

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
        const select: HTMLSelectElement = document.createElement('select');

        select.classList.add('jselect');

        const selects: Array<HTMLSelectElement> = [
            select,
        ];

        selects.forEach((el: HTMLSelectElement): void => {
            document.body.append(el);
        });

        expect((): void => {
            JSelect.loadAllWithDefaultOptions();
        }).not.toThrow();
    });
});