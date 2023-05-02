var cydj = (function (exports) {
  'use strict';

  /*!
   * Font Awesome Free 6.0.0 by @fontawesome - https://fontawesome.com
   * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
   * Copyright 2022 Fonticons, Inc.
   */
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }

    return target;
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var noop = function noop() {};

  var _WINDOW = {};
  var _DOCUMENT = {};
  var _MUTATION_OBSERVER = null;
  var _PERFORMANCE = {
    mark: noop,
    measure: noop
  };

  try {
    if (typeof window !== 'undefined') _WINDOW = window;
    if (typeof document !== 'undefined') _DOCUMENT = document;
    if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER = MutationObserver;
    if (typeof performance !== 'undefined') _PERFORMANCE = performance;
  } catch (e) {}

  var _ref = _WINDOW.navigator || {},
      _ref$userAgent = _ref.userAgent,
      userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;
  var WINDOW = _WINDOW;
  var DOCUMENT = _DOCUMENT;
  var MUTATION_OBSERVER = _MUTATION_OBSERVER;
  var PERFORMANCE = _PERFORMANCE;
  !!WINDOW.document;
  var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
  var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

  var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
  var UNITS_IN_GRID = 16;
  var DEFAULT_FAMILY_PREFIX = 'fa';
  var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
  var DATA_FA_I2SVG = 'data-fa-i2svg';
  var DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
  var DATA_FA_PSEUDO_ELEMENT_PENDING = 'data-fa-pseudo-element-pending';
  var DATA_PREFIX = 'data-prefix';
  var DATA_ICON = 'data-icon';
  var HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';
  var MUTATION_APPROACH_ASYNC = 'async';
  var TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'];
  var PRODUCTION = function () {
    try {
      return process.env.NODE_ENV === 'production';
    } catch (e) {
      return false;
    }
  }();
  var PREFIX_TO_STYLE = {
    'fas': 'solid',
    'fa-solid': 'solid',
    'far': 'regular',
    'fa-regular': 'regular',
    'fal': 'light',
    'fa-light': 'light',
    'fat': 'thin',
    'fa-thin': 'thin',
    'fad': 'duotone',
    'fa-duotone': 'duotone',
    'fab': 'brands',
    'fa-brands': 'brands',
    'fak': 'kit',
    'fa-kit': 'kit',
    'fa': 'solid'
  };
  var STYLE_TO_PREFIX = {
    'solid': 'fas',
    'regular': 'far',
    'light': 'fal',
    'thin': 'fat',
    'duotone': 'fad',
    'brands': 'fab',
    'kit': 'fak'
  };
  var PREFIX_TO_LONG_STYLE = {
    'fab': 'fa-brands',
    'fad': 'fa-duotone',
    'fak': 'fa-kit',
    'fal': 'fa-light',
    'far': 'fa-regular',
    'fas': 'fa-solid',
    'fat': 'fa-thin'
  };
  var LONG_STYLE_TO_PREFIX = {
    'fa-brands': 'fab',
    'fa-duotone': 'fad',
    'fa-kit': 'fak',
    'fa-light': 'fal',
    'fa-regular': 'far',
    'fa-solid': 'fas',
    'fa-thin': 'fat'
  };
  var ICON_SELECTION_SYNTAX_PATTERN = /fa[srltdbk\-\ ]/; // eslint-disable-line no-useless-escape

  var LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
  var FONT_FAMILY_PATTERN = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i; // TODO: do we need to handle font-weight for kit SVG pseudo-elements?

  var FONT_WEIGHT_TO_PREFIX = {
    '900': 'fas',
    '400': 'far',
    'normal': 'far',
    '300': 'fal',
    '100': 'fat'
  };
  var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  var ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];
  var DUOTONE_CLASSES = {
    GROUP: 'duotone-group',
    SWAP_OPACITY: 'swap-opacity',
    PRIMARY: 'primary',
    SECONDARY: 'secondary'
  };
  var RESERVED_CLASSES = [].concat(_toConsumableArray(Object.keys(STYLE_TO_PREFIX)), ['2xs', 'xs', 'sm', 'lg', 'xl', '2xl', 'beat', 'border', 'fade', 'beat-fade', 'bounce', 'flip-both', 'flip-horizontal', 'flip-vertical', 'flip', 'fw', 'inverse', 'layers-counter', 'layers-text', 'layers', 'li', 'pull-left', 'pull-right', 'pulse', 'rotate-180', 'rotate-270', 'rotate-90', 'rotate-by', 'shake', 'spin-pulse', 'spin-reverse', 'spin', 'stack-1x', 'stack-2x', 'stack', 'ul', DUOTONE_CLASSES.GROUP, DUOTONE_CLASSES.SWAP_OPACITY, DUOTONE_CLASSES.PRIMARY, DUOTONE_CLASSES.SECONDARY]).concat(oneToTen.map(function (n) {
    return "".concat(n, "x");
  })).concat(oneToTwenty.map(function (n) {
    return "w-".concat(n);
  }));

  var initial = WINDOW.FontAwesomeConfig || {};

  function getAttrConfig(attr) {
    var element = DOCUMENT.querySelector('script[' + attr + ']');

    if (element) {
      return element.getAttribute(attr);
    }
  }

  function coerce(val) {
    // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
    // We'll assume that this is an indication that it should be toggled to true
    // For example <script data-search-pseudo-elements src="..."></script>
    if (val === '') return true;
    if (val === 'false') return false;
    if (val === 'true') return true;
    return val;
  }

  if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
    var attrs = [['data-family-prefix', 'familyPrefix'], ['data-style-default', 'styleDefault'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-mutate-approach', 'mutateApproach'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];
    attrs.forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          attr = _ref2[0],
          key = _ref2[1];

      var val = coerce(getAttrConfig(attr));

      if (val !== undefined && val !== null) {
        initial[key] = val;
      }
    });
  }

  var _default = {
    familyPrefix: DEFAULT_FAMILY_PREFIX,
    styleDefault: 'solid',
    replacementClass: DEFAULT_REPLACEMENT_CLASS,
    autoReplaceSvg: true,
    autoAddCss: true,
    autoA11y: true,
    searchPseudoElements: false,
    observeMutations: true,
    mutateApproach: 'async',
    keepOriginalSource: true,
    measurePerformance: false,
    showMissingIcons: true
  };

  var _config = _objectSpread2(_objectSpread2({}, _default), initial);

  if (!_config.autoReplaceSvg) _config.observeMutations = false;
  var config = {};
  Object.keys(_config).forEach(function (key) {
    Object.defineProperty(config, key, {
      enumerable: true,
      set: function set(val) {
        _config[key] = val;

        _onChangeCb.forEach(function (cb) {
          return cb(config);
        });
      },
      get: function get() {
        return _config[key];
      }
    });
  });
  WINDOW.FontAwesomeConfig = config;
  var _onChangeCb = [];
  function onChange(cb) {
    _onChangeCb.push(cb);

    return function () {
      _onChangeCb.splice(_onChangeCb.indexOf(cb), 1);
    };
  }

  var d = UNITS_IN_GRID;
  var meaninglessTransform = {
    size: 16,
    x: 0,
    y: 0,
    rotate: 0,
    flipX: false,
    flipY: false
  };
  function insertCss(css) {
    if (!css || !IS_DOM) {
      return;
    }

    var style = DOCUMENT.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    var headChildren = DOCUMENT.head.childNodes;
    var beforeChild = null;

    for (var i = headChildren.length - 1; i > -1; i--) {
      var child = headChildren[i];
      var tagName = (child.tagName || '').toUpperCase();

      if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
        beforeChild = child;
      }
    }

    DOCUMENT.head.insertBefore(style, beforeChild);
    return css;
  }
  var idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  function nextUniqueId() {
    var size = 12;
    var id = '';

    while (size-- > 0) {
      id += idPool[Math.random() * 62 | 0];
    }

    return id;
  }
  function toArray(obj) {
    var array = [];

    for (var i = (obj || []).length >>> 0; i--;) {
      array[i] = obj[i];
    }

    return array;
  }
  function classArray(node) {
    if (node.classList) {
      return toArray(node.classList);
    } else {
      return (node.getAttribute('class') || '').split(' ').filter(function (i) {
        return i;
      });
    }
  }
  function htmlEscape(str) {
    return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function joinAttributes(attributes) {
    return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
      return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
    }, '').trim();
  }
  function joinStyles(styles) {
    return Object.keys(styles || {}).reduce(function (acc, styleName) {
      return acc + "".concat(styleName, ": ").concat(styles[styleName].trim(), ";");
    }, '');
  }
  function transformIsMeaningful(transform) {
    return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
  }
  function transformForSvg(_ref) {
    var transform = _ref.transform,
        containerWidth = _ref.containerWidth,
        iconWidth = _ref.iconWidth;
    var outer = {
      transform: "translate(".concat(containerWidth / 2, " 256)")
    };
    var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
    var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
    var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
    var inner = {
      transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
    };
    var path = {
      transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
    };
    return {
      outer: outer,
      inner: inner,
      path: path
    };
  }
  function transformForCss(_ref2) {
    var transform = _ref2.transform,
        _ref2$width = _ref2.width,
        width = _ref2$width === void 0 ? UNITS_IN_GRID : _ref2$width,
        _ref2$height = _ref2.height,
        height = _ref2$height === void 0 ? UNITS_IN_GRID : _ref2$height,
        _ref2$startCentered = _ref2.startCentered,
        startCentered = _ref2$startCentered === void 0 ? false : _ref2$startCentered;
    var val = '';

    if (startCentered && IS_IE) {
      val += "translate(".concat(transform.x / d - width / 2, "em, ").concat(transform.y / d - height / 2, "em) ");
    } else if (startCentered) {
      val += "translate(calc(-50% + ".concat(transform.x / d, "em), calc(-50% + ").concat(transform.y / d, "em)) ");
    } else {
      val += "translate(".concat(transform.x / d, "em, ").concat(transform.y / d, "em) ");
    }

    val += "scale(".concat(transform.size / d * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d * (transform.flipY ? -1 : 1), ") ");
    val += "rotate(".concat(transform.rotate, "deg) ");
    return val;
  }

  var baseStyles = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 \"Font Awesome 6 Solid\";\n  --fa-font-regular: normal 400 1em/1 \"Font Awesome 6 Regular\";\n  --fa-font-light: normal 300 1em/1 \"Font Awesome 6 Light\";\n  --fa-font-thin: normal 100 1em/1 \"Font Awesome 6 Thin\";\n  --fa-font-duotone: normal 900 1em/1 \"Font Awesome 6 Duotone\";\n  --fa-font-brands: normal 400 1em/1 \"Font Awesome 6 Brands\";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-counter-scale, 0.25));\n          transform: scale(var(--fa-counter-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(var(--fa-li-width, 2em) * -1);\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  -webkit-animation-name: fa-beat;\n          animation-name: fa-beat;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  -webkit-animation-name: fa-bounce;\n          animation-name: fa-bounce;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  -webkit-animation-name: fa-fade;\n          animation-name: fa-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  -webkit-animation-name: fa-beat-fade;\n          animation-name: fa-beat-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  -webkit-animation-name: fa-flip;\n          animation-name: fa-flip;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  -webkit-animation-name: fa-shake;\n          animation-name: fa-shake;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\n          animation-duration: var(--fa-animation-duration, 2s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\n          animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    -webkit-animation-delay: -1ms;\n            animation-delay: -1ms;\n    -webkit-animation-duration: 1ms;\n            animation-duration: 1ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    transition-delay: 0s;\n    transition-duration: 0s;\n  }\n}\n@-webkit-keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@-webkit-keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@-webkit-keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@-webkit-keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@-webkit-keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@-webkit-keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  -webkit-transform: rotate(var(--fa-rotate-angle, none));\n          transform: rotate(var(--fa-rotate-angle, none));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}";

  function css() {
    var dfp = DEFAULT_FAMILY_PREFIX;
    var drc = DEFAULT_REPLACEMENT_CLASS;
    var fp = config.familyPrefix;
    var rc = config.replacementClass;
    var s = baseStyles;

    if (fp !== dfp || rc !== drc) {
      var dPatt = new RegExp("\\.".concat(dfp, "\\-"), 'g');
      var customPropPatt = new RegExp("\\--".concat(dfp, "\\-"), 'g');
      var rPatt = new RegExp("\\.".concat(drc), 'g');
      s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
    }

    return s;
  }

  var _cssInserted = false;

  function ensureCss() {
    if (config.autoAddCss && !_cssInserted) {
      insertCss(css());
      _cssInserted = true;
    }
  }

  var InjectCSS = {
    mixout: function mixout() {
      return {
        dom: {
          css: css,
          insertCss: ensureCss
        }
      };
    },
    hooks: function hooks() {
      return {
        beforeDOMElementCreation: function beforeDOMElementCreation() {
          ensureCss();
        },
        beforeI2svg: function beforeI2svg() {
          ensureCss();
        }
      };
    }
  };

  var w = WINDOW || {};
  if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
  if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
  if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
  if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
  var namespace = w[NAMESPACE_IDENTIFIER];

  var functions = [];

  var listener = function listener() {
    DOCUMENT.removeEventListener('DOMContentLoaded', listener);
    loaded = 1;
    functions.map(function (fn) {
      return fn();
    });
  };

  var loaded = false;

  if (IS_DOM) {
    loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
    if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
  }

  function domready (fn) {
    if (!IS_DOM) return;
    loaded ? setTimeout(fn, 0) : functions.push(fn);
  }

  function toHtml(abstractNodes) {
    var tag = abstractNodes.tag,
        _abstractNodes$attrib = abstractNodes.attributes,
        attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib,
        _abstractNodes$childr = abstractNodes.children,
        children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;

    if (typeof abstractNodes === 'string') {
      return htmlEscape(abstractNodes);
    } else {
      return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(''), "</").concat(tag, ">");
    }
  }

  function iconFromMapping(mapping, prefix, iconName) {
    if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
      return {
        prefix: prefix,
        iconName: iconName,
        icon: mapping[prefix][iconName]
      };
    }
  }

  /**
   * Internal helper to bind a function known to have 4 arguments
   * to a given context.
   */

  var bindInternal4 = function bindInternal4(func, thisContext) {
    return function (a, b, c, d) {
      return func.call(thisContext, a, b, c, d);
    };
  };

  /**
   * # Reduce
   *
   * A fast object `.reduce()` implementation.
   *
   * @param  {Object}   subject      The object to reduce over.
   * @param  {Function} fn           The reducer function.
   * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
   * @param  {Object}   thisContext  The context for the reducer.
   * @return {mixed}                 The final result.
   */


  var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
    var keys = Object.keys(subject),
        length = keys.length,
        iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
        i,
        key,
        result;

    if (initialValue === undefined) {
      i = 1;
      result = subject[keys[0]];
    } else {
      i = 0;
      result = initialValue;
    }

    for (; i < length; i++) {
      key = keys[i];
      result = iterator(result, subject[key], key, subject);
    }

    return result;
  };

  /**
   * ucs2decode() and codePointAt() are both works of Mathias Bynens and licensed under MIT
   *
   * Copyright Mathias Bynens <https://mathiasbynens.be/>

   * Permission is hereby granted, free of charge, to any person obtaining
   * a copy of this software and associated documentation files (the
   * "Software"), to deal in the Software without restriction, including
   * without limitation the rights to use, copy, modify, merge, publish,
   * distribute, sublicense, and/or sell copies of the Software, and to
   * permit persons to whom the Software is furnished to do so, subject to
   * the following conditions:

   * The above copyright notice and this permission notice shall be
   * included in all copies or substantial portions of the Software.

   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
   * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
   * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
   * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
   * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
   * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
   * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   */
  function ucs2decode(string) {
    var output = [];
    var counter = 0;
    var length = string.length;

    while (counter < length) {
      var value = string.charCodeAt(counter++);

      if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
        var extra = string.charCodeAt(counter++);

        if ((extra & 0xFC00) == 0xDC00) {
          // eslint-disable-line eqeqeq
          output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
        } else {
          output.push(value);
          counter--;
        }
      } else {
        output.push(value);
      }
    }

    return output;
  }

  function toHex(unicode) {
    var decoded = ucs2decode(unicode);
    return decoded.length === 1 ? decoded[0].toString(16) : null;
  }
  function codePointAt(string, index) {
    var size = string.length;
    var first = string.charCodeAt(index);
    var second;

    if (first >= 0xD800 && first <= 0xDBFF && size > index + 1) {
      second = string.charCodeAt(index + 1);

      if (second >= 0xDC00 && second <= 0xDFFF) {
        return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
      }
    }

    return first;
  }

  function normalizeIcons(icons) {
    return Object.keys(icons).reduce(function (acc, iconName) {
      var icon = icons[iconName];
      var expanded = !!icon.icon;

      if (expanded) {
        acc[icon.iconName] = icon.icon;
      } else {
        acc[iconName] = icon;
      }

      return acc;
    }, {});
  }

  function defineIcons(prefix, icons) {
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _params$skipHooks = params.skipHooks,
        skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
    var normalized = normalizeIcons(icons);

    if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
      namespace.hooks.addPack(prefix, normalizeIcons(icons));
    } else {
      namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), normalized);
    }
    /**
     * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
     * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
     * for `fas` so we'll ease the upgrade process for our users by automatically defining
     * this as well.
     */


    if (prefix === 'fas') {
      defineIcons('fa', icons);
    }
  }

  var styles = namespace.styles,
      shims = namespace.shims;
  var LONG_STYLE = Object.values(PREFIX_TO_LONG_STYLE);
  var _defaultUsablePrefix = null;
  var _byUnicode = {};
  var _byLigature = {};
  var _byOldName = {};
  var _byOldUnicode = {};
  var _byAlias = {};
  var PREFIXES = Object.keys(PREFIX_TO_STYLE);

  function isReserved(name) {
    return ~RESERVED_CLASSES.indexOf(name);
  }

  function getIconName(familyPrefix, cls) {
    var parts = cls.split('-');
    var prefix = parts[0];
    var iconName = parts.slice(1).join('-');

    if (prefix === familyPrefix && iconName !== '' && !isReserved(iconName)) {
      return iconName;
    } else {
      return null;
    }
  }
  var build = function build() {
    var lookup = function lookup(reducer) {
      return reduce(styles, function (o, style, prefix) {
        o[prefix] = reduce(style, reducer, {});
        return o;
      }, {});
    };

    _byUnicode = lookup(function (acc, icon, iconName) {
      if (icon[3]) {
        acc[icon[3]] = iconName;
      }

      if (icon[2]) {
        var aliases = icon[2].filter(function (a) {
          return typeof a === 'number';
        });
        aliases.forEach(function (alias) {
          acc[alias.toString(16)] = iconName;
        });
      }

      return acc;
    });
    _byLigature = lookup(function (acc, icon, iconName) {
      acc[iconName] = iconName;

      if (icon[2]) {
        var aliases = icon[2].filter(function (a) {
          return typeof a === 'string';
        });
        aliases.forEach(function (alias) {
          acc[alias] = iconName;
        });
      }

      return acc;
    });
    _byAlias = lookup(function (acc, icon, iconName) {
      var aliases = icon[2];
      acc[iconName] = iconName;
      aliases.forEach(function (alias) {
        acc[alias] = iconName;
      });
      return acc;
    }); // If we have a Kit, we can't determine if regular is available since we
    // could be auto-fetching it. We'll have to assume that it is available.

    var hasRegular = 'far' in styles || config.autoFetchSvg;
    var shimLookups = reduce(shims, function (acc, shim) {
      var maybeNameMaybeUnicode = shim[0];
      var prefix = shim[1];
      var iconName = shim[2];

      if (prefix === 'far' && !hasRegular) {
        prefix = 'fas';
      }

      if (typeof maybeNameMaybeUnicode === 'string') {
        acc.names[maybeNameMaybeUnicode] = {
          prefix: prefix,
          iconName: iconName
        };
      }

      if (typeof maybeNameMaybeUnicode === 'number') {
        acc.unicodes[maybeNameMaybeUnicode.toString(16)] = {
          prefix: prefix,
          iconName: iconName
        };
      }

      return acc;
    }, {
      names: {},
      unicodes: {}
    });
    _byOldName = shimLookups.names;
    _byOldUnicode = shimLookups.unicodes;
    _defaultUsablePrefix = getCanonicalPrefix(config.styleDefault);
  };
  onChange(function (c) {
    _defaultUsablePrefix = getCanonicalPrefix(c.styleDefault);
  });
  build();
  function byUnicode(prefix, unicode) {
    return (_byUnicode[prefix] || {})[unicode];
  }
  function byLigature(prefix, ligature) {
    return (_byLigature[prefix] || {})[ligature];
  }
  function byAlias(prefix, alias) {
    return (_byAlias[prefix] || {})[alias];
  }
  function byOldName(name) {
    return _byOldName[name] || {
      prefix: null,
      iconName: null
    };
  }
  function byOldUnicode(unicode) {
    var oldUnicode = _byOldUnicode[unicode];
    var newUnicode = byUnicode('fas', unicode);
    return oldUnicode || (newUnicode ? {
      prefix: 'fas',
      iconName: newUnicode
    } : null) || {
      prefix: null,
      iconName: null
    };
  }
  function getDefaultUsablePrefix() {
    return _defaultUsablePrefix;
  }
  var emptyCanonicalIcon = function emptyCanonicalIcon() {
    return {
      prefix: null,
      iconName: null,
      rest: []
    };
  };
  function getCanonicalPrefix(styleOrPrefix) {
    var style = PREFIX_TO_STYLE[styleOrPrefix];
    var prefix = STYLE_TO_PREFIX[styleOrPrefix] || STYLE_TO_PREFIX[style];
    var defined = styleOrPrefix in namespace.styles ? styleOrPrefix : null;
    return prefix || defined || null;
  }
  function getCanonicalIcon(values) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _params$skipLookups = params.skipLookups,
        skipLookups = _params$skipLookups === void 0 ? false : _params$skipLookups;
    var givenPrefix = null;
    var canonical = values.reduce(function (acc, cls) {
      var iconName = getIconName(config.familyPrefix, cls);

      if (styles[cls]) {
        cls = LONG_STYLE.includes(cls) ? LONG_STYLE_TO_PREFIX[cls] : cls;
        givenPrefix = cls;
        acc.prefix = cls;
      } else if (PREFIXES.indexOf(cls) > -1) {
        givenPrefix = cls;
        acc.prefix = getCanonicalPrefix(cls);
      } else if (iconName) {
        acc.iconName = iconName;
      } else if (cls !== config.replacementClass) {
        acc.rest.push(cls);
      }

      if (!skipLookups && acc.prefix && acc.iconName) {
        var shim = givenPrefix === 'fa' ? byOldName(acc.iconName) : {};
        var aliasIconName = byAlias(acc.prefix, acc.iconName);

        if (shim.prefix) {
          givenPrefix = null;
        }

        acc.iconName = shim.iconName || aliasIconName || acc.iconName;
        acc.prefix = shim.prefix || acc.prefix;

        if (acc.prefix === 'far' && !styles['far'] && styles['fas'] && !config.autoFetchSvg) {
          // Allow a fallback from the regular style to solid if regular is not available
          // but only if we aren't auto-fetching SVGs
          acc.prefix = 'fas';
        }
      }

      return acc;
    }, emptyCanonicalIcon());

    if (canonical.prefix === 'fa' || givenPrefix === 'fa') {
      // The fa prefix is not canonical. So if it has made it through until this point
      // we will shift it to the correct prefix.
      canonical.prefix = getDefaultUsablePrefix() || 'fas';
    }

    return canonical;
  }

  var Library = /*#__PURE__*/function () {
    function Library() {
      _classCallCheck(this, Library);

      this.definitions = {};
    }

    _createClass(Library, [{
      key: "add",
      value: function add() {
        var _this = this;

        for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
          definitions[_key] = arguments[_key];
        }

        var additions = definitions.reduce(this._pullDefinitions, {});
        Object.keys(additions).forEach(function (key) {
          _this.definitions[key] = _objectSpread2(_objectSpread2({}, _this.definitions[key] || {}), additions[key]);
          defineIcons(key, additions[key]);
          var longPrefix = PREFIX_TO_LONG_STYLE[key];
          if (longPrefix) defineIcons(longPrefix, additions[key]);
          build();
        });
      }
    }, {
      key: "reset",
      value: function reset() {
        this.definitions = {};
      }
    }, {
      key: "_pullDefinitions",
      value: function _pullDefinitions(additions, definition) {
        var normalized = definition.prefix && definition.iconName && definition.icon ? {
          0: definition
        } : definition;
        Object.keys(normalized).map(function (key) {
          var _normalized$key = normalized[key],
              prefix = _normalized$key.prefix,
              iconName = _normalized$key.iconName,
              icon = _normalized$key.icon;
          var aliases = icon[2];
          if (!additions[prefix]) additions[prefix] = {};

          if (aliases.length > 0) {
            aliases.forEach(function (alias) {
              if (typeof alias === 'string') {
                additions[prefix][alias] = icon;
              }
            });
          }

          additions[prefix][iconName] = icon;
        });
        return additions;
      }
    }]);

    return Library;
  }();

  var _plugins = [];
  var _hooks = {};
  var providers = {};
  var defaultProviderKeys = Object.keys(providers);
  function registerPlugins(nextPlugins, _ref) {
    var obj = _ref.mixoutsTo;
    _plugins = nextPlugins;
    _hooks = {};
    Object.keys(providers).forEach(function (k) {
      if (defaultProviderKeys.indexOf(k) === -1) {
        delete providers[k];
      }
    });

    _plugins.forEach(function (plugin) {
      var mixout = plugin.mixout ? plugin.mixout() : {};
      Object.keys(mixout).forEach(function (tk) {
        if (typeof mixout[tk] === 'function') {
          obj[tk] = mixout[tk];
        }

        if (_typeof(mixout[tk]) === 'object') {
          Object.keys(mixout[tk]).forEach(function (sk) {
            if (!obj[tk]) {
              obj[tk] = {};
            }

            obj[tk][sk] = mixout[tk][sk];
          });
        }
      });

      if (plugin.hooks) {
        var hooks = plugin.hooks();
        Object.keys(hooks).forEach(function (hook) {
          if (!_hooks[hook]) {
            _hooks[hook] = [];
          }

          _hooks[hook].push(hooks[hook]);
        });
      }

      if (plugin.provides) {
        plugin.provides(providers);
      }
    });

    return obj;
  }
  function chainHooks(hook, accumulator) {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    var hookFns = _hooks[hook] || [];
    hookFns.forEach(function (hookFn) {
      accumulator = hookFn.apply(null, [accumulator].concat(args)); // eslint-disable-line no-useless-call
    });
    return accumulator;
  }
  function callHooks(hook) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    var hookFns = _hooks[hook] || [];
    hookFns.forEach(function (hookFn) {
      hookFn.apply(null, args);
    });
    return undefined;
  }
  function callProvided() {
    var hook = arguments[0];
    var args = Array.prototype.slice.call(arguments, 1);
    return providers[hook] ? providers[hook].apply(null, args) : undefined;
  }

  function findIconDefinition(iconLookup) {
    if (iconLookup.prefix === 'fa') {
      iconLookup.prefix = 'fas';
    }

    var iconName = iconLookup.iconName;
    var prefix = iconLookup.prefix || getDefaultUsablePrefix();
    if (!iconName) return;
    iconName = byAlias(prefix, iconName) || iconName;
    return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
  }
  var library = new Library();
  var noAuto = function noAuto() {
    config.autoReplaceSvg = false;
    config.observeMutations = false;
    callHooks('noAuto');
  };
  var dom = {
    i2svg: function i2svg() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (IS_DOM) {
        callHooks('beforeI2svg', params);
        callProvided('pseudoElements2svg', params);
        return callProvided('i2svg', params);
      } else {
        return Promise.reject('Operation requires a DOM of some kind.');
      }
    },
    watch: function watch() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var autoReplaceSvgRoot = params.autoReplaceSvgRoot;

      if (config.autoReplaceSvg === false) {
        config.autoReplaceSvg = true;
      }

      config.observeMutations = true;
      domready(function () {
        autoReplace({
          autoReplaceSvgRoot: autoReplaceSvgRoot
        });
        callHooks('watch', params);
      });
    }
  };
  var parse = {
    icon: function icon(_icon) {
      if (_icon === null) {
        return null;
      }

      if (_typeof(_icon) === 'object' && _icon.prefix && _icon.iconName) {
        return {
          prefix: _icon.prefix,
          iconName: byAlias(_icon.prefix, _icon.iconName) || _icon.iconName
        };
      }

      if (Array.isArray(_icon) && _icon.length === 2) {
        var iconName = _icon[1].indexOf('fa-') === 0 ? _icon[1].slice(3) : _icon[1];
        var prefix = getCanonicalPrefix(_icon[0]);
        return {
          prefix: prefix,
          iconName: byAlias(prefix, iconName) || iconName
        };
      }

      if (typeof _icon === 'string' && (_icon.indexOf("".concat(config.familyPrefix, "-")) > -1 || _icon.match(ICON_SELECTION_SYNTAX_PATTERN))) {
        var canonicalIcon = getCanonicalIcon(_icon.split(' '), {
          skipLookups: true
        });
        return {
          prefix: canonicalIcon.prefix || getDefaultUsablePrefix(),
          iconName: byAlias(canonicalIcon.prefix, canonicalIcon.iconName) || canonicalIcon.iconName
        };
      }

      if (typeof _icon === 'string') {
        var _prefix = getDefaultUsablePrefix();

        return {
          prefix: _prefix,
          iconName: byAlias(_prefix, _icon) || _icon
        };
      }
    }
  };
  var api = {
    noAuto: noAuto,
    config: config,
    dom: dom,
    parse: parse,
    library: library,
    findIconDefinition: findIconDefinition,
    toHtml: toHtml
  };

  var autoReplace = function autoReplace() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _params$autoReplaceSv = params.autoReplaceSvgRoot,
        autoReplaceSvgRoot = _params$autoReplaceSv === void 0 ? DOCUMENT : _params$autoReplaceSv;
    if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg) api.dom.i2svg({
      node: autoReplaceSvgRoot
    });
  };

  function domVariants(val, abstractCreator) {
    Object.defineProperty(val, 'abstract', {
      get: abstractCreator
    });
    Object.defineProperty(val, 'html', {
      get: function get() {
        return val.abstract.map(function (a) {
          return toHtml(a);
        });
      }
    });
    Object.defineProperty(val, 'node', {
      get: function get() {
        if (!IS_DOM) return;
        var container = DOCUMENT.createElement('div');
        container.innerHTML = val.html;
        return container.children;
      }
    });
    return val;
  }

  function asIcon (_ref) {
    var children = _ref.children,
        main = _ref.main,
        mask = _ref.mask,
        attributes = _ref.attributes,
        styles = _ref.styles,
        transform = _ref.transform;

    if (transformIsMeaningful(transform) && main.found && !mask.found) {
      var width = main.width,
          height = main.height;
      var offset = {
        x: width / height / 2,
        y: 0.5
      };
      attributes['style'] = joinStyles(_objectSpread2(_objectSpread2({}, styles), {}, {
        'transform-origin': "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
      }));
    }

    return [{
      tag: 'svg',
      attributes: attributes,
      children: children
    }];
  }

  function asSymbol (_ref) {
    var prefix = _ref.prefix,
        iconName = _ref.iconName,
        children = _ref.children,
        attributes = _ref.attributes,
        symbol = _ref.symbol;
    var id = symbol === true ? "".concat(prefix, "-").concat(config.familyPrefix, "-").concat(iconName) : symbol;
    return [{
      tag: 'svg',
      attributes: {
        style: 'display: none;'
      },
      children: [{
        tag: 'symbol',
        attributes: _objectSpread2(_objectSpread2({}, attributes), {}, {
          id: id
        }),
        children: children
      }]
    }];
  }

  function makeInlineSvgAbstract(params) {
    var _params$icons = params.icons,
        main = _params$icons.main,
        mask = _params$icons.mask,
        prefix = params.prefix,
        iconName = params.iconName,
        transform = params.transform,
        symbol = params.symbol,
        title = params.title,
        maskId = params.maskId,
        titleId = params.titleId,
        extra = params.extra,
        _params$watchable = params.watchable,
        watchable = _params$watchable === void 0 ? false : _params$watchable;

    var _ref = mask.found ? mask : main,
        width = _ref.width,
        height = _ref.height;

    var isUploadedIcon = prefix === 'fak';
    var attrClass = [config.replacementClass, iconName ? "".concat(config.familyPrefix, "-").concat(iconName) : ''].filter(function (c) {
      return extra.classes.indexOf(c) === -1;
    }).filter(function (c) {
      return c !== '' || !!c;
    }).concat(extra.classes).join(' ');
    var content = {
      children: [],
      attributes: _objectSpread2(_objectSpread2({}, extra.attributes), {}, {
        'data-prefix': prefix,
        'data-icon': iconName,
        'class': attrClass,
        'role': extra.attributes.role || 'img',
        'xmlns': 'http://www.w3.org/2000/svg',
        'viewBox': "0 0 ".concat(width, " ").concat(height)
      })
    };
    var uploadedIconWidthStyle = isUploadedIcon && !~extra.classes.indexOf('fa-fw') ? {
      width: "".concat(width / height * 16 * 0.0625, "em")
    } : {};

    if (watchable) {
      content.attributes[DATA_FA_I2SVG] = '';
    }

    if (title) {
      content.children.push({
        tag: 'title',
        attributes: {
          id: content.attributes['aria-labelledby'] || "title-".concat(titleId || nextUniqueId())
        },
        children: [title]
      });
      delete content.attributes.title;
    }

    var args = _objectSpread2(_objectSpread2({}, content), {}, {
      prefix: prefix,
      iconName: iconName,
      main: main,
      mask: mask,
      maskId: maskId,
      transform: transform,
      symbol: symbol,
      styles: _objectSpread2(_objectSpread2({}, uploadedIconWidthStyle), extra.styles)
    });

    var _ref2 = mask.found && main.found ? callProvided('generateAbstractMask', args) || {
      children: [],
      attributes: {}
    } : callProvided('generateAbstractIcon', args) || {
      children: [],
      attributes: {}
    },
        children = _ref2.children,
        attributes = _ref2.attributes;

    args.children = children;
    args.attributes = attributes;

    if (symbol) {
      return asSymbol(args);
    } else {
      return asIcon(args);
    }
  }
  function makeLayersTextAbstract(params) {
    var content = params.content,
        width = params.width,
        height = params.height,
        transform = params.transform,
        title = params.title,
        extra = params.extra,
        _params$watchable2 = params.watchable,
        watchable = _params$watchable2 === void 0 ? false : _params$watchable2;

    var attributes = _objectSpread2(_objectSpread2(_objectSpread2({}, extra.attributes), title ? {
      'title': title
    } : {}), {}, {
      'class': extra.classes.join(' ')
    });

    if (watchable) {
      attributes[DATA_FA_I2SVG] = '';
    }

    var styles = _objectSpread2({}, extra.styles);

    if (transformIsMeaningful(transform)) {
      styles['transform'] = transformForCss({
        transform: transform,
        startCentered: true,
        width: width,
        height: height
      });
      styles['-webkit-transform'] = styles['transform'];
    }

    var styleString = joinStyles(styles);

    if (styleString.length > 0) {
      attributes['style'] = styleString;
    }

    var val = [];
    val.push({
      tag: 'span',
      attributes: attributes,
      children: [content]
    });

    if (title) {
      val.push({
        tag: 'span',
        attributes: {
          class: 'sr-only'
        },
        children: [title]
      });
    }

    return val;
  }
  function makeLayersCounterAbstract(params) {
    var content = params.content,
        title = params.title,
        extra = params.extra;

    var attributes = _objectSpread2(_objectSpread2(_objectSpread2({}, extra.attributes), title ? {
      'title': title
    } : {}), {}, {
      'class': extra.classes.join(' ')
    });

    var styleString = joinStyles(extra.styles);

    if (styleString.length > 0) {
      attributes['style'] = styleString;
    }

    var val = [];
    val.push({
      tag: 'span',
      attributes: attributes,
      children: [content]
    });

    if (title) {
      val.push({
        tag: 'span',
        attributes: {
          class: 'sr-only'
        },
        children: [title]
      });
    }

    return val;
  }

  var styles$1 = namespace.styles;
  function asFoundIcon(icon) {
    var width = icon[0];
    var height = icon[1];

    var _icon$slice = icon.slice(4),
        _icon$slice2 = _slicedToArray(_icon$slice, 1),
        vectorData = _icon$slice2[0];

    var element = null;

    if (Array.isArray(vectorData)) {
      element = {
        tag: 'g',
        attributes: {
          class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
        },
        children: [{
          tag: 'path',
          attributes: {
            class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
            fill: 'currentColor',
            d: vectorData[0]
          }
        }, {
          tag: 'path',
          attributes: {
            class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
            fill: 'currentColor',
            d: vectorData[1]
          }
        }]
      };
    } else {
      element = {
        tag: 'path',
        attributes: {
          fill: 'currentColor',
          d: vectorData
        }
      };
    }

    return {
      found: true,
      width: width,
      height: height,
      icon: element
    };
  }
  var missingIconResolutionMixin = {
    found: false,
    width: 512,
    height: 512
  };

  function maybeNotifyMissing(iconName, prefix) {
    if (!PRODUCTION && !config.showMissingIcons && iconName) {
      console.error("Icon with name \"".concat(iconName, "\" and prefix \"").concat(prefix, "\" is missing."));
    }
  }

  function findIcon(iconName, prefix) {
    var givenPrefix = prefix;

    if (prefix === 'fa' && config.styleDefault !== null) {
      prefix = getDefaultUsablePrefix();
    }

    return new Promise(function (resolve, reject) {
      ({
        found: false,
        width: 512,
        height: 512,
        icon: callProvided('missingIconAbstract') || {}
      });

      if (givenPrefix === 'fa') {
        var shim = byOldName(iconName) || {};
        iconName = shim.iconName || iconName;
        prefix = shim.prefix || prefix;
      }

      if (iconName && prefix && styles$1[prefix] && styles$1[prefix][iconName]) {
        var icon = styles$1[prefix][iconName];
        return resolve(asFoundIcon(icon));
      }

      maybeNotifyMissing(iconName, prefix);
      resolve(_objectSpread2(_objectSpread2({}, missingIconResolutionMixin), {}, {
        icon: config.showMissingIcons && iconName ? callProvided('missingIconAbstract') || {} : {}
      }));
    });
  }

  var noop$1 = function noop() {};

  var p = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
    mark: noop$1,
    measure: noop$1
  };
  var preamble = "FA \"6.0.0\"";

  var begin = function begin(name) {
    p.mark("".concat(preamble, " ").concat(name, " begins"));
    return function () {
      return end(name);
    };
  };

  var end = function end(name) {
    p.mark("".concat(preamble, " ").concat(name, " ends"));
    p.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
  };

  var perf = {
    begin: begin,
    end: end
  };

  var noop$2 = function noop() {};

  function isWatched(node) {
    var i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
    return typeof i2svg === 'string';
  }

  function hasPrefixAndIcon(node) {
    var prefix = node.getAttribute ? node.getAttribute(DATA_PREFIX) : null;
    var icon = node.getAttribute ? node.getAttribute(DATA_ICON) : null;
    return prefix && icon;
  }

  function hasBeenReplaced(node) {
    return node && node.classList && node.classList.contains && node.classList.contains(config.replacementClass);
  }

  function getMutator() {
    if (config.autoReplaceSvg === true) {
      return mutators.replace;
    }

    var mutator = mutators[config.autoReplaceSvg];
    return mutator || mutators.replace;
  }

  function createElementNS(tag) {
    return DOCUMENT.createElementNS('http://www.w3.org/2000/svg', tag);
  }

  function createElement(tag) {
    return DOCUMENT.createElement(tag);
  }

  function convertSVG(abstractObj) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _params$ceFn = params.ceFn,
        ceFn = _params$ceFn === void 0 ? abstractObj.tag === 'svg' ? createElementNS : createElement : _params$ceFn;

    if (typeof abstractObj === 'string') {
      return DOCUMENT.createTextNode(abstractObj);
    }

    var tag = ceFn(abstractObj.tag);
    Object.keys(abstractObj.attributes || []).forEach(function (key) {
      tag.setAttribute(key, abstractObj.attributes[key]);
    });
    var children = abstractObj.children || [];
    children.forEach(function (child) {
      tag.appendChild(convertSVG(child, {
        ceFn: ceFn
      }));
    });
    return tag;
  }

  function nodeAsComment(node) {
    var comment = " ".concat(node.outerHTML, " ");
    /* BEGIN.ATTRIBUTION */

    comment = "".concat(comment, "Font Awesome fontawesome.com ");
    /* END.ATTRIBUTION */

    return comment;
  }

  var mutators = {
    replace: function replace(mutation) {
      var node = mutation[0];

      if (node.parentNode) {
        mutation[1].forEach(function (abstract) {
          node.parentNode.insertBefore(convertSVG(abstract), node);
        });

        if (node.getAttribute(DATA_FA_I2SVG) === null && config.keepOriginalSource) {
          var comment = DOCUMENT.createComment(nodeAsComment(node));
          node.parentNode.replaceChild(comment, node);
        } else {
          node.remove();
        }
      }
    },
    nest: function nest(mutation) {
      var node = mutation[0];
      var abstract = mutation[1]; // If we already have a replaced node we do not want to continue nesting within it.
      // Short-circuit to the standard replacement

      if (~classArray(node).indexOf(config.replacementClass)) {
        return mutators.replace(mutation);
      }

      var forSvg = new RegExp("".concat(config.familyPrefix, "-.*"));
      delete abstract[0].attributes.id;

      if (abstract[0].attributes.class) {
        var splitClasses = abstract[0].attributes.class.split(' ').reduce(function (acc, cls) {
          if (cls === config.replacementClass || cls.match(forSvg)) {
            acc.toSvg.push(cls);
          } else {
            acc.toNode.push(cls);
          }

          return acc;
        }, {
          toNode: [],
          toSvg: []
        });
        abstract[0].attributes.class = splitClasses.toSvg.join(' ');

        if (splitClasses.toNode.length === 0) {
          node.removeAttribute('class');
        } else {
          node.setAttribute('class', splitClasses.toNode.join(' '));
        }
      }

      var newInnerHTML = abstract.map(function (a) {
        return toHtml(a);
      }).join('\n');
      node.setAttribute(DATA_FA_I2SVG, '');
      node.innerHTML = newInnerHTML;
    }
  };

  function performOperationSync(op) {
    op();
  }

  function perform(mutations, callback) {
    var callbackFunction = typeof callback === 'function' ? callback : noop$2;

    if (mutations.length === 0) {
      callbackFunction();
    } else {
      var frame = performOperationSync;

      if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
        frame = WINDOW.requestAnimationFrame || performOperationSync;
      }

      frame(function () {
        var mutator = getMutator();
        var mark = perf.begin('mutate');
        mutations.map(mutator);
        mark();
        callbackFunction();
      });
    }
  }
  var disabled = false;
  function disableObservation() {
    disabled = true;
  }
  function enableObservation() {
    disabled = false;
  }
  var mo = null;
  function observe(options) {
    if (!MUTATION_OBSERVER) {
      return;
    }

    if (!config.observeMutations) {
      return;
    }

    var _options$treeCallback = options.treeCallback,
        treeCallback = _options$treeCallback === void 0 ? noop$2 : _options$treeCallback,
        _options$nodeCallback = options.nodeCallback,
        nodeCallback = _options$nodeCallback === void 0 ? noop$2 : _options$nodeCallback,
        _options$pseudoElemen = options.pseudoElementsCallback,
        pseudoElementsCallback = _options$pseudoElemen === void 0 ? noop$2 : _options$pseudoElemen,
        _options$observeMutat = options.observeMutationsRoot,
        observeMutationsRoot = _options$observeMutat === void 0 ? DOCUMENT : _options$observeMutat;
    mo = new MUTATION_OBSERVER(function (objects) {
      if (disabled) return;
      var defaultPrefix = getDefaultUsablePrefix();
      toArray(objects).forEach(function (mutationRecord) {
        if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
          if (config.searchPseudoElements) {
            pseudoElementsCallback(mutationRecord.target);
          }

          treeCallback(mutationRecord.target);
        }

        if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && config.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target.parentNode);
        }

        if (mutationRecord.type === 'attributes' && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
          if (mutationRecord.attributeName === 'class' && hasPrefixAndIcon(mutationRecord.target)) {
            var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)),
                prefix = _getCanonicalIcon.prefix,
                iconName = _getCanonicalIcon.iconName;

            mutationRecord.target.setAttribute(DATA_PREFIX, prefix || defaultPrefix);
            if (iconName) mutationRecord.target.setAttribute(DATA_ICON, iconName);
          } else if (hasBeenReplaced(mutationRecord.target)) {
            nodeCallback(mutationRecord.target);
          }
        }
      });
    });
    if (!IS_DOM) return;
    mo.observe(observeMutationsRoot, {
      childList: true,
      attributes: true,
      characterData: true,
      subtree: true
    });
  }
  function disconnect() {
    if (!mo) return;
    mo.disconnect();
  }

  function styleParser (node) {
    var style = node.getAttribute('style');
    var val = [];

    if (style) {
      val = style.split(';').reduce(function (acc, style) {
        var styles = style.split(':');
        var prop = styles[0];
        var value = styles.slice(1);

        if (prop && value.length > 0) {
          acc[prop] = value.join(':').trim();
        }

        return acc;
      }, {});
    }

    return val;
  }

  function classParser (node) {
    var existingPrefix = node.getAttribute('data-prefix');
    var existingIconName = node.getAttribute('data-icon');
    var innerText = node.innerText !== undefined ? node.innerText.trim() : '';
    var val = getCanonicalIcon(classArray(node));

    if (!val.prefix) {
      val.prefix = getDefaultUsablePrefix();
    }

    if (existingPrefix && existingIconName) {
      val.prefix = existingPrefix;
      val.iconName = existingIconName;
    }

    if (val.iconName && val.prefix) {
      return val;
    }

    if (val.prefix && innerText.length > 0) {
      val.iconName = byLigature(val.prefix, node.innerText) || byUnicode(val.prefix, toHex(node.innerText));
    }

    return val;
  }

  function attributesParser (node) {
    var extraAttributes = toArray(node.attributes).reduce(function (acc, attr) {
      if (acc.name !== 'class' && acc.name !== 'style') {
        acc[attr.name] = attr.value;
      }

      return acc;
    }, {});
    var title = node.getAttribute('title');
    var titleId = node.getAttribute('data-fa-title-id');

    if (config.autoA11y) {
      if (title) {
        extraAttributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
      } else {
        extraAttributes['aria-hidden'] = 'true';
        extraAttributes['focusable'] = 'false';
      }
    }

    return extraAttributes;
  }

  function blankMeta() {
    return {
      iconName: null,
      title: null,
      titleId: null,
      prefix: null,
      transform: meaninglessTransform,
      symbol: false,
      mask: {
        iconName: null,
        prefix: null,
        rest: []
      },
      maskId: null,
      extra: {
        classes: [],
        styles: {},
        attributes: {}
      }
    };
  }
  function parseMeta(node) {
    var parser = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      styleParser: true
    };

    var _classParser = classParser(node),
        iconName = _classParser.iconName,
        prefix = _classParser.prefix,
        extraClasses = _classParser.rest;

    var extraAttributes = attributesParser(node);
    var pluginMeta = chainHooks('parseNodeAttributes', {}, node);
    var extraStyles = parser.styleParser ? styleParser(node) : [];
    return _objectSpread2({
      iconName: iconName,
      title: node.getAttribute('title'),
      titleId: node.getAttribute('data-fa-title-id'),
      prefix: prefix,
      transform: meaninglessTransform,
      mask: {
        iconName: null,
        prefix: null,
        rest: []
      },
      maskId: null,
      symbol: false,
      extra: {
        classes: extraClasses,
        styles: extraStyles,
        attributes: extraAttributes
      }
    }, pluginMeta);
  }

  var styles$2 = namespace.styles;

  function generateMutation(node) {
    var nodeMeta = config.autoReplaceSvg === 'nest' ? parseMeta(node, {
      styleParser: false
    }) : parseMeta(node);

    if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
      return callProvided('generateLayersText', node, nodeMeta);
    } else {
      return callProvided('generateSvgReplacementMutation', node, nodeMeta);
    }
  }

  function onTree(root) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    if (!IS_DOM) return Promise.resolve();
    var htmlClassList = DOCUMENT.documentElement.classList;

    var hclAdd = function hclAdd(suffix) {
      return htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
    };

    var hclRemove = function hclRemove(suffix) {
      return htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
    };

    var prefixes = config.autoFetchSvg ? Object.keys(PREFIX_TO_STYLE) : Object.keys(styles$2);
    var prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes.map(function (p) {
      return ".".concat(p, ":not([").concat(DATA_FA_I2SVG, "])");
    })).join(', ');

    if (prefixesDomQuery.length === 0) {
      return Promise.resolve();
    }

    var candidates = [];

    try {
      candidates = toArray(root.querySelectorAll(prefixesDomQuery));
    } catch (e) {// noop
    }

    if (candidates.length > 0) {
      hclAdd('pending');
      hclRemove('complete');
    } else {
      return Promise.resolve();
    }

    var mark = perf.begin('onTree');
    var mutations = candidates.reduce(function (acc, node) {
      try {
        var mutation = generateMutation(node);

        if (mutation) {
          acc.push(mutation);
        }
      } catch (e) {
        if (!PRODUCTION) {
          if (e.name === 'MissingIcon') {
            console.error(e);
          }
        }
      }

      return acc;
    }, []);
    return new Promise(function (resolve, reject) {
      Promise.all(mutations).then(function (resolvedMutations) {
        perform(resolvedMutations, function () {
          hclAdd('active');
          hclAdd('complete');
          hclRemove('pending');
          if (typeof callback === 'function') callback();
          mark();
          resolve();
        });
      }).catch(function (e) {
        mark();
        reject(e);
      });
    });
  }

  function onNode(node) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    generateMutation(node).then(function (mutation) {
      if (mutation) {
        perform([mutation], callback);
      }
    });
  }

  function resolveIcons(next) {
    return function (maybeIconDefinition) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
      var mask = params.mask;

      if (mask) {
        mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
      }

      return next(iconDefinition, _objectSpread2(_objectSpread2({}, params), {}, {
        mask: mask
      }));
    };
  }

  var render = function render(iconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _params$transform = params.transform,
        transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
        _params$symbol = params.symbol,
        symbol = _params$symbol === void 0 ? false : _params$symbol,
        _params$mask = params.mask,
        mask = _params$mask === void 0 ? null : _params$mask,
        _params$maskId = params.maskId,
        maskId = _params$maskId === void 0 ? null : _params$maskId,
        _params$title = params.title,
        title = _params$title === void 0 ? null : _params$title,
        _params$titleId = params.titleId,
        titleId = _params$titleId === void 0 ? null : _params$titleId,
        _params$classes = params.classes,
        classes = _params$classes === void 0 ? [] : _params$classes,
        _params$attributes = params.attributes,
        attributes = _params$attributes === void 0 ? {} : _params$attributes,
        _params$styles = params.styles,
        styles = _params$styles === void 0 ? {} : _params$styles;
    if (!iconDefinition) return;
    var prefix = iconDefinition.prefix,
        iconName = iconDefinition.iconName,
        icon = iconDefinition.icon;
    return domVariants(_objectSpread2({
      type: 'icon'
    }, iconDefinition), function () {
      callHooks('beforeDOMElementCreation', {
        iconDefinition: iconDefinition,
        params: params
      });

      if (config.autoA11y) {
        if (title) {
          attributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
        } else {
          attributes['aria-hidden'] = 'true';
          attributes['focusable'] = 'false';
        }
      }

      return makeInlineSvgAbstract({
        icons: {
          main: asFoundIcon(icon),
          mask: mask ? asFoundIcon(mask.icon) : {
            found: false,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: prefix,
        iconName: iconName,
        transform: _objectSpread2(_objectSpread2({}, meaninglessTransform), transform),
        symbol: symbol,
        title: title,
        maskId: maskId,
        titleId: titleId,
        extra: {
          attributes: attributes,
          styles: styles,
          classes: classes
        }
      });
    });
  };
  var ReplaceElements = {
    mixout: function mixout() {
      return {
        icon: resolveIcons(render)
      };
    },
    hooks: function hooks() {
      return {
        mutationObserverCallbacks: function mutationObserverCallbacks(accumulator) {
          accumulator.treeCallback = onTree;
          accumulator.nodeCallback = onNode;
          return accumulator;
        }
      };
    },
    provides: function provides(providers$$1) {
      providers$$1.i2svg = function (params) {
        var _params$node = params.node,
            node = _params$node === void 0 ? DOCUMENT : _params$node,
            _params$callback = params.callback,
            callback = _params$callback === void 0 ? function () {} : _params$callback;
        return onTree(node, callback);
      };

      providers$$1.generateSvgReplacementMutation = function (node, nodeMeta) {
        var iconName = nodeMeta.iconName,
            title = nodeMeta.title,
            titleId = nodeMeta.titleId,
            prefix = nodeMeta.prefix,
            transform = nodeMeta.transform,
            symbol = nodeMeta.symbol,
            mask = nodeMeta.mask,
            maskId = nodeMeta.maskId,
            extra = nodeMeta.extra;
        return new Promise(function (resolve, reject) {
          Promise.all([findIcon(iconName, prefix), mask.iconName ? findIcon(mask.iconName, mask.prefix) : Promise.resolve({
            found: false,
            width: 512,
            height: 512,
            icon: {}
          })]).then(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                main = _ref2[0],
                mask = _ref2[1];

            resolve([node, makeInlineSvgAbstract({
              icons: {
                main: main,
                mask: mask
              },
              prefix: prefix,
              iconName: iconName,
              transform: transform,
              symbol: symbol,
              maskId: maskId,
              title: title,
              titleId: titleId,
              extra: extra,
              watchable: true
            })]);
          }).catch(reject);
        });
      };

      providers$$1.generateAbstractIcon = function (_ref3) {
        var children = _ref3.children,
            attributes = _ref3.attributes,
            main = _ref3.main,
            transform = _ref3.transform,
            styles = _ref3.styles;
        var styleString = joinStyles(styles);

        if (styleString.length > 0) {
          attributes['style'] = styleString;
        }

        var nextChild;

        if (transformIsMeaningful(transform)) {
          nextChild = callProvided('generateAbstractTransformGrouping', {
            main: main,
            transform: transform,
            containerWidth: main.width,
            iconWidth: main.width
          });
        }

        children.push(nextChild || main.icon);
        return {
          children: children,
          attributes: attributes
        };
      };
    }
  };

  var Layers = {
    mixout: function mixout() {
      return {
        layer: function layer(assembler) {
          var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var _params$classes = params.classes,
              classes = _params$classes === void 0 ? [] : _params$classes;
          return domVariants({
            type: 'layer'
          }, function () {
            callHooks('beforeDOMElementCreation', {
              assembler: assembler,
              params: params
            });
            var children = [];
            assembler(function (args) {
              Array.isArray(args) ? args.map(function (a) {
                children = children.concat(a.abstract);
              }) : children = children.concat(args.abstract);
            });
            return [{
              tag: 'span',
              attributes: {
                class: ["".concat(config.familyPrefix, "-layers")].concat(_toConsumableArray(classes)).join(' ')
              },
              children: children
            }];
          });
        }
      };
    }
  };

  var LayersCounter = {
    mixout: function mixout() {
      return {
        counter: function counter(content) {
          var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var _params$title = params.title,
              title = _params$title === void 0 ? null : _params$title,
              _params$classes = params.classes,
              classes = _params$classes === void 0 ? [] : _params$classes,
              _params$attributes = params.attributes,
              attributes = _params$attributes === void 0 ? {} : _params$attributes,
              _params$styles = params.styles,
              styles = _params$styles === void 0 ? {} : _params$styles;
          return domVariants({
            type: 'counter',
            content: content
          }, function () {
            callHooks('beforeDOMElementCreation', {
              content: content,
              params: params
            });
            return makeLayersCounterAbstract({
              content: content.toString(),
              title: title,
              extra: {
                attributes: attributes,
                styles: styles,
                classes: ["".concat(config.familyPrefix, "-layers-counter")].concat(_toConsumableArray(classes))
              }
            });
          });
        }
      };
    }
  };

  var LayersText = {
    mixout: function mixout() {
      return {
        text: function text(content) {
          var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var _params$transform = params.transform,
              transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
              _params$title = params.title,
              title = _params$title === void 0 ? null : _params$title,
              _params$classes = params.classes,
              classes = _params$classes === void 0 ? [] : _params$classes,
              _params$attributes = params.attributes,
              attributes = _params$attributes === void 0 ? {} : _params$attributes,
              _params$styles = params.styles,
              styles = _params$styles === void 0 ? {} : _params$styles;
          return domVariants({
            type: 'text',
            content: content
          }, function () {
            callHooks('beforeDOMElementCreation', {
              content: content,
              params: params
            });
            return makeLayersTextAbstract({
              content: content,
              transform: _objectSpread2(_objectSpread2({}, meaninglessTransform), transform),
              title: title,
              extra: {
                attributes: attributes,
                styles: styles,
                classes: ["".concat(config.familyPrefix, "-layers-text")].concat(_toConsumableArray(classes))
              }
            });
          });
        }
      };
    },
    provides: function provides(providers$$1) {
      providers$$1.generateLayersText = function (node, nodeMeta) {
        var title = nodeMeta.title,
            transform = nodeMeta.transform,
            extra = nodeMeta.extra;
        var width = null;
        var height = null;

        if (IS_IE) {
          var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
          var boundingClientRect = node.getBoundingClientRect();
          width = boundingClientRect.width / computedFontSize;
          height = boundingClientRect.height / computedFontSize;
        }

        if (config.autoA11y && !title) {
          extra.attributes['aria-hidden'] = 'true';
        }

        return Promise.resolve([node, makeLayersTextAbstract({
          content: node.innerHTML,
          width: width,
          height: height,
          transform: transform,
          title: title,
          extra: extra,
          watchable: true
        })]);
      };
    }
  };

  var CLEAN_CONTENT_PATTERN = new RegExp("\"", 'ug');
  var SECONDARY_UNICODE_RANGE = [1105920, 1112319];
  function hexValueFromContent(content) {
    var cleaned = content.replace(CLEAN_CONTENT_PATTERN, '');
    var codePoint = codePointAt(cleaned, 0);
    var isPrependTen = codePoint >= SECONDARY_UNICODE_RANGE[0] && codePoint <= SECONDARY_UNICODE_RANGE[1];
    var isDoubled = cleaned.length === 2 ? cleaned[0] === cleaned[1] : false;
    return {
      value: isDoubled ? toHex(cleaned[0]) : toHex(cleaned),
      isSecondary: isPrependTen || isDoubled
    };
  }

  function replaceForPosition(node, position) {
    var pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(':', '-'));
    return new Promise(function (resolve, reject) {
      if (node.getAttribute(pendingAttribute) !== null) {
        // This node is already being processed
        return resolve();
      }

      var children = toArray(node.children);
      var alreadyProcessedPseudoElement = children.filter(function (c) {
        return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position;
      })[0];
      var styles = WINDOW.getComputedStyle(node, position);
      var fontFamily = styles.getPropertyValue('font-family').match(FONT_FAMILY_PATTERN);
      var fontWeight = styles.getPropertyValue('font-weight');
      var content = styles.getPropertyValue('content');

      if (alreadyProcessedPseudoElement && !fontFamily) {
        // If we've already processed it but the current computed style does not result in a font-family,
        // that probably means that a class name that was previously present to make the icon has been
        // removed. So we now should delete the icon.
        node.removeChild(alreadyProcessedPseudoElement);
        return resolve();
      } else if (fontFamily && content !== 'none' && content !== '') {
        var _content = styles.getPropertyValue('content');

        var prefix = ~['Solid', 'Regular', 'Light', 'Thin', 'Duotone', 'Brands', 'Kit'].indexOf(fontFamily[2]) ? STYLE_TO_PREFIX[fontFamily[2].toLowerCase()] : FONT_WEIGHT_TO_PREFIX[fontWeight];

        var _hexValueFromContent = hexValueFromContent(_content),
            hexValue = _hexValueFromContent.value,
            isSecondary = _hexValueFromContent.isSecondary;

        var isV4 = fontFamily[0].startsWith('FontAwesome');
        var iconName = byUnicode(prefix, hexValue);
        var iconIdentifier = iconName;

        if (isV4) {
          var iconName4 = byOldUnicode(hexValue);

          if (iconName4.iconName && iconName4.prefix) {
            iconName = iconName4.iconName;
            prefix = iconName4.prefix;
          }
        } // Only convert the pseudo element in this ::before/::after position into an icon if we haven't
        // already done so with the same prefix and iconName


        if (iconName && !isSecondary && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
          node.setAttribute(pendingAttribute, iconIdentifier);

          if (alreadyProcessedPseudoElement) {
            // Delete the old one, since we're replacing it with a new one
            node.removeChild(alreadyProcessedPseudoElement);
          }

          var meta = blankMeta();
          var extra = meta.extra;
          extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
          findIcon(iconName, prefix).then(function (main) {
            var abstract = makeInlineSvgAbstract(_objectSpread2(_objectSpread2({}, meta), {}, {
              icons: {
                main: main,
                mask: emptyCanonicalIcon()
              },
              prefix: prefix,
              iconName: iconIdentifier,
              extra: extra,
              watchable: true
            }));
            var element = DOCUMENT.createElement('svg');

            if (position === '::before') {
              node.insertBefore(element, node.firstChild);
            } else {
              node.appendChild(element);
            }

            element.outerHTML = abstract.map(function (a) {
              return toHtml(a);
            }).join('\n');
            node.removeAttribute(pendingAttribute);
            resolve();
          }).catch(reject);
        } else {
          resolve();
        }
      } else {
        resolve();
      }
    });
  }

  function replace(node) {
    return Promise.all([replaceForPosition(node, '::before'), replaceForPosition(node, '::after')]);
  }

  function processable(node) {
    return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== 'svg');
  }

  function searchPseudoElements(root) {
    if (!IS_DOM) return;
    return new Promise(function (resolve, reject) {
      var operations = toArray(root.querySelectorAll('*')).filter(processable).map(replace);
      var end = perf.begin('searchPseudoElements');
      disableObservation();
      Promise.all(operations).then(function () {
        end();
        enableObservation();
        resolve();
      }).catch(function () {
        end();
        enableObservation();
        reject();
      });
    });
  }

  var PseudoElements = {
    hooks: function hooks() {
      return {
        mutationObserverCallbacks: function mutationObserverCallbacks(accumulator) {
          accumulator.pseudoElementsCallback = searchPseudoElements;
          return accumulator;
        }
      };
    },
    provides: function provides(providers$$1) {
      providers$$1.pseudoElements2svg = function (params) {
        var _params$node = params.node,
            node = _params$node === void 0 ? DOCUMENT : _params$node;

        if (config.searchPseudoElements) {
          searchPseudoElements(node);
        }
      };
    }
  };

  var _unwatched = false;
  var MutationObserver$1 = {
    mixout: function mixout() {
      return {
        dom: {
          unwatch: function unwatch() {
            disableObservation();
            _unwatched = true;
          }
        }
      };
    },
    hooks: function hooks() {
      return {
        bootstrap: function bootstrap() {
          observe(chainHooks('mutationObserverCallbacks', {}));
        },
        noAuto: function noAuto() {
          disconnect();
        },
        watch: function watch(params) {
          var observeMutationsRoot = params.observeMutationsRoot;

          if (_unwatched) {
            enableObservation();
          } else {
            observe(chainHooks('mutationObserverCallbacks', {
              observeMutationsRoot: observeMutationsRoot
            }));
          }
        }
      };
    }
  };

  var parseTransformString = function parseTransformString(transformString) {
    var transform = {
      size: 16,
      x: 0,
      y: 0,
      flipX: false,
      flipY: false,
      rotate: 0
    };
    return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
      var parts = n.toLowerCase().split('-');
      var first = parts[0];
      var rest = parts.slice(1).join('-');

      if (first && rest === 'h') {
        acc.flipX = true;
        return acc;
      }

      if (first && rest === 'v') {
        acc.flipY = true;
        return acc;
      }

      rest = parseFloat(rest);

      if (isNaN(rest)) {
        return acc;
      }

      switch (first) {
        case 'grow':
          acc.size = acc.size + rest;
          break;

        case 'shrink':
          acc.size = acc.size - rest;
          break;

        case 'left':
          acc.x = acc.x - rest;
          break;

        case 'right':
          acc.x = acc.x + rest;
          break;

        case 'up':
          acc.y = acc.y - rest;
          break;

        case 'down':
          acc.y = acc.y + rest;
          break;

        case 'rotate':
          acc.rotate = acc.rotate + rest;
          break;
      }

      return acc;
    }, transform);
  };
  var PowerTransforms = {
    mixout: function mixout() {
      return {
        parse: {
          transform: function transform(transformString) {
            return parseTransformString(transformString);
          }
        }
      };
    },
    hooks: function hooks() {
      return {
        parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
          var transformString = node.getAttribute('data-fa-transform');

          if (transformString) {
            accumulator.transform = parseTransformString(transformString);
          }

          return accumulator;
        }
      };
    },
    provides: function provides(providers) {
      providers.generateAbstractTransformGrouping = function (_ref) {
        var main = _ref.main,
            transform = _ref.transform,
            containerWidth = _ref.containerWidth,
            iconWidth = _ref.iconWidth;
        var outer = {
          transform: "translate(".concat(containerWidth / 2, " 256)")
        };
        var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
        var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
        var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
        var inner = {
          transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
        };
        var path = {
          transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
        };
        var operations = {
          outer: outer,
          inner: inner,
          path: path
        };
        return {
          tag: 'g',
          attributes: _objectSpread2({}, operations.outer),
          children: [{
            tag: 'g',
            attributes: _objectSpread2({}, operations.inner),
            children: [{
              tag: main.icon.tag,
              children: main.icon.children,
              attributes: _objectSpread2(_objectSpread2({}, main.icon.attributes), operations.path)
            }]
          }]
        };
      };
    }
  };

  var ALL_SPACE = {
    x: 0,
    y: 0,
    width: '100%',
    height: '100%'
  };

  function fillBlack(abstract) {
    var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (abstract.attributes && (abstract.attributes.fill || force)) {
      abstract.attributes.fill = 'black';
    }

    return abstract;
  }

  function deGroup(abstract) {
    if (abstract.tag === 'g') {
      return abstract.children;
    } else {
      return [abstract];
    }
  }

  var Masks = {
    hooks: function hooks() {
      return {
        parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
          var maskData = node.getAttribute('data-fa-mask');
          var mask = !maskData ? emptyCanonicalIcon() : getCanonicalIcon(maskData.split(' ').map(function (i) {
            return i.trim();
          }));

          if (!mask.prefix) {
            mask.prefix = getDefaultUsablePrefix();
          }

          accumulator.mask = mask;
          accumulator.maskId = node.getAttribute('data-fa-mask-id');
          return accumulator;
        }
      };
    },
    provides: function provides(providers) {
      providers.generateAbstractMask = function (_ref) {
        var children = _ref.children,
            attributes = _ref.attributes,
            main = _ref.main,
            mask = _ref.mask,
            explicitMaskId = _ref.maskId,
            transform = _ref.transform;
        var mainWidth = main.width,
            mainPath = main.icon;
        var maskWidth = mask.width,
            maskPath = mask.icon;
        var trans = transformForSvg({
          transform: transform,
          containerWidth: maskWidth,
          iconWidth: mainWidth
        });
        var maskRect = {
          tag: 'rect',
          attributes: _objectSpread2(_objectSpread2({}, ALL_SPACE), {}, {
            fill: 'white'
          })
        };
        var maskInnerGroupChildrenMixin = mainPath.children ? {
          children: mainPath.children.map(fillBlack)
        } : {};
        var maskInnerGroup = {
          tag: 'g',
          attributes: _objectSpread2({}, trans.inner),
          children: [fillBlack(_objectSpread2({
            tag: mainPath.tag,
            attributes: _objectSpread2(_objectSpread2({}, mainPath.attributes), trans.path)
          }, maskInnerGroupChildrenMixin))]
        };
        var maskOuterGroup = {
          tag: 'g',
          attributes: _objectSpread2({}, trans.outer),
          children: [maskInnerGroup]
        };
        var maskId = "mask-".concat(explicitMaskId || nextUniqueId());
        var clipId = "clip-".concat(explicitMaskId || nextUniqueId());
        var maskTag = {
          tag: 'mask',
          attributes: _objectSpread2(_objectSpread2({}, ALL_SPACE), {}, {
            id: maskId,
            maskUnits: 'userSpaceOnUse',
            maskContentUnits: 'userSpaceOnUse'
          }),
          children: [maskRect, maskOuterGroup]
        };
        var defs = {
          tag: 'defs',
          children: [{
            tag: 'clipPath',
            attributes: {
              id: clipId
            },
            children: deGroup(maskPath)
          }, maskTag]
        };
        children.push(defs, {
          tag: 'rect',
          attributes: _objectSpread2({
            fill: 'currentColor',
            'clip-path': "url(#".concat(clipId, ")"),
            mask: "url(#".concat(maskId, ")")
          }, ALL_SPACE)
        });
        return {
          children: children,
          attributes: attributes
        };
      };
    }
  };

  var MissingIconIndicator = {
    provides: function provides(providers) {
      var reduceMotion = false;

      if (WINDOW.matchMedia) {
        reduceMotion = WINDOW.matchMedia('(prefers-reduced-motion: reduce)').matches;
      }

      providers.missingIconAbstract = function () {
        var gChildren = [];
        var FILL = {
          fill: 'currentColor'
        };
        var ANIMATION_BASE = {
          attributeType: 'XML',
          repeatCount: 'indefinite',
          dur: '2s'
        }; // Ring

        gChildren.push({
          tag: 'path',
          attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
            d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
          })
        });

        var OPACITY_ANIMATE = _objectSpread2(_objectSpread2({}, ANIMATION_BASE), {}, {
          attributeName: 'opacity'
        });

        var dot = {
          tag: 'circle',
          attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
            cx: '256',
            cy: '364',
            r: '28'
          }),
          children: []
        };

        if (!reduceMotion) {
          dot.children.push({
            tag: 'animate',
            attributes: _objectSpread2(_objectSpread2({}, ANIMATION_BASE), {}, {
              attributeName: 'r',
              values: '28;14;28;28;14;28;'
            })
          }, {
            tag: 'animate',
            attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
              values: '1;0;1;1;0;1;'
            })
          });
        }

        gChildren.push(dot);
        gChildren.push({
          tag: 'path',
          attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
            opacity: '1',
            d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
          }),
          children: reduceMotion ? [] : [{
            tag: 'animate',
            attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
              values: '1;0;0;0;0;1;'
            })
          }]
        });

        if (!reduceMotion) {
          // Exclamation
          gChildren.push({
            tag: 'path',
            attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
              opacity: '0',
              d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
            }),
            children: [{
              tag: 'animate',
              attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
                values: '0;0;1;1;0;0;'
              })
            }]
          });
        }

        return {
          tag: 'g',
          attributes: {
            'class': 'missing'
          },
          children: gChildren
        };
      };
    }
  };

  var SvgSymbols = {
    hooks: function hooks() {
      return {
        parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
          var symbolData = node.getAttribute('data-fa-symbol');
          var symbol = symbolData === null ? false : symbolData === '' ? true : symbolData;
          accumulator['symbol'] = symbol;
          return accumulator;
        }
      };
    }
  };

  var plugins = [InjectCSS, ReplaceElements, Layers, LayersCounter, LayersText, PseudoElements, MutationObserver$1, PowerTransforms, Masks, MissingIconIndicator, SvgSymbols];

  registerPlugins(plugins, {
    mixoutsTo: api
  });
  api.noAuto;
  var config$1 = api.config;
  var library$1 = api.library;
  api.dom;
  api.parse;
  api.findIconDefinition;
  api.toHtml;
  var icon = api.icon;
  api.layer;
  api.text;
  api.counter;

  /*!
   * Font Awesome Free 6.0.0 by @fontawesome - https://fontawesome.com
   * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
   * Copyright 2022 Fonticons, Inc.
   */
  var faCamera = {
    prefix: 'fas',
    iconName: 'camera',
    icon: [512, 512, [62258, "camera-alt"], "f030", "M194.6 32H317.4C338.1 32 356.4 45.22 362.9 64.82L373.3 96H448C483.3 96 512 124.7 512 160V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V160C0 124.7 28.65 96 64 96H138.7L149.1 64.82C155.6 45.22 173.9 32 194.6 32H194.6zM256 384C309 384 352 341 352 288C352 234.1 309 192 256 192C202.1 192 160 234.1 160 288C160 341 202.1 384 256 384z"]
  };

  function formatBadgeToHtml(url) {
    return `<span class="avatar"><img src="${url}" /></span>`;
  }

  class Twitch {
    static OWL =
        'https://cdn.discordapp.com/attachments/915656975696687124/916116916702158948/OWL.png';
  }
  // pls note this is placeholder
  class VIP {
    static VIPBADGE =
        'https://cdn.discordapp.com/attachments/915656975696687124/966916497475792916/placeholder.png';
  }

  //  function GiveVIPColor() {}

  class Xqc {
    static SUB_0_MONTHS_T1 =
        'https://cdn.discordapp.com/attachments/915656975696687124/916022295254937652/0-Month_Subscriber.png';
    static SUB_0_MONTHS_T2 =
        'https://cdn.discordapp.com/attachments/915656975696687124/916022295473057862/2000-Month_Subscriber.png';
    static SUB_0_MONTHS_T3 =
        'https://cdn.discordapp.com/attachments/915656975696687124/916022295686971442/3000-Month_Subscriber.png';
    static SUB_2_MONTHS_T1 =
        'https://cdn.discordapp.com/attachments/915656975696687124/916022535622115328/2-Month_Subscriber.png';
    static SUB_2_MONTHS_T2 =
        'https://cdn.discordapp.com/attachments/915656975696687124/916022535831814155/2002-Month_Subscriber.png';
    static SUB_2_MONTHS_T3 =
        'https://cdn.discordapp.com/attachments/915656975696687124/916022536062521374/3002-Month_Subscriber.png';
    static SUB_3_MONTHS_T1 =
        'https://cdn.discordapp.com/attachments/915656975696687124/916022622767181864/3-Month_Subscriber.png';
    static SUB_3_MONTHS_T2 =
        'https://cdn.discordapp.com/attachments/915656975696687124/916022623056576562/2003-Month_Subscriber.png';
    static SUB_3_MONTHS_T3 =
        'https://cdn.discordapp.com/attachments/915656975696687124/916022623287267398/3003-Month_Subscriber.png';
    static SUB_6_MONTHS_T1 =
        'https://cdn.discordapp.com/attachments/915656975696687124/916022766510149682/6-Month_Subscriber.png';
    static SUB_6_MONTHS_T2 =
        'https://cdn.discordapp.com/attachments/915656975696687124/916022766736658452/2006-Month_Subscriber.png';
    static SUB_6_MONTHS_T3 =
        'https://cdn.discordapp.com/attachments/915656975696687124/916022766984130640/3006-Month_Subscriber.png';
    static SUB_9_MONTHS_T1 =
        'https://cdn.discordapp.com/attachments/915656975696687124/916022823489789972/9-Month_Subscriber.png';
    static SUB_9_MONTHS_T2 =
        'https://cdn.discordapp.com/attachments/915656975696687124/916022823703674910/2009-Month_Subscriber.png';
    static SUB_9_MONTHS_T3 =
        'https://cdn.discordapp.com/attachments/915656975696687124/916022824169259018/3009-Month_Subscriber.png';
    static SUB_12_MONTHS_T1 =
        'https://cdn.discordapp.com/attachments/915656975696687124/916022894918795304/12-Month_Subscriber.png';
    static SUB_12_MONTHS_T2 =
        'https://cdn.discordapp.com/attachments/915656975696687124/916022895199805440/2012-Month_Subscriber.png';
    static SUB_12_MONTHS_T3 =
        'https://cdn.discordapp.com/attachments/915656975696687124/916022895422107648/3012-Month_Subscriber.png';
    static SUB_18_MONTHS_T1 =
        'https://cdn.discordapp.com/attachments/915656975696687124/916022962866507846/18-Month_Subscriber.png';
    static SUB_18_MONTHS_T2 =
        'https://cdn.discordapp.com/attachments/915656975696687124/916022963105570877/2018-Month_Subscriber.png';
    static SUB_18_MONTHS_T3 =
        'https://cdn.discordapp.com/attachments/915656975696687124/916022963411771392/3018-Month_Subscriber.png';
    static SUB_24_MONTHS_T1 =
        'https://cdn.discordapp.com/attachments/915656975696687124/916023017929310339/24-Month_Subscriber.png';
    static SUB_24_MONTHS_T2 =
        'https://cdn.discordapp.com/attachments/915656975696687124/916023018134835291/2024-Month_Subscriber.png';
    static SUB_24_MONTHS_T3 =
        'https://cdn.discordapp.com/attachments/915656975696687124/916023018315206726/3024-Month_Subscriber.png';
    static SUB_30_MONTHS_T1 =
        'https://cdn.discordapp.com/attachments/915656975696687124/916023065576636426/30-Month_Subscriber.png';
    static SUB_30_MONTHS_T2 =
        'https://cdn.discordapp.com/attachments/915656975696687124/916023065761165403/2030-Month_Subscriber.png';
    static SUB_30_MONTHS_T3 =
        'https://cdn.discordapp.com/attachments/915656975696687124/916023065966690324/3030-Month_Subscriber.png';
    static SUB_36_MONTHS_T1 =
        'https://cdn.discordapp.com/attachments/915656975696687124/916023136565207040/36-Month_Subscriber.png';
    static SUB_36_MONTHS_T2 =
        'https://cdn.discordapp.com/attachments/915656975696687124/916023136770723870/2036-Month_Subscriber.png';
    static SUB_36_MONTHS_T3 =
        'https://cdn.discordapp.com/attachments/915656975696687124/916023136942706749/3036-Month_Subscriber.png';
    static SUB_42_MONTHS_T1 =
        'https://cdn.discordapp.com/attachments/915656975696687124/916023290441637959/42-Month_Subscriber.png';
    static SUB_42_MONTHS_T2 =
        'https://cdn.discordapp.com/attachments/915656975696687124/916023290672349254/2042-Month_Subscriber.png';
    static SUB_42_MONTHS_T3 =
        'https://cdn.discordapp.com/attachments/915656975696687124/916023291213410344/3042-Month_Subscriber.png';
    static SUB_48_MONTHS_T1 =
        'https://cdn.discordapp.com/attachments/915656975696687124/916023373505650758/48-Month_Subscriber.png';
    static SUB_48_MONTHS_T2 =
        'https://cdn.discordapp.com/attachments/915656975696687124/916023373786656768/2048-Month_Subscriber.png';
    static SUB_48_MONTHS_T3 =
        'https://cdn.discordapp.com/attachments/915656975696687124/916023374097051708/3048-Month_Subscriber.png';
    static SUB_54_MONTHS_T1 =
        'https://cdn.discordapp.com/attachments/915656975696687124/916023417508098108/54-Month_Subscriber.png';
    static SUB_54_MONTHS_T2 =
        'https://cdn.discordapp.com/attachments/915656975696687124/916023417793298463/2054-Month_Subscriber.png';
    static SUB_54_MONTHS_T3 =
        'https://cdn.discordapp.com/attachments/915656975696687124/916023418070114304/3054-Month_Subscriber.png';
    static SUB_60_MONTHS_T1 =
        'https://cdn.discordapp.com/attachments/915656975696687124/916023503910735882/60-Month_Subscriber.png';
    static SUB_60_MONTHS_T2 =
        'https://cdn.discordapp.com/attachments/915656975696687124/916023504170799184/2060-Month_Subscriber.png';
    static SUB_60_MONTHS_T3 =
        'https://cdn.discordapp.com/attachments/915656975696687124/916023504376332298/3060-Month_Subscriber.png';
    static SUB_66_MONTHS_T1 =
        'https://cdn.discordapp.com/attachments/915656975696687124/916023570788913182/66-Month_Subscriber.png';
    static SUB_66_MONTHS_T2 =
        'https://cdn.discordapp.com/attachments/915656975696687124/916023571028013176/2066-Month_Subscriber.png';
    static SUB_66_MONTHS_T3 =
        'https://cdn.discordapp.com/attachments/915656975696687124/916023571212546108/3066-Month_Subscriber.png';
    static SUB_72_MONTHS_T1 =
        'https://cdn.discordapp.com/attachments/915656975696687124/916023616469106698/72-Month_Subscriber.png';
    static SUB_72_MONTHS_T2 =
        'https://cdn.discordapp.com/attachments/915656975696687124/916023616670421042/2072-Month_Subscriber.png';
    static SUB_72_MONTHS_T3 =
        'https://cdn.discordapp.com/attachments/915656975696687124/916023616863354921/3072-Month_Subscriber.png';
    static SUB_78_MONTHS_T1 =
        'https://cdn.discordapp.com/attachments/915656975696687124/916023666947543110/78-Month_Subscriber.png';
    static SUB_78_MONTHS_T2 =
        'https://cdn.discordapp.com/attachments/915656975696687124/916023667278905405/2078-Month_Subscriber.png';
    static SUB_78_MONTHS_T3 =
        'https://cdn.discordapp.com/attachments/915656975696687124/916023667543117824/3078-Month_Subscriber.png';
    static GIFT_SUBS_500 =
        'https://cdn.discordapp.com/attachments/915656975696687124/916100252342300733/500_Gift_Subs.png';
    static BITS_100 =
        'https://cdn.discordapp.com/attachments/915656975696687124/915713189109444718/100_Bits.png';
    static BITS_1000 =
        'https://cdn.discordapp.com/attachments/915656975696687124/915713247716442182/1000_Bits.png';
     static BITS_25000 =
        'https://cdn.discordapp.com/attachments/915656975696687124/915713360920739860/25000_Bits.png';
    static BITS_100000 =
        'https://cdn.discordapp.com/attachments/915656975696687124/915713532006375464/100000_Bits.png';
  }

  const USER_BADGES = {
    'ZimnLech': [
      'https://dl.dropboxusercontent.com/s/89gv8fvyr49vnev/kobato-icon-small.jpg',
    ],
    'JohnRG123': [
      'https://cdn.discordapp.com/attachments/915672420147413022/1052082859470508072/die2.gif',
      'https://cdn.discordapp.com/attachments/899888900611375184/901313787951480862/small.png',
      VIP.VIPBADGE,
    ],
    'mrfart2323': [
      Xqc.SUB_12_MONTHS_T1,
      'https://cdn.discordapp.com/attachments/899888900611375184/917638191723450418/Gigachad_1.jpg',
    ],
    'IP0G': [
      'https://cdn.discordapp.com/attachments/679270173567614987/984717275963748362/ezgif-3-018bdeb1e1.gif',
      'https://static-cdn.jtvnw.net/emoticons/v2/304550342/static/light/1.0',
    ],
    'ACCOUNT2': [
      'https://cdn.discordapp.com/attachments/904501042148958219/981805543121371136/ezgif-2-b39e272ae5.png',
      'https://media.discordapp.net/attachments/899888900611375184/901380813243944970/EZ_1.png',
    ],
    'Zombsiee': [
      'https://media.discordapp.net/attachments/899888900611375184/901570550034477076/st_small_507x507-pad_600x600_f8f8f8-removebg-preview.png',
    ],
    'GiveMeAnOnion': [
      Xqc.SUB_18_MONTHS_T1,
      'https://images-ext-1.discordapp.net/external/V-pZ97hRKTpvONRbEeYiG2tdmVBH11KU0u2KooeIU1g/https/i.imgur.com/CTJoS3c.png',
    ],
    'ContraVz': [
      'https://media.discordapp.net/attachments/899888900611375184/903429579274846248/VIPBadge.png',
      'https://cdn.discordapp.com/attachments/915656975696687124/916100799233425548/VIP.png',
    ],
    'seagrade': [
      'https://cdn.discordapp.com/attachments/907369587979460720/917657328013176833/dankspin3.gif',
    ],
    'Xsogon': [
      Xqc.SUB_30_MONTHS_T1,
      'https://cdn.discordapp.com/attachments/905159869626187817/920394576999637042/Porcellio_Expansus_PFP.png',
    ],
    'spintto': [
      'https://cdn.discordapp.com/attachments/903020967515795547/969736915291095050/thegif.gif',
    ],
    'HentaiQueen': [
      'https://cdn.discordapp.com/attachments/679270173567614987/908795988544729198/ezgif-6-268375e001ab.gif',
    ],
    'gustme': [
      Xqc.SUB_9_MONTHS_T1,
      'https://cdn.discordapp.com/attachments/915650094697693184/921144650088194098/ezgif.com-gif-maker_27.gif',
    ],
    'BlooDerg': [
      'https://media.discordapp.net/attachments/880765465318817852/914342333414244372/ok.gif',
    ],
    'jesus_knuckles': [
      'https://media.discordapp.net/attachments/914591356003946507/914592520305012796/stupidskullfart.png',
    ],
    'airforce2700': [
      Xqc.SUB_12_MONTHS_T1,
      'https://cdn.betterttv.net/emote/5d82600ec0652668c9e4e2f2/1x',
    ],
    'Skully_OW': [
      Xqc.SUB_30_MONTHS_T1,
      'https://cdn.discordapp.com/attachments/915656975696687124/916100799233425548/VIP.png',
    ],
    'n3r1': [
      Xqc.SUB_36_MONTHS_T1,
      'https://cdn.discordapp.com/attachments/915656975696687124/1084438102216552499/n3r1_badge.gif',
    ],
    'notjuham': [
      Xqc.SUB_48_MONTHS_T1,
      'https://cdn.discordapp.com/attachments/891695154333884447/922151274303070229/notjuham1818.png',
    ],
    'Pugnator': [
      Xqc.SUB_3_MONTHS_T1,
    ],
    'IIPsilocybin': [
      Xqc.GIFT_SUBS_500,
    ],
    'Uns1asher': [
      Xqc.SUB_9_MONTHS_T1,
    ],
    'jeffboys123': [
      Xqc.SUB_24_MONTHS_T1,
    ],
    'alyjiah': [
      Xqc.SUB_18_MONTHS_T1,
      Twitch.OWL,
    ],
    'brcfrmn': [
      Xqc.SUB_12_MONTHS_T1,
    ],
    'Frostee115': [
      Xqc.SUB_0_MONTHS_T1,
    ],
    'moldnugget': [
      Xqc.SUB_12_MONTHS_T1,
    ],
    'eljulidi1337': [
      Xqc.SUB_6_MONTHS_T3,
      'https://cdn.discordapp.com/attachments/920790624930758666/956307055583563846/elij.gif',
    ],
    'pepegaOverheat': [
      Xqc.SUB_9_MONTHS_T1,
    ],
    'Captkayy': [
      Xqc.SUB_6_MONTHS_T3,
    ],
    'PeepoGlad': [
      'https://cdn.discordapp.com/attachments/904501042148958219/981805543121371136/ezgif-2-b39e272ae5.png',
      'https://cdn.discordapp.com/attachments/719709749423112284/917509143353507912/1xend.gif',
    ],
    'MrNiTe': [
      Xqc.SUB_9_MONTHS_T1,
    ],
    'l_charles_l': [
      Xqc.SUB_9_MONTHS_T1,
    ],
    'Enzo_SuperCraftZ': [
      Xqc.SUB_12_MONTHS_T1,
    ],
    'Physikz': [
      Xqc.SUB_36_MONTHS_T1,
      'https://cdn.discordapp.com/attachments/915656975696687124/916100799233425548/VIP.png',
    ],
    'LEBB': [
      Xqc.SUB_12_MONTHS_T1,
      'https://cdn.discordapp.com/attachments/915650094697693184/954252288539627520/POKIBRUH.gif',
    ],
    'feelssunnyman': [
      Xqc.SUB_9_MONTHS_T3,
      'https://cdn.discordapp.com/attachments/915656975696687124/916100799233425548/VIP.png',
    ],
    'T_Nizzy': [
      Xqc.SUB_12_MONTHS_T1,
      'https://cdn.discordapp.com/attachments/905159869626187817/945147116337106964/35235235.gif',
    ],
    'Getronix': [
      Xqc.SUB_12_MONTHS_T1,
    ],
    'Jamoki_3090': [
      Xqc.SUB_3_MONTHS_T1,
    ],
    'BryG05': [
      Xqc.SUB_6_MONTHS_T1,
    ],
    'SenileCookie': [
      Xqc.SUB_18_MONTHS_T1,
    ],
    'BryG05': [
      Xqc.SUB_3_MONTHS_T1,
    ],
    'SenileCookie': [
      Xqc.SUB_18_MONTHS_T1,
    ],
    'isiete': [
      Xqc.SUB_12_MONTHS_T1,
    ],
    'xQt0001': [
      Xqc.SUB_18_MONTHS_T3,
    ],
    'ayyvollet': [
      Xqc.SUB_3_MONTHS_T1,
    ],
    'Tzuqi': [
      Xqc.SUB_12_MONTHS_T1,
    ],
    'MrDestructoidCyDJ': [
      'https://cdn.discordapp.com/attachments/679270173567614987/922352061356572682/1x_4.gif',
    ],
    'CaribbeanCam': [
      Xqc.SUB_12_MONTHS_T1,
    ],
    'Bananaman3100': [
      Xqc.SUB_6_MONTHS_T1,
    ],
    'Betelgeun': [
      Xqc.SUB_12_MONTHS_T1,
    ],
    'HikkenNoAce': [
      Xqc.SUB_6_MONTHS_T3,
    ],
    'CannabisMuffin': [
      Xqc.SUB_18_MONTHS_T1,
    ],
    'LEBB': [
      Xqc.SUB_12_MONTHS_T1,
      'https://cdn.discordapp.com/attachments/915650094697693184/933641907052118016/Lebb.jpeg',
    ],
    'aade_': [
      Xqc.SUB_12_MONTHS_T1,
    ],
    'parsekktv': [
      Xqc.SUB_18_MONTHS_T1,
    ],
    'zHardTimes': [
      Xqc.SUB_18_MONTHS_T1,
      'https://media.discordapp.net/attachments/915650094697693184/932461255560691772/ezgif.com-gif-maker_2.gif',
    ],
    'anirrroc': [
      Xqc.SUB_12_MONTHS_T1,
    ],
    'Reesesses': [
      Xqc.SUB_9_MONTHS_T1,
    ],
    'DeathGod': [
      Xqc.SUB_12_MONTHS_T1,
      'https://cdn.discordapp.com/attachments/915650094697693184/937539803581411358/xqcdespair.gif',
    ],
    'MasterA1G': [
      Xqc.SUB_24_MONTHS_T1,
    ],
    'xqcPeepo': [
      Xqc.SUB_0_MONTHS_T1,
    ],
    'the7entity': [
      Xqc.SUB_12_MONTHS_T1,
    ],
    'Yaekaii': [
      Xqc.SUB_24_MONTHS_T1,
    ],
    'cerasuz': [
      Xqc.SUB_18_MONTHS_T1,
    ],
    'RoboSheepz': [
      Xqc.SUB_9_MONTHS_T1,
    ],
    'nate338': [
      Xqc.SUB_24_MONTHS_T1,
    ],
    'pbgod1337': [
      Xqc.SUB_6_MONTHS_T1,
    ],
    'Spockacus': [
      Xqc.SUB_12_MONTHS_T1,
    ],
    'SHEEEEEEEEEEEEEEEESH': [
      'https://cdn.discordapp.com/attachments/915650094697693184/937061024748675112/ezgif.com-gif-maker_3.gif',
    ],
    'sydniartis': [
      Xqc.SUB_18_MONTHS_T1,
    ],
    'Loi_561': [
      'https://cdn.discordapp.com/attachments/904501042148958219/981805543121371136/ezgif-2-b39e272ae5.png',
      'https://cdn.discordapp.com/attachments/915490680468561990/945090131499581440/loi.gif',
    ],
    'CherrySlushy': [
      Xqc.SUB_6_MONTHS_T1,
    ],
    'echotify': [
      Xqc.SUB_3_MONTHS_T1,
    ],
    'JasonNew116': [
      Xqc.SUB_12_MONTHS_T1,
    ],
    'mmmmmmeat': [
      Xqc.SUB_12_MONTHS_T1,
    ],
    'lfeelgreat': [
      Xqc.SUB_18_MONTHS_T1,
    ],
    'Gil3344': [
      Xqc.SUB_6_MONTHS_T1,
    ],
    'Coconut19': [
      Xqc.SUB_12_MONTHS_T1,
    ],
    'FaZeFaDaZe': [
      Xqc.SUB_2_MONTHS_T1,
    ],
    'migboss': [
      Xqc.SUB_6_MONTHS_T1,
    ],
    'Lango': [
      Xqc.SUB_24_MONTHS_T1,
    ],
    'ItMePeachy': [
      'https://cdn.discordapp.com/attachments/986926739190063114/1037712558183960716/NoOneIsAroundToHelp.gif',
      'https://cdn.discordapp.com/attachments/986926739190063114/1037701659494723636/Cat.gif',
    ],
    'deblankyy': [
      Xqc.SUB_9_MONTHS_T1,
      'https://cdn.discordapp.com/attachments/917119248428597278/955164791272513646/555555.png',
    ],
    'Sir_Cthun': [
      Xqc.SUB_12_MONTHS_T1,
    ],
    'L4nzz': [
      Xqc.SUB_18_MONTHS_T1,
    ],
    'TriingHard': [
      Xqc.SUB_6_MONTHS_T1,
    ],
    'ungandanLOCK': [
      Xqc.SUB_3_MONTHS_T1,
    ],
    'Noxan': [
      Xqc.SUB_18_MONTHS_T1,
    ],
    'jetri': [
      Xqc.SUB_18_MONTHS_T1,
    ],
    'AlexG59': [
      Xqc.SUB_18_MONTHS_T1,
    ],
    'nonameswerechosen': [
      'https://cdn.discordapp.com/attachments/915656975696687124/916042205666357288/24-Month_Subscriber.png',
    ],
    'Loodex': [
      Xqc.SUB_18_MONTHS_T1,
    ],
    'tommylegamerqc': [
      Xqc.SUB_12_MONTHS_T1,
    ],
    'peroshka': [
      Xqc.SUB_18_MONTHS_T3,
    ],
    'peroshka': [
      Xqc.SUB_18_MONTHS_T3,
    ],
    'TommyLegamerQc': [
      Xqc.SUB_18_MONTHS_T1,
    ],
    'MDPog': [
      'https://cdn.discordapp.com/attachments/915656975696687124/916100799233425548/VIP.png',
      Xqc.SUB_36_MONTHS_T1,
    ],
    'PinkFLD': [
      Xqc.SUB_36_MONTHS_T1,
    ],
    'EscapeAltDelete': [
      Xqc.SUB_12_MONTHS_T1,
    ],
    'Colith': [
      Xqc.SUB_12_MONTHS_T1,
    ],
    'esattt': [
      'https://cdn.discordapp.com/attachments/915656975696687124/916100799233425548/VIP.png',
      Xqc.SUB_24_MONTHS_T3,
    ],
    'dea9h': [
      Xqc.SUB_18_MONTHS_T1,
      Xqc.BITS_25000,
    ],
    'mmmmmmeat': [
      Xqc.SUB_18_MONTHS_T1,
    ],
    'Psychedelicx': [
      Xqc.SUB_6_MONTHS_T1,
    ],
    'vetiffco': [
      Xqc.SUB_9_MONTHS_T1,
    ],
    'Samtelegram': [
      Xqc.SUB_3_MONTHS_T1,
    ],
    'CherryBun': [
      'https://cdn.discordapp.com/attachments/904501042148958219/1052090998005710868/ch1.gif',
      'https://cdn.discordapp.com/attachments/904501042148958219/1052090998408359997/ch2.gif',
    ],
    'MUDBOYYYYY': [
      Xqc.SUB_18_MONTHS_T1,
    ],
    'NeoTheOne': [
      Xqc.SUB_24_MONTHS_T1,
      'https://cdn.discordapp.com/attachments/915656975696687124/1087365553045372928/1.png',
    ], 
  };

  // ID of previous video queued (so !random doesn't add it again)
  let LAST_VIDEO_ID_QUEUED = 'some-bogus-dont-leave-empty';
  // additional command occuring in the chat message
  let COMMAND = false;

  /**
   * Format chat messages before sending and execute commands.
   *
   * @param {string} msg
   * @return {string}
   */

  function prepareMessage(msg) {
    if (msg.startsWith('!')) {
      COMMAND = true;
      if (msg.startsWith('!stat')) {
        const {numberOfMessages, totalMessageLength} = getChatStats();
        const averageMessageLength =
            numberOfMessages > 0 ? Math.round(totalMessageLength / numberOfMessages) : 0;
        msg = `you have sent ${numberOfMessages} messages, ` +
            `total length is ${totalMessageLength} characters ` +
            `(${averageMessageLength} per message) `;
      } else if (msg.startsWith('!pick ')) {
        const arr = msg.split('!pick ')[1].split(',');
        const rnd = Math.round(Math.random() * (arr.length - 1));
        msg = arr[rnd];
      } else if (msg.startsWith('!ask ')) {
        if (AskAnswers_Array.length < 1) {
          AskAnswers_Array = ['yes', 'no'];
        }
        const rnd = Math.round(Math.random() * (AskAnswers_Array.length - 1));
        msg = AskAnswers_Array[rnd];
      } else if (msg.startsWith('!time')) {
        let h = new Date().getHours();
        if (h < 10) {
          h = '0' + h;
        }
        let m = new Date().getMinutes();
        if (m < 10) {
          m = '0' + m;
        }
        msg = 'current time: ' + h + ':' + m;
      } else if (msg.startsWith('!dice')) {
        const rnd = Math.round(Math.random() * 5) + 1;
        msg = '' + rnd;
      } else if (msg.startsWith('!roll')) {
        let rnd = Math.round(Math.random() * 999);
        if (rnd < 100) {
          rnd = '0' + rnd;
        }
        if (rnd < 10) {
          rnd = '0' + rnd;
        }
        msg = '' + rnd;
      } else if (msg.startsWith('!q')) {
        if (RandomQuotes_Array.length < 1) {
          RandomQuotes_Array = ['error: no quotes available'];
        }
        const rnd = Math.round(Math.random() * (RandomQuotes_Array.length - 1));
        msg = RandomQuotes_Array[rnd];
      } else if (msg.startsWith('!randomemote')) {
        const emoteCount = TabCompletionEmotes.length;
        const randomEmoteIndex = Math.round(Math.random() * emoteCount - 1);
        const randomEmote = TabCompletionEmotes[randomEmoteIndex];
        msg = randomEmote;
      } else if (msg.startsWith('!random') && hasPermission('playlistadd')) {
        {
          let link = '';
          let title = '';
          while (link === '' || link.includes(LAST_VIDEO_ID_QUEUED)) {
            const rnd = Math.round(Math.random() * (CHANNEL_DATABASE.length - 1));
            link = CHANNEL_DATABASE[rnd][0];
            title = CHANNEL_DATABASE[rnd][1];
          }
          const parsed = parseMediaLink(link);
          socket.emit('queue', {
            id: parsed['id'],
            pos: 'end',
            type: parsed['type'],
            temp: $('.add-temp').prop('checked'),
          });
          msg = `random media added! - ${title}`;
        }
      } else if (msg.startsWith('!skip') && hasPermission('voteskip')) {
        socket.emit('voteskip');
        msg = 'current item has been voteskipped';
      } else if (msg.startsWith('!next') && hasPermission('playlistjump')) {
        socket.emit('playNext');
        msg = 'started playing next item';
      } else if (msg.startsWith('!bump') && hasPermission('playlistmove')) {
        const last = $('#queue').children().length;
        const uid = $(`#queue .queue_entry:nth-child(${last})`).data('uid');
        const title = $(`#queue .queue_entry:nth-child(${last}) .qe_title`).html();
        socket.emit('moveMedia', {from: uid, after: PL_CURRENT}, $('.add-temp').prop('checked'));
        msg = `last item bumped as next: ${title}`;
      } else if (msg.startsWith('!add ') && hasPermission('playlistadd')) {
        const parsed = parseMediaLink(msg.split('!add ')[1]);
        if (parsed['id'] === null) {
          msg = 'error: invalid link, item has not been added';
        } else {
          socket.emit('queue', {
            id: parsed['id'],
            pos: 'end',
            type: parsed['type'],
            temp: $('.add-temp').prop('checked'),
          });
          msg = 'media has been added!';
        }
      } else if (msg.startsWith('!np')) {
        msg = 'Now playing: ' + $('.queue_active a').html();
      } else if (msg.startsWith('!discord')) {
        msg = 'https://discord.gg/g8tCGSc2bx';
      } else if (msg.startsWith('!link')) {
        msg = 'https://tinyurl.com/jamcydj';
      } else if (msg.startsWith('!guide')) {
        msg = 'https://tinyurl.com/CyDJguideV2';
      } else if (msg.startsWith('!script')) {
        msg = 'http://github.com/papertek/CyDJ';
      } else if (msg.startsWith('!report')) {
        msg = 'https://tinyurl.com/CDJReport';
      } else if (msg.startsWith('!botcommands')) {
        msg = 'https://github.com/airforce270/cytubebot#commands';
      } else if (msg.startsWith('!version')) {
        msg = `Running: ${Version_Now}`;
      } else if (msg.startsWith('!media')) {
        const item = $(`.queue_active`).data('media');
        msg = `Heres the link: ${formatURL(item)}`;
      } else if (msg.startsWith('!crash')) {
        msg = '[mqr] GOOOOOOO xqcTECHNO FEELSWAYTOOGOOD xqcDisco [/mqr]';
        fastestCrash();
      } else if (msg.startsWith('!gluegun')) {
        msg = '[mqr] GOOOOOOO xqcTechno FEELSWAYTOOGOOD AlienPls3 [/mqr]';
        glueGun();
      } else if (msg.startsWith('!inba')) {
        IMBA.volume = 0.6;
        IMBA.play();
        mutePlayer();
        const inbaFlash = setInterval(() => inba(), 200);
        setTimeout(() => {
          unmutePlayer();
          BGCHANGE = 0;
          clearInterval(inbaFlash);

          const userlistthing = document.getElementById('userlist');
          const elems = [userlistthing];

          elems.forEach((elem) => elem.style.backgroundImage = '');
          elems.forEach((elem) => elem.style.backgroundColor = '');

          setUserCSS();
        }, 12000);
        msg = ' FEELSWAYTOOGOOD JP2GMD ';
      } else {
        COMMAND = false;
      }
    }
    return msg;
  }

  // Function taken from util.js.
  // This takes user commands and actually let's the user post them.

  $('#chatline, #chatbtn').unbind();

  const _msg = $('#chatline').val();
  let msg = $('#chatline').val();
  if (msg.trim()) {
    msg = prepareMessage(msg.trim());
    if (COMMAND) {
      socket.emit('chatMsg', {msg: _msg});
      msg = `➥ ${msg}`;
      COMMAND = false;
    }
    socket.emit('chatMsg', {msg: msg});
    updateChatStats(_msg);
    $('#chatline').val('');
  }

  const IMBA = new Audio('https://dl.dropboxusercontent.com/s/xdnpynq643ziq9o/inba.ogg');
  const FASTEST = new Audio('https://github.com/papertek/CyDJ/raw/beta/misc/fastestcrashegg.wav');
  const GGUN = new Audio('https://github.com/papertek/CyDJ/raw/beta/misc/gluegun.wav');


  // number of background changes for the easter egg function
  let BGCHANGE = 1;
  // number of background changes for fastest crash
  let FASTESTBGCHANGE = 1;
  // number of bg changes for glue gun command
  let GLUEGUNBGCHANGE = 1;

  /**
   * Easter eggs in the commands.
   */
  function inba() {
    const userlistthing = document.getElementById('userlist');
    const elems = [userlistthing];

    elems.forEach((elem) => elem.style.backgroundImage = 'none');
    BGCHANGE++;

    const newColor = BGCHANGE % 2 === 0 ? 'gold' : 'blue';
    elems.forEach((elem) => elem.style.backgroundColor = newColor);
  }

  // Fastest Crash easter egg bg changes
  function dropthefast() {
    const userlistthing = document.getElementById('userlist');
    const elems = [userlistthing];

    elems.forEach((elem) => elem.style.backgroundImage = 'none');
    FASTESTBGCHANGE++;

    const newColor = FASTESTBGCHANGE % 2 === 0 ? 'blue' : 'black';
    elems.forEach((elem) => elem.style.backgroundColor = newColor);
  }

  // glue gun easter egg bg changes
  function droptheglue() {
    const userlistthing = document.getElementById('userlist');
    const elems = [userlistthing];

    elems.forEach((elem) => elem.style.backgroundImage = 'none');
    GLUEGUNBGCHANGE++;

    const newColor = GLUEGUNBGCHANGE % 2 === 0 ? 'blue' : 'limegreen';
    elems.forEach((elem) => elem.style.backgroundColor = newColor);
  }

  // fastest crash function
  function fastestCrash() {
    FASTEST.volume = 0.5;
    FASTEST.play();
    const fastestFlash = setInterval(() => dropthefast(), 100);
    setTimeout(() => {
      FASTESTBGCHANGE = 100;
      clearInterval(fastestFlash);

      const userlistthing = document.getElementById('userlist');
      const elems = [userlistthing];

      elems.forEach((elem) => elem.style.backgroundImage = '');
      elems.forEach((elem) => elem.style.backgroundColor = '');

      setUserCSS();
    }, 12000);
  }

  // glue gun function
  function glueGun() {
    GGUN.volume = 0.5;
    GGUN.play();
    const glueFlash = setInterval(() => droptheglue(), 100);
    setTimeout(() => {
      GLUEGUNBGCHANGE = 150;
      clearInterval(glueFlash);

      const userlistthing = document.getElementById('userlist');
      const elems = [userlistthing];

      elems.forEach((elem) => elem.style.backgroundImage = '');
      elems.forEach((elem) => elem.style.backgroundColor = '');

      setUserCSS();
    }, 9000);
  }

  const RandomQuotes_Array = [
    'I like the Pope dancing',
    'No quotes today',
    'O rly?',
    'People have the right to be stupid. You abuse that privilege',
    'Don\'t play stupid with me',
    'Roses are red violets are blue, God made me pretty, what happened to you?',
    'Please don\'t interrupt me while I\'m ignoring you',
    'Are you always this stupid, or are you making a special effort today?',
    'I like you. You remind me of when I was young and stupid.',
    'Go and buy me a beer',
    'The door of this channel is always open for you... so feel free to leave!',
    'I hate JQuery',
    'amogus',
  ];

  const AskAnswers_Array = [
    '100% for sure',
    'definitely, yes',
    'yes',
    'probably',
    'not any chance',
    'definitely no',
    'a little chance',
    'no',
    '50/50',
    'fairy is tired and will not answer',
    'I refuse to answer',
    'i asked your mom and she said no',
    'i- i\'m too shy to answer..',
    'umph... yes...',
    'ahhh.. hhaahhh... yeah...',
    'what',
  ];

  /**
   * Mute YT player.
   */
  function mutePlayer() {
    if (PLAYER && PLAYER.type === 'yt') {
      PLAYER.player.mute();
    }
  }

  /**
   * Unmute YT player.
   */
  function unmutePlayer() {
    if (PLAYER && PLAYER.type === 'yt') {
      PLAYER.player.unMute();
    }
  }

  socket.on('queue', (data) => LAST_VIDEO_ID_QUEUED = data.item.media.id);

  const CHANNEL_DATABASE$1 = [
    ['', 'Juicer Tastes'],
    ['https://www.youtube.com/watch?v=CprdkP92LsM', 'Fox Stevenson - Out There'],
    ['https://www.youtube.com/watch?v=ovZNf7Nztw4', 'Fox Stevenson - Still Here'],
    ['https://www.youtube.com/watch?v=G3nsEotIfQI', 'Fox Stevenson - Glue Gun'],
    [
      'https://www.youtube.com/watch?v=Dhuhf6wVOaQ',
      'Fox Stevenson - Take You Down',
    ],
    ['https://www.youtube.com/watch?v=68zaKCOrS7I', 'Fox Stevenson - Like That'],
    ['https://www.youtube.com/watch?v=BURa70Kb2ME', 'Macky Gee - Lighters Up'],
    [
      'https://www.youtube.com/watch?v=6cvc7tEoU2Y',
      'Macky Gee Ft. Stuart Rowe - Aftershock',
    ],
    [
      'https://www.youtube.com/watch?v=YlKkX38NgGo',
      'Constera - GO AGANE (xQc Music Video)',
    ],
    ['https://www.youtube.com/watch?v=hUwx0lUJAcI', 'Constera - The Name'],
    [
      'https://www.youtube.com/watch?v=fDKHb_sp5Nk',
      'ayyybubu - Damn NaM Spam (feat. DrDisRespect',
    ],
    [
      'https://www.youtube.com/watch?v=cvq7Jy-TFAU',
      'Feint - Snake Eyes (feat. CoMa)',
    ],
    ['https://www.youtube.com/watch?v=_ovdm2yX4MA', 'Avicii - Levels'],
    ['https://www.youtube.com/watch?v=mj-v6zCnEaw', 'NOMA - Brain Power'],
    ['', 'Staff Favorites'],
    ['https://www.youtube.com/watch?v=lLmSRcB-34k', 'Camellia - Pure Silver'],
    ['https://www.youtube.com/watch?v=ZAfAud_M_mg', 'Halsey - Without Me'],
    ['https://www.youtube.com/watch?v=U7KQ-8I_jYI', 'Brooks - If Only I Could'],
    [
      'https://www.youtube.com/watch?v=47dtFZ8CFo8',
      'Capital Cities - Safe And Sound',
    ],
    [
      'https://www.youtube.com/watch?v=Hwg7hJrDiRg',
      'Flume - Rushing Back feat. Vera Blue',
    ],
    [
      'https://www.youtube.com/watch?v=v6HBZC9pZHQ',
      'Baby Keem, Kendrick Lamar - family ties',
    ],
    ['https://www.youtube.com/watch?v=HyHNuVaZJ-k', 'Gorillaz - Feel Good Inc.'],
    [
      'https://www.youtube.com/watch?v=5NV6Rdv1a3I',
      'Daft Punk - Get Lucky ft. Pharrell Williams, Nile Rodgers',
    ],
    ['https://www.youtube.com/watch?v=hUs0-gqBulQ', 'Geoxor - Moonlight'],
    [
      'https://www.youtube.com/watch?v=jGow4nmYkkA',
      'Pendulum - The Island (Parts 1 & 2)',
    ],
    [
      'https://www.youtube.com/watch?v=d2AvqvnGlso',
      'Flite - Calm Before The Storm (feat. Karina Ramage)',
    ],
    ['https://www.youtube.com/watch?v=bO-NaEj2dQ0', 'MTC - S3RL'],
    ['https://www.youtube.com/watch?v=PZbkF-15ObM', 'C2C - Delta'],
    ['', 'Community Choice: November 2021'],
    [
      'https://www.youtube.com/watch?v=F7Ex-ubaU6A',
      'Apashe - Battle Royale (Feat. Panther)',
    ],
    ['https://www.youtube.com/watch?v=38R-00fETao', 'Koven - Love Wins Again'],
    ['https://www.youtube.com/watch?v=RPf1oRvfiNQ', 'Bossfight - Elevatia'],
    ['https://www.youtube.com/watch?v=8abwtVLP18Y', 'Andromedik - Forever'],
    [
      'https://www.youtube.com/watch?v=dUHp7N8BVyo',
      'Miracle Of Sound - Deep Blue (From Subnautica)',
    ],
    [
      'https://www.youtube.com/watch?v=ZaI2IlHwmgQ',
      'The Black Eyed Peas - Pump It',
    ],
    [
      'https://www.youtube.com/watch?v=WUEVJ0N6I1A',
      'Juice WRLD - Conversations (Skeler Remix)',
    ],
    [
      'https://www.youtube.com/watch?v=U3SpsXugtzw',
      'Basixx - Its Gonna Be Alright',
    ],
    ['https://www.youtube.com/watch?v=dX3k_QDnzHE', 'M83 - Midnight City'],
    ['https://www.youtube.com/watch?v=ghVC-ZXCxt0', 'Duster - Gold Dust'],
    [
      'https://www.youtube.com/watch?v=r9xAig0C00E',
      'Plants vs Zombies Soundtrack. [Mini Games] (From Plants vs Zombies)',
    ],
    [
      'https://www.youtube.com/watch?v=EGXPAoyP_cg',
      'Chris Christodoulou - The Rain Formerly Known as Purple (From Risk of Rain 2)',
    ],
    ['https://www.youtube.com/watch?v=dXZMH2CiSQk', 'CRAZY LITTLE LOVE - NUAGE'],
    ['', 'Community Choice: December 2021'],
    [
      'https://www.youtube.com/watch?v=zZFDBn53krg',
      'Tritonal - Getaway (ft. Angel Taylor) (Koven Remix)',
    ],
    ['https://www.youtube.com/watch?v=EJTZms5PFg8', 'Polygon - One Day'],
    ['https://www.youtube.com/watch?v=ggCkN3Sve9w', 'STARSET - EARTHRISE'],
    [
      'https://www.youtube.com/watch?v=MwSkC85TDgY',
      'Pegboard Nerds - Disconnected',
    ],
    ['https://www.youtube.com/watch?v=6-eqYk1j5to', 'Händel - Salomo'],
    [
      'https://www.youtube.com/watch?v=7sbw__MsJZ0',
      'Delta Heavy & Dirty Audio - Stay',
    ],
    ['https://www.youtube.com/watch?v=-dRXkIYa5ro', 'Maduk - Go (ft. Lachi)'],
    ['https://www.youtube.com/watch?v=RJ0GGVfWx4Q', 'Polygon - Contradiction'],
    [
      'https://www.youtube.com/watch?v=FQlAEiCb8m0',
      'Stardust - Music Sounds Better With You',
    ],
    [
      'https://www.youtube.com/watch?v=hT_nvWreIhg',
      'OneRepublic - Counting Stars',
    ],
    ['https://www.youtube.com/watch?v=xAg0CdkmG_k', 'Ryu☆ - Over Drive'],
    ['https://www.youtube.com/watch?v=BjFWk0ncr70', 'S3RL - Catchit'],
    [
      'https://www.youtube.com/watch?v=X21dsemjoRA',
      'Camellia - Clouds in the Blue',
    ],
    ['', 'Final Community Choice'],
    [
      'https://www.youtube.com/watch?v=XbGs_qK2PQA',
      'Eminem - Rap God (Explicit)',
    ],
    ['https://www.youtube.com/watch?v=r_0JjYUe5jo', 'Eminem - Godzilla ft. Juice WRLD'],
    ['https://www.youtube.com/watch?v=iRNoQqsEKDo', 'Sheck Wes - Mo Bamba'],
    [
      'https://www.youtube.com/watch?v=AC979eEzzUE',
      'Mario Judah - I Miss the Rage',
    ],
    ['https://www.youtube.com/watch?v=tGYvIELGlbA', 'Rad Museum - Off-Line (feat. DEAN, LeeHi)'],
    [
      'https://www.youtube.com/watch?v=A67ZkAd1wmI',
      'Caramella Girls - Caramelldansen (English Version)',
    ],
    ['https://www.youtube.com/watch?v=zmDNp_4MYTQ', 'Claptone - Zero'],
    ['https://www.youtube.com/watch?v=ctxgzPGIXCo', 'Riton, Kah-Lo - Ginger'],
    [
      'https://www.youtube.com/watch?v=45GIr91MZ7s',
      'Physika - World Unknown (Extended Mix)',
    ],
    [
      'https://www.youtube.com/watch?v=v-FLIwQQ_Fk',
      'DJ Fresh - Gold Dust (Fox Stevenson Remix)',
    ],
    [
      'https://www.youtube.com/watch?v=1y2wUv8R-0M',
      'Gawr Gura - REFLECT (Assertive Hardcore Bootleg)',
    ],
    ['https://www.youtube.com/watch?v=6jo68G_C16s', 'Kizuna Ai - Sky High (Mtell Hardcore Bootleg)'],
    [
      'https://www.youtube.com/watch?v=Gif0FoEyPBI',
      'Akari Nanawo - Higher\'s High (Mtell Hardcore Bootleg)',
    ],
    ['', 'HYPER DANKS XQCTECHNO'],
    [
      'https://www.youtube.com/watch?v=PQal6-mv6W4',
      'Camellia - LETS JUMP (かめりあ\'s "diffractive" Hardcore Remix)',
    ],
    ['https://www.youtube.com/watch?v=oF-Z_QH7fzY', 'Camellia - R U Still xxxx?'],
    ['https://www.youtube.com/watch?v=SVSvVC-5__c', 'Camellia - NUCLEAR-STAR'],
    ['https://www.youtube.com/watch?v=yjJvqrFTSuA', 'Camellia - ∀NØMALY'],
    ['https://www.youtube.com/watch?v=bi1rkTy3jbg', 'Camellia - Fly Wit Me'],
    ['https://www.youtube.com/watch?v=1v0hP5DuAZ8', 't+pazolite - T+ VS SHARK'],
    ['https://www.youtube.com/watch?v=rIPOOoQxquE', 't+pazolite - CENSORED‼'],
    [
      'https://www.youtube.com/watch?v=ZK_HX6-mXw4',
      'beatMARIO - Night of Knights (tpz Overheat Remix)',
    ],
    [
      'https://www.youtube.com/watch?v=s4KeHXqVbPk',
      'Kobaryo - Glitched Character',
    ],
    ['https://www.youtube.com/watch?v=-JsJr4zrXWg', 'Kobaryo - Bookmaker'],
    ['https://www.youtube.com/watch?v=3JDBdDyMO6s', 'Kobaryo - Cartoon Candy'],
    [
      'https://www.youtube.com/watch?v=z5EEf931E3Q',
      'Kobaryo - Tool-Assisted Speedcore (TQBF Frame Advance RMX)',
    ],
    [
      'https://www.youtube.com/watch?v=JWnH0HHUKcQ',
      'Darren Styles - Quiver (Breakchild Bootleg)',
    ],
  ];

  class Logo {
    /**
     * A logo for the top of the page.
     *
     * @param {string} url URL of the logo image.
     * @param {number} height Height of the logo (??).
     */
    constructor(url, height) {
      this.url = url;
      this.height = height;
    }
  }

  const LOGOS = (() => {
    const /** @type {!Map<string, !Logo>} */ logos = new Map();

    logos.set(
        'cytube plus',
        new Logo(
            'https://dl.dropboxusercontent.com/s/7mrz85gl29eiiks/logo.png',
            90,
            ));

    logos.set(
        'anime girl',
        new Logo(
            'https://dl.dropboxusercontent.com/s/knxd7dpup1u8lm3/azuki.png',
            200,
            ));

    logos.set(
        'cosmos',
        new Logo(
            'https://dl.dropboxusercontent.com/s/v6dx49yqk5e3i2d/cosmos.jpg',
            200,
            ));

    logos.set(
        'disco ball',
        new Logo(
            'https://dl.dropboxusercontent.com/s/ahpfm25pglc8j01/disco.jpg',
            162,
            ));

    logos.set(
        'japanese landscape',
        new Logo(
            'https://dl.dropboxusercontent.com/s/llylt832evxrp6e/japan.jpg',
            200,
            ));

    logos.set(
        'korean collage',
        new Logo(
            'https://dl.dropboxusercontent.com/s/qud9adhs183dq30/korea.jpg',
            160,
            ));

    logos.set(
        'my little pony',
        new Logo(
            'my little pony',
            'https://dl.dropboxusercontent.com/s/r4ozo8oj8lmerec/mlp.jpg',
            190,
            ));

    return logos;
  })();

  /*
  The MIT License (MIT)
  //
  Copyright (c) 2013-2014 Zimny Lech, 2022 CyDJ developers

  Permission is hereby granted, free of charge, to any person obtaining a copy of
  this software and associated documentation files (the "Software"), to deal in
  the Software without restriction, including without limitation the rights to
  use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
  off the Software, and to permit persons to whom the Software is furnished to do
  so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
  FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
  COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
  IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  */

  config$1.autoA11y = true;

  const camera = icon({prefix: 'fas', iconName: 'camera'});
  library$1.add(faCamera);
  // [&] box with embed additional media database
  const UI_ChannelDatabase = true;
  // [&] possibility to embedding (displaying) images and .webm videos on the chat
  const UI_EmbeddingMedia = true;


  // /////////////////////////////////////////////////////////////////////////////////////////////////

  /* ----- DETAILED BASIC CONFIGURATION ----- */

  // NOTES:
  // a) values for 'MOTDAutoLogo_Mode': 1 = first logo; 2 = random logo; 3 = logo
  // rotation; 7 = weekdays logos b) in 'SoundFilters_Array' use .ogg or .wav
  // files, some browsers has problems with embedded .mp3 c) in 'ModPanel_Array'
  // item leave empty first (username) field to make a message to all moderators
  // d) in 'EmbeddingMedia_Images' and 'EmbeddingMedia_Videos' you can define
  // acceptable file extensions
  //    use CSS syntax: e.g. 'a[href$=""]' defines acceptable end of an URL (file
  //    extension) you can also define URL fragments: 'a[href*=""]', or add
  //    excluding clause: '.not(\'a[href*=""]\'), etc.

  /* -- single variables -- */

  // TODO: Move all these into a file.

  const Favicon_URL = 'https://cdn.7tv.app/emote/614e8c0b20eaf897465a4c9d/1x.webp';

  const MiniLogo_URL = 'https://cdn.7tv.app/emote/614e8c0b20eaf897465a4c9d/1x.webp';

  const ChannelName_Caption = 'CyDJ';

  const Version_Now = 'CyDJEdge3.20.23.0';

  const HeaderDropMenu_Title = 'Information';

  const RulesBtn_Caption = 'Read Channel Rules';

  const ChannelAnnouncement_Title = 'CyDJ Alert';

  const TitleIcon_URL = 'https://cdn.7tv.app/emote/6040a8bccf6746000db10348/2x';

  const TitleBarDescription_Caption = 'Now Playing:';

  const JoinText_Message = 'hello!';

  const UsernameMark_Char = '‎';

  const CustomPingSound_URL = 'https://github.com/papertek/CyDJ/raw/beta/misc/pingsound.wav';

  const PlayerHiding_URL = 'https://c.tenor.com/Q6UjBrnSzvQAAAAC/anime-uh.gif';

  const HeaderDropMenu_Array = [
    ['CyDJ Rooms', ''],
    ['Main Room', 'https://cytu.be/r/cydj'],
    ['Second Room', 'https://cytu.be/r/secretfbimeeting'],
    //  ['Watch Party', 'https://beta.synchtube.me/r/SecretTwitchRoom'],
    ['Test Room', 'https://cytu.be/r/testplacelilroc'],
    ['Test Room 2', 'https://cytu.be/r/emptyroomtestplace'],
    ['Test Room 3', 'https://cytu.be/r/xqcPeepo'],
    ['Community Related', ''],
    ['CyDJ Discord', 'https://discord.gg/g8tCGSc2bx'],
    ['Camellia Discord', 'https://discord.gg/camellia'],
    ['Credits', ''],
    [
      'CyTube FAQ',
      'https://github.com/calzoneman/sync/wiki/Beginner%27s-Guide-and-FAQ',
    ],
    ['CyTube Source', 'https://github.com/calzoneman/sync'],
    ['CyDJ Source', 'https://github.com/papertek/CyDJ'],
    ['CyDJ Bot Source', 'https://github.com/airforce270/CytubeBot'],
  ];

  const MOTDAutoLogo_Array = [
    'https://github.com/papertek/CyDJ/raw/beta/images/cydjnormal.jpg',
  ];

  const ModPanel_Array = [
    [
      '',
      '<h4>Access to user reports <em><a href="https://docs.google.com/spreadsheets/d/1oZ6pNneah7VpkYyZ6JEPCdWH-RW9toImmMNU0002ab4/edit#gid=1081291779" target="_blank">here</a>.</em></h4>',
    ],
    [
      '',
      '<h4>Access to bot commands <em><a href="https://github.com/airforce270/cytubebot#commands" target="_blank">here</a>.</em></h4>',
    ],
    ['', 'To ban someone type <code>/ban (user)</code>'],
    ['', 'To kick someone type <code>/kick (user)</code>'],
    [
      '',
      'To IpBan someone type <code>/ipban (user)</code> (Use this when dealing with alts!)',
    ],
    [
      '',
      'To shadow mute someone type <code>/smute (user)</code> (This allows them to keep on talking without disturbing other people)',
    ],
    ['', 'To mute someone type <code>/mute (user)</code>'],
    ['', 'To unmute someone type <code>/unmute (user)</code>'],
    ['', 'To clear chat type <code>/clear</code>'],
    ['', 'To remove a users queue type <code>/clean (user)</code>'],
    [
      '',
      'To remove specific titles in the queue type <code>/cleantitle (title)</code>',
    ],
    [
      '',
      'To kick anons type <code>/kickanons</code> (only useful when people dont have a guest account)',
    ],
    [
      '',
      'To ban a specific range of ips type <code>/ipban (user) range (reason)</code>',
    ],
    [
      '',
      'The same as above but an even more wider area of ips <code>/ipban (user) wrange (reason)</code>',
    ],
    [
      '',
      'Drinks! <code>/d (message)</code> ~ Drinks are just an asthetic for you or other people',
    ],
    [
      '',
      'Numbered Drinks usage <code>/d{number} (message)</code> ~ A number specific type of drink command',
    ],
    ['', 'Big scary text <code>/say (message)</code>'],
    ['', 'Poll command <code>/poll {title},{option1},{option2},...</code>'],
    [
      '',
      'Poll command (but hides poll results) <code>/hpoll {title},{option1},{option2},...</code>',
    ],
    [
      '',
      'To temporary insert to the playlist any website instead of media files, click "Embed a custom frame" button in the playlist controls section. Then paste example code to the textarea: <code><i>&lt;iframe src="URL_of_your_page"&gt;&lt;/iframe&gt;</i></code>, and add.',
    ],
  ];

  const RulesBtn_HTML =
      '<ol><li>You want to write on the chat? Enter temporary nickname into <b>Guest Login</b> input and click enter.</li><li>You want to register a nick? Click <b>Account -> Profile</b> on the top of the channel, and fill the registration form. You don\'t need an email to register.</li><li>Troll skipping = immediate kick.</li><li>Don\'t be annoying.</li><li>Do not one man spam.</li><li>Do not encourage chat wars or harass/target people.</li><li>Queueing blatant NSFW videos such as porn/hentai/gore is strictly not allowed, doing so will result in an ip ban.</li><li>Queuing the same video but in different link variants is not allowed.</li><li>Mods have the right to skip a video if its overplayed.</li><li><b>These rules are subject to common sense.</b></li></ol>';

  const ChannelAnnouncement_HTML =
      'Please join the <a href="https://discord.gg/g8tCGSc2bx" target="_blank">Discord</a> for news regarding CyDJ.';

  const EmbeddingMedia_Images =
      'a[href$=".jpg"], a[href$=".jpg:large"], a[href$=".jpeg"], a[href$=".JPEG"], a[href$=".JPG"], a[href$=".png"], a[href$=".PNG"], a[href$=".tiff"], a[href$=".TIFF"], a[href$=".webp"], a[href$=".WEBP"], a[href$=".gif"], a[href$=".GIF"]';

  const EmbeddingMedia_Videos =
      'a[href$=".webm"], a[href$=".mp4"], a[href$=".MP4"], a[href$=".mov"], a[href$=".MOV"], a[href$=".mp3"], a[href$=".MP3"], a[href$=".wav"], a[href$=".WAV"], a[href$=".ogg"], a[href$=".OGG"], a[href$=".m4a"], a[href$=".M4A"]';

  const ThemesCSS = [
    [
      'Plus Red',
      'https://dl.dropboxusercontent.com/s/th8i1sj332wi0x9/plusred.css',
    ],
    [
      'Celadon',
      'https://dl.dropboxusercontent.com/s/iwarwhhph1ti2ek/celadon.css',
    ],
    [
      'Classic',
      'https://papertek.github.io/CyDJ/deploy/beta/css/twitchclassic.css',
    ],
    [
      'Old DJ',
      'https://papertek.github.io/CyDJ/deploy/beta/css/DJDefault.css',
    ],
    [
      'Stars',
      'https://papertek.github.io/CyDJ/deploy/beta/css/stars.css',
    ],
    [
      'Alien',
      'https://papertek.github.io/CyDJ/deploy/beta/css/alien.css',
    ],
    [
      'Black Cat',
      'https://papertek.github.io/CyDJ/deploy/beta/css/blackcat.css',
    ],
    [
      'U.U.F.O',
      'https://papertek.github.io/CyDJ/deploy/beta/css/UUFO.css',
    ],
  ];

  const EmptyCornerBackground = [
    'https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_a054f4001b6d4f098e7969c988debd18/default/light/2.0',
    'https://cdn.betterttv.net/emote/5dfc5d868608fb0da4120b59/2x',
    'https://images-ext-1.discordapp.net/external/1guxWfPcmO5XSXYMjKO79mRQ3UORmbKBZsVYyg4Cr-M/%3Fv%3D1/https/cdn.discordapp.com/emojis/891194776798498826.gif',
    'https://cdn.discordapp.com/attachments/899888900611375184/901313787951480862/small.png',
    'https://cdn.7tv.app/emote/60d2c62291b6751bc1e05add/4x',
    'https://media.discordapp.net/attachments/904501042148958219/914300481633914970/JohnJamSmall.gif',
    'https://media.discordapp.net/attachments/828331546658340905/914594224614277212/unknown.png',
    'https://media.discordapp.net/attachments/904501042148958219/914593675445690468/unknown.png',
    'https://media.discordapp.net/attachments/904501042148958219/914594852182831165/pacific.gif',
    'https://media.discordapp.net/attachments/915415328496951316/925616111242842122/unknown.png',
  ];

  // /////////////////////////////////////////////////////////////////////////////////////////////////

  /* ----- INDEPENDENT EMOTES AND FILTERS CONFIGURATION ----- */

  // NOTES ABOUT INDEPENDENT EMOTES:
  // Every item has 4 attributes, respectively: chat code, image URL, image width,
  // image height. Warning: due to conflict with RegExp, do not use square
  // brackets or use proper "\\[" and "\\]" codes.

  const IndependentEmotes = [
    [
      ':awesome:',
      'https://dl.dropboxusercontent.com/s/gz1k8oto90n16v6/awesome.png',
      35,
      35,
    ],
    [
      ':love:',
      'https://dl.dropboxusercontent.com/s/fr9131zgnai0kix/heart.png',
      35,
      35,
    ],
    [
      ':skeet:',
      'https://images-ext-1.discordapp.net/external/10FMCcqjoR5dnswPRzi5sHHS7FjgVsMDfNi4yvklbac/%3Fsize%3D44/https/cdn.discordapp.com/emojis/873855067306999808.gif',
      35,
      35,
    ],
  ];

  // NOTES AND DEFAULT FILTERS EXAMPLES:
  // If you use regular expression, you must put it between // signs with /g flag to change all
  // occurences:
  //
  // a) [mq]text[/mq] - fast scrolling text
  // b) [mq0]text[/mq0] - slow scrolling text
  // c) [imgur]suok1xr.jpg[/imgur] - imgur picture
  // d) [drop]7mrz85gl29eiiks/logo.png[/drop] - dropbox picture
  // e) [minus/i5]ig0qs6fvWvgBu.jpg[/minus] - minus.com picture
  // f) [vi/b]1r8ih4t1.vichan.png[/vi] - vichan /b/ imageboard picture (you can use other boards too)

  const IndependentFilters = [
    {
      before: /\[mq\](.*?)\[\/mq\]/g,
      after: '<marquee scrollamount="10" behavior="scroll">$1</marquee>',
    },
    {
      before: /\[mq0\](.*?)\[\/(mq0|mq)\]/g,
      after: '<marquee scrollamount="5" behavior="alternate">$1</marquee>',
    },
    {
      before: /\[mqp\](.*?)\[\/(mqp|mq)\]/g,
      after: '<marquee scrollamount="10" behavior="alternate">$1</marquee>',
    },
    {
      before: /\[mqr\](.*?)\[\/(mqr|mq)\]/g,
      after: '<marquee scrollamount="20" behavior="alternate">$1</marquee>',
    },
    {
      before: /\[mqk\](.*?)\[\/(mqk|mq)\]/g,
      after: '<marquee scrollamount="30" behavior="alternate">$1</marquee>',
    },
    {
      before: /\[imgur\](.*?)\[\/(i|imgur)\]/g,
      after:
          '<a href="http://i.imgur.com/$1" target="_blank"><img src="http://i.imgur.com/$1" style="max-width:160px"></a>',
    },
    {
      before: /\[drop\](.*?)\[\/(d|drop)\]/g,
      after: '<a href="https://dl.dropboxusercontent.com/s/$1" target="_blank">' +
          '<img src="https://dl.dropboxusercontent.com/s/$1" style="max-width:160px"></a>',
    },
    {
      before: /\[minus\/(.*?)\](.*?)\[\/(m|minus)\]/g,
      after: '<a href="http://$1.minus.com/$2" target="_blank">' +
          '<img src="http://$1.minus.com/$2" style="max-width:160px"></a>',
    },
    {
      before: /\[vi\/(.*?)\](.*?)\[\/(v|vi)\]/g,
      after: '<a href="https://pl.vichan.net/$1/src/$2" target="_blank">' +
          '<img src="https://pl.vichan.net/$1/src/$2" style="max-width:160px"></a>',
    },
  ];

  // /////////////////////////////////////////////////////////////////////////////////////////////////

  /* ----- END OF CONFIGURATION, DO NOT CHANGE ANYTHING BELOW ----- */

  /* ----- Initial channel options ----- */

  // /////////////////////////////////////////////////////////////////////////////////////////////////

  // reload script after unexpected re-connection or script URL change

  let /** @type {boolean} */ LOADED = 'LOADED' in window;
  if (LOADED) {
    location.reload();
  }

  /* ----- getting and setting channel options ----- */
  const defplayer = 'left' ;
  const defuserlist = 'right' ;
  const defqueue = 'left' ;

  const DEFTHEME =
      '/css/themes/slate.css';

  const USERCONFIG = {
    'player': getOrDefault(CHANNEL.name + '_player', defplayer),
    'userlist': getOrDefault(CHANNEL.name + '_userlist', defuserlist),
    'queue': getOrDefault(CHANNEL.name + '_queue', defqueue),
    'qsize': getOrDefault(CHANNEL.name + '_qsize', 'wide'),
    'main': getOrDefault(CHANNEL.name + '_main', 'top'),
    'motd': getOrDefault(CHANNEL.name + '_motd', 'top'),
    'logo': getOrDefault(CHANNEL.name + '_logo', 'no'),
    'logourl': getOrDefault(CHANNEL.name + '_logourl', ''),
    'logoht': getOrDefault(CHANNEL.name + '_logoht', 250),
    'header': getOrDefault(CHANNEL.name + '_header', 'detached'),
    'css': getOrDefault(CHANNEL.name + '_css', 'no'),
    'csscode': getOrDefault(CHANNEL.name + '_csscode', ''),
    'modhash': getOrDefault(CHANNEL.name + '_modhash', ''),
  };
  let USERTHEME = getOrDefault(CHANNEL.name + '_theme', DEFTHEME);
  let FLUID = getOrDefault(CHANNEL.name + '_fluid', false);
  let LAYOUTBOX = getOrDefault(CHANNEL.name + '_layoutbox', true);
  getOrDefault(CHANNEL.name + '_soundslvl', 3);
  let EMBEDIMG = getOrDefault(CHANNEL.name + '_embedimg', true);
  let EMBEDVID = getOrDefault(CHANNEL.name + '_embedvid', true);
  let AUTOVID = getOrDefault(CHANNEL.name + '_autovid', true);
  let USERVISITS = getOrDefault(CHANNEL.name + '_visits', 0);

  // standard item description in the player header
  let DEFDESCR = true;
  // admin chat functions panel visibility
  let CHATFUNC = true;
  // auto clearing messages window
  let CLEARING = false;
  // enabled anti-AFK function
  let ANTIAFK = false;
  // playlist pinned to player
  let PINNED = false;
  // expanded playlist view
  let FULLPL = false;
  // minimized layout
  let MINIMIZED = false;
  // channel database has been loaded
  let CHANDB = false;
  // using altered 'formatChatMessage' built-in function
  let ALTERCHATFORMAT = true;

  // previous read of a current item time for the progress bar
  let PREVTIME = 0;
  // timestamp of the last adding random item from the channel database
  let LASTADD = 1;
  // user minutes online
  let USERONLINE = 0;
  // number of background changes for the drop it
  let DROPBGCHANGE = 1;

  // array of links added from channel database by user
  const ADDEDLINKS = [];

  const WEBKIT = 'webkitRequestAnimationFrame' in window;
  const DROPIT = new Audio('https://github.com/papertek/CyDJ/raw/beta/misc/dropit.wav');
  const HEY = new Audio('https://github.com/papertek/CyDJ/raw/beta/misc/hey.wav');
  const NAY = new Audio('https://github.com/papertek/CyDJ/raw/beta/misc/nay.wav');
  CHATSOUND.volume = 0.4;

  function preloadAudio() {
    const audioButtons = document.querySelectorAll('button[data-type=\'audio\']');
    for (const audioButton of audioButtons) {
      const preloader = new Audio();
      // use bind to link the audio button to the function
      preloader.addEventListener('loadeddata', enableAudioButton.bind(audioButton), true);
      // trigger the download
      preloader.src = audioButton.getAttribute('data-url');
    }
  }

  document.body.addEventListener('load', preloadAudio, true);
  window.onload = preloadAudio();

  // /////////////////////////////////////////////////////////////////////////////////////////////////

  /* ----- Global functions ----- */

  // /////////////////////////////////////////////////////////////////////////////////////////////////

  /**
   * Toggle elements visibility.
   *
   * @param {JQuery<HTMLElement>} div
   */
  function toggleDiv(div) {
    if ($(div).css('display') === 'none') {
      $(div).show();
    } else {
      $(div).hide();
    }
  }

  /**
   * Refresh player.
   */
  function refreshPlayer() {
    //  PLAYER.type = '';
    //  PLAYER.id = '';
    socket.emit('playerReady');
  }

  /**
   * Add link to playlist.
   *
   * @param {string} link
   * @param {string} stand
   */
  function addToPlaylist(link, stand) {
    const parsed = parseMediaLink(link);
    if (parsed['id'] != null) {
      socket.emit(
          'queue',
          {id: parsed['id'], pos: stand, type: parsed['type'], temp: $('.add-temp').prop('checked')});
    }
  }

  // /**
  //  * Get text content from inner HTML.
  //  *
  //  * @param {string} html
  //  * @return {string}
  //  */
  // function getText(html) {
  //   const div = document.createElement('div');
  //   div.innerHTML = html;
  //   return div.textContent || div.innerText;
  // }

  let modalOuter;
  let modalDialog;
  let modalContent;
  let modalHead;
  let modalBody;
  let modalFooter;

  /**
   * Create modal window.
   *
   * @param {string} title
   */
  function createModal(title) {
    modalOuter = $('<div class="modal fade" />').appendTo($('body'));
    modalDialog = $('<div class="modal-dialog" />').appendTo(modalOuter);
    modalContent = $('<div class="modal-content" />').appendTo(modalDialog);
    modalHead = $('<div class="modal-header" />').appendTo(modalContent);
    $('<button class="close" data-dismiss="modal" aria-hidden="true" />')
        .html('&times;')
        .appendTo(modalHead);
    $('<h3 />').text(title).appendTo(modalHead);
    modalBody = $('<div class="modal-body" />').appendTo(modalContent);
    modalFooter = $('<div class="modal-footer" />').appendTo(modalContent);
    modalOuter.on('hidden', () => {
      outer.remove();
      unhidePlayer();
    });
    modalOuter.modal();
  }

  /**
   * Layout elements settings.
   *
   * @param {string} a
   */
  function playerLocation(a) {
    $('#pinup-btn').show();
    if (a === 'left') {
      $('#videowrap').after($('#chatwrap').detach());
      normalPlayer();
      normalChat();
      setTimeout(refreshPlayer(), 1000);
    } else if (a === 'right') {
      $('#videowrap').before($('#chatwrap').detach());
      normalPlayer();
      normalChat();
      setTimeout(refreshPlayer(), 1000);
    } else if (a === 'center') {
      $('#videowrap').after($('#chatwrap').detach());
      $('#videowrap, #chatwrap').removeClass().addClass('col-lg-8 col-lg-offset-2 col-md-12');
      fitPlayer();
      fitChat(200);
      $('#pinup-btn').hide();
      setTimeout(refreshPlayer(), 1000);
    }
  }

  function userlistLocation(a) {
    if (a === 'left') {
      $('#userlist').css('float', 'left');
    } else {
      $('#userlist').css('float', 'right');
    }
  }

  function queueLocation(a) {
    $('#pinup-btn').show();
    if (a === 'right') {
      $('#rightpane').before($('#leftpane').detach());
    } else if (a === 'left') {
      $('#rightpane').after($('#leftpane').detach());
    } else if (a === 'center') {
      $('#rightpane')
          .after($('#leftpane').detach())
          .removeClass()
          .addClass('col-md-8 col-md-offset-2 col-md-12');
      $('#leftpane').removeClass().addClass('col-md-8 col-md-offset-2 col-md-12');
      $('#pinup-btn').hide();
    }
    const b = (a === 'right') ? 'left' : 'right';
    $('#playlistrow').css('background-position', b + ' bottom');
  }

  function queueSize(a) {
    if (USERCONFIG.queue !== 'center') {
      if (a === 'wide') {
        $('#leftpane').removeClass().addClass('col-lg-5 col-md-5');
        $('#rightpane').removeClass().addClass('col-lg-7 col-md-7');
      } else if (a === 'narrow') {
        $('#leftpane').removeClass().addClass('col-lg-7 col-md-7');
        $('#rightpane').removeClass().addClass('col-lg-5 col-md-5');
      }
    }
  }

  function mainLocation(a) {
    if (a === 'top') {
      $('#main').before($('#titlerow').detach()).after($('#playlistrow').detach());
    } else if (a === 'bottom') {
      $('#main').before($('#playlistrow').detach()).before($('#titlerow').detach());
    }
    $('#main').after($('#chatpanel').detach());
  }

  function motdLocation(a) {
    if (a === 'top') {
      $('#zerorow').after($('#announcements').detach()).after($('#motdrow').detach());
    } else if (a === 'bottom') {
      $('#resizewrap').before($('#motdrow').detach()).before($('#announcements').detach());
    }
  }

  /** @param {string} logo */
  function logoInsert(logo) {
    if (logo !== 'no') {
      const link = (logo !== 'user') ? LOGOS.get(logo).url : USERCONFIG.logourl;
      const height = (logo !== 'user') ? LOGOS.get(logo).height : USERCONFIG.logoht;
      azukirow.css({
        'min-height': `${height}px`,
        'background-image': `url("${link}")`,
      });
    } else if (logo === 'no') {
      azukirow.css({
        'min-height': '5px',
        'background-image': '',
      });
    }
  }

  function headerMode(a) {
    $('.navbar-fixed-top').unbind();
    if (a === 'fixed') {
      $('.navbar-fixed-top').css({'position': 'fixed', 'top': '0px'});
      $('#mainpage').css('margin-top', '0px');
    } else if (a === 'detached') {
      $('.navbar-fixed-top').css('position', 'inherit');
      $('#mainpage').css('margin-top', '-72px');
    } else if (a === 'mouseover') {
      $('.navbar-fixed-top')
          .css({'position': 'fixed', 'top': '-40px'})
          .on('mouseover', () => $('.navbar-fixed-top').css('top', '0px'))
          .on('mouseout', () => $('.navbar-fixed-top').css('top', '-40px'));
      $('#mainpage').css('margin-top', '-40px');
    }
  }

  function customCSS(a) {
    $('#usercss').remove();
    if (a === 'yes') {
      $('head').append(`<style id="usercss" type="text/css">${USERCONFIG.csscode}</style>`);
    }
  }

  /**
   * Set global layout according to user preferences.
   */
  function setLayout() {
    playerLocation(USERCONFIG.player);
    userlistLocation(USERCONFIG.userlist);
    queueLocation(USERCONFIG.queue);
    queueSize(USERCONFIG.qsize);
    mainLocation(USERCONFIG.main);
    motdLocation(USERCONFIG.motd);
    logoInsert(USERCONFIG.logo);
    headerMode(USERCONFIG.header);
    customCSS(USERCONFIG.css);
  }

  /**
   * Fit player height.
   */
  function fitPlayer() {
    const videoWidth = $('#videowrap').width();
    const videoHeight = Math.floor(parseInt(videoWidth) * 9 / 16 + 1);
    $('#ytapiplayer').width(videoWidth).height(videoHeight);
  }

  /**
   * Fit chat height.
   *
   * @param {string} a
   */
  function fitChat(a) {
    let VH;
    if (a === 'auto') {
      const VW = $('#messagebuffer').width();
      VH = Math.floor(parseInt(VW) * 9 / 16 + 1);
    } else {
      VH = a;
    }
    $('#messagebuffer').height(VH);
    $('#userlist').height(VH);
  }

  // display mode helper functions

  function bigPlayer() {
    $('#videowrap').removeClass().addClass('col-lg-12 col-md-12');
    fitPlayer();
  }

  function bigChat() {
    $('#chatwrap').removeClass().addClass('col-lg-12 col-md-12');
    fitChat('auto');
  }

  function normalPlayer() {
    $('#videowrap').removeClass().addClass('col-lg-7 col-md-7');
    fitPlayer();
  }

  function normalChat() {
    const c = (PINNED && USERCONFIG.qsize === 'wide') ? 'col-lg-7 col-md-7' : 'col-lg-5 col-md-5';
    $('#chatwrap').removeClass().addClass(c);
    fitChat(338);
  }

  /**
   * Set display mode.
   *
   * @param {string} a
   */
  function setMode(a) {
    $('#main').show();
    pinupbtn.hide();
    modesel.find('option[value=\'chMode\'], option[value=\'rMode\']').show();
    if (PINNED) {
      modesel.find('option[value=\'chMode\']').hide();
    }

    if (a === 'syMode') {
      $('#videowrap, #videowrap p, #videowrap div, #chatwrap, #rightpane, #pinup-btn').show();
      $('#config-btn, #configbtnwrap br, #pinup-btn').show();
      $('#min-layout').parent().show();

      normalPlayer();

      const c = (PINNED && USERCONFIG.qsize === 'wide') ? 'col-lg-7 col-md-7' : 'col-lg-5 col-md-5';
      $('#chatwrap').removeClass().addClass(c);
      const VW = $('#messagebuffer').width();
      const VH = Math.floor(parseInt(VW) * 9 / 16 + 1);
      const H = parseInt(VH) - $('#chatline').outerHeight() - 1;
      $('#messagebuffer').height(H);
      $('#userlist').height(H);

      if (USERCONFIG.player === 'center') {
        playerLocation('center');
      }
      if (PINNED) {
        pinUp();
      }
    } else if (a === 'kMode') {
      $('#videowrap').show();
      if (PINNED) {
        $('#rightpane').hide();
      } else {
        $('#chatwrap').hide();
      }
      $('#fontspanel, #emotespanel').hide();

      bigPlayer();
    } else if (a === 'chMode') {
      $('#chatwrap').show();

      if (WEBKIT) {
        $('#videowrap').hide();
      } else {
        $('#videowrap div, #videowrap p').hide();
        $('#ytapiplayer').width(1).height(1);
      }

      bigChat();
    } else if (a === 'rMode') {
      if (WEBKIT) {
        $('#main').hide();
      } else {
        if (PINNED) {
          $('#rightpane').hide();
        } else {
          $('#chatwrap').hide();
        }
        $('#videowrap div, #videowrap p').hide();
        $('#ytapiplayer').width(1).height(1);
      }

      if (!PINNED) {
        $('#min-layout').parent().show();
      }
    }
  }

  /**
   * Fix layout after changing media.
   */
  function setModeAfterVideoChange() {
    const m = modesel.val();
    if (m === 'syMode' || m === 'chMode' || m === 'rMode') {
      setMode(m);
    }
  }

  /**
   * Set MOTD.
   */
  function changeMOTD() {
    {
      // adding logo
      let logo = 0;
      let len = MOTDAutoLogo_Array.length;
      if (len < 1) {
        MOTDAutoLogo_Array = ['https://dl.dropboxusercontent.com/s/7mrz85gl29eiiks/logo.png'];
        len = 1;
      }
      $(`<center><img id="motdlogo" src="${MOTDAutoLogo_Array[logo]}" />` +
        '</center>')
          .prependTo('#motd');
    }
    {
      const rulesbtnwrap = $('<div id="rulesbtnwrap" />').appendTo('#motd');
      $('<button id="rules-btn" class="btn btn-default btn-sm" />')
          .text(RulesBtn_Caption + ' ▸')
          .appendTo(rulesbtnwrap)
          .on('click', () => rulesModal());
    }
  }

  function rulesModal() {
    createModal('Rules Panel');
    modalBody.append(RulesBtn_HTML);
    $('<button class ="btn btn-default" type="button" data-dismiss="modal"/>')
        .text('Close')
        .appendTo(modalFooter);
  }

  /**
   * Change title bar description.
   */
  function changeTitle() {
    const title = $('#currenttitle').text();
    $('#currenttitle').text(title.replace(/Currently Playing:/, TitleBarDescription_Caption));
  }

  let titlerow;

  /**
   * YouTube/DailyMotion progress bar.
   */
  function progressBar() {
    let a = 0;
    if (PLAYER.type === 'yt') {
      const b = PLAYER.player.getCurrentTime();
      if (b != PREVTIME) {
        a = b / PLAYER.player.getDuration() * 100;
      }
      PREVTIME = b;
    } else if (PLAYER.type === 'dm') {
      const b = PLAYER.player.currentTime;
      if (b != PREVTIME) {
        a = b / PLAYER.player.duration * 100;
      }
      PREVTIME = b;
    }
    titlerow.css('background-size', a + '% 100%');
  }


  /**
   * Set chat side panel properties.
   *
   * @param {string} div
   */
  function setPanelProperties(div) {
    const bgcolor = $('body').css('background-color');
    const color = $('body').css('color');
    const height = $('#userlist').height();
    const width = $('#userlist').width();
    $(div).css({
      'background-color': bgcolor,
      'color': color,
      'height': height + 'px',
      'width': width + 'px',
    });
  }

  class ChatStats {
    constructor() {
      this.numberOfMessages = 0;
      this.totalMessageLength = 0;
    }

    /**
     * Create a new ChatStats from a JSON string.
     *
     * @param {string} json A JSON string containing some or all of the ChatStats
     *     fields.
     * @return {!ChatStats} A new ChatStats.
     */
    static fromJsonString(json) {
      const chatStats = new ChatStats();

      if (!json) {
        return chatStats;
      }
      const jsonObject = JSON.parse(json);

      if (jsonObject.numberOfMessages) {
        chatStats.numberOfMessages = jsonObject.numberOfMessages;
      }
      if (jsonObject.totalMessageLength) {
        chatStats.totalMessageLength = jsonObject.totalMessageLength;
      }

      return chatStats;
    }

    static getLocalStorageKey() {
      return `cydj_${CHANNEL.name}_chat_stats`;
    }
  }

  /**
   * Get the current chat stats.
   *
   * @return {!ChatStats} The chat stats.
   */
  function getChatStats() {
    return ChatStats.fromJsonString(window.localStorage[ChatStats.getLocalStorageKey()]);
  }

  /**
   * Update chat stats from a message.
   *
   * @param {string} msg Message that was sent.
   */
  function updateChatStats(msg) {
    const chatStats = getChatStats();

    chatStats.numberOfMessages++;
    chatStats.totalMessageLength += msg.length;

    window.localStorage[ChatStats.getLocalStorageKey()] = JSON.stringify(chatStats);
  }

  /**
   * Insert code into chatline.
   *
   * (used in injected html)
   *
   * @param {string} str
   */
  function insertText(str) {
    $('#chatline').val($('#chatline').val() + str).focus();
  }

  let modbtn;

  /**
   * Toggle mod panel button.
   */
  function toggleModPanel() {
    if (CLIENT.rank < 2) {
      modbtn.remove();
    } else {
      modbtn.add();
    }
  }

  /**
   * Create media database.
   */
  function createDatabase() {
    let html =
        '<button id="la1" class="btn btn-default btn-sm db-break" onclick="cydj.toggleCat(1)">' +
        CHANNEL_DATABASE$1[0][1] + '</button>' +
        '<ul id="l1" class="videolist db-cat">';

    let len = CHANNEL_DATABASE$1.length;
    for (let i = 1; i < CHANNEL_DATABASE$1.length; i++) {
      if (CHANNEL_DATABASE$1[i][0] === '') {
        item_count[layer_nr - 1] = count_nr;
        opening[layer_nr - 1] = 0;
        layer_nr++;
        count_nr = 0;

        html += `</ul><button id="la${layer_nr}" ` +
            `class="btn btn-default btn-sm db-break" ` +
            `onclick="cydj.toggleCat(${layer_nr})">` +
            `${CHANNEL_DATABASE$1[i][1]}</button>` +
            `<ul id="l${layer_nr}" class="videolist db-cat">`;
      } else {
        item_nr++;
        count_nr++;
        const link = CHANNEL_DATABASE$1[i][0];

        html += '<li class="queue_entry">' +
            `<button class="btn btn-default btn-xs pull-right" ` +
            `onclick="cydj.addVideo('${link}')">End</button>`;

        const parsed = parseMediaLink(link);
        if (parsed['type'] === 'yt') {
          const a = parsed['id'];
          html += '<button class="btn btn-default btn-xs pull-right" ' +
              `onclick="cydj.prevVideo('${a}')">` +
              '<i class="glyphicon glyphicon-film"></i>' +
              '</button>';
        }
        html += '<span class="badge db-badge">' + item_nr + '</span><span class="db-title">' +
            CHANNEL_DATABASE$1[i][1] + '</span><br /><span class="db-link">' + link + '</span>';
      }
    }

    html += '</ul><br /><br /><div id="cleardbwrap">' +
        '<button id="cleardb-btn" class="btn btn-default btn-sm">' +
        'Reload Data (if channel seems working slow)</button>' +
        '</div>';

    item_count[layer_nr - 1] = count_nr;
    opening[layer_nr - 1] = 0;
    dbwell.html(html);
    html = '';

    len = item_count.length;
    for (let i = 1; i <= len; i++) {
      $('#la' + i).append(' [' + item_count[i - 1] + ']');
    }

    $('#cleardb-btn').on('click', () => {
      toggleDiv(dbwrap);
      dbwell.html('');
      CHANDB = false;
    });

    for (const i of opening.keys()) {
      opening[i] = 0;
    }
    $('.db-cat').hide();
    CHANDB = true;
  }

  /**
   * Toggle database sections.
   *
   * (used in injected html)
   *
   * @param {number} a
   */
  function toggleCat(a) {
    const b = a - 1;
    if (opening[b] == 0) {
      $('.db-cat').hide();
      for (const i of opening.keys()) {
        opening[i] = 0;
      }
      $(`#l${a}`).show();
      opening[b] = 1;
    } else {
      $(`#l${a}`).hide();
      opening[b] = 0;
    }
  }

  /**
   * Patch layout for guest logins.
   */
  function patchWrap() {
    setTimeout(() => $('#playlistmanagerwrap').show(), 1500);
  }

  /**
   * Toggle advanced playlist options buttons.
   */
  function toggleAdvancedPl() {
    if (CLIENT.rank < 2) {
      advplaylist.hide();
    } else {
      advplaylist.show();
    }
    if (hasPermission('playlistjump')) {
      playnextbtn.show();
    } else {
      playnextbtn.hide();
    }
    if (hasPermission('playlistadd') && UI_ChannelDatabase) {
      addrandombtn.show();
    } else {
      addrandombtn.hide();
    }
    if (hasPermission('playlistmove')) {
      bumplastbtn.show();
    } else {
      bumplastbtn.hide();
    }
    if (hasPermission('playlistdelete')) {
      deletelastbtn.show();
    } else {
      deletelastbtn.hide();
    }
  }

  /**
   * Get playlist helper functions.
   *
   * @return {string}
   */
  function formatRawList() {
    const len = $('#queue .queue_entry').length + 1;
    const list = [];
    for (let i = 1; i < len; i++) {
      const item = $(`#queue .queue_entry:nth-child(${i})`).data('media');
      list.push(formatURL(item));
    }
    return list.join(',');
  }

  function formatPlainTextList() {
    const len = $('#queue .queue_entry').length + 1;
    const list = [];
    for (let i = 1; i < len; i++) {
      const item = $(`#queue .queue_entry:nth-child(${i})`).data('media');
      list.push(`${i}. ${formatURL(item)} // ${item.title} [${item.duration}]`);
    }
    return list.join('\n');
  }

  function formatHTMLList() {
    const len = $('#queue .queue_entry').length + 1;
    const list = [];
    for (let i = 1; i < len; i++) {
      const item = $(`#queue .queue_entry:nth-child(${i})`).data('media');
      const {title, duration} = item;
      const link = formatURL(item);
      list.push(
          `<li>${title} [${duration}] - <a href="${link}" target="_blank">` +
          `${link}</a></li>`);
    }
    return list.join('\n');
  }

  function formatOrderedList() {
    const len = $('#queue .queue_entry').length + 1;
    const list = [];
    for (let i = 1; i < len; i++) {
      const item = $(`#queue .queue_entry:nth-child(${i})`).data('media');
      const link = formatURL(item);
      list.push(`${item.title} ■■ ${link} ■■ [${item.duration}]`);
      list.sort();
    }
    return list.join('\n');
  }

  function formatDBList() {
    const len = $('#queue .queue_entry').length + 1;
    const list = [];
    for (let i = 1; i < len; i++) {
      const item = $(`#queue .queue_entry:nth-child(${i})`).data('media');
      const re1 = new RegExp('\\\\', 'g');
      const re2 = new RegExp('\'', 'g');
      const title = item.title.replace(re1, '\\\\').replace(re2, '\\\'');
      list.push(`['${formatURL(item)}', '${title}'],`);
    }
    return list.join('\n');
  }

  /**
   * Add database link to playlist.
   *
   * @param {string} link
   */
  function addVideo(link) {
    const parsed = parseMediaLink(link);
    const idp = parsed['id'];
    if (idp != null) {
      const time = (new Date()).getTime();
      if (!hasPermission('playlistadd')) {
        alert('Please create a registered account to queue links!');
      } else if (ADDEDLINKS[idp] != undefined && time - ADDEDLINKS[idp] < 120000) {
        alert('Please wait before adding another link!');
      } else {
        socket.emit('queue', {
          id: idp,
          pos: 'end',
          type: parsed['type'],
          temp: $('.add-temp').prop('checked'),
        });
        ADDEDLINKS[idp] = time;
      }
    }
  }

  /**
   * Set user online time.
   */
  function onlineTime() {
    USERONLINE++;
    const h = Math.floor(USERONLINE / 60);
    let m = USERONLINE - h * 60;
    if (m < 10) {
      m = '0' + m;
    }
    onlinetime.html(h + ':' + m);
  }

  const LIGHT_THEMES = [
    '/css/themes/bootstrap-theme.min.css',
    '/css/themes/light.css',
  ];

  /**
   * Set user CSS.
   */
  function setUserCSS$1() {
    $('#chanexternalcss').detach().appendTo('head');
    $('#chanexternalcss-fix').remove();

    const cssfix = `
      #mainpage {
        padding-top: 52px;
      }

      #motdrow,
      #announcements,
      #main,
      #playlistrow {
        border: solid 2px transparent;
        margin-bottom: 5px;
      }

      #main > div,
      #playlistrow > div {
        padding-left: 5px;
        padding-right: 5px;
        margin-top: 5px;
        margin-bottom: 5px;
      }

      #motdwrap {
        margin:5px -10px;
      }

      #announcements .alert {
        margin:0px -10px 5px;
      }

      #drinkcount {
        margin: 0px;
      }
    `;

    const greencss = `
    body {
      background-color: #141414
  }

  a {
      color: #94d1bd
  }

  a:hover, a:focus {
      color: #b8e0d3
  }

  .qe_title {
      color: #ff66ab
  }

  .queue_entry {
      background-color: #293d36bd;
  }

  .dropdown-menu {
      background-color: #383E40;
  }

  .btn {
      background-image: linear-gradient(#4c333e00,#4c333e00 60%,#4c333e00)!important;
      border-color: #4cb290!important
  }

  .btn-default:hover {
      background-color: #4cb290
  }

  .modal-body {
      background-color: #293d36
  }

  .modal-header {
      background-color: #293d36
  }

  .modal-footer {
      background-color: #293d36
  }

  .modal-content {
      background-color: #293d36
  }

  #motd {
      background-color: #fff0
  }

  #motdwrap {
      background-color: #293d36bd
  }

  #userlist {
      background-color: #222a27
  }`;

    $('head').append(`<style id="chanexternalcss-fix" type="text/css">${cssfix}</style>`);
    $('#usertheme').attr('href', '/css/themes/slate.css');
    $('#usertheme-fix').remove();
    if (USERTHEME.includes('/css/themes/')) {
      $('#usertheme').attr('href', USERTHEME);
    } else {
      $(`<link id="usertheme-fix" rel="stylesheet" type="text/css" href="${USERTHEME}"></link>`)
          .appendTo('head');
    }
    $('#usercss').remove();
    if (USERCONFIG.css !== 'no') {
      $('head').append(`<style id="usercss" type="text/css">${USERCONFIG.csscode}</style>`);
    }
    const newThemeType = LIGHT_THEMES.includes(USERTHEME) ? 'light-theme' : 'dark-theme';
    const oldThemeType = LIGHT_THEMES.includes(USERTHEME) ? 'dark-theme' : 'light-theme';
    const messageBuffer = document.getElementById('messagebuffer');
    messageBuffer.classList.add(newThemeType);
    messageBuffer.classList.remove(oldThemeType);
    if (document.getElementById('usertheme').getAttribute('href') === '/css/themes/slate.css') {
      if (document.getElementById('green-update') == null) {
        const style = document.createElement('style');
        style.id = 'green-update';
        style.textContent = greencss;
        document.getElementsByTagName('head')[0].appendChild(style);
      }
    } else {
      if (document.getElementById('green-update')) {
        document.getElementById('green-update').remove();
      }
    }
  }
  // attempt a fix on css
  window.onload = setUserCSS$1();

  // /////////////////////////////////////////////////////////////////////////////////////////////////

  /* ----- UI events functions ----- */

  // /////////////////////////////////////////////////////////////////////////////////////////////////

  function prepareFilters() {
    str = '{"name":"white color","source":"\\\\[white\\\\]","flags":"g",' +
        '"replace":"<span style=\\"color:white\\">","active":true,"filterlinks":false},' +
        '{"name":"yellow color","source":"\\\\[yellow\\\\]","flags":"g",' +
        '"replace":"<span style=\\"color:gold\\">","active":true,"filterlinks":false},' +
        '{"name":"orange color","source":"\\\\[orange\\\\]","flags":"g",' +
        '"replace":"<span style=\\"color:orange\\">","active":true,"filterlinks":false},' +
        '{"name":"pink color","source":"\\\\[pink\\\\]","flags":"g",' +
        '"replace":"<span style=\\"color:#FFBBFF\\">","active":true,"filterlinks":false},' +
        '{"name":"red color","source":"\\\\[red\\\\]","flags":"g",' +
        '"replace":"<span style=\\"color:red\\">","active":true,"filterlinks":false},' +
        '{"name":"limegreen color","source":"\\\\[lime\\\\]","flags":"g",' +
        '"replace":"<span style=\\"color:limegreen\\">","active":true,"filterlinks":false},' +
        '{"name":"green color","source":"\\\\[green\\\\]","flags":"g",' +
        '"replace":"<span style=\\"color:green\\">","active":true,"filterlinks":false},' +
        '{"name":"aqua color","source":"\\\\[aqua\\\\]","flags":"g",' +
        '"replace":"<span style=\\"color:aqua\\">","active":true,"filterlinks":false},' +
        '{"name":"blue color","source":"\\\\[blue\\\\]","flags":"g",' +
        '"replace":"<span style=\\"color:blue\\">","active":true,"filterlinks":false},' +
        '{"name":"violet color","source":"\\\\[violet\\\\]","flags":"g",' +
        '"replace":"<span style=\\"color:#660099\\">","active":true,"filterlinks":false},' +
        '{"name":"brown color","source":"\\\\[brown\\\\]","flags":"g",' +
        '"replace":"<span style=\\"color:#660000\\">","active":true,"filterlinks":false},' +
        '{"name":"silver color","source":"\\\\[silver\\\\]","flags":"g",' +
        '"replace":"<span style=\\"color:silver\\">","active":true,"filterlinks":false},' +
        '{"name":"black color","source":"\\\\[black\\\\]","flags":"g",' +
        '"replace":"<span style=\\"color:black\\">","active":true,"filterlinks":false},' +
        '{"name":"white color on black","source":"\\\\[bw\\\\]","flags":"g",' +
        '"replace":"<span style=\\"color:white; background-color:black\\">","active":true,"filterlinks":false},' +
        '{"name":"bold text","source":"\\\\[b\\\\]","flags":"g",' +
        '"replace":"<span style=\\"font-weight:bold\\">","active":true,"filterlinks":false},' +
        '{"name":"italic text","source":"\\\\[i\\\\]","flags":"g",' +
        '"replace":"<span style=\\"font-style:italic\\">","active":true,"filterlinks":false},' +
        '{"name":"underlined text","source":"\\\\[u\\\\]","flags":"g",' +
        '"replace":"<span style=\\"text-decoration:underline\\">","active":true,"filterlinks":false},' +
        '{"name":"striked text","source":"\\\\[s\\\\]","flags":"g",' +
        '"replace":"<span style=\\"text-decoration:line-through\\">","active":true,"filterlinks":false},' +
        '{"name":"distinguished text","source":"\\\\[d\\\\]","flags":"g",' +
        '"replace":"<span class=\\"dist\\">","active":true,"filterlinks":false},' +
        '{"name":"fire text","source":"\\\\[f\\\\]","flags":"g",' +
        '"replace":"<span style=\\"color:#FFFFFF; font-family:impact, sans-serif; padding-top:20px; ' +
        'text-shadow:0px 0px 4px #000000, 0px -5px 4px #FFFF33, 2px -8px 6px #FFDD33, -2px -15px 10px #FF8800, ' +
        '2px -20px 18px #FF2200; letter-spacing:2px\\">","active":true,"filterlinks":false},' +
        '{"name":"short spoiler","source":"\\\\[sp\\\\]","flags":"g",' +
        '"replace":"<span class=\\"spoiler\\">","active":true,"filterlinks":false},' +
        '{"name":"closing font style","source":"\\\\[\\\\/\\\\]","flags":"g",' +
        '"replace":"</span>","active":true,"filterlinks":false}]';

    callback = (data) => {
      socket.listeners('chatFilters').splice(socket.listeners('chatFilters').indexOf(callback));
      json = JSON.stringify(data);
      comma = (json.length != '2') ? ',' : '';
      $('#cs-chatfilters-exporttext').val(json.substring(0, json.length - 1) + comma + str);
    };

    socket.on('chatFilters', callback);
    socket.emit('requestChatFilters');

    txt = 'This option does NOT affect your current filters, all of them will be saved.\n' +
        'Click "Import filter list" button if you\'ll decide to install.';
    alert(txt);
  }

  /**
   * Show chat additional functions.
   */
  function showChatFunctions() {
    $('#userlist').append('<div id="chatfunc-dropdown" />');
    setPanelProperties('#chatfunc-dropdown');

    $('#chatfunc-dropdown').append('<div>Prevent room freezing if spam:</div>');

    $('<button id="spamclear-btn" class="btn btn-xs btn-default">Auto Clear</button>')
        .appendTo('#chatfunc-dropdown')
        .on('click', function() {
          if (!CLEARING) {
            $(this).text('Stop Clearing').addClass('btn-danger');
            CLEARING = setInterval(() => socket.emit('chatMsg', {msg: '/clear'}), 500);
          } else {
            $(this).text('Auto Clear').removeClass('btn-danger');
            clearInterval(CLEARING);
            CLEARING = false;
          }
        });
    if (CLEARING) {
      $('#spamclear-btn').text('Stop Clearing').addClass('btn-danger');
    }

    $('#chatfunc-dropdown').append('<div>Prevent me from AFK:</div>');

    $('<button id="antiafk-btn" class="btn btn-xs btn-default">Anti AFK</button>')
        .appendTo('#chatfunc-dropdown')
        .on('click', function() {
          if (!ANTIAFK) {
            $(this).addClass('btn-danger');
            ANTIAFK = setInterval(function() {
              $('#userlist').find('span[class^=userlist]').each(function() {
                if ($(this).html() === CLIENT.name && $(this).css('font-style') === 'italic') {
                  socket.emit('chatMsg', {msg: '/afk'});
                  return;
                }
              });
            }, 4000);
          } else {
            $(this).removeClass('btn-danger');
            clearInterval(ANTIAFK);
            ANTIAFK = false;
          }
        });
    if (ANTIAFK) {
      $('#antiafk-btn').addClass('btn-danger');
    }
  }

  /**
   * Show chat commands modal window.
   */
  function showChatHelp() {
    createModal('Chat Commands');
    $('<button class ="btn btn-default" type="button" data-dismiss="modal"/>')
        .text('Close')
        .appendTo(modalFooter);

    {
      modalBody.append('<strong>Fonts commands</strong><br /><br />');
      const html =
          [
            '<code>[white]</code>, <code>[yellow]</code>, <code>[orange]</code>, <code>[pink]</code>, ' +
                '<code>[red]</code>, <code>[lime]</code>, <code>[green]</code>, <code>[aqua]</code>, ' +
                '<code>[blue]</code>, <code>[violet]</code>, <code>[brown]</code>, <code>[silver]</code>, ' +
                '<code>[black]</code> - begin of colored text',
            '<code>[bw]</code> - begin of white text on the black background',
            '<code>[b]</code>, <code>[i]</code>, <code>[u]</code>, <code>[s]</code> - ' +
                'begin of bold, italic, underlined, striked or underlined text',
            '<code>[d]</code> - begin of a distinguished text (red on yellow background)',
            '<code>[f]</code> - begin of a text with a fire effect',
            '<code>[sp]</code> - begin of an inline spoiler',
            '<code>[/]</code> - <b>end of any color, style or spoiler</b>',
            '<code>[f]</code> - begin of a text with a fire effect',
            '<code>@</code> - beginning and end of continuous text scrolling',
            '<code>@@</code> - beginning and end of bounce text scrolling',
            '<code>@@@</code> - beginning and end of buggy text scrolling (still fun!)',
            '<code>!</code> - beginning and end of faster bounce text scrolling',
            '<code>!!</code> - beginning and end of fastest bounce text scrolling!',
          ].map((line) => `<li>${line}</li>`)
              .join('') +
          'For a quick CyDJ guide check out this Google Doc <a href="https://tinyurl.com/CyDJguideV2" target="_blank">here</a>.';
      $('<ul />').html(html).appendTo(modalBody);
    }
    {
      const arr = {
        'pick': 'choosing a random option from a list separated by commas ' +
            '(e.g. <i>!pick japan,korea,china</i>)',
        'ask': 'asking a question with yes/no type answer ' +
            '(e.g. <i>!ask Will this channel be popular?</i>)',
        'q': 'displaying random quote (<i>!q</i>)',
        'dice': 'rolling dice (<i>!dice</i>)',
        'roll': 'rolling 3-digit number (<i>!roll</i>)',
        'time': 'displaying current time (<i>!time</i>)',
        'np': 'displaying current playing title (<i>!np</i>)',
        'media': 'links current media in the playlist (<i>!media</i>)',
        'skip': 'skip current item (<i>!skip</i>)',
        'add': 'adding a link to the end of playlist ' +
            '(e.g. <i>!add https://www.youtube.com/watch?v=29FFHC2D12Q</i>)',
        'stat': 'displaying user chat statistics in current session (<i>!stat</i>)',
        'version': 'displays current script version (<i>!version</i>)',
        'report': 'links a report fourm for reporting a user (<i>!report</i>)',
        'guide': 'links the CyDJ guide (<i>!guide</i>)',
        'script': 'links the CyDJ GitHub (<i>!script</i>)',
        'botcommands': 'link to bot commands (<i>!botcommands</i>)',
        'discord': 'link to the CyDJ discord (<i>!discord</i>)',
        'link': 'post a TinyURL link for this room (<i>!link</i>)',
        'randomemote': 'displays a random emote from the emote list (<i>!randomemote</i>)',
      };
      {
        arr['random'] = 'adding random link from database (<i>!random</i>)';
      }
      modalBody.append('<strong>New chat commands</strong><br /><br />');
      const ul = $('<ul />').appendTo(modalBody);
      for (const [cmd, desc] of Object.entries(arr)) {
        ul.append(`<li><code>!${cmd}</code> - ${desc}</li>`);
      }
    }
    const arr = {
      'me': 'showing an action-style message (username does something, e.g. <i>/me is dancing</i>)',
      'sp':
          'hiding a message in a hover-to-show spoiler box (e.g. <i>/sp This message is hidden</i>)',
      'afk': 'toggling your AFK (away from keyboard) status (<i>/afk</i>)',
    };
    modalBody.append('<br /><strong>Default CyTube commands</strong><br /><br />');
    const ul = $('<ul />').appendTo(modalBody);
    for (const [cmd, desc] of Object.entries(arr)) {
      ul.append(`<li><code>/${cmd}</code> - ${desc}</li>`);
    }
  }

  /**
   * Show moderators panel.
   */
  function showModPanel() {
    createModal('Moderators panel');

    $('<button class ="btn btn-default" type="button" data-dismiss="modal"/>')
        .text('Close')
        .appendTo(modalFooter);
    let html = '';
    for (const panel of ModPanel_Array) {
      const name = panel[0];
      const mess = panel[1];
      if (name === '') {
        html += `<i class="glyphicon glyphicon-comment"></i> ${mess}<br /><br />`;
      } else if (name === CLIENT.name) {
        html = '<i class="glyphicon glyphicon-comment"></i> ' +
            '<i class="glyphicon glyphicon-user"></i> ' +
            `(to: ${CLIENT.name}) → ${mess}<br /><br />`;
      }
    }
    modalBody.append(html);
    $('#mod-btn').removeClass('btn-danger').html('<i class="glyphicon glyphicon-tasks"></i>');
    setOpt(CHANNEL.name + '_modhash', HASH);
  }

  let mediainfo;

  /**
   * Show info about current or next media.
   */
  function showInfo() {
    if (DEFDESCR) {
      const arr = [];
      let text = '// NEXT ON QUEUE: //';
      const li1 = $('.queue_active').next();
      const li2 = li1.next();
      const li3 = li2.next();
      const li4 = li3.next();
      const li5 = li4.next();
      const li6 = li5.next();
      const li7 = li6.next();
      const li8 = li7.next();
      if (li1.length > 0) {
        arr.push(` 1▸ ${li1.children('a').html()}`);
      }
      if (li2.length > 0) {
        arr.push(` // 2▸ ${li2.children('a').html()}`);
      }
      if (li3.length > 0) {
        arr.push(` // 3▸ ${li3.children('a').html()}`);
      }
      if (li4.length > 0) {
        arr.push(` // 4▸ ${li4.children('a').html()}`);
      }
      if (li5.length > 0) {
        arr.push(` // 5▸ ${li5.children('a').html()}`);
      }
      if (li6.length > 0) {
        arr.push(` // 6▸ ${li6.children('a').html()}`);
      }
      if (li7.length > 0) {
        arr.push(` // 7▸ ${li7.children('a').html()}`);
      }
      if (li8.length > 0) {
        arr.push(` // 8▸ ${li8.children('a').html()}`);
      }
      text += arr.join('');
      if (arr.length < 8) {
        text += ' // END OF QUEUE //';
      }
      if (arr.length > 7) {
        text += ' // PLUS MORE //';
      }
      mediainfo.html(`<marquee scrollamount="7.5">${text}</marquee>`);
    } else {
      const contr = $('.queue_active').attr('title');
      if (typeof contr === 'undefined') {
        const text = 'Please add media to the playlist to begin listening.';
        mediainfo.html(`<marquee scrollamount="7.5">${text}</marquee>`);
      } else {
        const duration = $('.queue_active .qe_time').html();
        const text = `${contr} [${duration}]`;
        mediainfo.html(`${text}`);
      }
    }
  }

  let hideplayerbtn;
  let coverpl;

  /**
   * Hide and show player with covering image.
   */
  function coverPlayer() {
    $('#videowrap').addClass('relative');
    const w = $('#ytapiplayer').css('width');
    const h = $('#videowrap').css('height').replace('px', '') - 30;
    coverpl = $('<div id="coverpl" />')
                  .css({
                    'width': w,
                    'height': h + 'px',
                    'background-image': `url(${PlayerHiding_URL})`,
                  })
                  .appendTo($('#videowrap'));
    hideplayerbtn.addClass('btn-danger').attr('title', 'Show player');
  }

  function showPlayer() {
    coverpl.remove();
    hideplayerbtn.removeClass('btn-danger').attr('title', 'Hide player');
    $('#videowrap').removeClass('relative');
  }

  /**
   * Preview YT video in modal window.
   *
   * (used in injected html)
   *
   * @param {string} a
   */
  function prevVideo(a) {
    createModal('Preview Video');

    $('<iframe id="previewFrame" width="558" height="314" frameborder="0" />')
        .attr('src', `https://www.youtube.com/embed/${a}?wmode=transparent&enablejsapi`)
        .appendTo(modalBody);
    const closepv = $('<button class ="btn btn-default" type="button" data-dismiss="modal"/>')
                        .text('Close')
                        .appendTo(modalFooter);
    closepv.on('click', () => {
      $('Preview Video').empty();
    });
  }

  /**
   * Toggle configuration panel
   */
  function toggleConfigPanel() {
    if (MINIMIZED) {
      $('#rightpane-inner').show();
      $('#azukirow, #leftpane-inner').show();
      if (!$('#hide-motd').prop('checked')) {
        $('#motdrow').show();
      }
      if (!$('#hide-ann').prop('checked')) {
        $('#announcements').show();
      }
      if (!$('#hide-hf').prop('checked')) {
        $('footer').show();
      }
      pinupbtn.show();
      layoutbtn.removeClass('btn-danger')
          .addClass('btn-success')
          .html('<span class="glyphicon glyphicon-cog"></span> Layout');
      $('#min-layout').prop('checked', false);
      $('#plcontrol button, #db-btn, #gallery-btn, #newpollbtn').removeAttr('disabled');
      MINIMIZED = false;
      // patch: giving back 15px additional space on the top
      $('#mainpage')
          .css('margin-top', $('#mainpage').css('margin-top').replace('px', '') * 1 - 15 + 'px');
    } else {
      toggleDiv(configwrap);
      if (configwrap.css('display') === 'none') {
        layoutbtn.removeClass('btn-success');
      } else {
        layoutbtn.addClass('btn-success');
      }
      LAYOUTBOX = !LAYOUTBOX;
      setOpt(CHANNEL.name + '_layoutbox', LAYOUTBOX);
    }
  }

  /**
   * Show layout configuration modal window.
   */
  function showConfig() {
    createModal('Layout Configuration');

    const form = $('<form class="form-horizontal" />').appendTo(modalBody);

    function addOption(txt, elem) {
      const g = $('<div class="form-group" />').appendTo(form);
      $('<label class="control-label col-sm-4" />').text(txt).appendTo(g);
      const c = $('<div class="col-sm-8" />').appendTo(g);
      elem.appendTo(c);
    }

    const playerlocation = $('<select />').addClass('form-control');
    $('<option />').attr('value', 'left').text('left').appendTo(playerlocation);
    $('<option />').attr('value', 'right').text('right').appendTo(playerlocation);
    $('<option />').attr('value', 'center').text('center').appendTo(playerlocation);
    playerlocation.val(USERCONFIG.player);
    addOption('Player location', playerlocation);

    const userlistlocation = $('<select />').addClass('form-control');
    $('<option />').attr('value', 'left').text('left').appendTo(userlistlocation);
    $('<option />').attr('value', 'right').text('right').appendTo(userlistlocation);
    userlistlocation.val(USERCONFIG.userlist);
    addOption('Userlist location', userlistlocation);

    const queuelocation = $('<select />').addClass('form-control');
    $('<option />').attr('value', 'left').text('left').appendTo(queuelocation);
    $('<option />').attr('value', 'right').text('right').appendTo(queuelocation);
    $('<option />').attr('value', 'center').text('center').appendTo(queuelocation);
    queuelocation.val(USERCONFIG.queue);
    addOption('Queue location', queuelocation);

    const queuesize = $('<select />').addClass('form-control');
    $('<option />').attr('value', 'wide').text('wide').appendTo(queuesize);
    $('<option />').attr('value', 'narrow').text('narrow').appendTo(queuesize);
    queuesize.val(USERCONFIG.qsize);
    addOption('Queue column size', queuesize);

    const mainlocation = $('<select />').addClass('form-control');
    $('<option />').attr('value', 'top').text('above playlist').appendTo(mainlocation);
    $('<option />').attr('value', 'bottom').text('below playlist').appendTo(mainlocation);
    mainlocation.val(USERCONFIG.main);
    addOption('Player & chat', mainlocation);

    const motdlocation = $('<select />').addClass('form-control');
    $('<option />').attr('value', 'top').text('channel top').appendTo(motdlocation);
    $('<option />').attr('value', 'bottom').text('channel bottom').appendTo(motdlocation);
    motdlocation.val(USERCONFIG.motd);
    addOption('MOTD & announcements', motdlocation);

    const logoinsert = $('<select />').addClass('form-control');
    $('<option />').attr('value', 'no').text('no image').appendTo(logoinsert);
    $('<option />').attr('value', 'user').text('user image').appendTo(logoinsert);
    for (const logoName of LOGOS.keys()) {
      $('<option />').attr('value', logoName).text(logoName).appendTo(logoinsert);
    }
    logoinsert.val(USERCONFIG.logo);
    addOption('Top logo', logoinsert);

    const userlogo =
        $('<input />').addClass('form-control').attr('type', 'text').attr('placeholder', 'Image URL');
    userlogo.val('');
    addOption('User logo URL', userlogo);

    const userlogoht = $('<input />')
                           .addClass('form-control')
                           .attr('type', 'text')
                           .attr('placeholder', 'Image Height (in px)');
    userlogoht.val('');
    addOption('User logo height', userlogoht);

    if (USERCONFIG.logo !== 'user') {
      userlogo.parent().parent().hide();
      userlogoht.parent().parent().hide();
    } else {
      userlogo.val(USERCONFIG.logourl);
      userlogoht.val(USERCONFIG.logoht);
    }

    const headermode = $('<select />').addClass('form-control');
    $('<option />').attr('value', 'fixed').text('fixed').appendTo(headermode);
    $('<option />').attr('value', 'detached').text('detached').appendTo(headermode);
    $('<option />').attr('value', 'mouseover').text('mouseover').appendTo(headermode);
    headermode.val(USERCONFIG.header);
    addOption('Header menu', headermode);

    const customcss = $('<select />').addClass('form-control');
    $('<option />').attr('value', 'no').text('no').appendTo(customcss);
    $('<option />').attr('value', 'yes').text('yes').appendTo(customcss);
    customcss.val(USERCONFIG.css);
    addOption('Custom CSS', customcss);

    const usercss =
        $('<textarea rows="8" />').addClass('form-control').attr('placeholder', 'Insert CSS code');
    usercss.val(USERCONFIG.csscode);
    addOption('CSS code', usercss);

    if (USERCONFIG.css === 'no') {
      usercss.parent().parent().hide();
    }

    const submit = $('<button class="btn btn-default btn-success" />')
                       .text('Save changes')
                       .appendTo(modalFooter);
    const reset =
        $('<button class="btn btn-default pull-left" />').text('Default').appendTo(modalFooter);
    const column =
        $('<button class="btn btn-default pull-left" />').text('One column').appendTo(modalFooter);

    logoinsert.on('change', () => {
      if (logoinsert.val() === 'user') {
        userlogo.parent().parent().show();
        userlogoht.parent().parent().show();
        userlogo.val(USERCONFIG.logourl);
        userlogoht.val(USERCONFIG.logoht);
      } else {
        userlogo.parent().parent().hide();
        userlogoht.parent().parent().hide();
      }
    });

    customcss.on('change', () => {
      if (customcss.val() === 'yes') {
        usercss.parent().parent().show();
      } else {
        usercss.parent().parent().hide();
      }
    });

    submit.on('click', () => {
      modalOuter.modal('hide');

      USERCONFIG.player = playerlocation.val();
      setOpt(CHANNEL.name + '_player', playerlocation.val());

      USERCONFIG.userlist = userlistlocation.val();
      setOpt(CHANNEL.name + '_userlist', userlistlocation.val());

      USERCONFIG.queue = queuelocation.val();
      setOpt(CHANNEL.name + '_queue', queuelocation.val());

      USERCONFIG.qsize = queuesize.val();
      setOpt(CHANNEL.name + '_qsize', queuesize.val());

      USERCONFIG.main = mainlocation.val();
      setOpt(CHANNEL.name + '_main', mainlocation.val());

      USERCONFIG.motd = motdlocation.val();
      setOpt(CHANNEL.name + '_motd', motdlocation.val());

      if (logoinsert.val() === 'user') {
        if (userlogo.val() === '') {
          logoinsert.val('no');
        } else if (userlogoht.val() === '') {
          userlogoht.val('200');
        } else {
          a = userlogoht.val() * 1;
          if (isNaN(a) || a < 1) {
            userlogoht.val('200');
          }
        }
        USERCONFIG.logourl = userlogo.val();
        USERCONFIG.logoht = userlogoht.val();
        setOpt(CHANNEL.name + '_logourl', userlogo.val());
        setOpt(CHANNEL.name + '_logoht', userlogoht.val());
      }

      USERCONFIG.logo = logoinsert.val();
      setOpt(CHANNEL.name + '_logo', logoinsert.val());

      USERCONFIG.header = headermode.val();
      setOpt(CHANNEL.name + '_header', headermode.val());

      if (customcss.val() === 'yes') {
        USERCONFIG.csscode = usercss.val();
        setOpt(CHANNEL.name + '_csscode', usercss.val());
      }

      USERCONFIG.css = customcss.val();
      setOpt(CHANNEL.name + '_css', customcss.val());

      setLayout();
      scrollChat();
      scrollQueue();
    });

    reset.on('click', () => {
      modalOuter.modal('hide');

      USERCONFIG.player = defplayer;
      setOpt(CHANNEL.name + '_player', defplayer);

      USERCONFIG.userlist = defuserlist;
      setOpt(CHANNEL.name + '_userlist', defuserlist);

      USERCONFIG.queue = defqueue;
      setOpt(CHANNEL.name + '_queue', defqueue);

      USERCONFIG.qsize = 'wide';
      setOpt(CHANNEL.name + '_qsize', 'wide');

      USERCONFIG.main = 'top';
      setOpt(CHANNEL.name + '_main', 'top');

      USERCONFIG.motd = 'top';
      setOpt(CHANNEL.name + '_motd', 'top');

      USERCONFIG.logo = 'no';
      setOpt(CHANNEL.name + '_logo', 'no');

      USERCONFIG.header = 'detached';
      setOpt(CHANNEL.name + '_header', 'detached');

      USERCONFIG.css = 'no';
      setOpt(CHANNEL.name + '_css', 'no');

      setLayout();
      scrollChat();
      scrollQueue();
    });

    column.on('click', () => {
      modalOuter.modal('hide');

      USERCONFIG.player = 'center';
      setOpt(CHANNEL.name + '_player', 'center');

      USERCONFIG.userlist = 'left';
      setOpt(CHANNEL.name + '_userlist', 'left');

      USERCONFIG.queue = 'center';
      setOpt(CHANNEL.name + '_queue', 'center');

      USERCONFIG.main = 'top';
      setOpt(CHANNEL.name + '_main', 'top');

      USERCONFIG.motd = 'bottom';
      setOpt(CHANNEL.name + '_motd', 'bottom');

      USERCONFIG.logo = 'no';
      setOpt(CHANNEL.name + '_logo', 'no');

      USERCONFIG.header = 'detached';
      setOpt(CHANNEL.name + '_header', 'detached');

      setLayout();
      scrollChat();
      scrollQueue();
    });
  }

  /**
   * Toggle fluid layout.
   */
  function toggleFluidLayout() {
    if (FLUID) {
      $('body').removeClass('fullscreen');
      $('.container-fluid').removeClass('container-fluid').addClass('container');
      $('#fontspanel, #emotespanel').removeClass('fluidpanel');
      setTimeout(refreshPlayer(), 1000);
    } else {
      $('body').addClass('fullscreen');
      $('.container').removeClass('container').addClass('container-fluid');
      $('footer .container-fluid').removeClass('container-fluid').addClass('container');
      $('#fontspanel, #emotespanel').addClass('fluidpanel');
      setTimeout(refreshPlayer(), 1000);
    }
    {
      setMode(modesel.val());
    }
    FLUID = !FLUID;
    setOpt(CHANNEL.name + '_fluid', FLUID);
    scrollChat();
  }

  /**
   * Toggle minimized layout.
   */
  function toggleMinLayout() {
    if (!MINIMIZED) {
      $('#rightpane-inner').hide();
      $('#azukirow, #motdrow, #announcements, #leftpane-inner, footer').hide();
      pinupbtn.hide();
      layoutbtn.removeClass('btn-success').addClass('btn-danger').html('Maximize');
      $('#plcontrol button, #db-btn, #gallery-btn, #newpollbtn').attr('disabled', 'disabled');
      MINIMIZED = true;
      // patch for 15px more space on the top
      $('#mainpage')
          .css('margin-top', $('#mainpage').css('margin-top').replace('px', '') * 1 + 15 + 'px');
    }
  }

  /**
   * Pin-up playlist to player.
   */
  function pinUp() {
    if (USERCONFIG.player === 'left') {
      $('#videowrap').after($('#rightpane').detach());
    } else if (USERCONFIG.player === 'right') {
      $('#videowrap').before($('#rightpane').detach());
    }
    if (USERCONFIG.queue === 'left') {
      $('#leftpane').before($('#chatwrap').detach());
    } else if (USERCONFIG.queue === 'right') {
      $('#leftpane').after($('#chatwrap').detach());
    }
    $('#rightpane').removeClass().addClass('col-lg-5 col-md-5');
    if (USERCONFIG.qsize === 'wide') {
      $('#chatwrap').removeClass().addClass('col-lg-7 col-md-7');
    } else {
      $('#chatwrap').removeClass().addClass('col-lg-5 col-md-5');
    }
    $('#pinup-btn').attr('title', 'Unpin playlist');
    $('#config-btn, #configbtnwrap br').hide();
    $('#min-layout').parent().hide();
    $('#mode-sel').find('option[value=\'chMode\']').hide();
    PINNED = true;
  }

  /**
   * Un-pin playlist from player.
   */
  function unPin() {
    if (USERCONFIG.queue === 'left') {
      $('#leftpane').before($('#rightpane').detach());
    } else if (USERCONFIG.queue === 'right') {
      $('#leftpane').after($('#rightpane').detach());
    }
    if (USERCONFIG.player === 'left') {
      $('#videowrap').after($('#chatwrap').detach());
    } else if (USERCONFIG.player === 'right') {
      $('#videowrap').before($('#chatwrap').detach());
    }
    $('#chatwrap').removeClass().addClass('col-lg-5 col-md-5');
    if (USERCONFIG.qsize === 'wide') {
      $('#rightpane').removeClass().addClass('col-lg-7 col-md-7');
    } else {
      $('#rightpane').removeClass().addClass('col-lg-5 col-md-5');
    }
    $('#pinup-btn').attr('title', 'Pinup playlist to player');
    $('#config-btn, #configbtnwrap br').show();
    $('#min-layout').parent().show();
    $('#mode-sel').find('option[value=\'chMode\']').show();
    PINNED = false;
  }

  /**
   * Show contributors list.
   */
  function showContributors() {
    createModal('Contributors List');

    const /** @type {!Map<string, number} */ userQueueCounts = new Map();

    const /** @type {!Array<HTMLLIElement>} */ queuedItems =
        Array.from(document.getElementById('queue').children);
    const userQueues = queuedItems.map((elem) => elem.getAttribute('title'))
                           .filter((title) => title)
                           .map((title) => title.replace('Added by: ', ''));
    for (const user of userQueues) {
      const current = userQueueCounts.get(user) || 0;
      userQueueCounts.set(user, current + 1);
    }

    const userContributions = Array.from(userQueueCounts.entries())
                                  .sort((a, b) => b[1] - a[1])
                                  .map(([user, count]) => `${count}: ${user}`);

    modalBody.append(
        '<strong>Number of added playlist items:</strong>' +
        '<br /><br />' + userContributions.join('<br />'));
  }

  /**
   * Expand/collapse queue.
   */
  function expandQueue() {
    if (!FULLPL) {
      $('#queue').css('max-height', '100000px');
      expandbtn.attr('title', 'Collapse playlist');
      FULLPL = true;
    } else {
      $('#queue').css('max-height', '500px');
      expandbtn.attr('title', 'Expand playlist');
      FULLPL = false;
      scrollQueue();
    }
  }

  /**
   * Get playlist URLs.
   */
  function getPlaylistURLs() {
    createModal('Playlist URLs');

    const data =
        $('<textarea rows="10" class="form-control" />').val(formatRawList()).appendTo(modalBody);
    const rlist =
        $('<button class="btn btn-default pull-left">Raw Links</button>').appendTo(modalFooter);
    const tlist =
        $('<button class="btn btn-default pull-left">Plain Text</button>').appendTo(modalFooter);
    const hlist =
        $('<button class="btn btn-default pull-left">HTML Code</button>').appendTo(modalFooter);
    const olist =
        $('<button class="btn btn-default pull-left">Ordered List</button>').appendTo(modalFooter);
    const dlist =
        $('<button class="btn btn-default pull-left">Database Format</button>').appendTo(modalFooter);

    rlist.on('click', () => data.val(formatRawList()));
    tlist.on('click', () => data.val(formatPlainTextList()));
    hlist.on('click', () => data.val(`<ol>\n${formatHTMLList()}\n</ol>`));
    olist.on('click', () => data.val(formatOrderedList()));
    dlist.on('click', () => data.val(formatDBList()));
  }

  /**
   * Add random item from channel database. Original is 120000 for 2 minutes.
   */
  function addRandomItem() {
    const time = (new Date()).getTime();
    if ((time - LASTADD) < 1000) {
      alert('Please wait 30 seconds before adding a random video!');
    } else {
      let link = '';
      while (link === '') {
        const rnd = Math.round(Math.random() * (CHANNEL_DATABASE$1.length - 1));
        link = CHANNEL_DATABASE$1[rnd][0];
      }
      addToPlaylist(link, 'end');
      LASTADD = time;
    }
  }

  // /////////////////////////////////////////////////////////////////////////////////////////////////

  /* ----- User Interface ----- */

  // /////////////////////////////////////////////////////////////////////////////////////////////////

  // adding important hidden reference row
  $('<div id="zerorow" class="row" />').insertBefore('#motdrow');

  // adding top logo row
  const azukirow = $('<div id="azukirow" class="row" />').insertBefore(zerorow);

  // adding video wrap if user has enabled "Hide Player" option
  if (USEROPTS.hidevid) {
    $('#chatwrap, #chatline').removeClass('col-lg-12 col-md-12').addClass('col-lg-5 col-md-5');
    videowrap = $('<div id="videowrap" class="col-lg-7 col-md-7" />').insertBefore('#chatwrap');
    currenttitle = $('<p id="currenttitle" />')
                       .html('Currently Playing: ' + $('.queue_active a').html())
                       .appendTo(videowrap);
    ytapiplayer = $('<div id="ytapiplayer" />').appendTo(videowrap);

    html = 'According to your User Preferences, video player is hidden. ' +
        'Click a button below to continue hiding player. ' +
        'Click default "Reload" icon to show player in this session. ' +
        'If you\'ll stay in "Chat Only" mode, functionality of this channel will be limited.<br /><br />';
    makeAlert('No Player', html).appendTo(ytapiplayer);

    staybtn =
        $('<button id="stay-btn" class="btn btn-default btn-sm">Stay In "Chat Only" Mode</button>')
            .appendTo('#ytapiplayer .alert')
            .on('click', () => {
              videowrap.remove();
              $('#chatwrap').removeClass().addClass('col-lg-12 col-md-12');
              $('#configform, #modeform, #pinup-btn').hide();
              fitChat('auto');
            });
  }

  // changing initial layout to compact for new users
  $('body').addClass('fluid');
  compactLayout();
  setLayout();
  scrollChat();
  scrollQueue();
  setTimeout(refreshPlayer(), 1000);

  // adding "id" attributes
  $('.navbar-collapse .navbar-nav').children().first().attr('id', 'home-link');
  $('#home-link').next().attr('id', 'account-link');
  $('#account-link').next().attr('id', 'options-link');
  $('#options-link').next().attr('id', 'channelset-link');
  $('#channelset-link').next().attr('id', 'layout-link');

  // changing location of some layout elements
  $('#main').prepend($('#drinkbar').detach());
  $('#videowrap').append('<div id="playercontrols" class="btn-group" />');
  $('#playercontrols').append($('#mediarefresh').detach());
  $('#rightpane').prepend($('#videocontrols').detach());
  $('#rightpane').prepend($('#plcontrol').detach());
  $('#leftpane').prepend($('#newpollbtn').detach());
  $('#leftpane').prepend($('#emotelistbtn').detach());
  $('#plcontrol').prepend($('#showmediaurl').detach());

  // header and footer links open in a new tab
  $('#home-link a, #account-link ul a, .credit a').attr('target', '_blank');

  // adding default CyTube Plus CSS if not set
  if ($('#chanexternalcss').length < 1) {
    const url = 'https://dl.dropboxusercontent.com/s/hbhlrmys5piztgo/main.css';
    $('head').append(
        `<link id="chanexternalcss" href="${url}" ` +
        'rel="stylesheet" type="text/css">');
  }

  // attempt to fix dumbass buttons
  // but for some stupid reason the load event is called on like every chat message leading to a
  // buuuunch of layout thrashing pepeAgony. so only do this once.
  let alreadySetAfterLoad = false;
  document.body.addEventListener('load', () => {
    if (alreadySetAfterLoad) {
      return;
    }
    setUserCSS$1();
    alreadySetAfterLoad = true;
  }, true);

  // adding favicon
  {
    $(document).ready(() => {
      $(`<link id="chanfavicon" href="${Favicon_URL}" type="image/x-icon" ` +
        'rel="shortcut icon" />')
          .appendTo('head');
    });
  }

  // changing carets to unicode characters
  $('nav .caret, #cs-edit-dd-toggle .caret').removeClass('caret').html(' ▾');

  // adding important messages to "Options"

  const text1 =
      'Please use "Personal theme" selector in the room configuration box to select a theme for this channel. ';
  const text2 =
      'Please use "Click to configure" button in the room configuration box to configure this channel. ';
  const text3 =
      'If you want to make global changes, please go to another channel, or make changes before accepting ' +
      'special features.';
  $('#us-theme').hide();
  $('#us-theme').parent().append(`<p class="text-danger">${text1}${text3}</p>`);
  $('#us-layout').hide();
  $('#us-layout').parent().append(`<p class="text-danger">${text2}${text3}</p>`);

  // creating channel settings filters preparation button
  $('<button id="cs-fonts-import" class="btn btn-default pull-right">Prepare fonts filters</button>')
      .insertAfter('#cs-chatfilters-import')
      .on('click', () => prepareFilters());

  // fixing layout after saving global user options
  $('#useroptions .modal-footer button:nth-child(1)').on('click', () => {
    if (USEROPTS.hidevid) {
      location.reload();
    }
    html = 'All changes are applying globally, but this channel uses its own layout. ' +
        'Please use "Click to configure" button to configure this channel layout.<br />' +
        'Reload player if the wrong title is displaying. ' +
        'In HD layout or if player is removed, you may not see some elements due to CyTube API. ' +
        'If so, reload channel.';
    makeAlert('You have changed global User Preferences', html, 'alert-info')
        .appendTo('#announcements');
    compactLayout();
    setLayout();
    if (FLUID) {
      fluidLayout();
    }
    setUserCSS$1();
    scrollChat();
    scrollQueue();
  });

  // changing channel name
  {
    $('.navbar-brand').html(ChannelName_Caption);
  }

  // adding channel small logo
  {
    $(`<img id="chanavatar" src="${MiniLogo_URL}" />`).prependTo('.navbar-brand');
  }

  // adding header dropdown menu
  {
    const headerdrop = $('<li id="headerdrop" class="dropdown" />').insertAfter('#home-link');
    $('<a class="dropdown-toggle" data-toggle="dropdown" href="#" />')
        .html(HeaderDropMenu_Title + ' ▾')
        .appendTo(headerdrop);
    const headermenu = $('<ul id="headermenu" class="dropdown-menu" />').appendTo(headerdrop);

    if (HeaderDropMenu_Array.length < 1) {
      HeaderDropMenu_Array = [['no menu available', '']];
    }
    for (const menu of HeaderDropMenu_Array) {
      const title = menu[0];
      const link = menu[1];
      if (link === '') {
        headermenu.append(`<li class="dropdown-header">${title}</li>`);
      } else {
        $('<li class="header-drop-link" />')
            .append(`<a href="${link}" target="_blank">${title}</a>`)
            .appendTo(headermenu);
      }
    }
  }

  // adding version to the tab
  {
    const headerdrop = $('<li id="headerdrop" class="dropdown" />').insertAfter('#channelset-link');
    $('<a class="dropdown-toggle disabled" href="https://github.com/papertek/CyDJ" />')
        .html(`${Version_Now}`)
        .appendTo(headerdrop);
  }

  // optional removing of "Layout" menu from header
  {
    $('#layout-link').remove();
  }

  {
    $('#showmediaurl').html('<i class="glyphicon glyphicon-plus"></i> Add');
  }

  // setting MOTD
  {
    socket.on('setMotd', changeMOTD);
    changeMOTD();
  }

  // adding custom channel announcement
  {
    makeAlert(ChannelAnnouncement_Title, ChannelAnnouncement_HTML).appendTo('#announcements');
  }

  // adding full-width title bar and progress bar
  {
    titlerow = $('<div id="titlerow" class="row" />').insertBefore('#main');
    $('<div id="titlerow-outer" class="col-md-12" />')
        .html($('#currenttitle').detach())
        .appendTo(titlerow);
    mediainfo = $('<p id="mediainfo" />').html('Nothing is playing').prependTo('#videowrap');

    {
      setInterval(() => progressBar(), 2000);
    }

    socket.on('changeMedia', showInfo);
    showInfo();

    {
      $('#titlerow #currenttitle').css({
        'background-image': `url("${TitleIcon_URL}")`,
        'background-repeat': 'no-repeat',
        'background-position': 'left center',
      });
    }
  }

  // changing title bar description
  {
    socket.on('changeMedia', changeTitle);
    changeTitle();
  }

  /**
   * Drop the beat!
   */
  function dropthebeat() {
    const userlistthing = document.getElementById('userlist');
    const elems = [userlistthing];

    elems.forEach((elem) => elem.style.backgroundImage = 'none');
    DROPBGCHANGE++;

    const newColor = DROPBGCHANGE % 2 === 0 ? 'red' : 'black';
    elems.forEach((elem) => elem.style.backgroundColor = newColor);
  }

  // customizing chat notifications sound
  {
    CHATSOUND = new Audio(CustomPingSound_URL);
    CHATSOUND.volume = 0.4;
  }

  // public skipping from ui
  // THIS ONLY ADDS A MESSAGE, the function itself is in ui.js from cytube
  {
    $('#voteskip').on('click', function() {
      socket.emit('chatMsg', {msg: '[red]Meh..[/] ResidentSleeper'});
      $('#voteskip').attr('disabled', true);
      NAY.volume = 0.4;
      NAY.play();
    });
  }
  // RARE JOHN NOTE!! define data.count later, i think its defined somewhere in cytube side
  /* const votehey = function(data) {
    const icon = $('#hey-btn').find('.glyphicon').remove();
    if (data.count > 0) {
      $('#hey-btn').text(' (' + data.count + ')');
    } else {
      $('#hey-btn').text('');
    }

    icon.prependTo($('#hey-btn'));
  };*/

  // additional chat functions
  const chatflair =
      $('<span id="chatflair" class="label label-success pull-right pointer">Func</span>')
          .insertAfter('#adminflair')
          .on('click', () => {
            if (!CHATFUNC) {
              $('#sounds-dropdown').remove();
              showChatFunctions();
              CHATFUNC = false;
            } else {
              $('#chatfunc-dropdown').remove();
              CHATFUNC = true;
            }
          });

  /**
   * Toggle additional chat functions.
   */
  function toggleChatFunctions() {
    if (CLIENT.rank > 2) {
      chatflair.show();
    } else {
      chatflair.hide();
    }
  }
  socket.on('rank', toggleChatFunctions);
  toggleChatFunctions();

  {
    socket.emit('chatMsg', {msg: `/me ${JoinText_Message}`});
  }

  let chatcontrols;

  // adding chat buttons wrapping
  {
    chatcontrols = $('<div id="chatcontrols" class="btn-group" />').appendTo('#chatwrap');
  }

  let fontspanel;

  // adding chat fonts button
  {
    $('<button id="fonts-btn" class="btn btn-sm btn-default" title="Display fonts panel" />')
        .html('<i class="glyphicon glyphicon-font"></i>')
        .appendTo(chatcontrols)
        .on('click', () => toggleDiv(fontspanel));
  }

  // moving emote button attempt
  {
    $('#emotelistbtn').appendTo(chatcontrols);
    $('#emotelistbtn').html('<i title="Open emote menu" class="glyphicon glyphicon-picture"></i>');
  }

  // adding chat commands button
  {
    $('<button id="chathelp-btn" class="btn btn-sm btn-default" title="Show chat commands"/>')
        .html('<i class="glyphicon glyphicon-question-sign"></i>')
        .appendTo(chatcontrols)
        .on('click', () => showChatHelp());
  }

  // adding the stupid context button to show up
  {
    $('<button id="context-btn" class="btn btn-sm btn-default" title="Opens a menu with links" />')
        .html('<i class="glyphicon glyphicon-align-center"></i>')
        .appendTo(chatcontrols)
        .on('click', () => showContextMenu());
  }

  /**
   * Adding the context button function (what it does!).
   */
  function showContextMenu() {
    createModal('Context Menu');
    $('<button class ="btn btn-default" type="button" data-dismiss="modal"/>')
        .text('Close')
        .appendTo(modalFooter);
    {
      modalBody.append('<strong>Useful links</strong><br /><br />');
      const html =
          [
            '<a href="https://github.com/papertek/CyDJ/releases" target="_blank">Click here to view latest updates</a>!',
            '<a href="https://docs.google.com/forms/d/e/1FAIpQLSdNlinbPb2Lr5qmtIPWg9gnVWr1US82CRf4X8bKmmLvj7NIhg/viewform" target="_blank">Click here to report a user</a>!',
            '<a href="https://docs.google.com/document/d/1X2TdR9hc2KK0WEBLjY06CZaY30QyKxsI_7CQ1qbSz0g/edit" target="_blank">Click here to open the CyDJ guide</a>!',
            '<a href="https://discord.gg/g8tCGSc2bx" target="_blank">Click here to join the Discord</a>!',
          ].map((item) => `<li>${item}</li>`)
              .join('');
      $('<ul />').html(html).appendTo(modalBody);
    }
  }
  /*
  function showDebugging() {
    createModal('Debug stuff');
    if (UI_DEBUG) {
      modalBody.append('<strong>Buttons that do stuff</strong><br /><br />');
      for (let i = 0; i < 4; i++) {
        const debugbotan =
            $('<button class="btn btn-default btn-success"><br />').appendTo(modalBody);
        debugbotan.text(`${i}test`) + i;
      }
    }
  }
  */
  // adding easter egg button
  {
    $('<button id="party-btn" class="btn btn-sm btn-default" title="Party! DO NOT USE IF YOU ARE SUBJECT TO EPILEPSY!!!" />')
        .text('Party!')
        .appendTo(chatcontrols)
        .on('click', () => showDrop());
  }

  /**
   * Easter egg drop button function.
   */
  function showDrop() {
    DROPIT.volume = 0.4;
    DROPIT.play();
    const partyFlash = setInterval(() => dropthebeat(), 100);
    setTimeout(() => {
      DROPBGCHANGE = 0;
      clearInterval(partyFlash);

      const userlistthing = document.getElementById('userlist');
      const elems = [userlistthing];

      elems.forEach((elem) => elem.style.backgroundImage = '');
      elems.forEach((elem) => elem.style.backgroundColor = '');

      setUserCSS$1();
    }, 5000);
    socket.emit('chatMsg', {msg: '[mqr] GOOOOOOO xqcCheer FEELSWAYTOOGOOD [/mqr]'});
  }

  // adding moderators panel button
  {
    modbtn = $('<button id="mod-btn" class="btn btn-sm btn-default" title="Show moderators panel" />')
                 .html('<i class="glyphicon glyphicon-tasks"></i>')
                 .appendTo(chatcontrols)
                 .on('click', () => showModPanel());

    socket.on('rank', toggleModPanel);
    toggleModPanel();
  }

  // adding hey nay thing
  {
    const transcontrols =
        $('<div id="transcontrols" class="btn-group pull-right" />').appendTo('#videowrap');
    $('<button id="hey-btn" class="btn btn-sm btn-default" title="Woot! (Cancels Voteskip)" />')
        .html('<i class="glyphicon glyphicon-headphones"></i>')
        .appendTo(transcontrols)
        .on('click', () => {
          socket.emit('chatMsg', {msg: '/afk'});
          socket.emit('chatMsg', {msg: '[lime]Woot![/] PepePls'});
          HEY.volume = 0.4;
          HEY.play();
          // votehey();
        });
    $('<button id="nay-btn" class="btn btn-sm btn-default" title="Meh.. (Voteskip)" />')
        .html('<i class="glyphicon glyphicon-thumbs-down"></i>')
        .appendTo(transcontrols)
        .on('click', () => {
          socket.emit('chatMsg', {msg: '[red]Meh..[/] ResidentSleeper'});
          socket.emit('voteskip');
          NAY.volume = 0.4;
          NAY.play();
        });
  }

  // adding player control buttons
  {
    {
      $('<button id="switchdescr-btn" class="btn btn-sm btn-default" />')
          .attr('title', 'Switch description')
          .html('<span class="glyphicon glyphicon-info-sign"></span>')
          .appendTo('#playercontrols')
          .on('click', () => {
            DEFDESCR = !DEFDESCR;
            showInfo();
          });
    }

    hideplayerbtn =
        $('<button id="hideplayer-btn" class="btn btn-sm btn-default" title="Hide player" />')
            .html('<span class="glyphicon glyphicon-ban-circle"></span>')
            .appendTo('#playercontrols')
            .on('click', function() {
              if ($(this).hasClass('btn-danger')) {
                showPlayer();
              } else {
                coverPlayer();
              }
            });
  }

  // creating fonts and emotes main row
  let chatpanel;
  {
    chatpanel = $('<div id="chatpanel" class="row" />').insertBefore('#playlistrow');
  }

  // adding fonts panel
  {
    fontspanel = $('<div id="fontspanel" style="display:none" />').appendTo(chatpanel);
    const fontsbtnwrap = $('<div id="fontsbtnwrap" />').appendTo(fontspanel);

    const FontsArray = [
      ['background:white', 'white', '■'],
      ['background:gold', 'yellow', '■'],
      ['background:orange', 'orange', '■'],
      ['background:#FFBBFF', 'pink', '■'],
      ['background:red', 'red', '■'],
      ['background:limegreen', 'lime', '■'],
      ['background:green', 'green', '■'],
      ['background:aqua', 'aqua', '■'],
      ['background:blue', 'blue', '■'],
      ['background:#660099', 'violet', '■'],
      ['background:#660000', 'brown', '■'],
      ['background:silver', 'silver', '■'],
      ['background:black', 'black', '■'],
      ['background:black; color:white', 'bw', 'a'],
      ['background:white; font-weight:bold; color:black', 'b', 'B'],
      ['background:white; font-style:italic; color:black', 'i', 'I'],
      ['background:white; text-decoration:underline; color:black', 'u', 'U'],
      ['background:white; text-decoration:line-through; color:black', 's', 's'],
      ['background:gold; color:red', 'd', 'D'],
      ['background:black; color:gold; font-family:impact, sans-serif', 'f', 'F'],
      ['background:black; color:white', 'sp', 'sp'],
      ['background:white; color:black; border:solid 2px red', '\\/', '\[\/\]'],
    ];

    for (const [i, font] of FontsArray.entries()) {
      $(`<button id="cbtn${i}" onclick="cydj.insertText('[${font[1]}]')" />`)
          .addClass('btn btn-primary')
          .attr('style', font[0])
          .text(font[2])
          .appendTo(fontsbtnwrap);
      if (i % 13 === 12) {
        fontsbtnwrap.append('<br />');
      }
    }
  }

  // adding background image to empty playlistrow corner
  if (EmptyCornerBackground.length > 0) {
    const rnd = Math.round(Math.random() * (EmptyCornerBackground.length - 1));
    $('#playlistrow').css({
      'background-image': `url("${EmptyCornerBackground[rnd]}")`,
      'background-repeat': 'no-repeat',
    });
  }

  // adding layout configuration panel button
  const layoutbtn =
      $('<button id="layout-btn" class="btn btn-sm btn-default btn-success pull-right" />')
          .html('<span class="glyphicon glyphicon-cog"></span> Layout')
          .prependTo('#leftpane')
          .on('click', () => toggleConfigPanel());
  $('#playlistmanagerwrap').show();

  let leftpanecontrols;

  // adding media database and gallery wrap
  {
    leftpanecontrols =
        $('<div id="leftpanecontrols" class="btn-group pull-left" />').insertAfter(layoutbtn);
  }

  // adding media database button
  {
    $('<button id="db-btn" class="btn btn-sm btn-default" title="Display submitted songs in categories" />')
        .text('Public Playlists')
        .appendTo(leftpanecontrols)
        .on('click', () => {
          toggleDiv(dbwrap);
          if (!CHANDB) {
            createDatabase();
          }
        });
  }

  // adding layout configuration well
  const configwrap =
      $('<div id="configwrap" class="col-lg-12 col-md-12" />').appendTo('#leftpane-inner');
  const configwell = $('<div id="config-well" class="well form-horizontal" />').appendTo(configwrap);

  if (!LAYOUTBOX) {
    toggleDiv(configwrap);
    layoutbtn.removeClass('btn-success');
  }

  // adding layout configuration form

  const configform = $('<div id="configform" class="form-group" />').appendTo(configwell);
  $('<div class="col-lg-5 col-md-5">Global layout</div>').appendTo(configform);
  const configbtnwrap =
      $('<div id="configbtnwrap" class="col-lg-7 col-md-7" />').appendTo(configform);

  $('<button id="config-btn" class="btn btn-default">Click to configure</button>')
      .appendTo(configbtnwrap)
      .on('click', () => showConfig());

  configbtnwrap.append('<br />');

  const fluidlayout = $('<label class="checkbox-inline" />').appendTo(configbtnwrap);
  $('<input type="checkbox" id="fluid-layout" value="no" />')
      .appendTo(fluidlayout)
      .on('click', () => toggleFluidLayout())
      .after(' Fluid');

  const minlayout = $('<label class="checkbox-inline" />').appendTo(configbtnwrap);
  $('<input type="checkbox" id="min-layout" value="no" />')
      .appendTo(minlayout)
      .on('click', () => toggleMinLayout())
      .after(' Minimized');

  let modesel;

  // adding selector with player display modes
  {
    const modeform = $('<div id="modeform" class="form-group" />').appendTo(configwell);
    $('<div class="col-lg-5 col-md-5">Display mode</div>').appendTo(modeform);
    const modewrap = $('<div id="modewrap" class="col-lg-7 col-md-7" />').appendTo(modeform);

    modesel = $('<select id="mode-sel" class="form-control" />')
                  .append('<option value="syMode">synchtube mode</option>')
                  .append('<option value="kMode">cinema mode</option>')
                  .append('<option value="chMode">chatroom mode</option>')
                  .append('<option value="rMode">radio mode</option>')
                  .appendTo(modewrap)
                  .on('change', function() {
                    $('#config-btn, #configbtnwrap br').hide();
                    $('#min-layout').parent().hide();
                    $('#sounds-dropdown, #chatfunc-dropdown').remove();
                    CHATFUNC = false;
                    if (PLAYER.type === 'jw') {
                      refreshPlayer();
                    }
                    setMode($(this).val());
                    scrollQueue();
                    scrollChat();
                    showPlayer();
                  });

    socket.on('changeMedia', setModeAfterVideoChange);
  }

  // adding selector with channel themes

  const themeform = $('<div id="themeform" class="form-group" />').appendTo(configwell);
  $('<div class="col-lg-5 col-md-5">Personal theme</div>').appendTo(themeform);
  const themewrap = $('<div id="themewrap" class="col-lg-7 col-md-7" />').appendTo(themeform);

  const themesel =
      $('<select id="theme-sel" class="form-control" />')
          .append('<option value="" class="theme-header" disabled>default themes</option>')
          .append('<option value="/css/themes/light.css"># Light</option>')
          .append('<option value="/css/themes/bootstrap-theme.min.css"># Bootstrap</option>')
          .append('<option value="/css/themes/slate.css"># Slate</option>')
          .append('<option value="/css/themes/cyborg.css"># Cyborg</option>')
          .appendTo(themewrap)
          .on('change', function() {
            $('#sounds-dropdown, #chatfunc-dropdown').remove();
            $('#playlistmanagerwrap').show();
            CHATFUNC = false;
            USERTHEME = $(this).val();
            setUserCSS$1();
            setOpt(CHANNEL.name + '_theme', USERTHEME);
          });

  if (ThemesCSS.length > 0) {
    themesel.append('<option value="" class="theme-header" disabled>additional themes</option>');
    for (const css of ThemesCSS) {
      themesel.append(`<option value="${css[1]}">${css[0]}</option>`);
    }
  }

  themesel.val(USERTHEME);

  // adding temporary hiding options

  const hideform = $('<div id="hideform" class="form-group" />').appendTo(configwell);
  $('<div class="col-lg-5 col-md-5 conf-cap">Temporary hide</div>').appendTo(hideform);
  const hidewrap = $('<div id="hidewrap" class="col-lg-7 col-md-7" />').appendTo(hideform);

  const hidemotd = $('<label class="checkbox-inline" />').appendTo(hidewrap);
  $('<input type="checkbox" id="hide-motd" value="no" >')
      .appendTo(hidemotd)
      .on('click', () => toggleDiv('#motdrow'))
      .after(' MOTD');

  const hideann = $('<label class="checkbox-inline" />').appendTo(hidewrap);
  $('<input type="checkbox" id="hide-ann" value="no" />')
      .appendTo(hideann)
      .on('click', () => toggleDiv('#announcements'))
      .after(' Announcements');

  const hidetitle = $('<label class="checkbox-inline" />').appendTo(hidewrap);
  $('<input type="checkbox" id="hide-title" value="no" />')
      .appendTo(hidetitle)
      .on('click',
          () => {
            toggleDiv('#titlerow');
            toggleDiv('#currenttitle');
          })
      .after(' Title');

  const hidepl = $('<label class="checkbox-inline" />').appendTo(hidewrap);
  $('<input type="checkbox" id="hide-pl" value="no" />')
      .appendTo(hidepl)
      .on('click',
          () => {
            toggleDiv('#queue');
            toggleDiv('#plmeta');
          })
      .after(' Playlist');

  const hidehf = $('<label class="checkbox-inline" />').appendTo(hidewrap);
  $('<input type="checkbox" id="hide-hf" value="no" />')
      .appendTo(hidehf)
      .on('click',
          () => {
            if ($('nav').css('display') !== 'none') {
              headerMode('fixed');
            } else {
              headerMode(USERCONFIG.header);
            }
            toggleDiv('nav');
            toggleDiv('footer');
          })
      .after(' H&F');

  // adding embedding options
  {
    const embedform = $('<div id="embedform" class="form-group" />').appendTo(configwell);
    $('<div class="col-lg-5 col-md-5 conf-cap">Embeds <span id="embed-help">[?]</span></div>')
        .appendTo(embedform);
    const embedwrap = $('<div id="embedwrap" class="col-lg-7 col-md-7" />').appendTo(embedform);

    $('#embed-help').on('click', () => {
      let txt =
          'This option lets you see images or videos directly on the chat, instead of links.\n' +
          'Click on image or double click on video to open in the new tab.\n' +
          'All videos are muted by default, if autoplay - click to unmute, else click to play.\n\n' +
          'This channel supports following types of links (specified as CSS codes):\n' +
          '■ Images - ';
      {
        txt += EmbeddingMedia_Images;
      }
      txt += '\n■ Videos - ';
      {
        txt += EmbeddingMedia_Videos;
      }
      alert(txt);
    });

    {
      const embedimg = $('<label class="checkbox-inline" />').appendTo(embedwrap);
      const cbox = $('<input type="checkbox" id="embed-img" checked>')
                       .appendTo(embedimg)
                       .on('click',
                           () => {
                             EMBEDIMG = !EMBEDIMG;
                             setOpt(CHANNEL.name + '_embedimg', EMBEDIMG);
                           })
                       .after(' img');
      if (!EMBEDIMG) {
        cbox.removeAttr('checked');
      }
    }

    {
      const embedvid = $('<label class="checkbox-inline" />').appendTo(embedwrap);
      const cbox = $('<input type="checkbox" id="embed-webm" checked>')
                       .appendTo(embedvid)
                       .on('click',
                           () => {
                             EMBEDVID = !EMBEDVID;
                             setOpt(CHANNEL.name + '_embedvid', EMBEDVID);
                             if (EMBEDVID) {
                               autovid.show();
                             } else {
                               autovid.hide();
                             }
                           })
                       .after(' video');
      if (!EMBEDVID) {
        cbox.removeAttr('checked');
      }

      const autovid = $('<label class="checkbox-inline" />').appendTo(embedwrap);
      const cbox2 = $('<input type="checkbox" id="auto-webm" checked>')
                        .appendTo(autovid)
                        .on('click',
                            () => {
                              AUTOVID = !AUTOVID;
                              setOpt(CHANNEL.name + '_autovid', AUTOVID);
                            })
                        .after(' autoplay');
      if (!AUTOVID) {
        cbox2.removeAttr('checked');
      }
      if (!EMBEDVID) {
        autovid.hide();
      }
    }
  }

  let clearbtn;
  let voldownbtn;
  let volupbtn;

  /**
   * Toggle "/clear" button depending on rank.
   */
  function toggleClearBtn() {
    if (hasPermission('chatclear')) {
      clearbtn.show();
    } else {
      clearbtn.hide();
    }
  }

  /**
   * Toggle YT volume buttons depending on player type.
   */
  function toggleVolBtn() {
    if (PLAYER && PLAYER.type === 'yt') {
      voldownbtn.show();
      volupbtn.show();
    } else {
      voldownbtn.hide();
      volupbtn.hide();
    }
  }

  // adding quick commands and volume buttons
  {
    const funcbtnform = $('<div id="funcbtnform" class="form-group" />').appendTo(configwell);
    $('<div class="col-lg-5 col-md-5">Command buttons</div>').appendTo(funcbtnform);
    const funcbtnwrap = $('<div id="funcbtnwrap" class="col-lg-7 col-md-7" />').appendTo(funcbtnform);
    const btnsgroup = $('<div id="funcbtngroup" class="btn-group" />').appendTo(funcbtnwrap);

    {
      clearbtn = $('<button id="clear-btn" class="btn btn-default btn-sm">/clear</button>')
                     .appendTo(btnsgroup)
                     .on('click', () => {
                       if (confirm('Are you sure to clear the chat window?')) {
                         socket.emit('chatMsg', {msg: '/clear'});
                       }
                     });
      $('<button id="afk-btn" class="btn btn-default btn-sm">/afk</button>')
          .appendTo(btnsgroup)
          .on('click', () => socket.emit('chatMsg', {msg: '/afk'}));

      socket.on('rank', toggleClearBtn);
      toggleClearBtn();
    }

    {
      voldownbtn = $('<button id="voldown-btn" class="btn btn-default btn-sm">vol -</button>')
                       .appendTo(btnsgroup)
                       .on('click', () => {
                         a = PLAYER.player.getVolume();
                         PLAYER.player.setVolume(a - 1);
                       });
      volupbtn = $('<button id="volup-btn" class="btn btn-default btn-sm">vol +</button>')
                     .appendTo(btnsgroup)
                     .on('click', () => {
                       a = PLAYER.player.getVolume();
                       PLAYER.player.setVolume(a + 1);
                     });

      socket.on('changeMedia', toggleVolBtn);
      toggleVolBtn();
    }
  }

  let item_nr = 0;
  let layer_nr = 1;
  const opening = [];
  const item_count = [];
  let count_nr = 0;

  let dbwrap;
  let dbwell;

  // adding media database layout
  {
    dbwrap = $('<div id="dbwrap" class="col-lg-12 col-md-12" style="display:none" />')
                 .insertBefore(configwrap);
    dbwell = $('<div id="db-well" class="well" />').appendTo(dbwrap);

    if (CHANNEL_DATABASE$1.length < 1 || CHANNEL_DATABASE$1[0][0] !== '') {
      CHANNEL_DATABASE$1.unshift(['', '(various media)']);
    }
    {
      createDatabase();
    }
  }

  // adding playlist options for moderators button
  const advplaylist =
      $('<button id="advplaylist" class="btn btn-sm btn-default" title="Advanced options" />')
          .append('<span class="glyphicon glyphicon-wrench" />')
          .insertBefore('#qlockbtn')
          .on('click', () => toggleDiv(advplcontrols));

  // adding advanced playlist options form

  const advplcontrol =
      $('<div id="advplcontrol" class="col-lg-12 col-md-12" />').insertAfter('#playlistmanager');
  const advplcontrols =
      $('<div id="advplcontrols" class="btn-group" style="display:none" />').appendTo(advplcontrol);

  // adding advanced playlist options buttons

  const playnextbtn = $('<button id="playnext-btn" class="btn btn-default">Play next</button>')
                          .appendTo(advplcontrols)
                          .on('click', () => socket.emit('playNext'));

  const addrandombtn = $('<button id="addrandom-btn" class="btn btn-default">Add random</button>')
                           .appendTo(advplcontrols)
                           .on('click', () => addRandomItem());

  const bumplastbtn = $('<button id="bumplast-btn" class="btn btn-default">Bump last</button>')
                          .appendTo(advplcontrols)
                          .on('click', () => {
                            const len = $('#queue').children().length;
                            const uid = $(`#queue .queue_entry:nth-child(${len})`).data('uid');
                            socket.emit('moveMedia', {from: uid, after: PL_CURRENT});
                          });

  const deletelastbtn = $('<button id="deletelast-btn" class="btn btn-default">Delete last</button>')
                            .appendTo(advplcontrols)
                            .on('click', () => {
                              if (confirm('Are you sure to delete last item?')) {
                                const len = $('#queue').children().length;
                                const uid = $(`#queue .queue_entry:nth-child(${len})`).data('uid');
                                socket.emit('delete', uid);
                              }
                            });

  toggleAdvancedPl();

  // adding playlist expanding button
  const expandbtn =
      $('<button id="expand-btn" class="btn btn-sm btn-default" title="Expand playlist" />')
          .append('<span class="glyphicon glyphicon-resize-full" />')
          .prependTo('#videocontrols')
          .on('click', () => expandQueue());

  // adding playlist scrolling button
  $('<button id="scroll-btn" class="btn btn-sm btn-default" title="Scroll playlist to current item" />')
      .append('<span class="glyphicon glyphicon-hand-right" />')
      .prependTo('#videocontrols')
      .on('click', () => scrollQueue());

  // adding contributors button
  $('<button id="contrib-btn" class="btn btn-sm btn-default" title="Contributors list" />')
      .append('<span class="glyphicon glyphicon-user" />')
      .prependTo('#videocontrols')
      .on('click', () => showContributors());

  // adding pin-up button
  const pinupbtn =
      $('<button id="pinup-btn" class="btn btn-sm btn-default" title="Pin playlist to player" />')
          .append('<span class="glyphicon glyphicon-pushpin" />')
          .prependTo('#videocontrols')
          .on('click', () => {
            if (!PINNED) {
              pinUp();
            } else {
              unPin();
            }
            scrollQueue();
            scrollChat();
          });

  // extending 'Get URLs' function
  {
    $('#getplaylist').unbind().on('click', () => getPlaylistURLs());
  }

  // Update alert first-time users see
  (function() {
  const /** @type {HTMLDivElement} */ alertWrapper = document.getElementById('plonotification');
  if (!alertWrapper) {
    return;
  }

  const /** @type {HTMLDivElement} */ alertContainer = alertWrapper.firstChild;
  alertContainer.innerHTML =
      alertContainer.innerHTML
          .replace('show them when you right click). ', 'show them when you right click).<br />')
          .replace(
              'the old style of playlist buttons.',
              '"the old style" of playlist buttons (<b>recommended</b>) - ' +
                  'more compact playlist with nice icons ' +
                  `(see image <a href="https://dl.dropboxusercontent.com/s/4ya7i5vlyb3likk/oldpl.jpg" target="_blank">here</a>).`);

  // Updating the innerHTML removes the event handler on the dismiss button, re-add it
  const /** @type {HTMLButtonElement} */ dismissButton =
      Array.from(alertContainer.children)
          .filter((elem) => elem.tagName.toLowerCase() === 'button')[0];
  dismissButton.addEventListener('click', () => {
    alertContainer.remove();
    window.localStorage['first_visit'] = 'false';
  });
  })();

  // rearranging footer
  $('.credit').append(
      '<br />Built off CyTube Plus 4.5 · Copyright &copy; 2013-2014 Zimny Lech, Modified by CyDJ staff · ' +
      'Free source on <a href="http://github.com/papertek/CyDJ" target="_blank">GitHub</a>');

  let leftfooter;
  let onlinetime;

  {
    leftfooter = $('<div id="leftfooter" />');
    leftfooter.appendTo('footer .container');
  }

  USERVISITS++;
  setOpt(CHANNEL.name + '_visits', USERVISITS);

  {

    $('<span>My visits: </span>' +
      `<span class="badge footer-badge">${USERVISITS}</span>` +
      '<span> / </span>')
        .appendTo(leftfooter);
    $('<span>Current online time: </span>').appendTo(leftfooter);
    onlinetime =
        $('<span id="onlinetime" class="badge footer-badge">0:00</span>').appendTo(leftfooter);

    setInterval(() => onlineTime(), 60000);
  }

  // /////////////////////////////////////////////////////////////////////////////////////////////////

  /* ----- Chat and window extensions and events ----- */

  // /////////////////////////////////////////////////////////////////////////////////////////////////

  {
    ALTERCHATFORMAT = true;
  }
  {
    ALTERCHATFORMAT = true;
  }

  // Alter chat messages formatting.
  // DEV NOTE: this is extended function from CyTube "util.js" file
  // airforce note: this seems to override a function that's defined by cytube on the client side
  if (ALTERCHATFORMAT) {
    formatChatMessage = function(data, last) {
      if (!data.meta || data.msgclass) {
        data.meta = {
          addClass: data.msgclass,
          addClassToNameAndTimestamp: data.msgclass,
        };
      }

      let skip = data.username === last.name;
      if (data.meta.addClass === 'server-whisper') {
        skip = true;
      }
      if (data.msg.match(/^\s*<strong>\w+\s*:\s*<\/strong>\s*/)) {
        skip = false;
      }
      if (data.meta.forceShowName) {
        skip = false;
      }
      data.msg = execEmotes(data.msg);

      last.name = data.username;
      const div = $('<div />');
      if (data.meta.addClass === 'drink') {
        div.addClass('drink');
        data.meta.addClass = '';
      }

      if (USEROPTS.show_timestamps) {
        const time = $('<span class="timestamp" />').appendTo(div);
        const timestamp = new Date(data.time).toTimeString().split(' ')[0];
        time.text(`[${timestamp}] `);
        if (data.meta.addClass && data.meta.addClassToNameAndTimestamp) {
          time.addClass(data.meta.addClass);
        }
      }

      {
        if (!!USER_BADGES[data.username]) {
          const badges = USER_BADGES[data.username].map((url) => formatBadgeToHtml(url)).join('');
          div.html(div.html() + badges);
        }
      }

      const uname = $('<span />');
      if (!skip) {
        uname.appendTo(div);
      }
      const mark = UsernameMark_Char ;
      $('<strong class="username" />').text(data.username + mark + ' ').appendTo(uname);

      if (data.meta.modflair) {
        uname.addClass(getNameColor(data.meta.modflair));
      }
      if (data.meta.addClass && data.meta.addClassToNameAndTimestamp) {
        uname.addClass(data.meta.addClass);
      }
      if (data.meta.superadminflair) {
        uname.addClass('globalmod label').addClass(data.meta.superadminflair.labelclass);
        $('<span class="glyphicon" />').addClass(data.meta.superadminflair.icon).prependTo(uname);
      }

      const message = $('<span />').appendTo(div);
      message[0].innerHTML = data.msg;

      if (data.meta.addClass === 'greentext') {
        message.addClass('greentext');
      }
      if (data.meta.addClass === 'spoiler') {
        message.addClass('spoiler');
      }
      if (data.meta.addClass === 'action') {
        message.addClass('action');
      }
      if (data.meta.addClass === 'server-whisper') {
        message.addClass('server-whisper');
      }

      if (data.meta.action) {
        uname.remove();
        message[0].innerHTML = data.username + ' ' + data.msg;
      }

      {
        let _div = div.html();
        for (const emote of IndependentEmotes) {
          const filter = emote[0];
          const html = `<img src="${emote[1]}" title="${filter}" ` +
              `style="width:${emote[2]}px; ` +
              `height:${emote[3]}px; cursor:pointer" ` +
              `onclick="cydj.insertText('${filter}')" />`;
          _div = _div.replace(new RegExp(filter, 'g'), html);
        }
        div.html(_div);
      }
      {
        let _div = div.html();
        for (const filt of IndependentFilters) {
          _div = _div.replace(filt.before, filt.after);
        }
        div.html(_div);
      }

      if (data.meta.addClass) {
        message.addClass(data.meta.addClass);
      }
      if (data.meta.shadow) {
        div.addClass('chat-shadow');
      }
      div.find('img').load(() => {
        if (SCROLLCHAT) {
          scrollChat();
        }
      });

      if (EMBEDIMG && UI_EmbeddingMedia) {
        div.find(EmbeddingMedia_Images).each(function() {
          const img = $('<img class="embedimg" />');
          img.attr('src', this.href);
          img.load(() => {
            if (SCROLLCHAT) {
              scrollChat();
            }
          });
          $(this).html(img);
        });
      }
      if (EMBEDVID && UI_EmbeddingMedia) {
        div.find(EmbeddingMedia_Videos).each(function() {
          const vid = $('<video class="embedvid" />');
          vid.attr('src', this.href);
          vid.prop('loop', 'true');
          vid.load(() => {
            if (SCROLLCHAT) {
              scrollChat();
            }
          });
          vid.on('click', function() {
            if (!AUTOVID) {
              if ($(this).get(0).paused) {
                $(this).get(0).play();
              } else {
                $(this).get(0).pause();
              }
            } else {
              $(this).prop('muted', !$(this).prop('muted'));
            }
            return false;
          });
          vid.on('dblclick', function() {
            window.open(this.src, '_blank');
            return false;
          });
          if (AUTOVID) {
            vid.prop('autoplay', 'true').prop('muted', 'true');
          }
          {
            vid.attr('controls', '');
          }
          $(this).html(vid);
        });
      }

      return div;
    };
  }

  // fix formatting and sending chat messages
  // DEV NOTE: this are extended events from CyTube "util.js" file

  $('#chatline, #chatbtn').off();

  let /** @type {string} */ unsentMsg = null;

  $('#chatline').on('keydown', (ev) => {
    if (ev.key === 'Enter') {
      if (CHATTHROTTLE) {
        return;
      }
      const _msg = $('#chatline').val();
      let msg = $('#chatline').val();
      if (msg.trim()) {
        msg = prepareMessage(msg.trim());
        const meta = {};
        if (USEROPTS.adminhat && CLIENT.rank >= 255) {
          msg = `/a ${msg}`;
        } else if (USEROPTS.modhat && CLIENT.rank >= Rank.Moderator) {
          meta.modflair = CLIENT.rank;
        }
        if (CLIENT.rank >= 2 && msg.startsWith('/m ')) {
          meta.modflair = CLIENT.rank;
          msg = msg.substring(3);
        }
        if (msg.startsWith('/say')) {
          meta.addClass = 'shout';
          meta.forceShowName = true;
          meta.addClassToNameAndTimestamp = true;
        }
        socket.emit('chatMsg', {msg: msg, meta: meta});
        updateChatStats(_msg);
        CHATHIST.push($('#chatline').val());
        CHATHISTIDX = CHATHIST.length;
        $('#chatline').val('');
      }
      return;
    } else if (ev.key === 'Tab') {
      chatTabComplete();
      ev.preventDefault();
      return false;
    } else if (ev.key === 'ArrowUp') {
      unsentMsg = $('#chatline').val();
      if (CHATHISTIDX > 0) {
        CHATHISTIDX--;
        $('#chatline').val(CHATHIST[CHATHISTIDX]);
      }
      ev.preventDefault();
      return false;
    } else if (ev.key === 'ArrowDown') {
      if (CHATHISTIDX === CHATHIST.length - 1 && unsentMsg !== null) {
        CHATHISTIDX++;
        $('#chatline').val(unsentMsg);
        unsentMsg = null;
      } else if (CHATHISTIDX < CHATHIST.length - 1) {
        CHATHISTIDX++;
        $('#chatline').val(CHATHIST[CHATHISTIDX]);
      }
      ev.preventDefault();
      return false;
    }
  });


  // TODO: Check what this does, I don't know what it does.
  // #chatbtn is a button thats disabled? Maybe? If I remember correctly.
  // This is a bit useless, for now. Fix it later.
  $('#chatbtn').on('click', () => {
    const _msg = $('#chatline').val();
    let msg = $('#chatline').val();
    if (msg.trim()) {
      msg = prepareMessage(msg.trim());
      socket.emit('chatMsg', {msg: msg});
      updateChatStats(_msg);
      $('#chatline').val('');
    }
  });

  /**
   * @typedef {Object} SetUserMetaEvent
   * @property {string} name Name of the user
   * @property {Object} meta Metadata
   * @property {boolean} meta.afk Whether the user is AFK
   * @property {boolean} meta.muted Whether the user is muted
   * @property {boolean} meta.smuted Whether the user is shadow muted
   * @property {!Array<string>} meta.aliases User's aliases
   * @property {string} meta.ip User's obfuscated IP
   */

  /**
   * For a setUserMeta event, if this muted someone, clear their messages.
   *
   * @param {SetUserMetaEvent} event
   */
  function clearMessagesOfMutedUser(event) {
    if (!event.meta.muted) {
      return;
    }
    deleteMsgByUsername(event.name);
  }

  socket.on('setUserMeta', clearMessagesOfMutedUser);

  /**
   * @typedef {Object} UserListUser
   * @property {string} name Name of the user
   * @property {number} rank Rank of the user (???)
   * @property {Object} meta Metadata
   * @property {boolean} meta.afk Whether the user is AFK
   * @property {boolean} meta.muted Whether the user is muted
   * @property {boolean} meta.smuted Whether the user is shadow muted
   * @property {!Array<string>} meta.aliases User's aliases
   * @property {string} meta.ip User's obfuscated IP
   */

  /**
   * @typedef {Object} ChatMsgEvent
   * @property {string} username Name of the user
   * @property {string} msg Message the user sent
   * @property {number} time Unix timestamp (?) of the message
   * @property {Object} meta Metadata
   * @property {boolean=} meta.addClass Whether the user is AFK
   * @property {boolean=} meta.addClassToNameAndTimestamp Whether to add the class
   *   to the name and timestamp. true for /say and /shout messages.
   * @property {boolean=} meta.forceShowName Whether to force show the name.
   *   true for /say and shout messages
   */

  /**
   * Fix a /say or /shout message to correctly apply the "shout" class to the
   * message text span, which makes it big and red.
   *
   * This function shouldn't need to exist. Something elsewhere in the script
   * is breaking this functionality but I (airforce2700) can't figure out what it
   * is.
   *
   * @param {ChatMsgEvent} event
   */
  function fixSayMsg(event) {
    if (event.meta.addClass !== 'shout') {
      return;
    }

    const messageBuffer = document.getElementById('messagebuffer');
    if (!messageBuffer || !messageBuffer.lastChild) {
      return;
    }

    const /** @type {HTMLElement} */ newestMessageRow = messageBuffer.lastChild;
    if (Array.from(newestMessageRow.classList)
            .filter((className) => className.startsWith('chat-msg-'))
            .length < 1) {
      return;
    }

    const messageSpan = newestMessageRow.lastChild;
    if (!messageSpan) {
      return;
    }
    messageSpan.classList.add('shout');
  }

  socket.on('chatMsg', fixSayMsg);

  /**
   * Fix layout behaviour after resizing.
   *
   * DEV NOTE: this is extended function from CyTube "util.js" file
   */
  function resizeStuff() {
    const videoWidth = $('#videowrap .embed-responsive').width();
    const videoHeight = Math.floor(parseInt(videoWidth) * 9 / 16 + 1);
    $('#ytapiplayer').width(videoWidth).height(videoHeight);

    const h = videoHeight - $('#chatline').outerHeight() - 1;
    $('#messagebuffer').height(h);
    $('#userlist').height(h);

    {
      const m = modesel.val();
      // patches for various display modes
      if (m === 'chMode' || m === 'rMode') {
        if (WEBKIT) {
          $('#videowrap').hide();
        } else {
          $('#videowrap div, #videowrap p').hide();
          $('#ytapiplayer').width(1).height(1);
        }
        fitChat('auto');
      } else if (m === 'syMode' && USERCONFIG.player === 'center') {
        fitChat('auto');  // it could've been this all along lmao
      }
    }
  }

  // bind new resizing function
  $(window).off('resize', '**');
  $(window).on('resize', resizeStuff);

  // /////////////////////////////////////////////////////////////////////////////////////////////////

  // setting global sockets
  socket.on('channelOpts', setUserCSS$1);
  socket.on('channelCSSJS', setUserCSS$1);
  socket.on('login', patchWrap);
  socket.on('rank', toggleAdvancedPl);

  // setting final layout after loading
  setLayout();
  scrollChat();
  scrollQueue();

  if (FLUID) {
    $('.container').removeClass('container').addClass('container-fluid');
    $('footer .container-fluid').removeClass('container-fluid').addClass('container');
    $('#fluid-layout').prop('checked', 'true');
    $('#fontspanel, #emotespanel').addClass('fluidpanel');
  }

  // finishing variable
  LOADED = true;

  /* ----- END OF LIBRARY ----- */

  /* -----CONFIG----- */
  /*
    usertype:
    'owner' for admins
    'op' for mods
    'guest' for unregistered accounts
    ''   for normal users
    */
  const USERLIST_COLORS = {
    'pokegaard': {usertype: 'owner', css: 'color: #00FF7F !important;'},
    'Amberainbow': {usertype: '', css: 'color: #FF69B4 !important;'},
  };

  /* -----CONFIG----- */

  for (const [name, color] of Object.entries(USERLIST_COLORS)) {
    const userType = color.usertype ? `.userlist_${color.usertype}` : '';
    $(`div.userlist_item span${userType}:contains("${name}")`).css('cssText', color.css);
  }

  const ODD_MESSAGE_CLASS = 'odd-message';
  const EVEN_MESSAGE_CLASS = 'even-message';
  let lastMessageOdd = false;

  let CHAT_INIT = false;
  if (!CHAT_INIT) {
    CHAT_INIT = true;

    socket.on('chatMsg', (obj) => {
      const mb = document.getElementById('messagebuffer');
      if (mb && mb.lastChild && $(mb.lastChild).attr('class').startsWith('chat-msg-') &&
          !obj.meta.shadow) {
        mb.lastChild.classList.add(lastMessageOdd ? ODD_MESSAGE_CLASS : EVEN_MESSAGE_CLASS);
        lastMessageOdd = !lastMessageOdd;
      }
      setTimeout(() => {
        const mb = document.getElementById('messagebuffer');
        if (mb !== null && mb.scrollHeight - (mb.clientHeight + mb.scrollTop) < 50) {
          mb.scrollTop = mb.scrollHeight - mb.clientHeight;
        }
      }, 250);
      emoteHoverAll();
      if (CLIENT.name && obj.username !== CLIENT.name &&
          obj.msg.toLowerCase().includes(CLIENT.name.toLowerCase()) && !obj.meta.shadow &&
          obj.username !== '[server]') {
        audioFeedback();
      }
      if (obj.msg.startsWith('!poof') || obj.msg.includes('do poof')) {
        deleteMsgByUsername(obj.username);
      }
    });
    socket.on('addUser', (obj) => {
      if (USERLIST_COLORS[obj.name]) {
        const userType = USERLIST_COLORS[obj.name].usertype ?
            `.userlist_${USERLIST_COLORS[obj.name].usertype}` :
            '';
        $(`div.userlist_item span${userType}:contains("${obj.name}")`)
            .css('cssText', USERLIST_COLORS[obj.name].css);
        /* not sure if DOM is guaranteed to be updated yet when emit occurs, so
         * try again in 0.25 seconds for good measure */
        setTimeout(() => {
          const userType = USERLIST_COLORS[obj.name].usertype ?
              `.userlist_${USERLIST_COLORS[obj.name].usertype}` :
              '';
          $(`div.userlist_item span${userType}:contains("${obj.name}")`)
              .css('cssText', USERLIST_COLORS[obj.name].css);
        }, 250);
      }
    });
    socket.on('newPoll', (obj) => newPoll());
    socket.on('pm', (obj) => {
      if (obj.username !== CLIENT.name) {
        audioFeedback();
      }
    });
    (() => {
      const mbDiv = $('#messagebuffer div');
      let line;
      for (let i = 0; i < mbDiv.length; i++) {
        if (mbDiv && (line = $(mbDiv[i]))[0] && line.attr('class').startsWith('chat-msg-')) {
          mbDiv[i].classList.add(lastMessageOdd ? ODD_MESSAGE_CLASS : EVEN_MESSAGE_CLASS);
          lastMessageOdd = !lastMessageOdd;
        }
      }
    })();
    $('#guestlogin')[0].onclick = (e) => {
      e.target === document.querySelector('#guestlogin span') && socket.emit('login', {
        name: $('#guestname').val(),
      });
    };
    document.querySelector('#guestlogin span').style = 'top:92%!important;left:84%!important;';
  }

  let CSS_INIT = false;
  const CSS_RAW = '';
  if (!CSS_INIT) {
    CSS_INIT = true;
    $('head').append(`<style id="chancss2" type="text/css">${CSS_RAW}</style>`);
  } else {
    $('head #chancss2').html(CSS_RAW);
  }

  const /** @type {!Array<string>} */ TabCompletionEmotes$1 = [];
  const TabCompletion = {
    last: '',
    matches: [],
  };

  function tabCompletionRefresh() {
    while (TabCompletionEmotes$1.length > 0) {
      TabCompletionEmotes$1.pop();
    }
    for (const emote of window.CHANNEL.emotes) {
      TabCompletionEmotes$1.push(emote.name);
    }
    TabCompletionEmotes$1.sort();
  }

  tabCompletionRefresh();
  socket.on('emoteList', tabCompletionRefresh);
  socket.on('updateEmote', tabCompletionRefresh);
  socket.on('removeEmote', tabCompletionRefresh);

  function chatTabComplete() {
    const match = /(.*?) *$/.exec($('#chatline').val());
    if (match === null || match[1] === '') {
      return;
    }
    const chatline = match[1];
    const words = chatline.split(' ');
    const currentWithCap = words[words.length - 1];
    let current = currentWithCap.toLowerCase();
    if (!current.match(/^[\w-():]{1,20}:?$/)) {
      return;
    }
    const usersWithCap = Array.prototype.slice.call($('#userlist').children())
                             .map((elem) => elem.children[1].innerHTML);
    if (currentWithCap === TabCompletion.last) {
      TabCompletion.last = current =
          TabCompletion
              .matches[(TabCompletion.matches.indexOf(currentWithCap) + 1) % TabCompletion.matches.length];
      current += ' ';
      words[words.length - 1] = current;
      $('#chatline').val(words.join(' '));
      return;
    }
    const matches = TabCompletionEmotes$1.filter((str) => str.toLowerCase().startsWith(current))
                        .concat(usersWithCap.filter((str) => str.toLowerCase().startsWith(current))
                                    .map((str) => words.length === 1 ? str + ':' : str));
    if (matches.length === 0) {
      return;
    }
    TabCompletion.matches = matches;
    TabCompletion.last = current = TabCompletion.matches[0];
    current += ' ';
    words[words.length - 1] = current;
    $('#chatline').val(words.join(' '));
    return;
  }

  const emoteHover = document.createElement('div');
  emoteHover.id = 'emote-hover';
  emoteHover.setAttribute(
      'style',
      'visibility: hidden; top: 0px;left: 0px;box-sizing: border-box;display: block;position: absolute;padding: 5px;margin: 0px;color: #D3D3D3;line-height: 60px;text-align: center;z-index: 9999;');
  emoteHover.innerHTML =
      '<div id="emote-hover-inner" style="box-sizing: border-box;background-color: #000;color: #fff;max-width: 200px;padding: 5px 8px 4px;margin: 0px;text-align: center;font-family: Helvetica Neue,Helvetica,sans-serif;font-size: 1.2rem;line-height: 2rem;"></div>';
  document.querySelector('body').appendChild(emoteHover);
  const emoteHoverInner = emoteHover.firstChild;

  const xOffset = 0;
  const yOffset = -23;
  function setHover(obj) {
    if (typeof obj !== 'object' || obj === null) {
      return;
    }
    obj.onmouseenter = function(e) {
      emoteHoverInner.innerHTML = this.getAttribute('hover') || this.title;
      emoteHover.style.visibility = 'visible';
      emoteHover.style.top = (e.pageY - yOffset) + 'px';
      emoteHover.style.left = (e.pageX - xOffset) + 'px';
    };
    obj.onmouseleave = (e) => {
      emoteHover.style.visibility = 'hidden';
    };
    obj.onmousemove = (e) => {
      emoteHover.style.top = (e.pageY - yOffset) + 'px';
      emoteHover.style.left = (e.pageX - xOffset) + 'px';  // 47
    };
  }

  function emoteHoverAll() {
    const emotes = document.querySelectorAll('img.channel-emote');
    for (let i = 0; i < emotes.length; i++) {
      if (emotes[i].onmouseenter === null) {
        setHover(emotes[i]);
      }
    }
  }
  emoteHoverAll();

  function newPoll() {
    $('#pollwrap div.well').draggable();
  }
  const newpollbtn = document.getElementById('newpollbtn');
  newpollbtn !== null && (newpollbtn.onclick = newPoll);
  $('#emotelist > div.modal-dialog > div.modal-content').draggable();

  const togglesCSS_Compact =
      '#queue .queue_entry{padding: 0px;line-height: 10px;}#queue .queue_entry .btn-group button {padding-top: 0px;padding-bottom: 0px;line-height: 14px;}#rightcontrols button {padding-top: 0px;padding-bottom: 0px;}#mediaurl {padding: 0px 3px;height: 20px;}#addfromurl .input-group button {padding-top: 0px;padding-bottom: 0px;}#rightcontrols{margin-top: 0px !important;}#playlistmanagerwrap{margin-top: 0px;}#videowrap{margin-bottom: 0px !important;}#queuefail .vertical-spacer{margin-top: 0px;}#addfromurl .vertical-spacer{margin-top: 0px;}#addfromurl .checkbox{margin: 0px;}#mainpage{padding-top: 25px !important;}';
  const togglesCSS_Title =
      '#currenttitle{display: block !important; font-size: 16px !important; margin-top: -30px !important; margin-bottom: -5px;}#mainpage{/*padding-top: 45px !important;*/}';
  const togglesCSS_Timestamp = '#messagebuffer>div>span.timestamp{display:none;}';
  const userlistToggle = document.querySelector('#userlisttoggle');
  let userlistSizeToggleInner;
  function userlistSizeToggleFn() {
    $('#userlist').toggleClass('userlist-large', !!cookie.userlistLarge);
    $('#messagebuffer')
        .toggleClass('userlist-hidden', !!cookie.userlistHidden || !!cookie.userlistLarge);
    $('#chatline').toggleClass('userlist-hidden', !!cookie.userlistHidden || !!cookie.userlistLarge);
    $('#leftcontrols')
        .toggleClass('userlist-hidden', !!cookie.userlistHidden || !!cookie.userlistLarge);
    $('#videowrap').toggleClass('userlist-hidden', !!cookie.userlistHidden || !!cookie.userlistLarge);
    $('#rightcontrols')
        .toggleClass('userlist-hidden', !!cookie.userlistHidden || !!cookie.userlistLarge);
    $('#rightpane').toggleClass('userlist-hidden', !!cookie.userlistHidden || !!cookie.userlistLarge);
    userlistSizeToggleInner.style.width = !!cookie.userlistLarge ? '100%' : '50%';
  }
  let cookie;
  function cookieLoad() {
    const regex = /.*(?:(\{.*\})).*/.exec(document.cookie);
    let cookieJSON;
    if (regex && typeof regex !== null && regex[1] && regex[1] !== '') {
      try {
        cookieJSON = JSON.parse(regex[1]);
      } catch (e) {
      }
    }
    cookie = (cookieJSON && typeof cookieJSON === 'object') ? cookieJSON : {
      userlistHidden: userlist.style.display === 'none',
      userlistLarge: false,
      audioFeedback: false,
      playlistStyle: 0,
      compact: false,
      title: false,
      timestamp: false,
    };
    if (cookie.userlistLarge) {
      cookie.userlistHidden = true;
      cookieSave();
    }
    userlistSizeToggleFn();
    if (cookie.userlistHidden) {
      userlistSizeToggleFn();
      cookie.userlistHidden = !cookie.userlistHidden;
      userlistToggle.click();
    }
    audioFeedbackToggleFn();
    cookie.playlistStyle = typeof cookie.playlistStyle === 'number' ? cookie.playlistStyle : 0;
    playlistStyleToggleFn();
    compactToggleFn();
    titleToggleFn();
  }
  const cookieSaveHooks = {};
  function cookieSave() {
    document.cookie = JSON.stringify(cookie);
    for (const hook of cookieSaveHooks) {
      if (typeof hook === 'function') {
        hook();
      }
    }
  }
  function cookieUserlistToggle() {
    cookie.userlistHidden = !cookie.userlistHidden;
    cookieSave();
    userlistSizeToggleFn();
  }
  function cookieUserlistSizeToggle() {
    cookie.userlistLarge = !cookie.userlistLarge;
    if (!!cookie.userlistHidden) {
      userlistToggle.click();
    }
    cookieSave();
    userlistSizeToggleFn();
  }
  userlistToggle.onclick = cookieUserlistToggle;

  const audioFeedbackSound = new Audio('https://cdn.betterttv.net/assets/sounds/ts-tink.ogg');
  function audioFeedback() {
    if (cookie.audioFeedback) {
      audioFeedbackSound.pause();
      audioFeedbackSound.currentTime = 0;
      audioFeedbackSound.play();
    }
  }

  function audioFeedbackToggle() {
    cookie.audioFeedback = !cookie.audioFeedback;
    cookieSave();
    audioFeedbackToggleFn();
  }

  function audioFeedbackToggleFn() {
    $('#audiofeedbacktoggle').toggleClass('audio-feedback-on', !!cookie.audioFeedback);
  }

  function playlistStyleToggle() {
    cookie.playlistStyle = (cookie.playlistStyle + 1) % 3;
    cookieSave();
    playlistStyleToggleFn();
  }

  function compactToggle() {
    cookie.compact = !cookie.compact;
    cookieSave();
    compactToggleFn();
  }

  let compactToggleBtn;
  let compactToggleCss;
  function compactToggleFn() {
    compactToggleBtn.style.backgroundColor = !!cookie.compact ? '#CCFFCC' : '#FFCCCC';
    compactToggleCss.innerHTML = !!cookie.compact ? togglesCSS_Compact : '';
  }

  function titleToggle() {
    cookie.title = !cookie.title;
    cookieSave();
    titleToggleFn();
  }

  const mainpage = document.querySelector('#mainpage');
  let titleToggleBtn;
  let titleToggleCss;
  function titleToggleFn() {
    titleToggleBtn.style.backgroundColor = !!cookie.title ? '#CCFFCC' : '#FFCCCC';
    titleToggleCss.innerHTML = !!cookie.title ? togglesCSS_Title : '';
    mainpage.setAttribute('style', !!cookie.title ? 'padding-top: 45px !important;' : '');
  }

  function playlistStyleToggleFn() {
    $('#queue').toggleClass('playlist-style-1', cookie.playlistStyle === 1);
    $('#queue').toggleClass('playlist-style-2', cookie.playlistStyle === 2);
    document.querySelector('#playliststyletoggle').innerHTML = cookie.playlistStyle || '';
  }

  function timestampToggle() {
    cookie.timestamp = !cookie.timestamp;
    cookieSave();
    timestampToggleFn();
  }

  let timestampToggleCss;
  function timestampToggleFn() {
    $('#timestamptoggle').toggleClass('timestamp-off', !!cookie.timestamp);
    timestampToggleCss.innerHTML = !!cookie.timestamp ? togglesCSS_Timestamp : '';
  }

  let COOKIE_INIT = false;
  if (!COOKIE_INIT) {
    COOKIE_INIT = true;
    setHover(document.querySelector('#userlisttoggle'));
    const userlistSizeToggle = document.createElement('i');
    userlistSizeToggle.id = 'userlistsizetoggle';
    userlistSizeToggle.setAttribute('class', 'glyphicon pull-left pointer unselectable');
    userlistSizeToggle.setAttribute('title', 'Toggle Userlist Size');
    userlistSizeToggle.innerHTML = '<div id="userlistsizetoggle-inner"></div>';
    document.querySelector('#usercount')
        .parentNode.insertBefore(userlistSizeToggle, document.querySelector('#usercount'));
    userlistSizeToggle.onclick = cookieUserlistSizeToggle;
    setHover(userlistSizeToggle);
    userlistSizeToggleInner = document.querySelector('#userlistsizetoggle-inner');
    const audioFeedbackToggleBtn = document.createElement('i');
    audioFeedbackToggleBtn.id = 'audiofeedbacktoggle';
    audioFeedbackToggleBtn.setAttribute('class', 'glyphicon pull-left pointer unselectable');
    audioFeedbackToggleBtn.setAttribute('title', 'Toggle Audio Feedback');
    audioFeedbackToggleBtn.innerHTML = '\uD83D\uDCE2';
    document.querySelector('#usercount')
        .parentNode.insertBefore(audioFeedbackToggleBtn, document.querySelector('#usercount'));
    audioFeedbackToggleBtn.onclick = audioFeedbackToggle;
    setHover(audioFeedbackToggleBtn);
    const playlistStyleToggleBtn = document.createElement('i');
    playlistStyleToggleBtn.id = 'playliststyletoggle';
    playlistStyleToggleBtn.setAttribute('class', 'glyphicon pull-right pointer unselectable');
    playlistStyleToggleBtn.setAttribute('title', 'Toggle Playlist Style');
    playlistStyleToggleBtn.innerHTML = '';
    document.querySelector('#usercount')
        .parentNode.insertBefore(playlistStyleToggleBtn, document.querySelector('#usercount'));
    playlistStyleToggleBtn.onclick = playlistStyleToggle;
    setHover(playlistStyleToggleBtn);
    compactToggleBtn = document.createElement('i');
    compactToggleBtn.id = 'compacttoggle';
    compactToggleBtn.setAttribute('class', 'glyphicon pull-right pointer unselectable');
    compactToggleBtn.setAttribute('title', 'Toggle Compact Layout');
    compactToggleBtn.innerHTML = 'C';
    document.querySelector('#usercount')
        .parentNode.insertBefore(compactToggleBtn, document.querySelector('#usercount'));
    compactToggleBtn.onclick = compactToggle;
    setHover(compactToggleBtn);
    titleToggleBtn = document.createElement('i');
    titleToggleBtn.id = 'titletoggle';
    titleToggleBtn.setAttribute('class', 'glyphicon pull-right pointer unselectable');
    titleToggleBtn.setAttribute('title', 'Toggle Video Title');
    titleToggleBtn.innerHTML = 'T';
    document.querySelector('#usercount')
        .parentNode.insertBefore(titleToggleBtn, document.querySelector('#usercount'));
    titleToggleBtn.onclick = titleToggle;
    setHover(titleToggleBtn);
    const timestampToggleBtn = document.createElement('i');
    timestampToggleBtn.id = 'timestamptoggle';
    timestampToggleBtn.setAttribute('class', 'glyphicon pull-right pointer unselectable');
    timestampToggleBtn.setAttribute('title', 'Toggle Timestamp');
    timestampToggleBtn.innerHTML = '\uD83D\uDD51';
    document.querySelector('#usercount')
        .parentNode.insertBefore(timestampToggleBtn, document.querySelector('#usercount'));
    timestampToggleBtn.onclick = timestampToggle;
    setHover(timestampToggleBtn);
    compactToggleCss = document.createElement('style');
    compactToggleCss.id = 'togglescss-compact';
    compactToggleCss.setAttribute('type', 'text/css');
    document.querySelector('head').appendChild(compactToggleCss);
    titleToggleCss = document.createElement('style');
    titleToggleCss.id = 'togglescss-title';
    titleToggleCss.setAttribute('type', 'text/css');
    document.querySelector('head').appendChild(titleToggleCss);
    timestampToggleCss = document.createElement('style');
    timestampToggleCss.id = 'togglescss-timestamp';
    timestampToggleCss.setAttribute('type', 'text/css');
    document.querySelector('head').appendChild(timestampToggleCss);
    cookieLoad();
  }

  const messagebuffer = document.querySelector('#messagebuffer');
  /**
   * @param {HTMLElement} messageDiv message <div> - the one with
   *     class="chat-msg-{username}"
   */
  function deleteMsg(messageDiv) {
    const secondToLastChild = messageDiv.children.item(messageDiv.children.length - 2);
    if (!secondToLastChild.classList.contains('timestamp') &&
        secondToLastChild.style.display === 'none') {
      // Message is already deleted.
      return;
    }

    const messageSpan = messageDiv.lastChild;
    messageSpan.style.display = 'none';

    const deletedMessageSpan = document.createElement('span');
    deletedMessageSpan.style.color = '#999';
    deletedMessageSpan.innerHTML = '&lt;message deleted&gt;';
    deletedMessageSpan.onclick = () => {
      if (CLIENT.rank < 2) {
        return;
      }
      messageSpan.style.display = '';
      deletedMessageSpan.style.display = 'none';
    };
    messageDiv.appendChild(deletedMessageSpan);
  }

  function deleteMsgByUsername(username) {
    for (let i = 0; i < messagebuffer.children.length; i++) {
      if (messagebuffer.children[i].classList[0] === `chat-msg-${username}`) {
        deleteMsg(messagebuffer.children[i]);
      }
    }
  }

  /**
   * Fix raw video controls being hidden.
   *
   * Something else in this script is adding display: block
   * (probably fucking jquery)
   * but it's not clear which call's doing it.
   *
   * So just remove it every time the media changes, as well as
   * a couple seconds after. Just in case it takes a bit to load.
   */
  function fixRawVideoControls() {
    const spinner = document.getElementsByClassName('vjs-loading-spinner').item(0);
    const controlBar = document.getElementsByClassName('vjs-control-bar').item(0);

    for (const elem of [spinner, controlBar]) {
      if (elem == null) {
        continue;
      }
      elem.style.removeProperty('display');
    }
  }
  socket.on('changeMedia', fixRawVideoControls);
  socket.on('mediaUpdate', fixRawVideoControls);

  // hacky fix for broken layout elements :/
  document.body.addEventListener('load', resizeStuff, true);
  socket.on('changeMedia', resizeStuff);
  setInterval(() => resizeStuff(), 1000);

  /* const element = document.getElementById('well');
  const resizer = document.createElement('div');
  resizer.className = 'resizer';
  resizer.style.position = 'absolute';
  resizer.style.right = 0;
  resizer.style.bottom = 0;
  resizer.style.cursor = 'se-resize';
  element.appendChild(resizer);
  resizer.addEventListener('mousedown', initResize, false);

  function initResize(e) {
    window.addEventListener('mousemove', Resize, false);
    window.addEventListener('mouseup', stopResize, false);
  }
  function Resize(e) {
    element.style.width = (e.clientX - element.offsetLeft) + 'px';
    element.style.height = (e.clientY - element.offsetTop) + 'px';
  }
  function stopResize(e) {
    window.removeEventListener('mousemove', Resize, false);
    window.removeEventListener('mouseup', stopResize, false);
  } */

  exports.UI_ChannelDatabase = UI_ChannelDatabase;
  exports.Version_Now = Version_Now;
  exports.addVideo = addVideo;
  exports.camera = camera;
  exports.getChatStats = getChatStats;
  exports.insertText = insertText;
  exports.prevVideo = prevVideo;
  exports.toggleCat = toggleCat;
  exports.updateChatStats = updateChatStats;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({});
