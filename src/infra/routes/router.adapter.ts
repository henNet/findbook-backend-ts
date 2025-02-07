import { NextFunction, Request, Response } from "express";
import { HttpResquest } from "../http/http.adapter";
import { errorMiddleware } from "../midllewares/error.middleware";

export const RouterAdaptar = (controller: any, method: string) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const httpRequest: HttpResquest = {
      body: req?.body,
      headers: req?.headers,
      params: req?.params,
      query: req?.query,
    };

    const httpResponse = await controller[method](httpRequest);

    if (httpResponse.status >= 200 && httpResponse.status <= 299) {
      return res.status(httpResponse.status).json(httpResponse);
    } else {
      return errorMiddleware(httpResponse, req, res, next);
    }
  };
};
