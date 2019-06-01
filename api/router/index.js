"use strict";

// Add access to the router objects to each route

module.exports = router => {
  require('./home')(router);
}; 
