var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
import { bindable, customAttribute, ILogger, INode, resolve, IPlatform } from "aurelia";
export var ECssTheme;
(function (ECssTheme) {
    ECssTheme["DARK"] = "dark";
    ECssTheme["RED"] = "red";
    ECssTheme["BLUE"] = "blue";
    ECssTheme["SOFT"] = "soft";
    ECssTheme["GREEN"] = "green";
    ECssTheme["CUSTOM"] = "custom";
})(ECssTheme || (ECssTheme = {}));
export class SelectBeautifulOptions {
    constructor(options) {
        this.multiple = true;
        this.searchPlaceholder = 'Rechercher';
        this.searchInputName = 'model[search]';
        this.removeText = 'retiré';
        this.removeAllText = 'Toutes les sélections ont été supprimées';
        this.addText = 'ajouté';
        this.eventChangeItemName = 'fractalcms-select-change';
        this.theme = ECssTheme.SOFT;
        Object.assign(this, options);
    }
}
let SelectBeautiful = (() => {
    let _classDecorators = [customAttribute('fractalcms-select-beautiful')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _bindableOptions_decorators;
    let _bindableOptions_initializers = [];
    let _bindableOptions_extraInitializers = [];
    var SelectBeautiful = _classThis = class {
        constructor(logger = resolve(ILogger).scopeTo('SelectBeautiful'), element = resolve(INode), platform = resolve(IPlatform)) {
            this.logger = logger;
            this.element = element;
            this.platform = platform;
            this.bindableOptions = __runInitializers(this, _bindableOptions_initializers, new SelectBeautifulOptions());
            this.listElement = __runInitializers(this, _bindableOptions_extraInitializers);
            this.currentChoiced = [];
            this.listOpen = false;
            this.activeItemNewIndex = -1;
            this.availableKeyboard = [
                'ArrowDown',
                'ArrowUp',
                'Enter',
                'Escape',
            ];
            this.onFocusin = (event) => {
                this.logger.trace('onFocusin');
                this.openList();
            };
            this.onFocusinDom = (event) => {
                const target = event.target;
                this.logger.trace('onFocusinDom', target);
                if (this.divContainer && !this.divContainer.contains(target) && this.listOpen) {
                    this.closeList();
                }
            };
            this.onPointerdown = (event) => {
                const target = event.target;
                this.logger.trace('onPointerdown', target);
                if (this.divContainer && !this.divContainer.contains(target) && this.listOpen) {
                    this.closeList();
                }
            };
            this.onSearch = (event) => {
                this.logger.trace('onSearch');
                event.preventDefault();
                if (!this.listOpen) {
                    this.openList();
                }
                const target = event.currentTarget;
                const value = target.value.trim().toLowerCase();
                this.optionsFiltered = this.options.filter((option, key) => {
                    return option.textContent?.toLowerCase().includes(value);
                });
                this.buildList(this.optionsFiltered);
            };
            this.onListItemClick = (event) => {
                this.logger.trace('onListItemClick');
                event.preventDefault();
                const target = event.target;
                const item = target.closest('li');
                this.manageItem(item);
                this.closeList();
            };
            this.onKeydown = (event) => {
                this.logger.trace('onKeydown', event);
                const key = event.key;
                if (this.availableKeyboard.includes(key)) {
                    event.preventDefault();
                    const total = (this.listElement) ? this.listElement.children.length : 0;
                    if (!this.listOpen) {
                        this.openList();
                    }
                    this.activeItemPrevIndex = this.activeItemNewIndex;
                    switch (key) {
                        case 'ArrowDown':
                            if (this.activeItemNewIndex >= total - 1) {
                                this.activeItemNewIndex = -1;
                            }
                            this.activeItemNewIndex = Math.min(this.activeItemNewIndex + 1, total - 1);
                            this.logger.trace('ArrowDown', this.activeItemNewIndex, total, this.activeItemPrevIndex);
                            break;
                        case 'ArrowUp':
                            if (this.activeItemNewIndex == 0) {
                                this.activeItemNewIndex = total;
                            }
                            this.activeItemNewIndex = Math.max(this.activeItemNewIndex - 1, 0);
                            this.logger.trace('ArrowUp', this.activeItemNewIndex, total, this.activeItemPrevIndex);
                            break;
                        case 'Enter': {
                            this.logger.trace('Enter', this.activeItemNewIndex, total, this.activeItemPrevIndex);
                            const item = this.findInListItem(this.activeItemNewIndex);
                            this.manageItem(item);
                            break;
                        }
                        case 'Escape':
                            this.activeItemNewIndex = -1;
                            this.closeList();
                            if (this.inputSearch) {
                                this.inputSearch.focus();
                            }
                            break;
                    }
                    this.ariaActiveItem(this.activeItemNewIndex, true);
                    this.ariaActiveItem(this.activeItemPrevIndex, false);
                }
            };
            this.onRemoveItem = (event) => {
                this.logger.trace('onRemoveItem');
                event.preventDefault();
                const current = event.currentTarget;
                const target = current.closest('span');
                if (target) {
                    const firstChild = target.querySelector(':not(button)');
                    let textContent = target.firstChild?.textContent;
                    if (firstChild) {
                        textContent = firstChild.textContent;
                    }
                    this.notification(textContent + ' ' + this.bindableOptions.removeText);
                    this.removeAndUnSelected(target);
                }
            };
            this.logger.trace('constructor');
            this.options = [];
        }
        attached() {
            this.logger.trace('attached');
            if (!this.divListItemId) {
                this.divListItemId = 'list-item-ul' + Math.random().toString(36).slice(2, 8);
            }
            this.bindableOptions = this.setOptions(this.bindableOptions);
            this.initStructure();
            this.buildList(this.options);
            this.closeList();
            this.restoreSelect();
        }
        setOptions(options = this.bindableOptions) {
            const defaults = new SelectBeautifulOptions();
            const merged = Object.assign({}, defaults, options);
            return merged;
        }
        detached() {
            this.logger.trace('attached');
            this.platform.document.removeEventListener('focusin', this.onFocusinDom, true);
            this.platform.document.removeEventListener('pointerdown', this.onPointerdown, true);
            if (this.inputSearch) {
                this.inputSearch.removeEventListener('input', this.onSearch);
                this.inputSearch.removeEventListener('focusin', this.onFocusin);
                this.inputSearch.removeEventListener('keydown', this.onKeydown);
            }
            if (this.listElement) {
                this.listElement.removeEventListener('click', this.onListItemClick);
            }
            if (this.divItemContainer) {
                this.divItemContainer.querySelectorAll('button').forEach((button, index) => {
                    button.removeEventListener('click', this.onRemoveItem);
                });
            }
            if (this.timeoutId) {
                this.platform.clearTimeout(this.timeoutId);
            }
        }
        initStructure() {
            this.logger.trace('initStructure');
            this.element.setAttribute('multiple', 'true');
            const listLabel = this.element.getAttribute('prompt');
            this.element.style.display = 'none';
            this.element.querySelectorAll('option').forEach((option, key) => {
                if (option.value) {
                    this.options.push(option);
                    if (option.selected) {
                        const itemChoice = {
                            value: option.value,
                            content: option.textContent
                        };
                        this.currentChoiced.push(itemChoice);
                    }
                }
            });
            this.divContainer = this.platform.document.createElement('div');
            this.divContainer.classList.add('theme-' + this.bindableOptions.theme, 'select-beautiful');
            this.divItemContainer = this.platform.document.createElement('div');
            this.divItemContainer.classList.add('select-beautiful--item');
            this.divSearchContainer = this.platform.document.createElement('div');
            this.divSearchContainer.classList.add('select-beautiful--search');
            this.listElement = this.platform.document.createElement('ul');
            this.listElement.setAttribute('role', 'listbox');
            if (listLabel) {
                this.listElement.setAttribute('aria-label', listLabel);
            }
            else {
                this.listElement.setAttribute('aria-label', this.bindableOptions.searchPlaceholder);
            }
            this.listElement.setAttribute('aria-multiselectable', 'true');
            this.listElement.setAttribute('tabindex', '0');
            this.listElement.classList.add('select-beautiful--search---list--items');
            if (this.divListItemId) {
                this.listElement.setAttribute('id', this.divListItemId);
            }
            this.listElement.addEventListener('click', this.onListItemClick);
            this.inputSearch = this.platform.document.createElement('input');
            this.inputSearch.type = 'text';
            this.inputSearch.classList.add('select-beautiful--search---input');
            this.inputSearch.name = this.bindableOptions.searchInputName;
            this.inputSearch.setAttribute('autocomplete', 'off');
            this.inputSearch.placeholder = this.bindableOptions.searchPlaceholder;
            this.inputSearch.setAttribute('aria-label', this.bindableOptions.searchPlaceholder);
            if (this.divListItemId) {
                this.inputSearch.setAttribute('aria-controls', this.divListItemId);
            }
            this.inputSearch.setAttribute('role', 'combobox');
            this.inputSearch.setAttribute('aria-expanded', 'false');
            this.inputSearch.addEventListener('input', this.onSearch);
            this.inputSearch.addEventListener('focusin', this.onFocusin);
            this.inputSearch.addEventListener('keydown', this.onKeydown);
            this.divSearchContainer.append(this.inputSearch);
            this.divSearchContainer.append(this.listElement);
            this.divLiveMsg = this.platform.document.createElement('div');
            this.divLiveMsg.setAttribute('aria-live', 'polite');
            this.divLiveMsg.classList.add('sr-only');
            this.divContainer.append(this.divItemContainer, this.divSearchContainer, this.divLiveMsg);
            this.element.before(this.divContainer);
        }
        restoreSelect() {
            this.logger.trace('restoreSelect');
            if (this.listElement) {
                this.listElement.querySelectorAll('li').forEach((li, key) => {
                    const selected = li.getAttribute('aria-selected');
                    if (selected == 'true') {
                        this.addItem(li);
                    }
                });
            }
        }
        buildList(options) {
            this.logger.trace('buildList');
            if (this.listElement) {
                this.listElement.innerHTML = '';
            }
            if (options.length) {
                this.activeItemNewIndex = -1;
            }
            options.forEach((ele, key) => {
                this.addItemList(ele, key);
            });
        }
        addItemList(option, key) {
            this.logger.trace('addItemList', key);
            const li = this.platform.document.createElement('li');
            li.classList.add('select-beautiful--search---list--items---option');
            li.setAttribute('role', 'option');
            li.setAttribute('id', 'option-' + key);
            li.setAttribute('data-id', option.value);
            li.setAttribute('data-index', key.toString());
            const itemFind = this.findInChoiceItem(option.value);
            if (itemFind) {
                li.setAttribute('aria-selected', 'true');
            }
            else {
                li.setAttribute('aria-selected', 'false');
            }
            li.textContent = option.textContent;
            if (this.listElement) {
                this.listElement.append(li);
            }
        }
        dispatchChangeEvent() {
            const event = new CustomEvent(this.bindableOptions.eventChangeItemName, {
                detail: this.currentChoiced,
                bubbles: true
            });
            this.element.dispatchEvent(event);
        }
        ariaActiveItem(index, active) {
            this.logger.trace('activeItem');
            const liId = 'option-' + index;
            const item = this.findInListItem(index);
            if (item) {
                if (active) {
                    item.classList.add('active');
                    if (this.inputSearch) {
                        this.inputSearch.setAttribute('aria-activedescendant', liId);
                    }
                }
                else {
                    item.classList.remove('active');
                }
            }
        }
        notification(msg) {
            this.timeoutId = this.platform.setTimeout(() => {
                if (this.divLiveMsg) {
                    this.divLiveMsg.textContent = msg;
                }
            }, 50);
        }
        pushChoiceItem(newItem) {
            this.logger.trace('pushChoiceItem');
            const find = this.findInChoiceItem(newItem.value);
            if (!find) {
                this.currentChoiced.push(newItem);
            }
        }
        removeChoiceItem(value) {
            this.logger.trace('removeChoiceItem');
            if (this.currentChoiced.length > 0) {
                const newItems = [];
                this.currentChoiced.forEach((item, key) => {
                    if (item.value != value) {
                        newItems.push(item);
                    }
                });
                this.currentChoiced = [...newItems];
            }
        }
        findInChoiceItem(value) {
            this.logger.trace('findInChoiceItem');
            return this.currentChoiced.find((item, index) => {
                return value == item.value;
            });
        }
        findInListItem(index) {
            this.logger.trace('findInListItem');
            let item = null;
            if (this.listElement) {
                item = this.listElement.children.item(index);
            }
            return item;
        }
        addItem(itemLi) {
            this.logger.trace('addItem');
            const span = this.platform.document.createElement('span');
            itemLi.setAttribute('aria-selected', 'true');
            const dataId = itemLi.getAttribute('data-id');
            if (dataId) {
                span.setAttribute('data-id', dataId);
            }
            span.classList.add('select-beautiful--item---item');
            span.textContent = itemLi.textContent;
            const btnClose = this.platform.document.createElement('button');
            btnClose.classList.add('select-beautiful--item---item-close');
            btnClose.role = 'button';
            btnClose.textContent = 'X';
            btnClose.addEventListener('click', this.onRemoveItem);
            span.append(btnClose);
            const item = {
                value: itemLi.getAttribute('data-id'),
                content: itemLi.textContent
            };
            this.notification(itemLi.textContent + ' ' + this.bindableOptions.addText);
            this.pushChoiceItem(item);
            if (this.divItemContainer) {
                this.divItemContainer.append(span);
            }
        }
        removeAndUnSelected(element) {
            this.logger.trace('removeAndUnSelected');
            const itemId = element.getAttribute('data-id');
            if (this.listElement) {
                this.listElement.querySelector(`[data-id="${itemId}"]`)?.setAttribute('aria-selected', 'false');
            }
            if (this.divItemContainer) {
                this.divItemContainer.querySelector(`[data-id="${itemId}"]`)?.remove();
            }
            this.removeChoiceItem(itemId);
        }
        manageItem(item) {
            this.logger.trace('manageItem');
            if (item) {
                const ariaSelected = item.getAttribute('aria-selected');
                if (ariaSelected == 'false') {
                    if (!this.bindableOptions.multiple && this.currentChoiced.length > 0) {
                        this.clearAll();
                    }
                    this.addItem(item);
                }
                else {
                    this.notification(item.textContent + ' ' + this.bindableOptions.removeText);
                    this.removeAndUnSelected(item);
                }
                this.updateInputSelectElement();
            }
        }
        closeList() {
            if (this.listElement) {
                this.listElement.style.display = 'none';
                this.listElement.setAttribute('aria-hidden', 'true');
            }
            if (this.listOpen) {
                if (this.inputSearch) {
                    this.inputSearch.classList.add('select-beautiful--search---input');
                    this.inputSearch.classList.remove('select-beautiful--search---input--focus');
                    this.inputSearch.setAttribute('aria-expanded', 'false');
                }
                this.platform.document.removeEventListener('focusin', this.onFocusinDom, true);
                this.platform.document.removeEventListener('pointerdown', this.onPointerdown, true);
                this.listOpen = false;
            }
        }
        openList() {
            if (this.listElement) {
                this.listElement.style.display = 'block';
                this.listElement.setAttribute('aria-hidden', 'false');
            }
            if (!this.listOpen) {
                if (this.inputSearch) {
                    this.inputSearch.classList.remove('select-beautiful--search---input');
                    this.inputSearch.classList.add('select-beautiful--search---input--focus');
                    this.inputSearch.setAttribute('aria-expanded', 'true');
                }
                this.platform.document.addEventListener('focusin', this.onFocusinDom, true);
                this.platform.document.addEventListener('pointerdown', this.onPointerdown, true);
                this.listOpen = true;
            }
        }
        updateInputSelectElement() {
            this.logger.trace('updateInputSelectElement');
            const selectedValues = new Set(this.currentChoiced.map(i => i.value));
            this.options.forEach((option, index) => {
                option.removeAttribute('selected');
                if (selectedValues.has(option.value)) {
                    option.setAttribute('selected', '');
                }
            });
            this.dispatchChangeEvent();
        }
        clearAll(verbose = false) {
            this.logger.trace('clearAll');
            this.currentChoiced = [];
            if (this.divItemContainer) {
                this.divItemContainer.innerHTML = '';
            }
            if (this.listElement) {
                this.listElement.querySelectorAll('[aria-selected="true"]').forEach(li => {
                    li.setAttribute('aria-selected', 'false');
                });
            }
            if (verbose) {
                this.notification(this.bindableOptions.removeAllText);
            }
            this.updateInputSelectElement();
        }
    };
    __setFunctionName(_classThis, "SelectBeautiful");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _bindableOptions_decorators = [bindable({ primary: true })];
        __esDecorate(null, null, _bindableOptions_decorators, { kind: "field", name: "bindableOptions", static: false, private: false, access: { has: obj => "bindableOptions" in obj, get: obj => obj.bindableOptions, set: (obj, value) => { obj.bindableOptions = value; } }, metadata: _metadata }, _bindableOptions_initializers, _bindableOptions_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        SelectBeautiful = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return SelectBeautiful = _classThis;
})();
export { SelectBeautiful };
