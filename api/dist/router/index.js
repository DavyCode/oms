"use strict";

// Add access to the router objects to each route

module.exports = function (router) {
  require('./home')(router);
};