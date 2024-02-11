declare interface IJSelectOptions {
    search?: boolean;
    selected?: string;
    placeholder?: string;
    multiple?: boolean;
}
declare class JSelect {
    constructor(element: HTMLElement, options: IJSelectOptions = {});
    public static loadAllWithDefaultOptions(): void;
}
export { JSelect };
