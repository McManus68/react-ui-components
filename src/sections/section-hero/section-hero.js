import React from 'react'
import PropTypes from 'prop-types'

import { navigate } from 'gatsby'

import { Container } from 'react-bootstrap'

import SectionParallax from '@bit/mcmanus68.ui-react.section-parallax'
import Button from '@bit/mcmanus68.ui-react.button'
import Headline from '@bit/mcmanus68.ui-react.headline'
import HeadlineSeparator from '@bit/mcmanus68.ui-react.headline-separator'

import '@bit/mcmanus68.ui-react.styles'

import style from './section-hero.module.scss'

const SectionHero = ({ title, subtitle, image, overlay }) => {
  const goToHome = () => {
    navigate('/')
  }

  return (
    <SectionParallax
      className={style.hero}
      image={image}
      overlay={overlay}
      id='hero'
    >
      <Container>
        <Headline title={title} subtitle={subtitle} />
        <div className={style.separator}>
          <div className={`${style.line} ${style.lineLeft} `}></div>
          <HeadlineSeparator className={style.headlineSeparator} />
          <div className={`${style.line} ${style.lineRight} `}></div>
        </div>
        <div className={style.singleAnimation}>
          <h5>Ready to be opened</h5>
          <Button onClick={goToHome}>Explore</Button>
        </div>
      </Container>
    </SectionParallax>
  )
}

export default SectionHero

SectionHero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  overlay: PropTypes.string,
}

SectionHero.defaultProps = {
  overlay: 'none',
}
