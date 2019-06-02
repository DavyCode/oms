"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _httpErrors = _interopRequireDefault(require("http-errors"));

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _morgan = _interopRequireDefault(require("morgan"));

var _index = _interopRequireDefault(require("./router/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();

var router = _express["default"].Router(); // Register routes


(0, _index["default"])(router);
console.log({
  routeHandler: _index["default"]
});
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(_express["default"]["static"](_path["default"].join(__dirname, '../public')));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Accept");
  res.header("Content-Type", "application/json");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  } else {
    next();
  }
});
app.use(router); // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

var _default = app; // module.exports = app;

exports["default"] = _default;