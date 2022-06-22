import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="CaesarDev homepage" />
        <meta name="author" content="CaesarDeveloper" />
        <meta name="author" content="caesar.dev" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@caesardev" />
        <meta name="twitter:creator" content="@caesardev" />
        {/* <meta name="twitter:image" content="/card.png" /> */}
        <meta property="og:site_name" content="Caesar Developer's Homepage" />
        <meta property="og:type" content="website" />
        {/* <meta property="og:image" content="/card.png" /> */}
        <title>Caesar Developer - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <br></br>
        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
