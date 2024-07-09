import { BookDTO } from "../dto/book.dto";

abstract class BooksRepository {
  abstract create(dto: BookDTO): void;
  abstract find(dto: BookDTO, id: string): Promise<BookEntity | null>;
  abstract findAll(): Promise<any>;
  abstract update(dto: BookDTO, id: string): Promise<BookEntity | null>;
}

export { BooksRepository };
