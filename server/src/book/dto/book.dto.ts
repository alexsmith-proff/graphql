import { IsNotEmpty } from "class-validator";
import { NewBook } from "src/graphql";

export class BookDTO extends NewBook {
    @IsNotEmpty()
    authorId: string

    @IsNotEmpty()
    title: string

    @IsNotEmpty()
    pages: number
}