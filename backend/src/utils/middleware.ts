import {Request, Response, NextFunction} from 'express'
import logger from "./logger";

const requestLogger = (request: Request, response: Response, next: NextFunction) => {
  logger.info("Method:", request.method);
  logger.info("Path:  ", request.path);
  logger.info("Body:  ", request.body);
  logger.info("---");
  next();
};

const unknownEndpoint = (request: Request, response: Response) => {
  // logger.error('unknown endpoint request', request)
  response.status(404).send({ error: "unknown endpoint" });
};

const errorHandler = (error: Error, request: Request, response: Response, next: NextFunction) => {
  logger.error(error.message);
  // logger.error(request)
  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  } else if (error.name === "ValidationError") {
    return response.status(400).json({ error: error.message });
  }

  next(error);
};

export default {
  requestLogger,
  unknownEndpoint,
  errorHandler,
};
