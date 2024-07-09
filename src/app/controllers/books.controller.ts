import { HttpResponse, HttpResquest } from "../../infra/http/http.adapter";
import { BookDTO } from "../dto/book.dto";
import { BooksUseCase } from "../usecase/books.usecase";

class BooksController {
  constructor(private readonly bookUseCase: BooksUseCase) {}

  async create(httpResquest: HttpResquest): Promise<HttpResponse> {
    const body: BookDTO = httpResquest.body;
    try {
      const response = await this.bookUseCase.createBook(body);

      return {
        status: 201,
        message: "Book Created",
        data: response,
      };
    } catch (error: any) {
      return {
        status: error.status,
        message: error.message,
      };
    }
  }

  async find(httpResquest: HttpResquest): Promise<HttpResponse> {
    const dto: BookDTO = httpResquest.body;
    const id: string = httpResquest.params.id;
    try {
      const response = await this.bookUseCase.findBook(dto, id);

      return {
        status: 200,
        message: "Book Found",
        data: response,
      };
    } catch (error: any) {
      return {
        status: error.status,
        message: error.message,
      };
    }
  }

  async findAll(httpResquest: HttpResquest): Promise<HttpResponse> {
    const dto: BookDTO = httpResquest.body;
    const id: string = httpResquest.params.id;
    try {
      const response = await this.bookUseCase.findAllBooks();

      return {
        status: 200,
        message: "Book Found",
        data: response,
      };
      // return response;
    } catch (error: any) {
      return {
        status: error.status,
        message: error.message,
      };
    }
  }

  async update(httpResquest: HttpResquest): Promise<HttpResponse> {
    const dto: BookDTO = httpResquest.body;
    const id: string = httpResquest.params.id;

    try {
      const response = await this.bookUseCase.updateBook(dto, id);

      return {
        status: 200,
        message: "Book Updated",
        data: response,
      };
    } catch (error: any) {
      return {
        status: error.status,
        message: error.message,
      };
    }
  }
}

export { BooksController };
