declare interface IJSelectOptions {
    search?: boolean;
    selected?: string|null;
    placeholder?: string|null;
    multiple?: boolean;
}
declare class JSelect {
    constructor(element: HTMLElement, options: IJSelectOptions = {});
    static loadAllWithDefaultOptions(): void;
}
export { JSelect, IJSelectOptions };
