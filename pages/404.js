import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">404 - no encontrada</Heading>
      <Text>La página que estás buscando no fue encontrada.</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="teal">Regresar a Inicio</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
