import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'
import { useCallback, useRef, useState } from 'react'
import SearchAPI from '../api/Search.ts'
import { Book } from '../types/Book.ts'
import { BookCard } from './BookCard.tsx'
import { addBook } from '../api/FirestoreAPI.ts'

export const AddModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: Function }) => {
  const initialRef = useRef(null)

  const [book, setBook] = useState<Book | null>(null)

  const onCloseWrap = () => {
    setBook(null)
    onClose()
  }

  const handleKeyDownEnter = useCallback(async (event: { keyCode: number }) => {
    if (event.keyCode === 13) {
      setBook(null)
      // キーコードを判定
      // @ts-ignore
      const result = await SearchAPI(initialRef.current.value.trim())

      if (result && !result.error) {
        // @ts-ignore
        setBook({
          title: result.title,
          thumbnail: result.thumbnail,
          authors: result.authors,
          description: result.description,
          isbn: result.isbn,
        })
      }
    }
  }, [])

  const handleAddDoc = async (event: { preventDefault: () => void }) => {
    event.preventDefault()
    await addBook(book)
    onCloseWrap && onCloseWrap()
  }

  return (
    <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onCloseWrap}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>本の追加</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={'6'}>
          <FormControl pb={'5px'}>
            <FormLabel>ISBN</FormLabel>
            <Input ref={initialRef} onKeyUp={handleKeyDownEnter}></Input>
          </FormControl>
          {book ? <BookCard book={book}></BookCard> : ''}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme={'blue'} mr={3} onClick={handleAddDoc}>
            追加
          </Button>
          <Button onClick={onCloseWrap}>キャンセル</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
