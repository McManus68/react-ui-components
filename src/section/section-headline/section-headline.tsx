import React from 'react'
import { Container } from 'react-bootstrap'
import Content from '@bit/mcmanus68.webmaker.ui.content'
import Headline from '@bit/mcmanus68.webmaker.ui.headline'
import SectionParallax from '@bit/mcmanus68.webmaker.section.section-parallax'

interface Props {
  id?: string
  title?: string
  subtitle?: string
  image: any
  height: number
  overlay: string
}

const SectionHeadline: React.FC<Props> = ({
  id,
  title,
  subtitle,
  image,
  height = 65,
  overlay = 'none',
}) => (
  <SectionParallax id={id} image={image} height={height} overlay={overlay}>
    <Container>
      <Content>
        <Headline title={title} subtitle={subtitle} />
      </Content>
    </Container>
  </SectionParallax>
)

export default SectionHeadline
