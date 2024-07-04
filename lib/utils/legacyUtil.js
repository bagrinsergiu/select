"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertChildrenToData = convertChildrenToData;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var React = _interopRequireWildcard(require("react"));
var _toArray = _interopRequireDefault(require("rc-util/lib/Children/toArray"));
var _excluded = ["children", "value"],
  _excluded2 = ["children"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function convertNodeToOption(node) {
  var key = node.key,
    _node$props = node.props,
    children = _node$props.children,
    value = _node$props.value,
    restProps = (0, _objectWithoutProperties2.default)(_node$props, _excluded);
  return (0, _objectSpread2.default)({
    key: key,
    value: value !== undefined ? value : key,
    children: children
  }, restProps);
}
function convertChildrenToData(nodes) {
  var optionOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return (0, _toArray.default)(nodes).map(function (node, index) {
    if (! /*#__PURE__*/React.isValidElement(node) || !node.type) {
      return null;
    }
    var isSelectOptGroup = node.type.isSelectOptGroup,
      key = node.key,
      _node$props2 = node.props,
      children = _node$props2.children,
      restProps = (0, _objectWithoutProperties2.default)(_node$props2, _excluded2);
    if (optionOnly || !isSelectOptGroup) {
      return convertNodeToOption(node);
    }
    return (0, _objectSpread2.default)((0, _objectSpread2.default)({
      key: "__RC_SELECT_GRP__".concat(key === null ? index : key, "__"),
      label: key
    }, restProps), {}, {
      options: convertChildrenToData(children)
    });
  }).filter(function (data) {
    return data;
  });
}