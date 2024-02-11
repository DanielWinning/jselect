import { JSelect } from '../JSelect';

class JSelectBuilder
{
    private static defaultIdentifier: string = '.jselect';

    /**
     * @returns void
     */
    public static instantiateAllSelectsOnPage(): void
    {
        const selectElements: NodeListOf<HTMLElement> = document.querySelectorAll(JSelectBuilder.defaultIdentifier);

        selectElements.forEach((el: HTMLElement): void => {
            if (el.constructor.name === 'HTMLSelectElement') new JSelect(el);
        });
    }

    public static instantiateSelectsFromList()
    {

    }
}

export { JSelectBuilder };