import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'
import { Container } from 'react-bootstrap'
import SectionParallax from '@bit/mcmanus68.webmaker.section.section-parallax'
import Button from '@bit/mcmanus68.webmaker.ui.button'
import Headline from '@bit/mcmanus68.webmaker.ui.headline'
import HeadlineSeparator from '@bit/mcmanus68.webmaker.ui.headline-separator'
import { fadeUp, scale, grow, spin, fadeDown } from './keyframes'
import styled from 'styled-components'

const Hero = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  text-align: center;
  color: #fff;
  h1 {
    animation: ${scale} 0.5s forwards;
  }
  h2 {
    opacity: 0;
    animation: ${fadeUp} 0.5s forwards;
    animation-delay: 0.5s;
  }
`
const SeparatorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const Line = styled.div`
  width: 100%;
  max-width: 8.4rem;
  height: 2px;
  background-color: currentColor;
  position: relative;
  opacity: 0;
  animation: ${grow} 2s forwards;
  animation-delay: 0.9s;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border: 0.4rem solid transparent;
    opacity: 0;
    animation: ${grow} 0.5s forwards;
    animation-delay: 1.2s;
  }
`
const LineLeft = styled(Line)`
  &:before {
    border-left-color: currentColor;
    left: 0;
  }
`
const LineRight = styled(Line)`
  &:before {
    border-right-color: currentColor;
    left: 0;
  }
`
const Separator = styled(HeadlineSeparator)`
  color: ${props => props.theme.color.primary};
  margin: 0 0.4rem;
  opacity: 0;
  animation: ${spin} 0.5s forwards;
  animation-delay: 0.7s;
`
const Description = styled.h5`
  font-size: 0.9rem;
  font-weight: 100;
  text-transform: uppercase;
  margin-bottom: 1.2rem;
  letter-spacing: 3px;
  margin-right: -3px;
`
const AnimationContainer = styled.div`
  opacity: 0;
  animation: ${fadeDown} 0.5s forwards;
  animation-delay: 1.5s;
`

const SectionHero = ({ title, subtitle, image, overlay }) => {
  const goToHome = () => {
    navigate('/')
  }

  return (
    <SectionParallax image={image} overlay={overlay} id='hero'>
      <Hero>
        <Container>
          <Headline title={title} subtitle={subtitle} />
          <SeparatorContainer>
            <LineLeft />
            <Separator />
            <LineRight />
          </SeparatorContainer>
          <AnimationContainer>
            <Description>Ready to be opened</Description>
            <Button onClick={goToHome}>Explore</Button>
          </AnimationContainer>
        </Container>
      </Hero>
    </SectionParallax>
  )
}

export default SectionHero

SectionHero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.object,
  overlay: PropTypes.string,
}

SectionHero.defaultProps = {
  overlay: 'none',
}
