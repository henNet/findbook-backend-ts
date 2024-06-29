import { BookDTO } from "../dto/book.dto";

abstract class BooksRepository {
  abstract create(dto: BookDTO): void;
  abstract find(dto: BookDTO): Promise<BookEntity | null>;
  abstract update(dto: BookDTO, id: string): Promise<BookEntity | null>;
}

export { BooksRepository };
