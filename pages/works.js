import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbSMSMasivos from '../public/images/works/smsmasivos.png'
import thumbMobilitylabs from '../public/images/works/mobilitylabs.png'
import thumbWifibus from '../public/images/works/wifibus-details.png'
import thumbUpperbusiness from '../public/images/works/upperbusiness.png'
import thumbIndiemaker from '../public/images/works/indiemaker.png'

const Works = () => (
  <Layout title="Portafolio">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Portafolio
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="smsmasivos"
            title="SMS Masivos"
            thumbnail={thumbSMSMasivos}
          >
            Landing page para la empresa de envío de mensajes SMS
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="mobilitylabs"
            title="Mobilitylabs"
            thumbnail={thumbMobilitylabs}
          >
            Landing page con e-commece integrado para dispositivos de rastreo
            GPS
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="wifibus" title="Wifibus" thumbnail={thumbWifibus}>
            Aplicación de entretenimiento móvil enfocada para los pasajeros del
            S.I.T de la ciudad de León Gto
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="upperbusiness"
            title="Upperbusiness"
            thumbnail={thumbUpperbusiness}
          >
            Sitio web corporativo para empresa de consultoría en el área Fiscal,
            Contable, Financiero, Corporativo, de Negocios, Legal y de Comercio
            Exterior
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Colaboraciones
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="indiemaker"
            thumbnail={thumbIndiemaker}
            title="Indie maker"
          >
            Landing page de e-commerce para comprar y vender proyectos
            paralelos, saas, dominios y más.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
