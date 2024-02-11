abstract class JSelectElement
{
    protected originalElement: HTMLElement|null = null;
    protected jselectElement: HTMLDivElement;
    protected subElements: Array<JSelectElement> = [];

    constructor(element: HTMLElement = null) {
        this.originalElement = element;
        this.jselectElement = this.buildElement();
    }

    /**
     * @returns {void}
     */
    protected abstract buildElement(): HTMLDivElement;

    /**
     * @returns {void}
     */
    protected buildSubElements?(): void;

    /**
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
     * @returns {void}
     */
    protected prepareForRender(): void
    {
        if (this.subElements.length) {
            this.subElements.forEach((subElement: JSelectElement): void => {
                this.jselectElement.append(subElement.getDOMElement());
            });
        }
    }

    /**
     * @param {HTMLElement} element
     * @param {InsertPosition} where
     *
     * @returns {void}
     */
    public render(element: HTMLElement, where: InsertPosition = 'beforebegin'): void
    {
        this.prepareForRender();

        element.insertAdjacentElement(where, this.jselectElement);
    }

    /**
     * @returns {HTMLDivElement}
     */
    public getDOMElement(): HTMLDivElement
    {
        return this.jselectElement;
    }
}

export { JSelectElement };