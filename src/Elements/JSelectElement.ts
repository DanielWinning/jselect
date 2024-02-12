abstract class JSelectElement
{
    protected originalElement: HTMLElement|null = null;
    protected jselectElement: HTMLElement;
    protected subElements: Array<JSelectElement> = [];

    constructor(element: HTMLElement = null) {
        this.originalElement = element;
        this.jselectElement = this.buildElement();

        if (this.buildSubElements instanceof Function) this.buildSubElements();
    }

    /**
     * @returns {void}
     */
    protected abstract buildElement(): HTMLElement;

    /**
     * @returns {void}
     */
    protected buildSubElements?(): void;

    protected makeElement(elementTag: string, cssClasses: string): HTMLElement
    {
        const element: HTMLElement = document.createElement(elementTag);

        element.classList.add(cssClasses);

        return element;
    }

    /**
     * Throws an error if the HTMLElement provided to the constructor is not of the correct type. Only needed when
     * the JSelectElement is provided an originalElement, otherwise does not need to be called.
     *
     * @todo Refactor this so that it is called automatically in the base class constructor when required.
     *
     * @param {Function} element
     *
     * @returns {void}
     *
     * @throws {Error}
     */
    protected checkElementType(element: Function): void
    {
        if (!this.originalElement) throw new Error(`Invalid element type. Expected ${element.name}, none provided.`);

        if (this.originalElement.constructor.name !== element.name) {
            throw new Error(`Invalid element type. Expected ${element.name}, got ${this.originalElement.constructor.name}.`);
        }
    }

    /**
     * @param {JSelectElement} subElement
     *
     * @returns {void}
     */
    public addSubElement(subElement: JSelectElement): void
    {
        this.subElements.push(subElement);
        this.jselectElement.append(subElement.getDOMElement());
    }

    /**
     * @param {HTMLElement} element
     * @param {InsertPosition} where
     *
     * @returns {void}
     */
    public render(element: HTMLElement, where: InsertPosition = 'beforebegin'): void
    {
        element.insertAdjacentElement(where, this.jselectElement);
    }

    /**
     * @returns {HTMLElement}
     */
    public getDOMElement(): HTMLElement
    {
        return this.jselectElement;
    }
}

export { JSelectElement };