import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="SMS Masivos">
    <Container>
      <Title>
        SMS Masivos <Badge>2016</Badge>
      </Title>
      <P>Landing page para la empresa de envío de mensajes SMS</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.smsmasivos.com.mx/">
            https://www.smsmasivos.com.mx/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>PHP, Javascript, Wordpress, Apache</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/smsmasivos.png" alt="Inkdrop" />
      <WorkImage src="/images/works/smsmasivos-2.png" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
