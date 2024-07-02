import { generateEmbeddings } from "../../infra/services/openai";
import { BookDTO } from "../dto/book.dto";
import { BooksRepository } from "../repositoryabstract/books.respositoryabstract";

class BooksUseCase {
  private booksRepository: BooksRepository;

  constructor(booksRepository: BooksRepository) {
    this.booksRepository = booksRepository;
  }

  async createBook(dto: BookDTO) {
    const dataEmbedding = {
      title: dto.title,
      categories: dto.categories,
      authors: dto.authors,
      longDescription: dto.longDescription,
    };
    const generateEmbedding = await generateEmbeddings(
      JSON.stringify(dataEmbedding)
    );
    return this.booksRepository.create({
      ...dto,
      embedding: generateEmbedding,
    });
  }

  async findBook(dto: BookDTO) {
    this.booksRepository.find(dto);
  }

  async updateBook(dto: BookDTO, id: string) {
    const dataEmbedding = {
      title: dto.title,
      categories: dto.categories,
      authors: dto.authors,
      longDescription: dto.longDescription,
    };
    const generateEmbedding = await generateEmbeddings(
      JSON.stringify(dataEmbedding)
    );
    return this.booksRepository.update(
      { ...dto, embedding: generateEmbedding },
      id
    );
  }
}

export { BooksUseCase };
