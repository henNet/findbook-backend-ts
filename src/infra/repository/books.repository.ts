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
  embedding: [Number],
});

const Books = mongoose.model("books", booksSchema);

class BookRepositoryMongoose implements BooksRepository {
  create(dto: BookDTO) {
    const books = new Books(dto);
    return books.save();
  }

  async find(dto: BookDTO, id: string): Promise<BookEntity | null> {
    console.log(dto.title);
    // const response = await Books.findOne({ title: dto.title });
    const response = await Books.findOne({ _id: id });
    return response ? response.toObject() : null;
  }

  async findAll(): Promise<any> {
    const response = await Books.find({});
    console.log(response);

    return response ? response : null;
  }

  async update(dto: BookDTO, id: string): Promise<BookEntity | null> {
    const response = await Books.findByIdAndUpdate(id, dto);
    return response ? response.toObject() : null;
  }
}

export { BookRepositoryMongoose };
