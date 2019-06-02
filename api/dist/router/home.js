"use strict";

var _home = _interopRequireDefault(require("../controllers/home"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = function (router) {
  router.get("/", _home["default"].Test);
};