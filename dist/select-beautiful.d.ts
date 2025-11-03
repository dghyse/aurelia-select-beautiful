import { ILogger, IPlatform } from "aurelia";
export interface IItemChoice {
    value: any;
    content: string;
}
export declare enum ECssTheme {
    DARK = "dark",
    RED = "red",
    BLUE = "blue",
    SOFT = "soft",
    GREEN = "green",
    CUSTOM = "custom"
}
export interface ISelectBeautifulOptions {
    multiple?: boolean;
    searchPlaceholder?: string;
    searchInputName?: string;
    removeText?: string;
    addText?: string;
    removeAllText?: string;
    eventChangeItemName?: string;
    theme?: ECssTheme;
}
export declare class SelectBeautifulOptions implements ISelectBeautifulOptions {
    multiple: boolean;
    searchPlaceholder: string;
    searchInputName: string;
    removeText: string;
    removeAllText: string;
    addText: string;
    eventChangeItemName: string;
    theme: ECssTheme;
    constructor(options?: Partial<ISelectBeautifulOptions>);
}
export declare class SelectBeautiful {
    private readonly logger;
    private readonly element;
    private readonly platform;
    bindableOptions: SelectBeautifulOptions;
    private listElement?;
    private readonly options;
    private optionsFiltered?;
    private divContainer?;
    private divSearchContainer?;
    private divItemContainer?;
    private divLiveMsg?;
    private inputSearch?;
    private currentChoiced;
    private listOpen;
    private activeItemNewIndex;
    private activeItemPrevIndex?;
    private readonly availableKeyboard;
    private timeoutId?;
    private divListItemId?;
    constructor(logger?: ILogger, element?: HTMLSelectElement, platform?: IPlatform);
    attached(): void;
    private setOptions;
    detached(): void;
    private initStructure;
    private restoreSelect;
    private buildList;
    private addItemList;
    private readonly onFocusin;
    private readonly onFocusinDom;
    private readonly onPointerdown;
    private readonly onSearch;
    private readonly onListItemClick;
    private readonly onKeydown;
    private readonly onRemoveItem;
    private dispatchChangeEvent;
    private ariaActiveItem;
    private notification;
    private pushChoiceItem;
    private removeChoiceItem;
    private findInChoiceItem;
    private findInListItem;
    private addItem;
    private removeAndUnSelected;
    private manageItem;
    private closeList;
    private openList;
    private updateInputSelectElement;
    private clearAll;
}
