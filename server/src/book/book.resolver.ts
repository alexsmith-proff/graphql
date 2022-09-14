import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Book } from "src/graphql";
import { BookDTO } from "./dto/book.dto";
import { BookService } from "./book.service";

@Resolver('Book')
export class BookResolver {
    constructor(private readonly bookService: BookService) {}

    @Query()
    async books(){
        return await this.bookService.findAll()
    }

    @Mutation('createBook')
    async create(@Args('input') args: BookDTO): Promise<Book> {
        return await this.bookService.create(args)
    }
}