import React from 'react'
import PropTypes from 'prop-types'

import Image from '@bit/mcmanus68.ui-react.image'

import styled from 'styled-components'

const StyledBlockImageGallery = styled.div`
  display: grid;
  ${({ columns }) =>
    columns !== -1 && `grid-template-columns: repeat(${columns}, 1fr);`}
  ${({ rows }) =>
    rows !== -1 && `grid-template-rows: repeat(${rows}, 1fr);`}
  gap: 1.4rem;
  height: 60vh;
`

const BlockImageGallery = ({ images, display }) => {
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
      {images.map((image, i) => (
        <Image src={image} key={i} />
      ))}
    </StyledBlockImageGallery>
  )
}

export default BlockImageGallery

BlockImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  display: PropTypes.oneOf(['Square', 'Vertical', 'Horizontal']),
}

BlockImageGallery.defaultProps = {
  display: 'Square',
}
