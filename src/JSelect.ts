class JSelect {
    private element: HTMLSelectElement;
    private readonly HTML_SELECT_CLASS: string = 'HTMLSelectElement';

    constructor(element: HTMLElement) {
        if (element.constructor.name !== this.HTML_SELECT_CLASS) return;

        this.element = <HTMLSelectElement> element;
    }
}

export { JSelect };