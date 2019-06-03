import status from "http-status";
import createError from "http-errors";
import winston from "winston";

export default (error, request, response, next) => {
  /**
   * log the error message, and meta object
   */
  winston.error(error.message, error);

  response.status(status.INTERNAL_SERVER_ERROR).json({
    status: "failure",
    message: `${createError(500).message} : ${error.message}`
  });
};
