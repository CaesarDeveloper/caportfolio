import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Mobilitylabs">
    <Container>
      <Title>
        WIFIBUS <Badge>2017</Badge>
      </Title>
      <P>
        Landing page para la página de WIFIBUS León y desarrollo de app móvil
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://play.google.com/store/apps/details?id=com.vzert.wifibus&hl=es_US&gl=US">
            https://play.google.com/store/apps/details?id=com.vzert.wifibus&hl=es_US&gl=US{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML CSS, Javascript, Android (Kotlin) </span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/wifibus-details.png" alt="Wifibus" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
