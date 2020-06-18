import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap'
import Content from '@bit/mcmanus68.webmaker.ui.content'
import Headline from '@bit/mcmanus68.webmaker.ui.headline'
import SectionParallax from '@bit/mcmanus68.webmaker.section.section-parallax'

const SectionHeadline = ({ id, title, subtitle, image, height, overlay }) => (
  <SectionParallax id={id} image={image} height={height} overlay={overlay}>
    <Container>
      <Content>
        <Headline title={title} subtitle={subtitle} />
      </Content>
    </Container>
  </SectionParallax>
)

export default SectionHeadline

SectionHeadline.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.object,
  height: PropTypes.number,
  overlay: PropTypes.string,
}

SectionHeadline.defaultProps = {
  height: 65,
  overlay: 'none',
}
