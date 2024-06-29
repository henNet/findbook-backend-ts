import { BookDTO } from "../dto/book.dto";
import { BooksRepository } from "../repositoryabstract/books.respositoryabstract";

class BooksUseCase {
  private booksRepository: BooksRepository;

  constructor(booksRepository: BooksRepository) {
    this.booksRepository = booksRepository;
  }

  async createBook(dto: BookDTO) {
    this.booksRepository.create(dto);
  }

  async findBook(dto: BookDTO) {
    this.booksRepository.find(dto);
  }

  async updateBook(dto: BookDTO, id: string) {
    this.booksRepository.update(dto, id);
  }
}

export { BooksUseCase };
