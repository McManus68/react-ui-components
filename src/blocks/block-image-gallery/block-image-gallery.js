import React from 'react'
import PropTypes from 'prop-types'

import Image from '@bit/mcmanus68.ui-react.image'

import '@bit/mcmanus68.ui-react.styles'

import style from './block-image-gallery.module.scss'

const BlockImageGallery = ({ images, className, display }) => {
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
    <div
      className={`${style.blockImageGallery} ${className}`}
      style={{
        display: 'grid',
        gridTemplateColumns:
          columns === -1 ? `none` : `repeat(${columns}, 1fr)`,
        gridTemplateRows: rows === -1 ? `none` : `repeat(${rows}, 1fr)`,
        gap: '1.4rem',
      }}
    >
      {images.map((image, i) => {
        return <Image src={image} key={i} className={style.image} />
      })}
    </div>
  )
}

export default BlockImageGallery

BlockImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  className: PropTypes.string,
  display: PropTypes.string,
}

BlockImageGallery.defaultProps = {
  className: '',
  display: 'Square',
}
