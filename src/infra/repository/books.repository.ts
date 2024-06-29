import mongoose from "mongoose";
import { BookDTO } from "../../app/dto/book.dto";
import { BooksRepository } from "../../app/repositoryabstract/books.respositoryabstract";

const booksSchema = new mongoose.Schema({
  title: String,
  isbn: String,
  pageCount: Number,
  publishedDate: { $date: String },
  thumbnailUrl: String,
  shortDescription: String,
  longDescription: String,
  status: String,
  authors: [String],
  categories: [String],
});

const Books = mongoose.model("books", booksSchema);

class BookRepositoryMongoose implements BooksRepository {
  create(dto: BookDTO) {
    const books = new Books(dto);
    return books.save();
  }

  async find(dto: BookDTO): Promise<BookEntity | null> {
    const response = await Books.findOne({ title: dto.title });
    return response ? response.toObject() : null;
  }

  async update(dto: BookDTO, id: string): Promise<BookEntity | null> {
    const response = await Books.findByIdAndUpdate(id, dto);
    return response ? response.toObject() : null;
  }
}

export { BookRepositoryMongoose };
