import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Indiemaker">
    <Container>
      <Title>
        Indiemaker <Badge>2020</Badge>
      </Title>
      <P>
        Colaboración en el desarrollo del sistema de Indiemaker enfocado a
        compra y venta de proyectos independientes, Software as a Service
        (SAAS), dominios y más.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://indiemaker.co/">
            https://indiemaker.co/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Node.js, React, Next.js, Styled Components</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/indiemaker-1.png" alt="Indiemaker" />
      <WorkImage src="/images/works/indiemaker-2.png" alt="Indiemaker" />
      <WorkImage src="/images/works/indiemaker-3.png" alt="Indiemaker" />
      <WorkImage src="/images/works/indiemaker-4.png" alt="Indiemaker" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
