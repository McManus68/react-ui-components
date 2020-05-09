"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Headline = function Headline(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h2", null, subtitle), /*#__PURE__*/_react.default.createElement("h1", null, title));
};

var _default = Headline;
exports.default = _default;
Headline.propTypes = {
  title: _propTypes.default.string.isRequired,
  subtitle: _propTypes.default.string.isRequired
};

//# sourceMappingURL=headline.js.map