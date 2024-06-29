import { HttpResponse, HttpResquest } from "../../infra/http/http.adapter";
import { BookDTO } from "../dto/book.dto";

class BooksController {
  constructor() {}

  async create(httpResquest: HttpResquest): Promise<HttpResponse> {
    const body: BookDTO = httpResquest.body;
    try {
      if (!body) {
        return {
          status: 400,
          message: "Body Missing",
        };
      }

      console.log(body);

      return {
        status: 201,
        message: "Book Created",
      };
    } catch (error: any) {
      return {
        status: 400,
        message: "Livro cadastrado com sucesso",
      };
    }
  }
}

export { BooksController };
