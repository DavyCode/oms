"use strict";

var home = require("../controllers/home");

module.exports = function (router) {
  router.get("/test", home.Test);
};