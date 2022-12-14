import React, { FC, useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import client from '../util/apollo-client'
import { GET_BOOKS, CREATE_BOOK, GET_AUTHORS, GET_BOOK_BY_ID } from '../graphql/books.graphql'
import { useQuery, useMutation } from '@apollo/client'

import { IAuthor } from '../interfaces/author'

import s from './index.module.scss'


type IndexProps = {
  authors: IAuthor[]
}

const Index: React.FC<IndexProps> = ({ authors }) => {
  const [idBook, setIdBook] = useState<string>('1')
  const [title, setTitle] = useState<string>('')
  const [pages, setPages] = useState<number>(0)
  const [authorId, setAuthorId] = useState<string>('')

  const { loading: allBooksLoading, error: allBooksError, data: allBooks } = useQuery(GET_BOOKS)
  const { loading: bookLoading, error: bookError, data: bookData} = useQuery(GET_BOOK_BY_ID, {
    variables: {ids: idBook}
  })
  console.log(bookData);
  
  const [createBook] = useMutation(CREATE_BOOK, {
    onCompleted: () => {
      window.location.reload()
    }
  })

  
  

  const addBook = (e) => {
    e.preventDefault()

    createBook({
      variables: {
        input: {
          title: title,
          pages: pages,
          authorId: authorId
        }
      }
    })
  }

  return (
    <div>
      <MainLayout >
      </MainLayout>
      <div className="container">
        <div className={s.title}>Data from the SERVER</div>
        <div className={s.info}>
          <div className={s.infoBlock}>
            <div className={s.listTitle}>Books authors</div>
            <ul className={s.list}>
              {
                authors.map((item, index) => (
                  <li className={s.item} key={index}>
                    <div className={s.param}>
                      <span className={s.name}>ID:</span>
                      {
                        item.hasOwnProperty('id')
                          ?
                          <span className={s.value}>{item.id}</span>
                          :
                          <span className={s.value}>---</span>
                      }
                    </div>
                    <div className={s.param}>
                      <span className={s.name}>NAME:</span>
                      {
                        item.hasOwnProperty('name')
                          ?
                          <span className={s.value}>{item.name}</span>
                          :
                          <span className={s.value}>---</span>
                      }
                    </div>
                    <div className={s.param}>
                      <span className={s.name}>AGE:</span>
                      {
                        item.hasOwnProperty('age')
                          ?
                          <span className={s.value}>{item.age}</span>
                          :
                          <span className={s.value}>---</span>
                      }
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className={s.infoBlock}>
            <div className={s.listTitle}>Books</div>
            <ul className={s.list}>
              {
                allBooks &&
                allBooks.books.map((item, index) => (
                  <li className={s.item} key={index}>
                    <div className={s.param}>
                      <span className={s.name}>ID:</span>
                      {
                        item.hasOwnProperty('id')
                          ?
                          <span className={s.value}>{item.id}</span>
                          :
                          <span className={s.value}>---</span>
                      }
                    </div>
                    <div className={s.param}>
                      <span className={s.name}>TITLE:</span>
                      {
                        item.hasOwnProperty('title')
                          ?
                          <span className={s.value}>{item.title}</span>
                          :
                          <span className={s.value}>---</span>
                      }
                    </div>
                    <div className={s.param}>
                      <span className={s.name}>PAGES:</span>
                      {
                        item.hasOwnProperty('pages')
                          ?
                          <span className={s.value}>{item.pages}</span>
                          :
                          <span className={s.value}>---</span>
                      }
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>

        <form className={s.form}>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} name="title" placeholder="title book" />
          <input type="text" value={pages} onChange={e => setPages(Number(e.target.value))} placeholder="pages" />
          <input type="text" value={authorId} onChange={e => setAuthorId(e.target.value)} placeholder="ID author" />
          <button onClick={(e) => addBook(e)}>Add book</button>
        </form>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: GET_AUTHORS,
  })

  return {
    props: {
      authors: data.authors
    },
  }
}

export default Index