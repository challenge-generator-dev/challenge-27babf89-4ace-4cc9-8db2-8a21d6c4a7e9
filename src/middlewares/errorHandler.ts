import { Request, Response, NextFunction } from 'express';
import { ZodError, ZodIssue } from 'zod';

export class HttpError extends Error {
  constructor(public statusCode: number, message: string) {
    super(message);
    this.name = 'HttpError';
  }
}

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.error(`Error: ${err.message}`, err.stack);

  if (err instanceof ZodError) {
    res.status(400).json({
      error: 'Bad Request',
      details: err.issues.map((e: ZodIssue) => ({
        path: e.path.join('.'),
        message: e.message
      }))
    });
    return;
  }

  if (err instanceof HttpError) {
    res.status(err.statusCode).json({
      error: err.message
    });
    return;
  }

  if (err.message.includes('not found')) {
    res.status(404).json({
      error: err.message
    });
    return;
  }

  res.status(500).json({
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
};

export const notFoundHandler = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const error = new HttpError(404, `Ruta ${req.method} ${req.path} no encontrada`);
  next(error);
};

export const validateRequest = (schema: { parse: (body: unknown) => unknown }) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    try {
      schema.parse(req.body);
      next();
    } catch (err) {
      next(err);
    }
  };
};