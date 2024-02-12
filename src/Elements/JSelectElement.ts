abstract class JSelectElement
{
    protected originalElement: HTMLElement|null = null;
    protected jselectElement: HTMLElement;
    protected subElements: Array<JSelectElement> = [];
    protected parent: JSelectElement = null;

    constructor(element: HTMLElement = null) {
        this.originalElement = element;
        this.jselectElement = this.buildElement();

        if (this.buildSubElements instanceof Function) this.buildSubElements();
        if (this.addEventHandlers instanceof Function) this.addEventHandlers();
    }

    /**
     * @returns {void}
     */
    protected abstract buildElement(): HTMLElement;

    /**
     * @returns {void}
     */
    protected addEventHandlers?(): void;

    /**
     * @returns {void}
     */
    protected buildSubElements?(): void;

    /**
     * @param {string} elementTag
     * @param {Array<string>}cssClasses
     *
     * @returns {HTMLElement}
     */
    protected makeElement(elementTag: string, cssClasses: Array<string>): HTMLElement
    {
        const element: HTMLElement = document.createElement(elementTag);

        element.classList.add(...cssClasses);

        return element;
    }

    /**
     * Uses zero indexing.
     *
     * @param {Function} subElementType
     * @param {number} index
     *
     * @returns {JSelectElement|null}
     */
    public getSubElement(subElementType: Function, index: number = 0): JSelectElement|null
    {
        let element: JSelectElement = null;
        let timesFound: number = 0;

        this.subElements.forEach((subElement: JSelectElement) => {
            if (subElement.constructor.name !== subElementType.name) return;

            if (timesFound !== index) {
                timesFound++;
                return;
            }

            element = subElement;
        });

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
     * @param {JSelectElement} parent
     *
     * @returns {void}
     */
    public setParent(parent: JSelectElement): void
    {
        this.parent = parent;
    }

    /**
     * @returns {void}
     */
    public toggle(): void
    {
        this.jselectElement.classList.toggle('jselect-hidden');
    }

    public hide(): void
    {
        if (!this.jselectElement.classList.contains('jselect-hidden'))
            this.jselectElement.classList.add('jselect-hidden');
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
        subElement.setParent(this);
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