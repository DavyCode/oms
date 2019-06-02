"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _home = _interopRequireDefault(require("./home"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Add access to the router objects to each route
var _default = function _default(router) {
  (0, _home["default"])(router);
};

exports["default"] = _default;