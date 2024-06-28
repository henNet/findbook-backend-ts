import { NextFunction, Request, Response } from "express";
import { HttpExceptions } from "../../types/httpExceptions";

export function errorMiddleware(
  err: HttpExceptions,
  req: Request,
  res: Response,
  next: NextFunction
) {
  return res.status(err.status).json({
    status: 500,
    message: err.message || "Internal Server Error",
  });
}
