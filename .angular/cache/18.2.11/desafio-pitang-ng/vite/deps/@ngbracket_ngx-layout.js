import {
  BREAKPOINT,
  BREAKPOINTS,
  BREAKPOINT_PRINT,
  BROWSER_PROVIDER,
  BaseDirective2,
  BreakPointRegistry,
  CLASS_NAME,
  CoreModule,
  DEFAULT_BREAKPOINTS,
  DEFAULT_CONFIG,
  DefaultFlexAlignDirective,
  DefaultFlexDirective,
  DefaultFlexOffsetDirective,
  DefaultFlexOrderDirective,
  DefaultLayoutAlignDirective,
  DefaultLayoutDirective,
  DefaultLayoutGapDirective,
  FlexAlignDirective,
  FlexAlignStyleBuilder,
  FlexDirective,
  FlexFillDirective,
  FlexFillStyleBuilder,
  FlexModule,
  FlexOffsetDirective,
  FlexOffsetStyleBuilder,
  FlexOrderDirective,
  FlexOrderStyleBuilder,
  FlexStyleBuilder,
  LAYOUT_CONFIG,
  LayoutAlignDirective,
  LayoutAlignStyleBuilder,
  LayoutDirective,
  LayoutGapDirective,
  LayoutGapStyleBuilder,
  LayoutStyleBuilder,
  MatchMedia,
  MediaChange,
  MediaMarshaller,
  MediaObserver,
  MediaTrigger,
  MockMatchMedia,
  MockMatchMediaProvider,
  ORIENTATION_BREAKPOINTS,
  PrintHook,
  SERVER_TOKEN,
  ScreenTypes,
  StyleBuilder,
  StyleUtils,
  StylesheetMap,
  coerceArray,
  mergeAlias,
  multiply,
  removeStyles,
  sortAscendingPriority,
  sortDescendingPriority,
  validateBasis
} from "./chunk-K2WKT7HO.js";
import {
  DomSanitizer
} from "./chunk-SRLFHSEL.js";
import "./chunk-AB2IXZW4.js";
import {
  NgClass,
  NgStyle,
  isPlatformServer
} from "./chunk-TNDQCT4Z.js";
import {
  Directive,
  ElementRef,
  Inject,
  Injectable,
  Input,
  KeyValueDiffers,
  NgModule,
  Optional,
  PLATFORM_ID,
  Renderer2,
  SecurityContext,
  Self,
  Version,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵgetInheritedFactory,
  ɵɵinject
} from "./chunk-KHI2B5NF.js";
import {
  __spreadValues,
  takeUntil
} from "./chunk-5TID76VL.js";

// node_modules/@angular/cdk/fesm2022/coercion.mjs
function coerceBooleanProperty(value) {
  return value != null && `${value}` !== "false";
}

// node_modules/@ngbracket/ngx-layout/fesm2022/ngbracket-ngx-layout-extended.mjs
var ClassDirective = class _ClassDirective extends BaseDirective2 {
  /**
   * Capture class assignments so we cache the default classes
   * which are merged with activated styles and used as fallbacks.
   */
  set klass(val) {
    this.ngClassInstance.klass = val;
    this.setValue(val, "");
  }
  constructor(elementRef, styler, marshal, renderer2, ngClassInstance) {
    super(elementRef, null, styler, marshal);
    this.ngClassInstance = ngClassInstance;
    this.DIRECTIVE_KEY = "ngClass";
    if (!this.ngClassInstance) {
      this.ngClassInstance = new NgClass(elementRef, renderer2);
    }
    this.init();
    this.setValue("", "");
  }
  updateWithValue(value) {
    this.ngClassInstance.ngClass = value;
    this.ngClassInstance.ngDoCheck();
  }
  // ******************************************************************
  // Lifecycle Hooks
  // ******************************************************************
  /**
   * For ChangeDetectionStrategy.onPush and ngOnChanges() updates
   */
  ngDoCheck() {
    this.ngClassInstance.ngDoCheck();
  }
  static {
    this.ɵfac = function ClassDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ClassDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(StyleUtils), ɵɵdirectiveInject(MediaMarshaller), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgClass, 10));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _ClassDirective,
      inputs: {
        klass: [0, "class", "klass"]
      },
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClassDirective, [{
    type: Directive
  }], () => [{
    type: ElementRef
  }, {
    type: StyleUtils
  }, {
    type: MediaMarshaller
  }, {
    type: Renderer2
  }, {
    type: NgClass,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }]
  }], {
    klass: [{
      type: Input,
      args: ["class"]
    }]
  });
})();
var inputs$3 = ["ngClass", "ngClass.xs", "ngClass.sm", "ngClass.md", "ngClass.lg", "ngClass.xl", "ngClass.lt-sm", "ngClass.lt-md", "ngClass.lt-lg", "ngClass.lt-xl", "ngClass.gt-xs", "ngClass.gt-sm", "ngClass.gt-md", "ngClass.gt-lg"];
var selector$3 = `
  [ngClass], [ngClass.xs], [ngClass.sm], [ngClass.md], [ngClass.lg], [ngClass.xl],
  [ngClass.lt-sm], [ngClass.lt-md], [ngClass.lt-lg], [ngClass.lt-xl],
  [ngClass.gt-xs], [ngClass.gt-sm], [ngClass.gt-md], [ngClass.gt-lg]
`;
var DefaultClassDirective = class _DefaultClassDirective extends ClassDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$3;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵDefaultClassDirective_BaseFactory;
      return function DefaultClassDirective_Factory(__ngFactoryType__) {
        return (ɵDefaultClassDirective_BaseFactory || (ɵDefaultClassDirective_BaseFactory = ɵɵgetInheritedFactory(_DefaultClassDirective)))(__ngFactoryType__ || _DefaultClassDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _DefaultClassDirective,
      selectors: [["", "ngClass", ""], ["", "ngClass.xs", ""], ["", "ngClass.sm", ""], ["", "ngClass.md", ""], ["", "ngClass.lg", ""], ["", "ngClass.xl", ""], ["", "ngClass.lt-sm", ""], ["", "ngClass.lt-md", ""], ["", "ngClass.lt-lg", ""], ["", "ngClass.lt-xl", ""], ["", "ngClass.gt-xs", ""], ["", "ngClass.gt-sm", ""], ["", "ngClass.gt-md", ""], ["", "ngClass.gt-lg", ""]],
      inputs: {
        ngClass: "ngClass",
        "ngClass.xs": "ngClass.xs",
        "ngClass.sm": "ngClass.sm",
        "ngClass.md": "ngClass.md",
        "ngClass.lg": "ngClass.lg",
        "ngClass.xl": "ngClass.xl",
        "ngClass.lt-sm": "ngClass.lt-sm",
        "ngClass.lt-md": "ngClass.lt-md",
        "ngClass.lt-lg": "ngClass.lt-lg",
        "ngClass.lt-xl": "ngClass.lt-xl",
        "ngClass.gt-xs": "ngClass.gt-xs",
        "ngClass.gt-sm": "ngClass.gt-sm",
        "ngClass.gt-md": "ngClass.gt-md",
        "ngClass.gt-lg": "ngClass.gt-lg"
      },
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultClassDirective, [{
    type: Directive,
    args: [{
      selector: selector$3,
      inputs: inputs$3
    }]
  }], null, null);
})();
var ImgSrcStyleBuilder = class _ImgSrcStyleBuilder extends StyleBuilder {
  buildStyles(url) {
    return {
      content: url ? `url(${url})` : ""
    };
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵImgSrcStyleBuilder_BaseFactory;
      return function ImgSrcStyleBuilder_Factory(__ngFactoryType__) {
        return (ɵImgSrcStyleBuilder_BaseFactory || (ɵImgSrcStyleBuilder_BaseFactory = ɵɵgetInheritedFactory(_ImgSrcStyleBuilder)))(__ngFactoryType__ || _ImgSrcStyleBuilder);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ImgSrcStyleBuilder,
      factory: _ImgSrcStyleBuilder.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImgSrcStyleBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ImgSrcDirective = class _ImgSrcDirective extends BaseDirective2 {
  set src(val) {
    this.defaultSrc = val;
    this.setValue(this.defaultSrc, "");
  }
  constructor(elementRef, styleBuilder, styler, marshal, platformId, serverModuleLoaded) {
    super(elementRef, styleBuilder, styler, marshal);
    this.platformId = platformId;
    this.serverModuleLoaded = serverModuleLoaded;
    this.DIRECTIVE_KEY = "img-src";
    this.defaultSrc = "";
    this.styleCache = imgSrcCache;
    this.init();
    this.setValue(this.nativeElement.getAttribute("src") || "", "");
    if (isPlatformServer(this.platformId) && this.serverModuleLoaded) {
      this.nativeElement.setAttribute("src", "");
    }
  }
  /**
   * Use the [responsively] activated input value to update
   * the host img src attribute or assign a default `img.src=''`
   * if the src has not been defined.
   *
   * Do nothing to standard `<img src="">` usages, only when responsive
   * keys are present do we actually call `setAttribute()`
   */
  updateWithValue(value) {
    const url = value || this.defaultSrc;
    if (isPlatformServer(this.platformId) && this.serverModuleLoaded) {
      this.addStyles(url);
    } else {
      this.nativeElement.setAttribute("src", url);
    }
  }
  static {
    this.ɵfac = function ImgSrcDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ImgSrcDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ImgSrcStyleBuilder), ɵɵdirectiveInject(StyleUtils), ɵɵdirectiveInject(MediaMarshaller), ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(SERVER_TOKEN));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _ImgSrcDirective,
      inputs: {
        src: "src"
      },
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImgSrcDirective, [{
    type: Directive
  }], () => [{
    type: ElementRef
  }, {
    type: ImgSrcStyleBuilder
  }, {
    type: StyleUtils
  }, {
    type: MediaMarshaller
  }, {
    type: Object,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [SERVER_TOKEN]
    }]
  }], {
    src: [{
      type: Input,
      args: ["src"]
    }]
  });
})();
var imgSrcCache = /* @__PURE__ */ new Map();
var inputs$2 = ["src.xs", "src.sm", "src.md", "src.lg", "src.xl", "src.lt-sm", "src.lt-md", "src.lt-lg", "src.lt-xl", "src.gt-xs", "src.gt-sm", "src.gt-md", "src.gt-lg"];
var selector$2 = `
  img[src.xs],    img[src.sm],    img[src.md],    img[src.lg],   img[src.xl],
  img[src.lt-sm], img[src.lt-md], img[src.lt-lg], img[src.lt-xl],
  img[src.gt-xs], img[src.gt-sm], img[src.gt-md], img[src.gt-lg]
`;
var DefaultImgSrcDirective = class _DefaultImgSrcDirective extends ImgSrcDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$2;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵDefaultImgSrcDirective_BaseFactory;
      return function DefaultImgSrcDirective_Factory(__ngFactoryType__) {
        return (ɵDefaultImgSrcDirective_BaseFactory || (ɵDefaultImgSrcDirective_BaseFactory = ɵɵgetInheritedFactory(_DefaultImgSrcDirective)))(__ngFactoryType__ || _DefaultImgSrcDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _DefaultImgSrcDirective,
      selectors: [["img", "src.xs", ""], ["img", "src.sm", ""], ["img", "src.md", ""], ["img", "src.lg", ""], ["img", "src.xl", ""], ["img", "src.lt-sm", ""], ["img", "src.lt-md", ""], ["img", "src.lt-lg", ""], ["img", "src.lt-xl", ""], ["img", "src.gt-xs", ""], ["img", "src.gt-sm", ""], ["img", "src.gt-md", ""], ["img", "src.gt-lg", ""]],
      inputs: {
        "src.xs": "src.xs",
        "src.sm": "src.sm",
        "src.md": "src.md",
        "src.lg": "src.lg",
        "src.xl": "src.xl",
        "src.lt-sm": "src.lt-sm",
        "src.lt-md": "src.lt-md",
        "src.lt-lg": "src.lt-lg",
        "src.lt-xl": "src.lt-xl",
        "src.gt-xs": "src.gt-xs",
        "src.gt-sm": "src.gt-sm",
        "src.gt-md": "src.gt-md",
        "src.gt-lg": "src.gt-lg"
      },
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultImgSrcDirective, [{
    type: Directive,
    args: [{
      selector: selector$2,
      inputs: inputs$2
    }]
  }], null, null);
})();
var ShowHideStyleBuilder = class _ShowHideStyleBuilder extends StyleBuilder {
  buildStyles(show, parent) {
    const shouldShow = show === "true";
    return {
      display: shouldShow ? parent.display || (parent.isServer ? "initial" : "") : "none"
    };
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵShowHideStyleBuilder_BaseFactory;
      return function ShowHideStyleBuilder_Factory(__ngFactoryType__) {
        return (ɵShowHideStyleBuilder_BaseFactory || (ɵShowHideStyleBuilder_BaseFactory = ɵɵgetInheritedFactory(_ShowHideStyleBuilder)))(__ngFactoryType__ || _ShowHideStyleBuilder);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ShowHideStyleBuilder,
      factory: _ShowHideStyleBuilder.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShowHideStyleBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ShowHideDirective = class _ShowHideDirective extends BaseDirective2 {
  constructor(elementRef, styleBuilder, styler, marshal, layoutConfig, platformId, serverModuleLoaded) {
    super(elementRef, styleBuilder, styler, marshal);
    this.layoutConfig = layoutConfig;
    this.platformId = platformId;
    this.serverModuleLoaded = serverModuleLoaded;
    this.DIRECTIVE_KEY = "show-hide";
    this.display = "";
    this.hasLayout = false;
    this.hasFlexChild = false;
  }
  // *********************************************
  // Lifecycle Methods
  // *********************************************
  ngAfterViewInit() {
    this.trackExtraTriggers();
    const children = Array.from(this.nativeElement.children);
    for (let i = 0; i < children.length; i++) {
      if (this.marshal.hasValue(children[i], "flex")) {
        this.hasFlexChild = true;
        break;
      }
    }
    if (DISPLAY_MAP.has(this.nativeElement)) {
      this.display = DISPLAY_MAP.get(this.nativeElement);
    } else {
      this.display = this.getDisplayStyle();
      DISPLAY_MAP.set(this.nativeElement, this.display);
    }
    this.init();
    const defaultValue = this.marshal.getValue(this.nativeElement, this.DIRECTIVE_KEY, "");
    if (defaultValue === void 0 || defaultValue === "") {
      this.setValue(true, "");
    } else {
      this.triggerUpdate();
    }
  }
  /**
   * On changes to any @Input properties...
   * Default to use the non-responsive Input value ('fxShow')
   * Then conditionally override with the mq-activated Input's current value
   */
  ngOnChanges(changes) {
    Object.keys(changes).forEach((key) => {
      if (this.inputs.indexOf(key) !== -1) {
        const inputKey = key.split(".");
        const bp = inputKey.slice(1).join(".");
        const inputValue = changes[key].currentValue;
        let shouldShow = inputValue !== "" ? inputValue !== 0 ? coerceBooleanProperty(inputValue) : false : true;
        if (inputKey[0] === "fxHide") {
          shouldShow = !shouldShow;
        }
        this.setValue(shouldShow, bp);
      }
    });
  }
  // *********************************************
  // Protected methods
  // *********************************************
  /**
   *  Watch for these extra triggers to update fxShow, fxHide stylings
   */
  trackExtraTriggers() {
    this.hasLayout = this.marshal.hasValue(this.nativeElement, "layout");
    ["layout", "layout-align"].forEach((key) => {
      this.marshal.trackValue(this.nativeElement, key).pipe(takeUntil(this.destroySubject)).subscribe(this.triggerUpdate.bind(this));
    });
  }
  /**
   * Override accessor to the current HTMLElement's `display` style
   * Note: Show/Hide will not change the display to 'flex' but will set it to 'block'
   * unless it was already explicitly specified inline or in a CSS stylesheet.
   */
  getDisplayStyle() {
    return this.hasLayout || this.hasFlexChild && this.layoutConfig.addFlexToParent ? "flex" : this.styler.lookupStyle(this.nativeElement, "display", true);
  }
  /** Validate the visibility value and then update the host's inline display style */
  updateWithValue(value = true) {
    if (value === "") {
      return;
    }
    const isServer = isPlatformServer(this.platformId);
    this.addStyles(value ? "true" : "false", {
      display: this.display,
      isServer
    });
    if (isServer && this.serverModuleLoaded) {
      this.nativeElement.style.setProperty("display", "");
    }
    this.marshal.triggerUpdate(this.parentElement, "layout-gap");
  }
  static {
    this.ɵfac = function ShowHideDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ShowHideDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ShowHideStyleBuilder), ɵɵdirectiveInject(StyleUtils), ɵɵdirectiveInject(MediaMarshaller), ɵɵdirectiveInject(LAYOUT_CONFIG), ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(SERVER_TOKEN));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _ShowHideDirective,
      features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShowHideDirective, [{
    type: Directive
  }], () => [{
    type: ElementRef
  }, {
    type: ShowHideStyleBuilder
  }, {
    type: StyleUtils
  }, {
    type: MediaMarshaller
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [LAYOUT_CONFIG]
    }]
  }, {
    type: Object,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [SERVER_TOKEN]
    }]
  }], null);
})();
var DISPLAY_MAP = /* @__PURE__ */ new WeakMap();
var inputs$1 = ["fxShow", "fxShow.print", "fxShow.xs", "fxShow.sm", "fxShow.md", "fxShow.lg", "fxShow.xl", "fxShow.lt-sm", "fxShow.lt-md", "fxShow.lt-lg", "fxShow.lt-xl", "fxShow.gt-xs", "fxShow.gt-sm", "fxShow.gt-md", "fxShow.gt-lg", "fxHide", "fxHide.print", "fxHide.xs", "fxHide.sm", "fxHide.md", "fxHide.lg", "fxHide.xl", "fxHide.lt-sm", "fxHide.lt-md", "fxHide.lt-lg", "fxHide.lt-xl", "fxHide.gt-xs", "fxHide.gt-sm", "fxHide.gt-md", "fxHide.gt-lg"];
var selector$1 = `
  [fxShow], [fxShow.print],
  [fxShow.xs], [fxShow.sm], [fxShow.md], [fxShow.lg], [fxShow.xl],
  [fxShow.lt-sm], [fxShow.lt-md], [fxShow.lt-lg], [fxShow.lt-xl],
  [fxShow.gt-xs], [fxShow.gt-sm], [fxShow.gt-md], [fxShow.gt-lg],
  [fxHide], [fxHide.print],
  [fxHide.xs], [fxHide.sm], [fxHide.md], [fxHide.lg], [fxHide.xl],
  [fxHide.lt-sm], [fxHide.lt-md], [fxHide.lt-lg], [fxHide.lt-xl],
  [fxHide.gt-xs], [fxHide.gt-sm], [fxHide.gt-md], [fxHide.gt-lg]
`;
var DefaultShowHideDirective = class _DefaultShowHideDirective extends ShowHideDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$1;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵDefaultShowHideDirective_BaseFactory;
      return function DefaultShowHideDirective_Factory(__ngFactoryType__) {
        return (ɵDefaultShowHideDirective_BaseFactory || (ɵDefaultShowHideDirective_BaseFactory = ɵɵgetInheritedFactory(_DefaultShowHideDirective)))(__ngFactoryType__ || _DefaultShowHideDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _DefaultShowHideDirective,
      selectors: [["", "fxShow", ""], ["", "fxShow.print", ""], ["", "fxShow.xs", ""], ["", "fxShow.sm", ""], ["", "fxShow.md", ""], ["", "fxShow.lg", ""], ["", "fxShow.xl", ""], ["", "fxShow.lt-sm", ""], ["", "fxShow.lt-md", ""], ["", "fxShow.lt-lg", ""], ["", "fxShow.lt-xl", ""], ["", "fxShow.gt-xs", ""], ["", "fxShow.gt-sm", ""], ["", "fxShow.gt-md", ""], ["", "fxShow.gt-lg", ""], ["", "fxHide", ""], ["", "fxHide.print", ""], ["", "fxHide.xs", ""], ["", "fxHide.sm", ""], ["", "fxHide.md", ""], ["", "fxHide.lg", ""], ["", "fxHide.xl", ""], ["", "fxHide.lt-sm", ""], ["", "fxHide.lt-md", ""], ["", "fxHide.lt-lg", ""], ["", "fxHide.lt-xl", ""], ["", "fxHide.gt-xs", ""], ["", "fxHide.gt-sm", ""], ["", "fxHide.gt-md", ""], ["", "fxHide.gt-lg", ""]],
      inputs: {
        fxShow: "fxShow",
        "fxShow.print": "fxShow.print",
        "fxShow.xs": "fxShow.xs",
        "fxShow.sm": "fxShow.sm",
        "fxShow.md": "fxShow.md",
        "fxShow.lg": "fxShow.lg",
        "fxShow.xl": "fxShow.xl",
        "fxShow.lt-sm": "fxShow.lt-sm",
        "fxShow.lt-md": "fxShow.lt-md",
        "fxShow.lt-lg": "fxShow.lt-lg",
        "fxShow.lt-xl": "fxShow.lt-xl",
        "fxShow.gt-xs": "fxShow.gt-xs",
        "fxShow.gt-sm": "fxShow.gt-sm",
        "fxShow.gt-md": "fxShow.gt-md",
        "fxShow.gt-lg": "fxShow.gt-lg",
        fxHide: "fxHide",
        "fxHide.print": "fxHide.print",
        "fxHide.xs": "fxHide.xs",
        "fxHide.sm": "fxHide.sm",
        "fxHide.md": "fxHide.md",
        "fxHide.lg": "fxHide.lg",
        "fxHide.xl": "fxHide.xl",
        "fxHide.lt-sm": "fxHide.lt-sm",
        "fxHide.lt-md": "fxHide.lt-md",
        "fxHide.lt-lg": "fxHide.lt-lg",
        "fxHide.lt-xl": "fxHide.lt-xl",
        "fxHide.gt-xs": "fxHide.gt-xs",
        "fxHide.gt-sm": "fxHide.gt-sm",
        "fxHide.gt-md": "fxHide.gt-md",
        "fxHide.gt-lg": "fxHide.gt-lg"
      },
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultShowHideDirective, [{
    type: Directive,
    args: [{
      selector: selector$1,
      inputs: inputs$1
    }]
  }], null, null);
})();
var NgStyleKeyValue = class {
  constructor(key, value, noQuotes = true) {
    this.key = key;
    this.value = value;
    this.key = noQuotes ? key.replace(/['"]/g, "").trim() : key.trim();
    this.value = noQuotes ? value.replace(/['"]/g, "").trim() : value.trim();
    this.value = this.value.replace(/;/, "");
  }
};
function getType(target) {
  let what = typeof target;
  if (what === "object") {
    return target.constructor === Array ? "array" : target.constructor === Set ? "set" : "object";
  }
  return what;
}
function buildRawList(source, delimiter = ";") {
  return String(source).trim().split(delimiter).map((val) => val.trim()).filter((val) => val !== "");
}
function buildMapFromList$1(styles, sanitize) {
  const sanitizeValue = (it) => {
    if (sanitize) {
      it.value = sanitize(it.value);
    }
    return it;
  };
  return styles.map(stringToKeyValue).filter((entry) => !!entry).map(sanitizeValue).reduce(keyValuesToMap, {});
}
function buildMapFromSet(source, sanitize) {
  let list = [];
  if (getType(source) === "set") {
    source.forEach((entry) => list.push(entry));
  } else {
    Object.keys(source).forEach((key) => {
      list.push(`${key}:${source[key]}`);
    });
  }
  return buildMapFromList$1(list, sanitize);
}
function stringToKeyValue(it) {
  const [key, ...vals] = it.split(":");
  return new NgStyleKeyValue(key, vals.join(":"));
}
function keyValuesToMap(map, entry) {
  if (!!entry.key) {
    map[entry.key] = entry.value;
  }
  return map;
}
var StyleDirective = class _StyleDirective extends BaseDirective2 {
  constructor(elementRef, styler, marshal, sanitizer, differs, renderer2, ngStyleInstance, serverLoaded, platformId) {
    super(elementRef, null, styler, marshal);
    this.sanitizer = sanitizer;
    this.ngStyleInstance = ngStyleInstance;
    this.DIRECTIVE_KEY = "ngStyle";
    if (!this.ngStyleInstance) {
      this.ngStyleInstance = new NgStyle(elementRef, differs, renderer2);
    }
    this.init();
    const styles = this.nativeElement.getAttribute("style") ?? "";
    this.fallbackStyles = this.buildStyleMap(styles);
    this.isServer = serverLoaded && isPlatformServer(platformId);
  }
  /** Add generated styles */
  updateWithValue(value) {
    const styles = this.buildStyleMap(value);
    this.ngStyleInstance.ngStyle = __spreadValues(__spreadValues({}, this.fallbackStyles), styles);
    if (this.isServer) {
      this.applyStyleToElement(styles);
    }
    this.ngStyleInstance.ngDoCheck();
  }
  /** Remove generated styles */
  clearStyles() {
    this.ngStyleInstance.ngStyle = this.fallbackStyles;
    this.ngStyleInstance.ngDoCheck();
  }
  /**
   * Convert raw strings to ngStyleMap; which is required by ngStyle
   * NOTE: Raw string key-value pairs MUST be delimited by `;`
   *       Comma-delimiters are not supported due to complexities of
   *       possible style values such as `rgba(x,x,x,x)` and others
   */
  buildStyleMap(styles) {
    const sanitizer = (val) => this.sanitizer.sanitize(SecurityContext.STYLE, val) ?? "";
    if (styles) {
      switch (getType(styles)) {
        case "string":
          return buildMapFromList(buildRawList(styles), sanitizer);
        case "array":
          return buildMapFromList(styles, sanitizer);
        case "set":
          return buildMapFromSet(styles, sanitizer);
        default:
          return buildMapFromSet(styles, sanitizer);
      }
    }
    return {};
  }
  // ******************************************************************
  // Lifecycle Hooks
  // ******************************************************************
  /** For ChangeDetectionStrategy.onPush and ngOnChanges() updates */
  ngDoCheck() {
    this.ngStyleInstance.ngDoCheck();
  }
  static {
    this.ɵfac = function StyleDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StyleDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(StyleUtils), ɵɵdirectiveInject(MediaMarshaller), ɵɵdirectiveInject(DomSanitizer), ɵɵdirectiveInject(KeyValueDiffers), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgStyle, 10), ɵɵdirectiveInject(SERVER_TOKEN), ɵɵdirectiveInject(PLATFORM_ID));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _StyleDirective,
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StyleDirective, [{
    type: Directive
  }], () => [{
    type: ElementRef
  }, {
    type: StyleUtils
  }, {
    type: MediaMarshaller
  }, {
    type: DomSanitizer
  }, {
    type: KeyValueDiffers
  }, {
    type: Renderer2
  }, {
    type: NgStyle,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [SERVER_TOKEN]
    }]
  }, {
    type: Object,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }], null);
})();
var inputs = ["ngStyle", "ngStyle.xs", "ngStyle.sm", "ngStyle.md", "ngStyle.lg", "ngStyle.xl", "ngStyle.lt-sm", "ngStyle.lt-md", "ngStyle.lt-lg", "ngStyle.lt-xl", "ngStyle.gt-xs", "ngStyle.gt-sm", "ngStyle.gt-md", "ngStyle.gt-lg"];
var selector = `
  [ngStyle],
  [ngStyle.xs], [ngStyle.sm], [ngStyle.md], [ngStyle.lg], [ngStyle.xl],
  [ngStyle.lt-sm], [ngStyle.lt-md], [ngStyle.lt-lg], [ngStyle.lt-xl],
  [ngStyle.gt-xs], [ngStyle.gt-sm], [ngStyle.gt-md], [ngStyle.gt-lg]
`;
var DefaultStyleDirective = class _DefaultStyleDirective extends StyleDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵDefaultStyleDirective_BaseFactory;
      return function DefaultStyleDirective_Factory(__ngFactoryType__) {
        return (ɵDefaultStyleDirective_BaseFactory || (ɵDefaultStyleDirective_BaseFactory = ɵɵgetInheritedFactory(_DefaultStyleDirective)))(__ngFactoryType__ || _DefaultStyleDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _DefaultStyleDirective,
      selectors: [["", "ngStyle", ""], ["", "ngStyle.xs", ""], ["", "ngStyle.sm", ""], ["", "ngStyle.md", ""], ["", "ngStyle.lg", ""], ["", "ngStyle.xl", ""], ["", "ngStyle.lt-sm", ""], ["", "ngStyle.lt-md", ""], ["", "ngStyle.lt-lg", ""], ["", "ngStyle.lt-xl", ""], ["", "ngStyle.gt-xs", ""], ["", "ngStyle.gt-sm", ""], ["", "ngStyle.gt-md", ""], ["", "ngStyle.gt-lg", ""]],
      inputs: {
        ngStyle: "ngStyle",
        "ngStyle.xs": "ngStyle.xs",
        "ngStyle.sm": "ngStyle.sm",
        "ngStyle.md": "ngStyle.md",
        "ngStyle.lg": "ngStyle.lg",
        "ngStyle.xl": "ngStyle.xl",
        "ngStyle.lt-sm": "ngStyle.lt-sm",
        "ngStyle.lt-md": "ngStyle.lt-md",
        "ngStyle.lt-lg": "ngStyle.lt-lg",
        "ngStyle.lt-xl": "ngStyle.lt-xl",
        "ngStyle.gt-xs": "ngStyle.gt-xs",
        "ngStyle.gt-sm": "ngStyle.gt-sm",
        "ngStyle.gt-md": "ngStyle.gt-md",
        "ngStyle.gt-lg": "ngStyle.gt-lg"
      },
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultStyleDirective, [{
    type: Directive,
    args: [{
      selector,
      inputs
    }]
  }], null, null);
})();
function buildMapFromList(styles, sanitize) {
  const sanitizeValue = (it) => {
    if (sanitize) {
      it.value = sanitize(it.value);
    }
    return it;
  };
  return styles.map(stringToKeyValue).filter((entry) => !!entry).map(sanitizeValue).reduce(keyValuesToMap, {});
}
var ALL_DIRECTIVES = [DefaultShowHideDirective, DefaultClassDirective, DefaultStyleDirective, DefaultImgSrcDirective];
var ExtendedModule = class _ExtendedModule {
  static {
    this.ɵfac = function ExtendedModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExtendedModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ExtendedModule,
      declarations: [DefaultShowHideDirective, DefaultClassDirective, DefaultStyleDirective, DefaultImgSrcDirective],
      imports: [CoreModule],
      exports: [DefaultShowHideDirective, DefaultClassDirective, DefaultStyleDirective, DefaultImgSrcDirective]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CoreModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExtendedModule, [{
    type: NgModule,
    args: [{
      imports: [CoreModule],
      declarations: [...ALL_DIRECTIVES],
      exports: [...ALL_DIRECTIVES]
    }]
  }], null, null);
})();

// node_modules/@ngbracket/ngx-layout/fesm2022/ngbracket-ngx-layout-grid.mjs
var DEFAULT_MAIN$1 = "start";
var DEFAULT_CROSS$1 = "stretch";
var GridAlignColumnsStyleBuilder = class _GridAlignColumnsStyleBuilder extends StyleBuilder {
  buildStyles(input, parent) {
    return buildCss$2(input || `${DEFAULT_MAIN$1} ${DEFAULT_CROSS$1}`, parent.inline);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵGridAlignColumnsStyleBuilder_BaseFactory;
      return function GridAlignColumnsStyleBuilder_Factory(__ngFactoryType__) {
        return (ɵGridAlignColumnsStyleBuilder_BaseFactory || (ɵGridAlignColumnsStyleBuilder_BaseFactory = ɵɵgetInheritedFactory(_GridAlignColumnsStyleBuilder)))(__ngFactoryType__ || _GridAlignColumnsStyleBuilder);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _GridAlignColumnsStyleBuilder,
      factory: _GridAlignColumnsStyleBuilder.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridAlignColumnsStyleBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var GridAlignColumnsDirective = class _GridAlignColumnsDirective extends BaseDirective2 {
  get inline() {
    return this._inline;
  }
  set inline(val) {
    this._inline = coerceBooleanProperty(val);
  }
  constructor(elementRef, styleBuilder, styler, marshal) {
    super(elementRef, styleBuilder, styler, marshal);
    this.DIRECTIVE_KEY = "grid-align-columns";
    this._inline = false;
    this.init();
  }
  // *********************************************
  // Protected methods
  // *********************************************
  updateWithValue(value) {
    this.styleCache = this.inline ? alignColumnsInlineCache : alignColumnsCache;
    this.addStyles(value, {
      inline: this.inline
    });
  }
  static {
    this.ɵfac = function GridAlignColumnsDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GridAlignColumnsDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(GridAlignColumnsStyleBuilder), ɵɵdirectiveInject(StyleUtils), ɵɵdirectiveInject(MediaMarshaller));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _GridAlignColumnsDirective,
      inputs: {
        inline: [0, "gdInline", "inline"]
      },
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridAlignColumnsDirective, [{
    type: Directive
  }], () => [{
    type: ElementRef
  }, {
    type: GridAlignColumnsStyleBuilder
  }, {
    type: StyleUtils
  }, {
    type: MediaMarshaller
  }], {
    inline: [{
      type: Input,
      args: ["gdInline"]
    }]
  });
})();
var alignColumnsCache = /* @__PURE__ */ new Map();
var alignColumnsInlineCache = /* @__PURE__ */ new Map();
var inputs$a = ["gdAlignColumns", "gdAlignColumns.xs", "gdAlignColumns.sm", "gdAlignColumns.md", "gdAlignColumns.lg", "gdAlignColumns.xl", "gdAlignColumns.lt-sm", "gdAlignColumns.lt-md", "gdAlignColumns.lt-lg", "gdAlignColumns.lt-xl", "gdAlignColumns.gt-xs", "gdAlignColumns.gt-sm", "gdAlignColumns.gt-md", "gdAlignColumns.gt-lg"];
var selector$a = `
  [gdAlignColumns],
  [gdAlignColumns.xs], [gdAlignColumns.sm], [gdAlignColumns.md],
  [gdAlignColumns.lg], [gdAlignColumns.xl], [gdAlignColumns.lt-sm],
  [gdAlignColumns.lt-md], [gdAlignColumns.lt-lg], [gdAlignColumns.lt-xl],
  [gdAlignColumns.gt-xs], [gdAlignColumns.gt-sm], [gdAlignColumns.gt-md],
  [gdAlignColumns.gt-lg]
`;
var DefaultGridAlignColumnsDirective = class _DefaultGridAlignColumnsDirective extends GridAlignColumnsDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$a;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵDefaultGridAlignColumnsDirective_BaseFactory;
      return function DefaultGridAlignColumnsDirective_Factory(__ngFactoryType__) {
        return (ɵDefaultGridAlignColumnsDirective_BaseFactory || (ɵDefaultGridAlignColumnsDirective_BaseFactory = ɵɵgetInheritedFactory(_DefaultGridAlignColumnsDirective)))(__ngFactoryType__ || _DefaultGridAlignColumnsDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _DefaultGridAlignColumnsDirective,
      selectors: [["", "gdAlignColumns", ""], ["", "gdAlignColumns.xs", ""], ["", "gdAlignColumns.sm", ""], ["", "gdAlignColumns.md", ""], ["", "gdAlignColumns.lg", ""], ["", "gdAlignColumns.xl", ""], ["", "gdAlignColumns.lt-sm", ""], ["", "gdAlignColumns.lt-md", ""], ["", "gdAlignColumns.lt-lg", ""], ["", "gdAlignColumns.lt-xl", ""], ["", "gdAlignColumns.gt-xs", ""], ["", "gdAlignColumns.gt-sm", ""], ["", "gdAlignColumns.gt-md", ""], ["", "gdAlignColumns.gt-lg", ""]],
      inputs: {
        gdAlignColumns: "gdAlignColumns",
        "gdAlignColumns.xs": "gdAlignColumns.xs",
        "gdAlignColumns.sm": "gdAlignColumns.sm",
        "gdAlignColumns.md": "gdAlignColumns.md",
        "gdAlignColumns.lg": "gdAlignColumns.lg",
        "gdAlignColumns.xl": "gdAlignColumns.xl",
        "gdAlignColumns.lt-sm": "gdAlignColumns.lt-sm",
        "gdAlignColumns.lt-md": "gdAlignColumns.lt-md",
        "gdAlignColumns.lt-lg": "gdAlignColumns.lt-lg",
        "gdAlignColumns.lt-xl": "gdAlignColumns.lt-xl",
        "gdAlignColumns.gt-xs": "gdAlignColumns.gt-xs",
        "gdAlignColumns.gt-sm": "gdAlignColumns.gt-sm",
        "gdAlignColumns.gt-md": "gdAlignColumns.gt-md",
        "gdAlignColumns.gt-lg": "gdAlignColumns.gt-lg"
      },
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultGridAlignColumnsDirective, [{
    type: Directive,
    args: [{
      selector: selector$a,
      inputs: inputs$a
    }]
  }], null, null);
})();
function buildCss$2(align, inline) {
  const css = {}, [mainAxis, crossAxis] = align.split(" ");
  switch (mainAxis) {
    case "center":
      css["align-content"] = "center";
      break;
    case "space-around":
      css["align-content"] = "space-around";
      break;
    case "space-between":
      css["align-content"] = "space-between";
      break;
    case "space-evenly":
      css["align-content"] = "space-evenly";
      break;
    case "end":
      css["align-content"] = "end";
      break;
    case "start":
      css["align-content"] = "start";
      break;
    case "stretch":
      css["align-content"] = "stretch";
      break;
    default:
      css["align-content"] = DEFAULT_MAIN$1;
      break;
  }
  switch (crossAxis) {
    case "start":
      css["align-items"] = "start";
      break;
    case "center":
      css["align-items"] = "center";
      break;
    case "end":
      css["align-items"] = "end";
      break;
    case "stretch":
      css["align-items"] = "stretch";
      break;
    default:
      css["align-items"] = DEFAULT_CROSS$1;
      break;
  }
  css["display"] = inline ? "inline-grid" : "grid";
  return css;
}
var DEFAULT_MAIN = "start";
var DEFAULT_CROSS = "stretch";
var GridAlignRowsStyleBuilder = class _GridAlignRowsStyleBuilder extends StyleBuilder {
  buildStyles(input, parent) {
    return buildCss$1(input || `${DEFAULT_MAIN} ${DEFAULT_CROSS}`, parent.inline);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵGridAlignRowsStyleBuilder_BaseFactory;
      return function GridAlignRowsStyleBuilder_Factory(__ngFactoryType__) {
        return (ɵGridAlignRowsStyleBuilder_BaseFactory || (ɵGridAlignRowsStyleBuilder_BaseFactory = ɵɵgetInheritedFactory(_GridAlignRowsStyleBuilder)))(__ngFactoryType__ || _GridAlignRowsStyleBuilder);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _GridAlignRowsStyleBuilder,
      factory: _GridAlignRowsStyleBuilder.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridAlignRowsStyleBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var GridAlignRowsDirective = class _GridAlignRowsDirective extends BaseDirective2 {
  get inline() {
    return this._inline;
  }
  set inline(val) {
    this._inline = coerceBooleanProperty(val);
  }
  constructor(elementRef, styleBuilder, styler, marshal) {
    super(elementRef, styleBuilder, styler, marshal);
    this.DIRECTIVE_KEY = "grid-align-rows";
    this._inline = false;
    this.init();
  }
  // *********************************************
  // Protected methods
  // *********************************************
  updateWithValue(value) {
    this.styleCache = this.inline ? alignRowsInlineCache : alignRowsCache;
    this.addStyles(value, {
      inline: this.inline
    });
  }
  static {
    this.ɵfac = function GridAlignRowsDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GridAlignRowsDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(GridAlignRowsStyleBuilder), ɵɵdirectiveInject(StyleUtils), ɵɵdirectiveInject(MediaMarshaller));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _GridAlignRowsDirective,
      inputs: {
        inline: [0, "gdInline", "inline"]
      },
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridAlignRowsDirective, [{
    type: Directive
  }], () => [{
    type: ElementRef
  }, {
    type: GridAlignRowsStyleBuilder
  }, {
    type: StyleUtils
  }, {
    type: MediaMarshaller
  }], {
    inline: [{
      type: Input,
      args: ["gdInline"]
    }]
  });
})();
var alignRowsCache = /* @__PURE__ */ new Map();
var alignRowsInlineCache = /* @__PURE__ */ new Map();
var inputs$9 = ["gdAlignRows", "gdAlignRows.xs", "gdAlignRows.sm", "gdAlignRows.md", "gdAlignRows.lg", "gdAlignRows.xl", "gdAlignRows.lt-sm", "gdAlignRows.lt-md", "gdAlignRows.lt-lg", "gdAlignRows.lt-xl", "gdAlignRows.gt-xs", "gdAlignRows.gt-sm", "gdAlignRows.gt-md", "gdAlignRows.gt-lg"];
var selector$9 = `
  [gdAlignRows],
  [gdAlignRows.xs], [gdAlignRows.sm], [gdAlignRows.md],
  [gdAlignRows.lg], [gdAlignRows.xl], [gdAlignRows.lt-sm],
  [gdAlignRows.lt-md], [gdAlignRows.lt-lg], [gdAlignRows.lt-xl],
  [gdAlignRows.gt-xs], [gdAlignRows.gt-sm], [gdAlignRows.gt-md],
  [gdAlignRows.gt-lg]
`;
var DefaultGridAlignRowsDirective = class _DefaultGridAlignRowsDirective extends GridAlignRowsDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$9;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵDefaultGridAlignRowsDirective_BaseFactory;
      return function DefaultGridAlignRowsDirective_Factory(__ngFactoryType__) {
        return (ɵDefaultGridAlignRowsDirective_BaseFactory || (ɵDefaultGridAlignRowsDirective_BaseFactory = ɵɵgetInheritedFactory(_DefaultGridAlignRowsDirective)))(__ngFactoryType__ || _DefaultGridAlignRowsDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _DefaultGridAlignRowsDirective,
      selectors: [["", "gdAlignRows", ""], ["", "gdAlignRows.xs", ""], ["", "gdAlignRows.sm", ""], ["", "gdAlignRows.md", ""], ["", "gdAlignRows.lg", ""], ["", "gdAlignRows.xl", ""], ["", "gdAlignRows.lt-sm", ""], ["", "gdAlignRows.lt-md", ""], ["", "gdAlignRows.lt-lg", ""], ["", "gdAlignRows.lt-xl", ""], ["", "gdAlignRows.gt-xs", ""], ["", "gdAlignRows.gt-sm", ""], ["", "gdAlignRows.gt-md", ""], ["", "gdAlignRows.gt-lg", ""]],
      inputs: {
        gdAlignRows: "gdAlignRows",
        "gdAlignRows.xs": "gdAlignRows.xs",
        "gdAlignRows.sm": "gdAlignRows.sm",
        "gdAlignRows.md": "gdAlignRows.md",
        "gdAlignRows.lg": "gdAlignRows.lg",
        "gdAlignRows.xl": "gdAlignRows.xl",
        "gdAlignRows.lt-sm": "gdAlignRows.lt-sm",
        "gdAlignRows.lt-md": "gdAlignRows.lt-md",
        "gdAlignRows.lt-lg": "gdAlignRows.lt-lg",
        "gdAlignRows.lt-xl": "gdAlignRows.lt-xl",
        "gdAlignRows.gt-xs": "gdAlignRows.gt-xs",
        "gdAlignRows.gt-sm": "gdAlignRows.gt-sm",
        "gdAlignRows.gt-md": "gdAlignRows.gt-md",
        "gdAlignRows.gt-lg": "gdAlignRows.gt-lg"
      },
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultGridAlignRowsDirective, [{
    type: Directive,
    args: [{
      selector: selector$9,
      inputs: inputs$9
    }]
  }], null, null);
})();
function buildCss$1(align, inline) {
  const css = {}, [mainAxis, crossAxis] = align.split(" ");
  switch (mainAxis) {
    case "center":
    case "space-around":
    case "space-between":
    case "space-evenly":
    case "end":
    case "start":
    case "stretch":
      css["justify-content"] = mainAxis;
      break;
    default:
      css["justify-content"] = DEFAULT_MAIN;
      break;
  }
  switch (crossAxis) {
    case "start":
    case "center":
    case "end":
    case "stretch":
      css["justify-items"] = crossAxis;
      break;
    default:
      css["justify-items"] = DEFAULT_CROSS;
      break;
  }
  css["display"] = inline ? "inline-grid" : "grid";
  return css;
}
var DEFAULT_VALUE$7 = "auto";
var GridAreaStyleBuilder = class _GridAreaStyleBuilder extends StyleBuilder {
  buildStyles(input) {
    return {
      "grid-area": input || DEFAULT_VALUE$7
    };
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵGridAreaStyleBuilder_BaseFactory;
      return function GridAreaStyleBuilder_Factory(__ngFactoryType__) {
        return (ɵGridAreaStyleBuilder_BaseFactory || (ɵGridAreaStyleBuilder_BaseFactory = ɵɵgetInheritedFactory(_GridAreaStyleBuilder)))(__ngFactoryType__ || _GridAreaStyleBuilder);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _GridAreaStyleBuilder,
      factory: _GridAreaStyleBuilder.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridAreaStyleBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var GridAreaDirective = class _GridAreaDirective extends BaseDirective2 {
  constructor(elRef, styleUtils, styleBuilder, marshal) {
    super(elRef, styleBuilder, styleUtils, marshal);
    this.DIRECTIVE_KEY = "grid-area";
    this.styleCache = gridAreaCache;
    this.init();
  }
  static {
    this.ɵfac = function GridAreaDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GridAreaDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(StyleUtils), ɵɵdirectiveInject(GridAreaStyleBuilder), ɵɵdirectiveInject(MediaMarshaller));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _GridAreaDirective,
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridAreaDirective, [{
    type: Directive
  }], () => [{
    type: ElementRef
  }, {
    type: StyleUtils
  }, {
    type: GridAreaStyleBuilder
  }, {
    type: MediaMarshaller
  }], null);
})();
var gridAreaCache = /* @__PURE__ */ new Map();
var inputs$8 = ["gdArea", "gdArea.xs", "gdArea.sm", "gdArea.md", "gdArea.lg", "gdArea.xl", "gdArea.lt-sm", "gdArea.lt-md", "gdArea.lt-lg", "gdArea.lt-xl", "gdArea.gt-xs", "gdArea.gt-sm", "gdArea.gt-md", "gdArea.gt-lg"];
var selector$8 = `
  [gdArea],
  [gdArea.xs], [gdArea.sm], [gdArea.md], [gdArea.lg], [gdArea.xl],
  [gdArea.lt-sm], [gdArea.lt-md], [gdArea.lt-lg], [gdArea.lt-xl],
  [gdArea.gt-xs], [gdArea.gt-sm], [gdArea.gt-md], [gdArea.gt-lg]
`;
var DefaultGridAreaDirective = class _DefaultGridAreaDirective extends GridAreaDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$8;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵDefaultGridAreaDirective_BaseFactory;
      return function DefaultGridAreaDirective_Factory(__ngFactoryType__) {
        return (ɵDefaultGridAreaDirective_BaseFactory || (ɵDefaultGridAreaDirective_BaseFactory = ɵɵgetInheritedFactory(_DefaultGridAreaDirective)))(__ngFactoryType__ || _DefaultGridAreaDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _DefaultGridAreaDirective,
      selectors: [["", "gdArea", ""], ["", "gdArea.xs", ""], ["", "gdArea.sm", ""], ["", "gdArea.md", ""], ["", "gdArea.lg", ""], ["", "gdArea.xl", ""], ["", "gdArea.lt-sm", ""], ["", "gdArea.lt-md", ""], ["", "gdArea.lt-lg", ""], ["", "gdArea.lt-xl", ""], ["", "gdArea.gt-xs", ""], ["", "gdArea.gt-sm", ""], ["", "gdArea.gt-md", ""], ["", "gdArea.gt-lg", ""]],
      inputs: {
        gdArea: "gdArea",
        "gdArea.xs": "gdArea.xs",
        "gdArea.sm": "gdArea.sm",
        "gdArea.md": "gdArea.md",
        "gdArea.lg": "gdArea.lg",
        "gdArea.xl": "gdArea.xl",
        "gdArea.lt-sm": "gdArea.lt-sm",
        "gdArea.lt-md": "gdArea.lt-md",
        "gdArea.lt-lg": "gdArea.lt-lg",
        "gdArea.lt-xl": "gdArea.lt-xl",
        "gdArea.gt-xs": "gdArea.gt-xs",
        "gdArea.gt-sm": "gdArea.gt-sm",
        "gdArea.gt-md": "gdArea.gt-md",
        "gdArea.gt-lg": "gdArea.gt-lg"
      },
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultGridAreaDirective, [{
    type: Directive,
    args: [{
      selector: selector$8,
      inputs: inputs$8
    }]
  }], null, null);
})();
var DEFAULT_VALUE$6 = "none";
var DELIMETER = "|";
var GridAreasStyleBuiler = class _GridAreasStyleBuiler extends StyleBuilder {
  buildStyles(input, parent) {
    const areas = (input || DEFAULT_VALUE$6).split(DELIMETER).map((v) => `"${v.trim()}"`);
    return {
      display: parent.inline ? "inline-grid" : "grid",
      "grid-template-areas": areas.join(" ")
    };
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵGridAreasStyleBuiler_BaseFactory;
      return function GridAreasStyleBuiler_Factory(__ngFactoryType__) {
        return (ɵGridAreasStyleBuiler_BaseFactory || (ɵGridAreasStyleBuiler_BaseFactory = ɵɵgetInheritedFactory(_GridAreasStyleBuiler)))(__ngFactoryType__ || _GridAreasStyleBuiler);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _GridAreasStyleBuiler,
      factory: _GridAreasStyleBuiler.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridAreasStyleBuiler, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var GridAreasDirective = class _GridAreasDirective extends BaseDirective2 {
  get inline() {
    return this._inline;
  }
  set inline(val) {
    this._inline = coerceBooleanProperty(val);
  }
  constructor(elRef, styleUtils, styleBuilder, marshal) {
    super(elRef, styleBuilder, styleUtils, marshal);
    this.DIRECTIVE_KEY = "grid-areas";
    this._inline = false;
    this.init();
  }
  // *********************************************
  // Protected methods
  // *********************************************
  updateWithValue(value) {
    this.styleCache = this.inline ? areasInlineCache : areasCache;
    this.addStyles(value, {
      inline: this.inline
    });
  }
  static {
    this.ɵfac = function GridAreasDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GridAreasDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(StyleUtils), ɵɵdirectiveInject(GridAreasStyleBuiler), ɵɵdirectiveInject(MediaMarshaller));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _GridAreasDirective,
      inputs: {
        inline: [0, "gdInline", "inline"]
      },
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridAreasDirective, [{
    type: Directive
  }], () => [{
    type: ElementRef
  }, {
    type: StyleUtils
  }, {
    type: GridAreasStyleBuiler
  }, {
    type: MediaMarshaller
  }], {
    inline: [{
      type: Input,
      args: ["gdInline"]
    }]
  });
})();
var areasCache = /* @__PURE__ */ new Map();
var areasInlineCache = /* @__PURE__ */ new Map();
var inputs$7 = ["gdAreas", "gdAreas.xs", "gdAreas.sm", "gdAreas.md", "gdAreas.lg", "gdAreas.xl", "gdAreas.lt-sm", "gdAreas.lt-md", "gdAreas.lt-lg", "gdAreas.lt-xl", "gdAreas.gt-xs", "gdAreas.gt-sm", "gdAreas.gt-md", "gdAreas.gt-lg"];
var selector$7 = `
  [gdAreas],
  [gdAreas.xs], [gdAreas.sm], [gdAreas.md], [gdAreas.lg], [gdAreas.xl],
  [gdAreas.lt-sm], [gdAreas.lt-md], [gdAreas.lt-lg], [gdAreas.lt-xl],
  [gdAreas.gt-xs], [gdAreas.gt-sm], [gdAreas.gt-md], [gdAreas.gt-lg]
`;
var DefaultGridAreasDirective = class _DefaultGridAreasDirective extends GridAreasDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$7;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵDefaultGridAreasDirective_BaseFactory;
      return function DefaultGridAreasDirective_Factory(__ngFactoryType__) {
        return (ɵDefaultGridAreasDirective_BaseFactory || (ɵDefaultGridAreasDirective_BaseFactory = ɵɵgetInheritedFactory(_DefaultGridAreasDirective)))(__ngFactoryType__ || _DefaultGridAreasDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _DefaultGridAreasDirective,
      selectors: [["", "gdAreas", ""], ["", "gdAreas.xs", ""], ["", "gdAreas.sm", ""], ["", "gdAreas.md", ""], ["", "gdAreas.lg", ""], ["", "gdAreas.xl", ""], ["", "gdAreas.lt-sm", ""], ["", "gdAreas.lt-md", ""], ["", "gdAreas.lt-lg", ""], ["", "gdAreas.lt-xl", ""], ["", "gdAreas.gt-xs", ""], ["", "gdAreas.gt-sm", ""], ["", "gdAreas.gt-md", ""], ["", "gdAreas.gt-lg", ""]],
      inputs: {
        gdAreas: "gdAreas",
        "gdAreas.xs": "gdAreas.xs",
        "gdAreas.sm": "gdAreas.sm",
        "gdAreas.md": "gdAreas.md",
        "gdAreas.lg": "gdAreas.lg",
        "gdAreas.xl": "gdAreas.xl",
        "gdAreas.lt-sm": "gdAreas.lt-sm",
        "gdAreas.lt-md": "gdAreas.lt-md",
        "gdAreas.lt-lg": "gdAreas.lt-lg",
        "gdAreas.lt-xl": "gdAreas.lt-xl",
        "gdAreas.gt-xs": "gdAreas.gt-xs",
        "gdAreas.gt-sm": "gdAreas.gt-sm",
        "gdAreas.gt-md": "gdAreas.gt-md",
        "gdAreas.gt-lg": "gdAreas.gt-lg"
      },
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultGridAreasDirective, [{
    type: Directive,
    args: [{
      selector: selector$7,
      inputs: inputs$7
    }]
  }], null, null);
})();
var DEFAULT_VALUE$5 = "initial";
var GridAutoStyleBuilder = class _GridAutoStyleBuilder extends StyleBuilder {
  buildStyles(input, parent) {
    let [direction, dense] = (input || DEFAULT_VALUE$5).split(" ");
    if (direction !== "column" && direction !== "row" && direction !== "dense") {
      direction = "row";
    }
    dense = dense === "dense" && direction !== "dense" ? " dense" : "";
    return {
      display: parent.inline ? "inline-grid" : "grid",
      "grid-auto-flow": direction + dense
    };
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵGridAutoStyleBuilder_BaseFactory;
      return function GridAutoStyleBuilder_Factory(__ngFactoryType__) {
        return (ɵGridAutoStyleBuilder_BaseFactory || (ɵGridAutoStyleBuilder_BaseFactory = ɵɵgetInheritedFactory(_GridAutoStyleBuilder)))(__ngFactoryType__ || _GridAutoStyleBuilder);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _GridAutoStyleBuilder,
      factory: _GridAutoStyleBuilder.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridAutoStyleBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var GridAutoDirective = class _GridAutoDirective extends BaseDirective2 {
  get inline() {
    return this._inline;
  }
  set inline(val) {
    this._inline = coerceBooleanProperty(val);
  }
  constructor(elementRef, styleBuilder, styler, marshal) {
    super(elementRef, styleBuilder, styler, marshal);
    this._inline = false;
    this.DIRECTIVE_KEY = "grid-auto";
    this.init();
  }
  // *********************************************
  // Protected methods
  // *********************************************
  updateWithValue(value) {
    this.styleCache = this.inline ? autoInlineCache : autoCache;
    this.addStyles(value, {
      inline: this.inline
    });
  }
  static {
    this.ɵfac = function GridAutoDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GridAutoDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(GridAutoStyleBuilder), ɵɵdirectiveInject(StyleUtils), ɵɵdirectiveInject(MediaMarshaller));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _GridAutoDirective,
      inputs: {
        inline: [0, "gdInline", "inline"]
      },
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridAutoDirective, [{
    type: Directive
  }], () => [{
    type: ElementRef
  }, {
    type: GridAutoStyleBuilder
  }, {
    type: StyleUtils
  }, {
    type: MediaMarshaller
  }], {
    inline: [{
      type: Input,
      args: ["gdInline"]
    }]
  });
})();
var autoCache = /* @__PURE__ */ new Map();
var autoInlineCache = /* @__PURE__ */ new Map();
var inputs$6 = ["gdAuto", "gdAuto.xs", "gdAuto.sm", "gdAuto.md", "gdAuto.lg", "gdAuto.xl", "gdAuto.lt-sm", "gdAuto.lt-md", "gdAuto.lt-lg", "gdAuto.lt-xl", "gdAuto.gt-xs", "gdAuto.gt-sm", "gdAuto.gt-md", "gdAuto.gt-lg"];
var selector$6 = `
  [gdAuto],
  [gdAuto.xs], [gdAuto.sm], [gdAuto.md], [gdAuto.lg], [gdAuto.xl],
  [gdAuto.lt-sm], [gdAuto.lt-md], [gdAuto.lt-lg], [gdAuto.lt-xl],
  [gdAuto.gt-xs], [gdAuto.gt-sm], [gdAuto.gt-md], [gdAuto.gt-lg]
`;
var DefaultGridAutoDirective = class _DefaultGridAutoDirective extends GridAutoDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$6;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵDefaultGridAutoDirective_BaseFactory;
      return function DefaultGridAutoDirective_Factory(__ngFactoryType__) {
        return (ɵDefaultGridAutoDirective_BaseFactory || (ɵDefaultGridAutoDirective_BaseFactory = ɵɵgetInheritedFactory(_DefaultGridAutoDirective)))(__ngFactoryType__ || _DefaultGridAutoDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _DefaultGridAutoDirective,
      selectors: [["", "gdAuto", ""], ["", "gdAuto.xs", ""], ["", "gdAuto.sm", ""], ["", "gdAuto.md", ""], ["", "gdAuto.lg", ""], ["", "gdAuto.xl", ""], ["", "gdAuto.lt-sm", ""], ["", "gdAuto.lt-md", ""], ["", "gdAuto.lt-lg", ""], ["", "gdAuto.lt-xl", ""], ["", "gdAuto.gt-xs", ""], ["", "gdAuto.gt-sm", ""], ["", "gdAuto.gt-md", ""], ["", "gdAuto.gt-lg", ""]],
      inputs: {
        gdAuto: "gdAuto",
        "gdAuto.xs": "gdAuto.xs",
        "gdAuto.sm": "gdAuto.sm",
        "gdAuto.md": "gdAuto.md",
        "gdAuto.lg": "gdAuto.lg",
        "gdAuto.xl": "gdAuto.xl",
        "gdAuto.lt-sm": "gdAuto.lt-sm",
        "gdAuto.lt-md": "gdAuto.lt-md",
        "gdAuto.lt-lg": "gdAuto.lt-lg",
        "gdAuto.lt-xl": "gdAuto.lt-xl",
        "gdAuto.gt-xs": "gdAuto.gt-xs",
        "gdAuto.gt-sm": "gdAuto.gt-sm",
        "gdAuto.gt-md": "gdAuto.gt-md",
        "gdAuto.gt-lg": "gdAuto.gt-lg"
      },
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultGridAutoDirective, [{
    type: Directive,
    args: [{
      selector: selector$6,
      inputs: inputs$6
    }]
  }], null, null);
})();
var DEFAULT_VALUE$4 = "auto";
var GridColumnStyleBuilder = class _GridColumnStyleBuilder extends StyleBuilder {
  buildStyles(input) {
    return {
      "grid-column": input || DEFAULT_VALUE$4
    };
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵGridColumnStyleBuilder_BaseFactory;
      return function GridColumnStyleBuilder_Factory(__ngFactoryType__) {
        return (ɵGridColumnStyleBuilder_BaseFactory || (ɵGridColumnStyleBuilder_BaseFactory = ɵɵgetInheritedFactory(_GridColumnStyleBuilder)))(__ngFactoryType__ || _GridColumnStyleBuilder);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _GridColumnStyleBuilder,
      factory: _GridColumnStyleBuilder.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridColumnStyleBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var GridColumnDirective = class _GridColumnDirective extends BaseDirective2 {
  constructor(elementRef, styleBuilder, styler, marshal) {
    super(elementRef, styleBuilder, styler, marshal);
    this.DIRECTIVE_KEY = "grid-column";
    this.styleCache = columnCache;
    this.init();
  }
  static {
    this.ɵfac = function GridColumnDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GridColumnDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(GridColumnStyleBuilder), ɵɵdirectiveInject(StyleUtils), ɵɵdirectiveInject(MediaMarshaller));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _GridColumnDirective,
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridColumnDirective, [{
    type: Directive
  }], () => [{
    type: ElementRef
  }, {
    type: GridColumnStyleBuilder
  }, {
    type: StyleUtils
  }, {
    type: MediaMarshaller
  }], null);
})();
var columnCache = /* @__PURE__ */ new Map();
var inputs$5 = ["gdColumn", "gdColumn.xs", "gdColumn.sm", "gdColumn.md", "gdColumn.lg", "gdColumn.xl", "gdColumn.lt-sm", "gdColumn.lt-md", "gdColumn.lt-lg", "gdColumn.lt-xl", "gdColumn.gt-xs", "gdColumn.gt-sm", "gdColumn.gt-md", "gdColumn.gt-lg"];
var selector$5 = `
  [gdColumn],
  [gdColumn.xs], [gdColumn.sm], [gdColumn.md], [gdColumn.lg], [gdColumn.xl],
  [gdColumn.lt-sm], [gdColumn.lt-md], [gdColumn.lt-lg], [gdColumn.lt-xl],
  [gdColumn.gt-xs], [gdColumn.gt-sm], [gdColumn.gt-md], [gdColumn.gt-lg]
`;
var DefaultGridColumnDirective = class _DefaultGridColumnDirective extends GridColumnDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$5;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵDefaultGridColumnDirective_BaseFactory;
      return function DefaultGridColumnDirective_Factory(__ngFactoryType__) {
        return (ɵDefaultGridColumnDirective_BaseFactory || (ɵDefaultGridColumnDirective_BaseFactory = ɵɵgetInheritedFactory(_DefaultGridColumnDirective)))(__ngFactoryType__ || _DefaultGridColumnDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _DefaultGridColumnDirective,
      selectors: [["", "gdColumn", ""], ["", "gdColumn.xs", ""], ["", "gdColumn.sm", ""], ["", "gdColumn.md", ""], ["", "gdColumn.lg", ""], ["", "gdColumn.xl", ""], ["", "gdColumn.lt-sm", ""], ["", "gdColumn.lt-md", ""], ["", "gdColumn.lt-lg", ""], ["", "gdColumn.lt-xl", ""], ["", "gdColumn.gt-xs", ""], ["", "gdColumn.gt-sm", ""], ["", "gdColumn.gt-md", ""], ["", "gdColumn.gt-lg", ""]],
      inputs: {
        gdColumn: "gdColumn",
        "gdColumn.xs": "gdColumn.xs",
        "gdColumn.sm": "gdColumn.sm",
        "gdColumn.md": "gdColumn.md",
        "gdColumn.lg": "gdColumn.lg",
        "gdColumn.xl": "gdColumn.xl",
        "gdColumn.lt-sm": "gdColumn.lt-sm",
        "gdColumn.lt-md": "gdColumn.lt-md",
        "gdColumn.lt-lg": "gdColumn.lt-lg",
        "gdColumn.lt-xl": "gdColumn.lt-xl",
        "gdColumn.gt-xs": "gdColumn.gt-xs",
        "gdColumn.gt-sm": "gdColumn.gt-sm",
        "gdColumn.gt-md": "gdColumn.gt-md",
        "gdColumn.gt-lg": "gdColumn.gt-lg"
      },
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultGridColumnDirective, [{
    type: Directive,
    args: [{
      selector: selector$5,
      inputs: inputs$5
    }]
  }], null, null);
})();
var DEFAULT_VALUE$3 = "none";
var AUTO_SPECIFIER$1 = "!";
var GridColumnsStyleBuilder = class _GridColumnsStyleBuilder extends StyleBuilder {
  buildStyles(input, parent) {
    input = input || DEFAULT_VALUE$3;
    let auto = false;
    if (input.endsWith(AUTO_SPECIFIER$1)) {
      input = input.substring(0, input.indexOf(AUTO_SPECIFIER$1));
      auto = true;
    }
    const css = {
      display: parent.inline ? "inline-grid" : "grid",
      "grid-auto-columns": "",
      "grid-template-columns": ""
    };
    const key = auto ? "grid-auto-columns" : "grid-template-columns";
    css[key] = input;
    return css;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵGridColumnsStyleBuilder_BaseFactory;
      return function GridColumnsStyleBuilder_Factory(__ngFactoryType__) {
        return (ɵGridColumnsStyleBuilder_BaseFactory || (ɵGridColumnsStyleBuilder_BaseFactory = ɵɵgetInheritedFactory(_GridColumnsStyleBuilder)))(__ngFactoryType__ || _GridColumnsStyleBuilder);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _GridColumnsStyleBuilder,
      factory: _GridColumnsStyleBuilder.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridColumnsStyleBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var GridColumnsDirective = class _GridColumnsDirective extends BaseDirective2 {
  get inline() {
    return this._inline;
  }
  set inline(val) {
    this._inline = coerceBooleanProperty(val);
  }
  constructor(elementRef, styleBuilder, styler, marshal) {
    super(elementRef, styleBuilder, styler, marshal);
    this.DIRECTIVE_KEY = "grid-columns";
    this._inline = false;
    this.init();
  }
  // *********************************************
  // Protected methods
  // *********************************************
  updateWithValue(value) {
    this.styleCache = this.inline ? columnsInlineCache : columnsCache;
    this.addStyles(value, {
      inline: this.inline
    });
  }
  static {
    this.ɵfac = function GridColumnsDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GridColumnsDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(GridColumnsStyleBuilder), ɵɵdirectiveInject(StyleUtils), ɵɵdirectiveInject(MediaMarshaller));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _GridColumnsDirective,
      inputs: {
        inline: [0, "gdInline", "inline"]
      },
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridColumnsDirective, [{
    type: Directive
  }], () => [{
    type: ElementRef
  }, {
    type: GridColumnsStyleBuilder
  }, {
    type: StyleUtils
  }, {
    type: MediaMarshaller
  }], {
    inline: [{
      type: Input,
      args: ["gdInline"]
    }]
  });
})();
var columnsCache = /* @__PURE__ */ new Map();
var columnsInlineCache = /* @__PURE__ */ new Map();
var inputs$4 = ["gdColumns", "gdColumns.xs", "gdColumns.sm", "gdColumns.md", "gdColumns.lg", "gdColumns.xl", "gdColumns.lt-sm", "gdColumns.lt-md", "gdColumns.lt-lg", "gdColumns.lt-xl", "gdColumns.gt-xs", "gdColumns.gt-sm", "gdColumns.gt-md", "gdColumns.gt-lg"];
var selector$4 = `
  [gdColumns],
  [gdColumns.xs], [gdColumns.sm], [gdColumns.md], [gdColumns.lg], [gdColumns.xl],
  [gdColumns.lt-sm], [gdColumns.lt-md], [gdColumns.lt-lg], [gdColumns.lt-xl],
  [gdColumns.gt-xs], [gdColumns.gt-sm], [gdColumns.gt-md], [gdColumns.gt-lg]
`;
var DefaultGridColumnsDirective = class _DefaultGridColumnsDirective extends GridColumnsDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$4;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵDefaultGridColumnsDirective_BaseFactory;
      return function DefaultGridColumnsDirective_Factory(__ngFactoryType__) {
        return (ɵDefaultGridColumnsDirective_BaseFactory || (ɵDefaultGridColumnsDirective_BaseFactory = ɵɵgetInheritedFactory(_DefaultGridColumnsDirective)))(__ngFactoryType__ || _DefaultGridColumnsDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _DefaultGridColumnsDirective,
      selectors: [["", "gdColumns", ""], ["", "gdColumns.xs", ""], ["", "gdColumns.sm", ""], ["", "gdColumns.md", ""], ["", "gdColumns.lg", ""], ["", "gdColumns.xl", ""], ["", "gdColumns.lt-sm", ""], ["", "gdColumns.lt-md", ""], ["", "gdColumns.lt-lg", ""], ["", "gdColumns.lt-xl", ""], ["", "gdColumns.gt-xs", ""], ["", "gdColumns.gt-sm", ""], ["", "gdColumns.gt-md", ""], ["", "gdColumns.gt-lg", ""]],
      inputs: {
        gdColumns: "gdColumns",
        "gdColumns.xs": "gdColumns.xs",
        "gdColumns.sm": "gdColumns.sm",
        "gdColumns.md": "gdColumns.md",
        "gdColumns.lg": "gdColumns.lg",
        "gdColumns.xl": "gdColumns.xl",
        "gdColumns.lt-sm": "gdColumns.lt-sm",
        "gdColumns.lt-md": "gdColumns.lt-md",
        "gdColumns.lt-lg": "gdColumns.lt-lg",
        "gdColumns.lt-xl": "gdColumns.lt-xl",
        "gdColumns.gt-xs": "gdColumns.gt-xs",
        "gdColumns.gt-sm": "gdColumns.gt-sm",
        "gdColumns.gt-md": "gdColumns.gt-md",
        "gdColumns.gt-lg": "gdColumns.gt-lg"
      },
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultGridColumnsDirective, [{
    type: Directive,
    args: [{
      selector: selector$4,
      inputs: inputs$4
    }]
  }], null, null);
})();
var DEFAULT_VALUE$2 = "0";
var GridGapStyleBuilder = class _GridGapStyleBuilder extends StyleBuilder {
  buildStyles(input, parent) {
    return {
      display: parent.inline ? "inline-grid" : "grid",
      "grid-gap": input || DEFAULT_VALUE$2
    };
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵGridGapStyleBuilder_BaseFactory;
      return function GridGapStyleBuilder_Factory(__ngFactoryType__) {
        return (ɵGridGapStyleBuilder_BaseFactory || (ɵGridGapStyleBuilder_BaseFactory = ɵɵgetInheritedFactory(_GridGapStyleBuilder)))(__ngFactoryType__ || _GridGapStyleBuilder);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _GridGapStyleBuilder,
      factory: _GridGapStyleBuilder.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridGapStyleBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var GridGapDirective = class _GridGapDirective extends BaseDirective2 {
  get inline() {
    return this._inline;
  }
  set inline(val) {
    this._inline = coerceBooleanProperty(val);
  }
  constructor(elRef, styleUtils, styleBuilder, marshal) {
    super(elRef, styleBuilder, styleUtils, marshal);
    this.DIRECTIVE_KEY = "grid-gap";
    this._inline = false;
    this.init();
  }
  // *********************************************
  // Protected methods
  // *********************************************
  updateWithValue(value) {
    this.styleCache = this.inline ? gapInlineCache : gapCache;
    this.addStyles(value, {
      inline: this.inline
    });
  }
  static {
    this.ɵfac = function GridGapDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GridGapDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(StyleUtils), ɵɵdirectiveInject(GridGapStyleBuilder), ɵɵdirectiveInject(MediaMarshaller));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _GridGapDirective,
      inputs: {
        inline: [0, "gdInline", "inline"]
      },
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridGapDirective, [{
    type: Directive
  }], () => [{
    type: ElementRef
  }, {
    type: StyleUtils
  }, {
    type: GridGapStyleBuilder
  }, {
    type: MediaMarshaller
  }], {
    inline: [{
      type: Input,
      args: ["gdInline"]
    }]
  });
})();
var gapCache = /* @__PURE__ */ new Map();
var gapInlineCache = /* @__PURE__ */ new Map();
var inputs$32 = ["gdGap", "gdGap.xs", "gdGap.sm", "gdGap.md", "gdGap.lg", "gdGap.xl", "gdGap.lt-sm", "gdGap.lt-md", "gdGap.lt-lg", "gdGap.lt-xl", "gdGap.gt-xs", "gdGap.gt-sm", "gdGap.gt-md", "gdGap.gt-lg"];
var selector$32 = `
  [gdGap],
  [gdGap.xs], [gdGap.sm], [gdGap.md], [gdGap.lg], [gdGap.xl],
  [gdGap.lt-sm], [gdGap.lt-md], [gdGap.lt-lg], [gdGap.lt-xl],
  [gdGap.gt-xs], [gdGap.gt-sm], [gdGap.gt-md], [gdGap.gt-lg]
`;
var DefaultGridGapDirective = class _DefaultGridGapDirective extends GridGapDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$32;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵDefaultGridGapDirective_BaseFactory;
      return function DefaultGridGapDirective_Factory(__ngFactoryType__) {
        return (ɵDefaultGridGapDirective_BaseFactory || (ɵDefaultGridGapDirective_BaseFactory = ɵɵgetInheritedFactory(_DefaultGridGapDirective)))(__ngFactoryType__ || _DefaultGridGapDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _DefaultGridGapDirective,
      selectors: [["", "gdGap", ""], ["", "gdGap.xs", ""], ["", "gdGap.sm", ""], ["", "gdGap.md", ""], ["", "gdGap.lg", ""], ["", "gdGap.xl", ""], ["", "gdGap.lt-sm", ""], ["", "gdGap.lt-md", ""], ["", "gdGap.lt-lg", ""], ["", "gdGap.lt-xl", ""], ["", "gdGap.gt-xs", ""], ["", "gdGap.gt-sm", ""], ["", "gdGap.gt-md", ""], ["", "gdGap.gt-lg", ""]],
      inputs: {
        gdGap: "gdGap",
        "gdGap.xs": "gdGap.xs",
        "gdGap.sm": "gdGap.sm",
        "gdGap.md": "gdGap.md",
        "gdGap.lg": "gdGap.lg",
        "gdGap.xl": "gdGap.xl",
        "gdGap.lt-sm": "gdGap.lt-sm",
        "gdGap.lt-md": "gdGap.lt-md",
        "gdGap.lt-lg": "gdGap.lt-lg",
        "gdGap.lt-xl": "gdGap.lt-xl",
        "gdGap.gt-xs": "gdGap.gt-xs",
        "gdGap.gt-sm": "gdGap.gt-sm",
        "gdGap.gt-md": "gdGap.gt-md",
        "gdGap.gt-lg": "gdGap.gt-lg"
      },
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultGridGapDirective, [{
    type: Directive,
    args: [{
      selector: selector$32,
      inputs: inputs$32
    }]
  }], null, null);
})();
var ROW_DEFAULT = "stretch";
var COL_DEFAULT = "stretch";
var GridAlignStyleBuilder = class _GridAlignStyleBuilder extends StyleBuilder {
  buildStyles(input) {
    return buildCss(input || ROW_DEFAULT);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵGridAlignStyleBuilder_BaseFactory;
      return function GridAlignStyleBuilder_Factory(__ngFactoryType__) {
        return (ɵGridAlignStyleBuilder_BaseFactory || (ɵGridAlignStyleBuilder_BaseFactory = ɵɵgetInheritedFactory(_GridAlignStyleBuilder)))(__ngFactoryType__ || _GridAlignStyleBuilder);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _GridAlignStyleBuilder,
      factory: _GridAlignStyleBuilder.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridAlignStyleBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var GridAlignDirective = class _GridAlignDirective extends BaseDirective2 {
  constructor(elementRef, styleBuilder, styler, marshal) {
    super(elementRef, styleBuilder, styler, marshal);
    this.DIRECTIVE_KEY = "grid-align";
    this.styleCache = alignCache;
    this.init();
  }
  static {
    this.ɵfac = function GridAlignDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GridAlignDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(GridAlignStyleBuilder), ɵɵdirectiveInject(StyleUtils), ɵɵdirectiveInject(MediaMarshaller));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _GridAlignDirective,
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridAlignDirective, [{
    type: Directive
  }], () => [{
    type: ElementRef
  }, {
    type: GridAlignStyleBuilder
  }, {
    type: StyleUtils
  }, {
    type: MediaMarshaller
  }], null);
})();
var alignCache = /* @__PURE__ */ new Map();
var inputs$22 = ["gdGridAlign", "gdGridAlign.xs", "gdGridAlign.sm", "gdGridAlign.md", "gdGridAlign.lg", "gdGridAlign.xl", "gdGridAlign.lt-sm", "gdGridAlign.lt-md", "gdGridAlign.lt-lg", "gdGridAlign.lt-xl", "gdGridAlign.gt-xs", "gdGridAlign.gt-sm", "gdGridAlign.gt-md", "gdGridAlign.gt-lg"];
var selector$22 = `
  [gdGridAlign],
  [gdGridAlign.xs], [gdGridAlign.sm], [gdGridAlign.md], [gdGridAlign.lg],[gdGridAlign.xl],
  [gdGridAlign.lt-sm], [gdGridAlign.lt-md], [gdGridAlign.lt-lg], [gdGridAlign.lt-xl],
  [gdGridAlign.gt-xs], [gdGridAlign.gt-sm], [gdGridAlign.gt-md], [gdGridAlign.gt-lg]
`;
var DefaultGridAlignDirective = class _DefaultGridAlignDirective extends GridAlignDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$22;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵDefaultGridAlignDirective_BaseFactory;
      return function DefaultGridAlignDirective_Factory(__ngFactoryType__) {
        return (ɵDefaultGridAlignDirective_BaseFactory || (ɵDefaultGridAlignDirective_BaseFactory = ɵɵgetInheritedFactory(_DefaultGridAlignDirective)))(__ngFactoryType__ || _DefaultGridAlignDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _DefaultGridAlignDirective,
      selectors: [["", "gdGridAlign", ""], ["", "gdGridAlign.xs", ""], ["", "gdGridAlign.sm", ""], ["", "gdGridAlign.md", ""], ["", "gdGridAlign.lg", ""], ["", "gdGridAlign.xl", ""], ["", "gdGridAlign.lt-sm", ""], ["", "gdGridAlign.lt-md", ""], ["", "gdGridAlign.lt-lg", ""], ["", "gdGridAlign.lt-xl", ""], ["", "gdGridAlign.gt-xs", ""], ["", "gdGridAlign.gt-sm", ""], ["", "gdGridAlign.gt-md", ""], ["", "gdGridAlign.gt-lg", ""]],
      inputs: {
        gdGridAlign: "gdGridAlign",
        "gdGridAlign.xs": "gdGridAlign.xs",
        "gdGridAlign.sm": "gdGridAlign.sm",
        "gdGridAlign.md": "gdGridAlign.md",
        "gdGridAlign.lg": "gdGridAlign.lg",
        "gdGridAlign.xl": "gdGridAlign.xl",
        "gdGridAlign.lt-sm": "gdGridAlign.lt-sm",
        "gdGridAlign.lt-md": "gdGridAlign.lt-md",
        "gdGridAlign.lt-lg": "gdGridAlign.lt-lg",
        "gdGridAlign.lt-xl": "gdGridAlign.lt-xl",
        "gdGridAlign.gt-xs": "gdGridAlign.gt-xs",
        "gdGridAlign.gt-sm": "gdGridAlign.gt-sm",
        "gdGridAlign.gt-md": "gdGridAlign.gt-md",
        "gdGridAlign.gt-lg": "gdGridAlign.gt-lg"
      },
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultGridAlignDirective, [{
    type: Directive,
    args: [{
      selector: selector$22,
      inputs: inputs$22
    }]
  }], null, null);
})();
function buildCss(align = "") {
  const css = {}, [rowAxis, columnAxis] = align.split(" ");
  switch (rowAxis) {
    case "end":
      css["justify-self"] = "end";
      break;
    case "center":
      css["justify-self"] = "center";
      break;
    case "stretch":
      css["justify-self"] = "stretch";
      break;
    case "start":
      css["justify-self"] = "start";
      break;
    default:
      css["justify-self"] = ROW_DEFAULT;
      break;
  }
  switch (columnAxis) {
    case "end":
      css["align-self"] = "end";
      break;
    case "center":
      css["align-self"] = "center";
      break;
    case "stretch":
      css["align-self"] = "stretch";
      break;
    case "start":
      css["align-self"] = "start";
      break;
    default:
      css["align-self"] = COL_DEFAULT;
      break;
  }
  return css;
}
var DEFAULT_VALUE$1 = "auto";
var GridRowStyleBuilder = class _GridRowStyleBuilder extends StyleBuilder {
  buildStyles(input) {
    return {
      "grid-row": input || DEFAULT_VALUE$1
    };
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵGridRowStyleBuilder_BaseFactory;
      return function GridRowStyleBuilder_Factory(__ngFactoryType__) {
        return (ɵGridRowStyleBuilder_BaseFactory || (ɵGridRowStyleBuilder_BaseFactory = ɵɵgetInheritedFactory(_GridRowStyleBuilder)))(__ngFactoryType__ || _GridRowStyleBuilder);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _GridRowStyleBuilder,
      factory: _GridRowStyleBuilder.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridRowStyleBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var GridRowDirective = class _GridRowDirective extends BaseDirective2 {
  constructor(elementRef, styleBuilder, styler, marshal) {
    super(elementRef, styleBuilder, styler, marshal);
    this.DIRECTIVE_KEY = "grid-row";
    this.styleCache = rowCache;
    this.init();
  }
  static {
    this.ɵfac = function GridRowDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GridRowDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(GridRowStyleBuilder), ɵɵdirectiveInject(StyleUtils), ɵɵdirectiveInject(MediaMarshaller));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _GridRowDirective,
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridRowDirective, [{
    type: Directive
  }], () => [{
    type: ElementRef
  }, {
    type: GridRowStyleBuilder
  }, {
    type: StyleUtils
  }, {
    type: MediaMarshaller
  }], null);
})();
var rowCache = /* @__PURE__ */ new Map();
var inputs$12 = ["gdRow", "gdRow.xs", "gdRow.sm", "gdRow.md", "gdRow.lg", "gdRow.xl", "gdRow.lt-sm", "gdRow.lt-md", "gdRow.lt-lg", "gdRow.lt-xl", "gdRow.gt-xs", "gdRow.gt-sm", "gdRow.gt-md", "gdRow.gt-lg"];
var selector$12 = `
  [gdRow],
  [gdRow.xs], [gdRow.sm], [gdRow.md], [gdRow.lg], [gdRow.xl],
  [gdRow.lt-sm], [gdRow.lt-md], [gdRow.lt-lg], [gdRow.lt-xl],
  [gdRow.gt-xs], [gdRow.gt-sm], [gdRow.gt-md], [gdRow.gt-lg]
`;
var DefaultGridRowDirective = class _DefaultGridRowDirective extends GridRowDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$12;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵDefaultGridRowDirective_BaseFactory;
      return function DefaultGridRowDirective_Factory(__ngFactoryType__) {
        return (ɵDefaultGridRowDirective_BaseFactory || (ɵDefaultGridRowDirective_BaseFactory = ɵɵgetInheritedFactory(_DefaultGridRowDirective)))(__ngFactoryType__ || _DefaultGridRowDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _DefaultGridRowDirective,
      selectors: [["", "gdRow", ""], ["", "gdRow.xs", ""], ["", "gdRow.sm", ""], ["", "gdRow.md", ""], ["", "gdRow.lg", ""], ["", "gdRow.xl", ""], ["", "gdRow.lt-sm", ""], ["", "gdRow.lt-md", ""], ["", "gdRow.lt-lg", ""], ["", "gdRow.lt-xl", ""], ["", "gdRow.gt-xs", ""], ["", "gdRow.gt-sm", ""], ["", "gdRow.gt-md", ""], ["", "gdRow.gt-lg", ""]],
      inputs: {
        gdRow: "gdRow",
        "gdRow.xs": "gdRow.xs",
        "gdRow.sm": "gdRow.sm",
        "gdRow.md": "gdRow.md",
        "gdRow.lg": "gdRow.lg",
        "gdRow.xl": "gdRow.xl",
        "gdRow.lt-sm": "gdRow.lt-sm",
        "gdRow.lt-md": "gdRow.lt-md",
        "gdRow.lt-lg": "gdRow.lt-lg",
        "gdRow.lt-xl": "gdRow.lt-xl",
        "gdRow.gt-xs": "gdRow.gt-xs",
        "gdRow.gt-sm": "gdRow.gt-sm",
        "gdRow.gt-md": "gdRow.gt-md",
        "gdRow.gt-lg": "gdRow.gt-lg"
      },
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultGridRowDirective, [{
    type: Directive,
    args: [{
      selector: selector$12,
      inputs: inputs$12
    }]
  }], null, null);
})();
var DEFAULT_VALUE = "none";
var AUTO_SPECIFIER = "!";
var GridRowsStyleBuilder = class _GridRowsStyleBuilder extends StyleBuilder {
  buildStyles(input, parent) {
    input = input || DEFAULT_VALUE;
    let auto = false;
    if (input.endsWith(AUTO_SPECIFIER)) {
      input = input.substring(0, input.indexOf(AUTO_SPECIFIER));
      auto = true;
    }
    const css = {
      display: parent.inline ? "inline-grid" : "grid",
      "grid-auto-rows": "",
      "grid-template-rows": ""
    };
    const key = auto ? "grid-auto-rows" : "grid-template-rows";
    css[key] = input;
    return css;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵGridRowsStyleBuilder_BaseFactory;
      return function GridRowsStyleBuilder_Factory(__ngFactoryType__) {
        return (ɵGridRowsStyleBuilder_BaseFactory || (ɵGridRowsStyleBuilder_BaseFactory = ɵɵgetInheritedFactory(_GridRowsStyleBuilder)))(__ngFactoryType__ || _GridRowsStyleBuilder);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _GridRowsStyleBuilder,
      factory: _GridRowsStyleBuilder.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridRowsStyleBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var GridRowsDirective = class _GridRowsDirective extends BaseDirective2 {
  get inline() {
    return this._inline;
  }
  set inline(val) {
    this._inline = coerceBooleanProperty(val);
  }
  constructor(elementRef, styleBuilder, styler, marshal) {
    super(elementRef, styleBuilder, styler, marshal);
    this.DIRECTIVE_KEY = "grid-rows";
    this._inline = false;
    this.init();
  }
  // *********************************************
  // Protected methods
  // *********************************************
  updateWithValue(value) {
    this.styleCache = this.inline ? rowsInlineCache : rowsCache;
    this.addStyles(value, {
      inline: this.inline
    });
  }
  static {
    this.ɵfac = function GridRowsDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GridRowsDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(GridRowsStyleBuilder), ɵɵdirectiveInject(StyleUtils), ɵɵdirectiveInject(MediaMarshaller));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _GridRowsDirective,
      inputs: {
        inline: [0, "gdInline", "inline"]
      },
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridRowsDirective, [{
    type: Directive
  }], () => [{
    type: ElementRef
  }, {
    type: GridRowsStyleBuilder
  }, {
    type: StyleUtils
  }, {
    type: MediaMarshaller
  }], {
    inline: [{
      type: Input,
      args: ["gdInline"]
    }]
  });
})();
var rowsCache = /* @__PURE__ */ new Map();
var rowsInlineCache = /* @__PURE__ */ new Map();
var inputs2 = ["gdRows", "gdRows.xs", "gdRows.sm", "gdRows.md", "gdRows.lg", "gdRows.xl", "gdRows.lt-sm", "gdRows.lt-md", "gdRows.lt-lg", "gdRows.lt-xl", "gdRows.gt-xs", "gdRows.gt-sm", "gdRows.gt-md", "gdRows.gt-lg"];
var selector2 = `
  [gdRows],
  [gdRows.xs], [gdRows.sm], [gdRows.md], [gdRows.lg], [gdRows.xl],
  [gdRows.lt-sm], [gdRows.lt-md], [gdRows.lt-lg], [gdRows.lt-xl],
  [gdRows.gt-xs], [gdRows.gt-sm], [gdRows.gt-md], [gdRows.gt-lg]
`;
var DefaultGridRowsDirective = class _DefaultGridRowsDirective extends GridRowsDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs2;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵDefaultGridRowsDirective_BaseFactory;
      return function DefaultGridRowsDirective_Factory(__ngFactoryType__) {
        return (ɵDefaultGridRowsDirective_BaseFactory || (ɵDefaultGridRowsDirective_BaseFactory = ɵɵgetInheritedFactory(_DefaultGridRowsDirective)))(__ngFactoryType__ || _DefaultGridRowsDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _DefaultGridRowsDirective,
      selectors: [["", "gdRows", ""], ["", "gdRows.xs", ""], ["", "gdRows.sm", ""], ["", "gdRows.md", ""], ["", "gdRows.lg", ""], ["", "gdRows.xl", ""], ["", "gdRows.lt-sm", ""], ["", "gdRows.lt-md", ""], ["", "gdRows.lt-lg", ""], ["", "gdRows.lt-xl", ""], ["", "gdRows.gt-xs", ""], ["", "gdRows.gt-sm", ""], ["", "gdRows.gt-md", ""], ["", "gdRows.gt-lg", ""]],
      inputs: {
        gdRows: "gdRows",
        "gdRows.xs": "gdRows.xs",
        "gdRows.sm": "gdRows.sm",
        "gdRows.md": "gdRows.md",
        "gdRows.lg": "gdRows.lg",
        "gdRows.xl": "gdRows.xl",
        "gdRows.lt-sm": "gdRows.lt-sm",
        "gdRows.lt-md": "gdRows.lt-md",
        "gdRows.lt-lg": "gdRows.lt-lg",
        "gdRows.lt-xl": "gdRows.lt-xl",
        "gdRows.gt-xs": "gdRows.gt-xs",
        "gdRows.gt-sm": "gdRows.gt-sm",
        "gdRows.gt-md": "gdRows.gt-md",
        "gdRows.gt-lg": "gdRows.gt-lg"
      },
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultGridRowsDirective, [{
    type: Directive,
    args: [{
      selector: selector2,
      inputs: inputs2
    }]
  }], null, null);
})();
var ALL_DIRECTIVES2 = [DefaultGridAlignDirective, DefaultGridAlignColumnsDirective, DefaultGridAlignRowsDirective, DefaultGridAreaDirective, DefaultGridAreasDirective, DefaultGridAutoDirective, DefaultGridColumnDirective, DefaultGridColumnsDirective, DefaultGridGapDirective, DefaultGridRowDirective, DefaultGridRowsDirective];
var GridModule = class _GridModule {
  static {
    this.ɵfac = function GridModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GridModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _GridModule,
      declarations: [DefaultGridAlignDirective, DefaultGridAlignColumnsDirective, DefaultGridAlignRowsDirective, DefaultGridAreaDirective, DefaultGridAreasDirective, DefaultGridAutoDirective, DefaultGridColumnDirective, DefaultGridColumnsDirective, DefaultGridGapDirective, DefaultGridRowDirective, DefaultGridRowsDirective],
      imports: [CoreModule],
      exports: [DefaultGridAlignDirective, DefaultGridAlignColumnsDirective, DefaultGridAlignRowsDirective, DefaultGridAreaDirective, DefaultGridAreasDirective, DefaultGridAutoDirective, DefaultGridColumnDirective, DefaultGridColumnsDirective, DefaultGridGapDirective, DefaultGridRowDirective, DefaultGridRowsDirective]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CoreModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridModule, [{
    type: NgModule,
    args: [{
      imports: [CoreModule],
      declarations: [...ALL_DIRECTIVES2],
      exports: [...ALL_DIRECTIVES2]
    }]
  }], null, null);
})();

// node_modules/@ngbracket/ngx-layout/fesm2022/ngbracket-ngx-layout.mjs
var FlexLayoutModule = class _FlexLayoutModule {
  /**
   * Initialize the FlexLayoutModule with a set of config options,
   * which sets the corresponding tokens accordingly
   */
  static withConfig(configOptions, breakpoints = []) {
    return {
      ngModule: _FlexLayoutModule,
      providers: configOptions.serverLoaded ? [{
        provide: LAYOUT_CONFIG,
        useValue: __spreadValues(__spreadValues({}, DEFAULT_CONFIG), configOptions)
      }, {
        provide: BREAKPOINT,
        useValue: breakpoints,
        multi: true
      }, {
        provide: SERVER_TOKEN,
        useValue: true
      }] : [{
        provide: LAYOUT_CONFIG,
        useValue: __spreadValues(__spreadValues({}, DEFAULT_CONFIG), configOptions)
      }, {
        provide: BREAKPOINT,
        useValue: breakpoints,
        multi: true
      }]
    };
  }
  constructor(serverModuleLoaded, platformId) {
    if (isPlatformServer(platformId) && !serverModuleLoaded) {
      console.warn("Warning: Flex Layout loaded on the server without FlexLayoutServerModule");
    }
  }
  static {
    this.ɵfac = function FlexLayoutModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FlexLayoutModule)(ɵɵinject(SERVER_TOKEN), ɵɵinject(PLATFORM_ID));
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _FlexLayoutModule,
      imports: [FlexModule, ExtendedModule, GridModule],
      exports: [FlexModule, ExtendedModule, GridModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [FlexModule, ExtendedModule, GridModule, FlexModule, ExtendedModule, GridModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FlexLayoutModule, [{
    type: NgModule,
    args: [{
      imports: [FlexModule, ExtendedModule, GridModule],
      exports: [FlexModule, ExtendedModule, GridModule]
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [SERVER_TOKEN]
    }]
  }, {
    type: Object,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }], null);
})();
var VERSION = new Version("18.0.0");
export {
  BREAKPOINT,
  BREAKPOINTS,
  BREAKPOINT_PRINT,
  BROWSER_PROVIDER,
  BaseDirective2,
  BreakPointRegistry,
  CLASS_NAME,
  ClassDirective,
  CoreModule,
  DEFAULT_BREAKPOINTS,
  DEFAULT_CONFIG,
  DefaultClassDirective,
  DefaultFlexAlignDirective,
  DefaultFlexDirective,
  DefaultFlexOffsetDirective,
  DefaultFlexOrderDirective,
  DefaultGridAlignColumnsDirective,
  DefaultGridAlignDirective,
  DefaultGridAlignRowsDirective,
  DefaultGridAreaDirective,
  DefaultGridAreasDirective,
  DefaultGridAutoDirective,
  DefaultGridColumnDirective,
  DefaultGridColumnsDirective,
  DefaultGridGapDirective,
  DefaultGridRowDirective,
  DefaultGridRowsDirective,
  DefaultImgSrcDirective,
  DefaultLayoutAlignDirective,
  DefaultLayoutDirective,
  DefaultLayoutGapDirective,
  DefaultShowHideDirective,
  DefaultStyleDirective,
  ExtendedModule,
  FlexAlignDirective,
  FlexAlignStyleBuilder,
  FlexDirective,
  FlexFillDirective,
  FlexFillStyleBuilder,
  FlexLayoutModule,
  FlexModule,
  FlexOffsetDirective,
  FlexOffsetStyleBuilder,
  FlexOrderDirective,
  FlexOrderStyleBuilder,
  FlexStyleBuilder,
  GridAlignColumnsDirective,
  GridAlignColumnsStyleBuilder,
  GridAlignDirective,
  GridAlignRowsDirective,
  GridAlignRowsStyleBuilder,
  GridAlignStyleBuilder,
  GridAreaDirective,
  GridAreaStyleBuilder,
  GridAreasDirective,
  GridAreasStyleBuiler,
  GridAutoDirective,
  GridAutoStyleBuilder,
  GridColumnDirective,
  GridColumnStyleBuilder,
  GridColumnsDirective,
  GridColumnsStyleBuilder,
  GridGapDirective,
  GridGapStyleBuilder,
  GridModule,
  GridRowDirective,
  GridRowStyleBuilder,
  GridRowsDirective,
  GridRowsStyleBuilder,
  ImgSrcDirective,
  ImgSrcStyleBuilder,
  LAYOUT_CONFIG,
  LayoutAlignDirective,
  LayoutAlignStyleBuilder,
  LayoutDirective,
  LayoutGapDirective,
  LayoutGapStyleBuilder,
  LayoutStyleBuilder,
  MediaChange,
  MediaMarshaller,
  MediaObserver,
  MediaTrigger,
  ORIENTATION_BREAKPOINTS,
  PrintHook,
  SERVER_TOKEN,
  ScreenTypes,
  ShowHideDirective,
  ShowHideStyleBuilder,
  StyleBuilder,
  StyleDirective,
  StyleUtils,
  StylesheetMap,
  VERSION,
  coerceArray,
  mergeAlias,
  removeStyles,
  sortAscendingPriority,
  sortDescendingPriority,
  validateBasis,
  MatchMedia as ɵMatchMedia,
  MockMatchMedia as ɵMockMatchMedia,
  MockMatchMediaProvider as ɵMockMatchMediaProvider,
  multiply as ɵmultiply
};
/*! Bundled license information:

@ngbracket/ngx-layout/fesm2022/ngbracket-ngx-layout-extended.mjs:
  (**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   *)

@ngbracket/ngx-layout/fesm2022/ngbracket-ngx-layout-grid.mjs:
  (**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   *)

@ngbracket/ngx-layout/fesm2022/ngbracket-ngx-layout.mjs:
  (**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   *)
*/
//# sourceMappingURL=@ngbracket_ngx-layout.js.map
