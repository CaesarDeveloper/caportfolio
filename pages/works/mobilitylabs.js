import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Mobilitylabs">
    <Container>
      <Title>
        Mobilitylabs <Badge>2018</Badge>
      </Title>
      <P>Landing page - Ecommerce para venta de sispositivos de rastreo GPS</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://mobilitylabs.com.mx/shop/">
            https://mobilitylabs.com.mx/shop/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Shopify, Javascript, CSS, PHP, Linux</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/mobilitylabs.png" alt="Mobilitylabs" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
