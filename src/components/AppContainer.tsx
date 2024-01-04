import { Container } from '@chakra-ui/react'
import { BookList } from './BookList.tsx'
import { AppHeader } from './AppHeader.tsx'

export const AppContainer = () => {
  return (
    <>
      <Container maxW={'6xl'}>
        <AppHeader></AppHeader>
        <BookList />
      </Container>
    </>
  )
}
