import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import Img from 'gatsby-image'

const Image = ({ image }) => {
  const context = useSelector(state => state.context)

  return context === 'Gatsby' ? (
    <Img fluid={image} Tag='div' />
  ) : (
    <img src={image} />
  )
}

export default Image

Image.propTypes = {
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}
