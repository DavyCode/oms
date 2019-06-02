"use strict";

module.exports = {
  Test: function Test(req, res, next) {
    res.status(200).json({
      message: "ORDERS MANAGEMENT SYSTEM"
    });
  }
};