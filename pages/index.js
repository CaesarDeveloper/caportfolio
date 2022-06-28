import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  Wrap,
  Avatar,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hola! 👋, Bienvenid@ a mi perfil! 🤓
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            César Arguijo
          </Heading>
          <Paragraph>Creativo digital ( Artista / Desarrollador / Diseñador )</Paragraph>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/148528231.png"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
              objectFit= "contain"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Acerca de
        </Heading>
        <Paragraph>
          Soy un desarrollador fullstack con más de 9 años de experiencia en la
          creación de productos digitales. He colaborado con personas y equipos
          para pequeñas y grandes empresas con el objetivo de crear soluciones
          elegantes, robustas y escalables con las mejores herramientas de
          tecnología.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Ver mi portafolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>

        <BioSection>
          <BioYear>2012-2015</BioYear>
          Desarrollo y mantenimiento de software para clinicas médicas para
          gestionar todos los aspectos de su funcionamiento: desde el marketing
          hasta la facturación y la gestión de registros de pacientes
          (Freelance)
        </BioSection>
        <BioSection>
          <BioYear>2014-2015</BioYear>
          Consultor de sistemas y seguridad informática en Upperbusiness
          Division
        </BioSection>
        <BioSection>
          <BioYear>2015-2016</BioYear>
          Technical Evangelist en Microsoft en el programa de Student Partner{' '}
          <Link href="https://studentambassadors.microsoft.com" target="_blank">
            Student Partner
          </Link>
        </BioSection>
        <BioSection>
          <BioYear>2015</BioYear>
           Ingeniero en Sistemas Computacionales de Universidad
          de Estudios Profesionales de Ciencias y Artes
        </BioSection>
        <BioSection>
          <BioYear>2016 - actualmete</BioYear>
          Desarrollador fullstack en la empresa VZERT en múltiples proyectos
          desde apps móviles (Android/iOS) hasta el desarrollo de software
          backend, frontend, desarrollo de APIs, arquitectura de sistemas y
          Devops.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Skills
        </Heading>
        <Paragraph>
          <Wrap textAlign="center">
            <Box w="" p={0}>
              <Avatar
                name="React"
                src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=360/uploads/users/1125/posts/29791/preview_image/RN.jpg"
              />
              <Paragraph>React</Paragraph>
            </Box>

            <Box w="" p={0}>
              <Avatar
                name="Next.js"
                src="https://miro.medium.com/max/1200/1*xsMYIt3m_cleoHcd-Ncozg.png"
              />
              <Paragraph>Next.js</Paragraph>
            </Box>

            <Box w="" p={0}>
              <Avatar
                name="Javascript"
                src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png"
              />
              <Paragraph>Javascript</Paragraph>
            </Box>

            <Box w="" p={0}>
              <Avatar
                name="HTML"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNCYT6aCga_RwcVXJIZ4P3cIH5FiRE9YMBEfggcZzk7NRvtQ7iz0w_2y185rcmUQypn2A&usqp=CAU"
              />
              <Paragraph>HTML</Paragraph>
            </Box>

            <Box w="" p={0}>
              <Avatar
                name="CSS"
                src="https://i.pinimg.com/originals/d5/b9/3b/d5b93bad3c10cc5b92b47e4678598548.jpg"
              />
              <Paragraph>CSS</Paragraph>
            </Box>

            <Box w="" p={0}>
              <Avatar
                name="Git"
                src="https://i.pinimg.com/736x/01/e5/00/01e500fca29c045d432b64f285f9c229.jpg"
              />
              <Paragraph>Git</Paragraph>
            </Box>

            <Box w="" p={0}>
              <Avatar
                name="Node.js"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5XXcrSwmxBeIVPgP6ni-1D3YiQ1u-gIEZZJougnJcFhprf-HYxYoReURIzV52OddQgiM&usqp=CAU"
              />
              <Paragraph>Node.js</Paragraph>
            </Box>

            <Box w="" p={0}>
              <Avatar
                name="PHP"
                src="https://p.kindpng.com/picc/s/11-118738_php-logo-png-circle-transparent-png.png"
              />
              <Paragraph>PHP</Paragraph>
            </Box>

            <Box w="" p={0}>
              <Avatar
                name="Docker"
                src="https://www.docker.com/wp-content/uploads/2022/05/Docker_Temporary_Image_Google_Blue_1080x1080_v1.png"
              />
              <Paragraph>Docker</Paragraph>
            </Box>

            <Box w="" p={0}>
              <Avatar
                name="Webpack"
                src="https://jessecolligan.com/images/webpack_logo.png"
              />
              <Paragraph>Webpack</Paragraph>
            </Box>

            <Box w="" p={0}>
              <Avatar
                name="Babel"
                src="https://miro.medium.com/max/800/1*DGJT51DxMSbsRNuF6J_c6Q.jpeg"
              />
              <Paragraph>Babel</Paragraph>
            </Box>

            <Box w="" p={0}>
              <Avatar
                name="Vite.js"
                src="https://uploads.sitepoint.com/wp-content/uploads/2021/04/1618197067vitejs.png"
              />
              <Paragraph>Vite.js</Paragraph>
            </Box>

            <Box w="" p={0}>
              <Avatar
                name="Typescript"
                src="https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png"
              />
              <Paragraph>Typescript</Paragraph>
            </Box>
          </Wrap>

          {/* <Link href="https://illust.odoruinu.net/" target="_blank">
            Drawing
          </Link>
          , Playing Drums,{' '}
          <Link href="https://500px.com/p/craftzdog" target="_blank">
            Photography
          </Link>
          , Leica, Machine Learning */}
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Contacto
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/CaesarDeveloper" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @caesardeveloper
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://instagram.com/caesardeveloper" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @caesardeveloper
              </Button>
            </Link>
          </ListItem>
        </List>

        {/* <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid> */}

        {/* <Box align="center" my={4}>
          <NextLink href="/posts" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box> */}
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
