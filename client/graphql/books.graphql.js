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
export const GET_AUTHORS = gql`
query GetAuthorss {
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
