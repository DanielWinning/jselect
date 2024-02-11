declare interface IJSelectOptions {

}
declare class JSelect {
    constructor(element: HTMLElement, options: IJSelectOptions = {});
    public static loadAllWithDefaultOptions(): void;
}
