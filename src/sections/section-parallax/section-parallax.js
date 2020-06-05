import React from 'react'
import PropTypes from 'prop-types'

import { useSelector } from 'react-redux'
import { Parallax } from 'react-parallax'

import '@bit/mcmanus68.ui-react.styles'

import style from './section-parallax.module.scss'

const SectionParallax = ({
  id,
  children,
  className,
  image,
  height,
  overlay,
}) => {
  const bg = useSelector(state => state.image.images).get(image)
  return (
    <section className={className} id={id}>
      <Parallax
        bgImage={bg.src}
        strength={300}
        className={style.sectionParallax}
        bgImageStyle={{
          objectFit: 'cover',
        }}
      >
        <div
          style={{
            height: `${height}vh`,
            display: 'flex',
            alignItems: 'center',
            backgroundColor: overlay,
          }}
        >
          {children}
        </div>
      </Parallax>
    </section>
  )
}

export default SectionParallax

SectionParallax.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  image: PropTypes.string.isRequired,
  height: PropTypes.number,
}

SectionParallax.defaultProps = {
  className: '',
  overlay: 'none',
  height: 100,
}
