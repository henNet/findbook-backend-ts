import { Router } from "express";
import { BooksController } from "../../app/controllers/books.controller";
import { RouterAdaptar } from "./router.adapter";
import { BooksUseCase } from "../../app/usecase/books.usecase";
import { BookRepositoryMongoose } from "../repository/books.repository";

export const BookRoutes = (router: Router) => {
  const booksUseCase = new BooksUseCase(new BookRepositoryMongoose());
  const booksController = new BooksController(booksUseCase);

  /* Endpoints */
  router.post("/books", RouterAdaptar(booksController, "create"));
  router.get("/books", RouterAdaptar(booksController, "find"));
  router.put("/books/:id", RouterAdaptar(booksController, "update"));
};
