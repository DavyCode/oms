/**
 * catch async errors with express-async-errors
 */
import "express-async-errors";

import express from "express";
import path from "path";
import logger from "morgan";
import cors from "cors";
import winston from "winston";
/**
 * Requiring `winston-mongodb` will expose
 * `winston.transports.MongoDB`
 */
import "winston-mongodb";
import routeHandler from "./router/index";
import error from "./middleware/error";
import { LOGS_DBURL, NODE_ENV } from "./config/env";

var app = express();
const router = express.Router();

winston.exceptions.handle(
  new winston.transports.File({ filename: "logs/uncaughtExceptions.log" })
);

process.on("unhandledRejection", ex => {
  throw ex;
});

winston.configure({
  transports: [
    NODE_ENV !== "production"
      ? new winston.transports.Console()
      : new winston.transports.File({
          filename: "logs/error.log",
          level: "error"
        }),
    // new winston.transports.MongoDB({ db: LOGS_DBURL})
    new winston.transports.File({ filename: "logs/logFile.log", level: "info" })
  ]
});

/*
  Load routes
*/
routeHandler(router);

/*
  Load modules
*/
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../public")));
app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Accept");
  res.header("Content-Type", "application/json");
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  } else {
    next();
  }
});

app.use(router);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

/*
  register error hangler
*/
app.use(error);

export default app;
