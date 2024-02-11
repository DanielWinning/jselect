declare interface IJSelectOptions {

}
declare class JSelectBuilder {
    public static instantiateAllSelectsOnPage(): void;
}
declare class JSelect {
    constructor(element: HTMLElement, options: IJSelectOptions = {});
}
export { JSelect };
