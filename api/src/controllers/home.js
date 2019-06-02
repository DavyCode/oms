import status from "http-status";

module.exports = {
  async Test(request, response, next) {
    // let err = new Error("Promise was rejected")
    // return Promise.reject(err)
    response.status(status.OK).send("hello world");
  }
};
