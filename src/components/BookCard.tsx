import { Book } from '../types/Book.ts'
import { Card, CardBody, Image, Stack } from '@chakra-ui/react'
import { Heading, Text } from '@chakra-ui/layout'

// @ts-ignore
export const BookCard = ({ book }: { book: Book }) => {
  return (
    <>
      <Card>
        <CardBody>
          <Image src={book.thumbnail}></Image>
          <Stack mt="6" spacing="3">
            <Heading size="md">{book.title}</Heading>
            <Text>{book.isbn}</Text>
            <Text>{book.description}</Text>
          </Stack>
        </CardBody>
      </Card>
    </>
  )
}
