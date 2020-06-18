import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Parallax } from 'react-parallax'
import styled from 'styled-components'

const StyledParallax = styled(Parallax)`
  width: 100%;
`
const Overlay = styled.div`
  display: flex;
  align-items: center;
  height: ${props => props.height}vh;
  background-color: ${props => props.overlay};
`

const SectionParallax = ({ id, className, children, image, height, overlay }) => {
  const context = useSelector(state => state.context)

  return (
    <section id={id} className={className}>
      <StyledParallax
        bgImage={context === 'Gatsby' ? image.src : image}
        strength={300}
        bgImageStyle={{
          objectFit: 'cover',
        }}
      >
        <Overlay height={height} overlay={overlay}>
          {children}
        </Overlay>
      </StyledParallax>
    </section>
  )
}

export default SectionParallax

SectionParallax.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.object,
  height: PropTypes.number,
  overlay: PropTypes.string,
}

SectionParallax.defaultProps = {
  height: 100,
  overlay: 'none',
}
