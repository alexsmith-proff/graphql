import { gql } from "@apollo/client"

export const GET_BOOKS = gql`
query GetBooks {
  books {
      id
      title
      pages
      author {
          name
          age
      }
  }
}
`
export const GET_BOOK_BY_ID = gql`
query GetBookById($ids: String) {
  book(id: $ids) {
      id
      title
      pages
  }
}
`

export const GET_AUTHORS = gql`
query GetAuthors {
  authors {
      id
      name
      age
  }
}
`

export const CREATE_BOOK = gql`
mutation CreateBook($input: NewBook!) {
    createBook(input: $input) {
        id
        title
    }
}
`
