import React from 'react'
import PropTypes from 'prop-types'

import Image from '@bit/mcmanus68.ui-react.image'

import '@bit/mcmanus68.ui-react.styles'

import style from './bloc-image-gallery.module.scss'

const BlocImageGallery = ({ images, className }) => {
  const columns = Math.ceil(Math.sqrt(images.length))
  const height = images.length <= 2 ? 100 : Math.ceil(100 / columns) - 5
  return (
    <div
      className={`${style.blocImageGallery} ${className}`}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${columns}, ${height}%)`,
        gap: '1.5rem',
      }}
    >
      {images.map((image, i) => {
        return <Image src={image} key={i} className={style.image} />
      })}
    </div>
  )
}

export default BlocImageGallery

BlocImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  className: PropTypes.string,
}

BlocImageGallery.defaultProps = {
  className: '',
}
