import React from 'react'
import { useSelector } from 'react-redux'
import Img from 'gatsby-image'

const Image = ({ src, ...props }) => {
  const image = useSelector(state => state.image.images).get(src)
  return image ? <Img fluid={image} Tag='div' {...props} /> : null
}

export default Image
