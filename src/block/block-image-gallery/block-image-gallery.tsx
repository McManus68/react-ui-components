import React from 'react'
import Image from '@bit/mcmanus68.webmaker.ui.image'
import styled from 'styled-components'

interface GridProps {
  columns: number
  rows: number
}

const StyledBlockImageGallery = styled.div<GridProps>`
  display: grid;
  ${({ columns }) => columns !== -1 && `grid-template-columns: repeat(${columns}, 1fr);`}
  ${({ rows }) => rows !== -1 && `grid-template-rows: repeat(${rows}, 1fr);`}
  gap: 1.4rem;
  height: 60vh;
`

interface Props {
  images: any[]
  display: 'Square' | 'Vertical' | 'Horizontal'
}

const BlockImageGallery: React.FC<Props> = ({ images, display = 'Square' }) => {
  let columns = -1
  let rows = -1
  switch (display) {
    case 'Square': {
      columns = Math.ceil(Math.sqrt(images.length))
      rows = Math.ceil(images.length / columns)
      break
    }
    case 'Vertical': {
      rows = images.length
      break
    }
    case 'Horizontal': {
      columns = images.length
      break
    }
  }

  return (
    <StyledBlockImageGallery rows={rows} columns={columns}>
      {images.map((image: any, i: number) => (
        <Image key={i} image={image} />
      ))}
    </StyledBlockImageGallery>
  )
}

export default BlockImageGallery
