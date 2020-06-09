import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap'
import Content from '@bit/mcmanus68.ui-react.content'
import SectionParallax from '@bit/mcmanus68.ui-react.section-parallax'
import Headline from '@bit/mcmanus68.ui-react.headline'

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
  className: PropTypes.string,
  image: PropTypes.string.isRequired,
  height: PropTypes.number,
  overlay: PropTypes.string,
}

SectionHeadline.defaultProps = {
  className: '',
  height: 65,
  overlay: 'none',
}
