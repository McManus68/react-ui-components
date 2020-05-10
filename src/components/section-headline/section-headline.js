import React from 'react'
import PropTypes from 'prop-types'

import { Container } from 'react-bootstrap'

import Content from '@bit/mcmanus68.ui-react.content'
import SectionParallax from '@bit/mcmanus68.ui-react.section-parallax'

import Fade from 'react-reveal/Fade'

import '@bit/mcmanus68.ui-react.styles'

import style from './section-headline.module.scss'

const SectionHeadline = ({ id, title, subtitle, image, height, overlay }) => (
  <SectionParallax
    id={id}
    image={image}
    height={height}
    className={style.sectionHeadline}
    overlay={overlay}
  >
    <Container>
      <Content>
        <Fade bottom delay={300}>
          <h2>{subtitle}</h2>
        </Fade>
        <Fade top delay={600}>
          <h1>{title}</h1>
        </Fade>
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
