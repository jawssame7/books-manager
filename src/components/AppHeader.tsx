import { Box, Heading } from '@chakra-ui/layout'
import { Button, useDisclosure } from '@chakra-ui/react'
import { AddModal } from './AddModal.tsx'

export const AppHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Heading>Books manager</Heading>
      <Box py={'10'}>
        <Button colorScheme={'blue'} onClick={onOpen}>
          追加
        </Button>
      </Box>
      <AddModal isOpen={isOpen} onClose={onClose} />
    </>
  )
}
