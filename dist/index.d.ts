declare interface IJSelectOptions {

}
declare class JSelectBuilder {
    public static instantiateAllSelectsOnPage(): void;
}
declare class JSelect {
    constructor(element: HTMLElement, options: IJSelectOptions = {});
    public static loadAllWithDefaultOptions(): void;
}
export { JSelect, JSelectBuilder };
