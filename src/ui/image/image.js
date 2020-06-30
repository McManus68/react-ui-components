import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import Img from 'gatsby-image'

const Image = ({ image }) => {
  const context = useSelector(state => state.context.name)
  const url = useSelector(state => state.context.url)
  const siteId = useSelector(state => state.editor?.currentSiteId)

  if (context !== 'Gatsby') {
    image = {
      originalName: image,
      aspectRatio: 1,
      src: `${url}/images/${siteId}/${image}`,
      srcSet: `${url}/images/${siteId}/${image}`,
      sizes: '(max-width: 1280px) 100vw',
    }
  }

  return <Img fluid={image} Tag='div' />
}

export default Image

Image.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}
