import { Router } from "express";
import { BooksController } from "../../app/controllers/books.controller";
import { RouterAdaptar } from "./router.adapter";

export const BookRoutes = (router: Router) => {
  const booksController = new BooksController();

  router.post("/books", RouterAdaptar(booksController, "create"));
};
