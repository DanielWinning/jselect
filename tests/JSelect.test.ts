/**
* @jest-environment jsdom
*/
import { JSelect } from '../src/JSelect';

describe('Class: JSelect', () => {
    it('should create an instance of JSelect', () => {
        const element: HTMLSelectElement = document.createElement('select'),
            jSelect = new JSelect(element);

        expect(jSelect).toBeInstanceOf(JSelect);
    });
});