
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class NewAuthor {
    name?: Nullable<string>;
    age?: Nullable<number>;
}

export class NewBook {
    title?: Nullable<string>;
    pages?: Nullable<number>;
    authorId?: Nullable<string>;
    age?: Nullable<number>;
}

export class Author {
    id: string;
    name?: Nullable<string>;
    age?: Nullable<number>;
}

export abstract class IQuery {
    abstract authors(): Nullable<Nullable<Author>[]> | Promise<Nullable<Nullable<Author>[]>>;

    abstract books(): Nullable<Nullable<Book>[]> | Promise<Nullable<Nullable<Book>[]>>;

    abstract book(id?: Nullable<string>): Nullable<Book> | Promise<Nullable<Book>>;
}

export abstract class IMutation {
    abstract createAuthor(input: NewAuthor): Nullable<Author> | Promise<Nullable<Author>>;

    abstract createBook(input: NewBook): Nullable<Book> | Promise<Nullable<Book>>;
}

export class Book {
    id: string;
    title?: Nullable<string>;
    pages?: Nullable<number>;
    author?: Nullable<Author>;
}

type Nullable<T> = T | null;
