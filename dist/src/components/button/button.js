"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _button = _interopRequireDefault(require("./button.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(_ref) {
  var text = _ref.text,
      onClick = _ref.onClick,
      className = _ref.className;
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "".concat(_button.default.button).concat(className),
    onClick: onClick
  }, text);
};

var _default = Button;
exports.default = _default;
Button.propTypes = {
  text: _propTypes.default.string,
  onClick: _propTypes.default.func,
  className: _propTypes.default.string
};
Button.defaultProps = {
  text: null,
  onClick: null,
  className: ''
};

//# sourceMappingURL=button.js.map