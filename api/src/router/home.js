import home from '../controllers/home'

module.exports = (router) => {
  router.get("/", home.Test)
}
