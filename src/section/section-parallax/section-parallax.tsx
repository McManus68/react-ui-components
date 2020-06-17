import React from 'react'
import { useSelector } from 'react-redux'
import { Parallax } from 'react-parallax'
import styled from 'styled-components'

const StyledParallax = styled(Parallax)`
  width: 100%;
`

interface OverlayProps {
  height: number
  overlay: string
}

const Overlay = styled.div<OverlayProps>`
  display: flex;
  align-items: center;
  height: ${props => props.height}vh;
  background-color: ${props => props.overlay};
`

interface Props {
  id?: string
  className?: string
  title?: string
  subtitle?: string
  image: any
  height: number
  overlay: string
}

const SectionParallax: React.FC<Props> = ({
  id,
  className,
  children,
  image,
  height = 100,
  overlay = 'none',
}) => {
  const context = useSelector((state: { context: any }) => state.context)

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
