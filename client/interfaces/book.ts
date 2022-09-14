import { IAuthor } from "./author"

export interface IBook {
    id: string,
    title: string,
    pages: number,
    author: IAuthor,
}