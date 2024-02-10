class JSelect {
    private element: HTMLInputElement|HTMLSelectElement;
    private readonly HTML_INPUT_CLASS: string = 'HTMLInputElement';
    private readonly HTML_SELECT_CLASS: string = 'HTMLSelectElement';
    private readonly allowedHTMLElements: Array<string> = [
        this.HTML_INPUT_CLASS,
        this.HTML_SELECT_CLASS
    ]

    constructor(element: HTMLElement) {
        const elementClass: string = element.constructor.name;

        if (!this.allowedHTMLElements.includes(elementClass)) return;

        this.element = elementClass === this.HTML_INPUT_CLASS
            ? <HTMLInputElement> element
            : <HTMLSelectElement> element;
    }
}

export { JSelect };