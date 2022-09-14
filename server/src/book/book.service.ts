import { Injectable } from "@nestjs/common";
import { Author, Book } from "src/graphql";
import { BookDTO } from "./dto/book.dto";

@Injectable()
export class BookService {
    private readonly books: Book[] = []

    findAll(): Book[] {
        return this.books
    }
    create(bookDTO: BookDTO): Book {
        const bookID: number = this.books.length + 1
        const book: Book = new Book()
        book.id = bookID.toString()
        book.title = bookDTO.title
        book.pages = bookDTO.pages
        const author: Author = new Author()
        author.id = bookDTO.authorId
        book.author = author
        this.books.push(book)
        return book
    }
}