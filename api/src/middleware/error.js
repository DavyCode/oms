import status from "http-status";
import createError from "http-errors";

export default (error, request, response, next) => {
  response.status(status.INTERNAL_SERVER_ERROR).json({
    status: "failure",
    message: `${createError(500).message} : ${error.message}`
  });
};
