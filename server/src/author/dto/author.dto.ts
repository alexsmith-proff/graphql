import { IsNotEmpty } from "class-validator";
import { NewAuthor } from "src/graphql";

export class AuthorDTO extends NewAuthor {
    @IsNotEmpty()
    authorId: string

    @IsNotEmpty()
    title: string

    @IsNotEmpty()
    pages: number
}