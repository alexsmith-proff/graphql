import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Author } from "src/graphql";
import { AuthorDTO } from "./dto/author.dto";
import { AuthorService } from "./author.service";

@Resolver('Author')
export class AuthorResolver {
    constructor(private readonly authorService: AuthorService) {}

    @Query()
    async authors(){
        return await this.authorService.findAll()
    }

    @Mutation('createAuthor')
    async create(@Args('input') args: AuthorDTO): Promise<Author> {
        return await this.authorService.create(args)
    }
}