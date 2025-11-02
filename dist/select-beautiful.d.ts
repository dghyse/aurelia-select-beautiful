import { ILogger, IPlatform } from "aurelia";
export interface IItemChoice {
    value: any;
    content: string;
}
export declare enum ECssTheme {
    DEFAULT = "default",
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
    /**
     * set default options
     *
     * @param options
     * @private
     */
    private setOptions;
    detached(): void;
    /**
     * Init structure
     *
     * @private
     */
    private initStructure;
    private restoreSelect;
    /**
     * build list displaying
     *
     * @param options
     * @private
     */
    private buildList;
    /**
     * Add item in list
     *
     * @param option
     * @param key
     * @private
     */
    private addItemList;
    /**
     * Focus to input search
     *
     * @param event
     */
    private readonly onFocusin;
    /**
     * Focus out container
     *
     * @param event
     */
    private readonly onFocusinDom;
    private readonly onPointerdown;
    /**
     * Search in option
     *
     * @param event
     */
    private readonly onSearch;
    /**
     * Click on li from this list item
     *
     * @param event
     */
    private readonly onListItemClick;
    /**
     * Manage keypress
     *
     * @param event
     */
    private readonly onKeydown;
    /**
     * Remove item selected
     *
     * @param event
     */
    private readonly onRemoveItem;
    /**
     * Dispatch event change
     *
     * @private
     */
    private dispatchChangeEvent;
    /**
     * manage aria active
     *
     * @param index
     * @param active
     * @private
     */
    private ariaActiveItem;
    /**
     * Notify message for accessibility
     *
     * @param msg
     * @private
     */
    private notification;
    /**
     * Add choice item
     *
     * @param newItem
     * @private
     */
    private pushChoiceItem;
    /**
     * Remove item choice
     *
     * @param value
     * @private
     */
    private removeChoiceItem;
    /**
     * Find  value in choice item list
     *
     * @param value
     * @private
     */
    private findInChoiceItem;
    private findInListItem;
    /**
     * Add new item choiced in div
     *
     * @param itemLi
     * @private
     */
    private addItem;
    /**
     * Remove and unselect item
     *
     * @param element
     * @private
     */
    private removeAndUnSelected;
    /**
     * Manage item
     *
     * @param item
     * @private
     */
    private manageItem;
    /**
     * Close list
     *
     * @private
     */
    private closeList;
    /**
     * Open list
     *
     * @private
     */
    private openList;
    /**
     * Update select value
     *
     * @private
     */
    private updateInputSelectElement;
    /**
     * Clear all
     *
     * @private
     */
    private clearAll;
}
