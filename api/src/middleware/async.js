/* 
  custome middleware for handling async errors in node
  a substitute for express-async-errors
*/
export default handler => {
  return async (request, response, next) => {
    try {
      await handler(request, response);
    } catch (ex) {
      next(ex);
    }
  };
};
