import { Injectable } from "@nestjs/common";
import { Author} from "src/graphql";
import { AuthorDTO } from "./dto/author.dto";

@Injectable()
export class AuthorService {
    private readonly authors: Author[] = []

    findAll(): Author[] {
        return this.authors
    }
    create(authorDTO: AuthorDTO): Author {
        const authorID: number = this.authors.length + 1
        const author: Author = new Author()

        author.id = authorID.toString()
        author.name = authorDTO.name
        author.age = authorDTO.age
        this.authors.push(author)
        return author
    }
}