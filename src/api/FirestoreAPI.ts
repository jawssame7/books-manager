import { db } from '../main.tsx'
import { addDoc, collection, getDocs, orderBy, query } from 'firebase/firestore'
import { Book } from '../types/Book.ts'

const fetchData = async () => {
  const booksRef = collection(db, 'books')
  const q = query(booksRef, orderBy('title'))
  const querySnapshot = await getDocs(q)
  const books = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
  return books
}

const addBook = async (book: Book | null) => {
  const booksCollectionRef = collection(db, 'books')
  if (book) {
    const documentRef = await addDoc(booksCollectionRef, book)
    console.log(documentRef)
  }
}

export { fetchData, addBook }
