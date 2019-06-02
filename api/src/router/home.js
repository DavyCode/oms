import home from "../controllers/home";
// import asyncMiddleware from '../middleware/async'

module.exports = router => {
  // router.get("/", asyncMiddleware(home.Test))
  router.get("/test", home.Test);
};
