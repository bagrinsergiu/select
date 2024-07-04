"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var React = _interopRequireWildcard(require("react"));
var _rcTrigger = _interopRequireDefault(require("rc-trigger"));
var _classnames = _interopRequireDefault(require("classnames"));
var _excluded = ["prefixCls", "disabled", "visible", "children", "popupElement", "containerWidth", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "direction", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "getPopupContainer", "empty", "getTriggerDOMNode"];
/* eslint-disable */
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
var getBuiltInPlacements = function getBuiltInPlacements(dropdownMatchSelectWidth) {
  // Enable horizontal overflow auto-adjustment when a custom dropdown width is provided
  var adjustX = typeof dropdownMatchSelectWidth !== 'number' ? 0 : 1;
  return {
    bottomLeft: {
      points: ['tl', 'bl'],
      offset: [0, 4],
      overflow: {
        adjustX: adjustX,
        adjustY: 1
      }
    },
    bottomRight: {
      points: ['tr', 'br'],
      offset: [0, 4],
      overflow: {
        adjustX: adjustX,
        adjustY: 1
      }
    },
    topLeft: {
      points: ['bl', 'tl'],
      offset: [0, -4],
      overflow: {
        adjustX: adjustX,
        adjustY: 1
      }
    },
    topRight: {
      points: ['br', 'tr'],
      offset: [0, -4],
      overflow: {
        adjustX: adjustX,
        adjustY: 1
      }
    }
  };
};
var SelectTrigger = function SelectTrigger(props, ref) {
  var prefixCls = props.prefixCls,
    disabled = props.disabled,
    visible = props.visible,
    children = props.children,
    popupElement = props.popupElement,
    containerWidth = props.containerWidth,
    animation = props.animation,
    transitionName = props.transitionName,
    dropdownStyle = props.dropdownStyle,
    dropdownClassName = props.dropdownClassName,
    _props$direction = props.direction,
    direction = _props$direction === void 0 ? 'ltr' : _props$direction,
    _props$dropdownMatchS = props.dropdownMatchSelectWidth,
    dropdownMatchSelectWidth = _props$dropdownMatchS === void 0 ? true : _props$dropdownMatchS,
    dropdownRender = props.dropdownRender,
    dropdownAlign = props.dropdownAlign,
    getPopupContainer = props.getPopupContainer,
    empty = props.empty,
    getTriggerDOMNode = props.getTriggerDOMNode,
    restProps = (0, _objectWithoutProperties2.default)(props, _excluded);
  var dropdownPrefixCls = "".concat(prefixCls, "-dropdown");
  var popupNode = popupElement;
  if (dropdownRender) {
    popupNode = dropdownRender(popupElement);
  }
  var builtInPlacements = React.useMemo(function () {
    return getBuiltInPlacements(dropdownMatchSelectWidth);
  }, [dropdownMatchSelectWidth]);
  // ===================== Motion ======================
  var mergedTransitionName = animation ? "".concat(dropdownPrefixCls, "-").concat(animation) : transitionName;
  // ======================= Ref =======================
  var popupRef = React.useRef(null);
  React.useImperativeHandle(ref, function () {
    return {
      // @ts-ignore
      getPopupElement: function getPopupElement() {
        return popupRef.current;
      }
    };
  });
  var popupStyle = (0, _objectSpread2.default)({
    minWidth: containerWidth
  }, dropdownStyle);
  if (typeof dropdownMatchSelectWidth === 'number') {
    popupStyle.width = dropdownMatchSelectWidth;
  } else if (dropdownMatchSelectWidth) {
    popupStyle.width = containerWidth;
  }
  return (
    /*#__PURE__*/
    // @ts-ignore
    React.createElement(_rcTrigger.default, Object.assign({}, restProps, {
      showAction: [],
      hideAction: [],
      popupPlacement: direction === 'rtl' ? 'bottomRight' : 'bottomLeft',
      builtinPlacements: builtInPlacements,
      prefixCls: dropdownPrefixCls,
      popupTransitionName: mergedTransitionName,
      popup: /*#__PURE__*/React.createElement("div", {
        ref: popupRef
      }, popupNode),
      popupAlign: dropdownAlign,
      popupVisible: visible,
      getPopupContainer: getPopupContainer,
      popupClassName: (0, _classnames.default)(dropdownClassName, (0, _defineProperty2.default)({}, "".concat(dropdownPrefixCls, "-empty"), empty)),
      popupStyle: popupStyle,
      getTriggerDOMNode: getTriggerDOMNode
    }), children)
  );
};
var RefSelectTrigger = /*#__PURE__*/React.forwardRef(SelectTrigger);
RefSelectTrigger.displayName = 'SelectTrigger';
var _default = exports.default = RefSelectTrigger;