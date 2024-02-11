abstract class JSelectElement
{
    protected originalElement: HTMLElement|null = null;
    protected jselectElement: HTMLDivElement;

    constructor(element: HTMLElement = null) {
        this.originalElement = element;
        this.jselectElement = this.buildElement();
    }

    /**
     * @returns {void}
     */
    protected abstract buildElement(): HTMLDivElement;

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
}

export { JSelectElement };