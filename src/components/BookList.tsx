import { SimpleGrid } from '@chakra-ui/layout'
import { useEffect, useState } from 'react'
import { fetchData } from '../api/FirestoreAPI.ts'
import { Book } from '../types/Book.ts'
import { BookCard } from './BookCard.tsx'

export const BookList = () => {
  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
    fetchData().then((books) => {
      setBooks(books)
    })
  }, [])

  return (
    <>
      <SimpleGrid spacing={4} templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
        {books.map((book) => {
          return <BookCard key={book.id} book={book}></BookCard>
        })}
      </SimpleGrid>
    </>
  )
}
