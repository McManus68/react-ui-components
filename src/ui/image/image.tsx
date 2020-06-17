import React from 'react'
import { useSelector } from 'react-redux'
import Img from 'gatsby-image'

interface Props {
  image: any
}

const Image: React.FC<Props> = ({ image }) => {
  const context = useSelector((state: { context: any }) => state.context)
  return context === 'Gatsby' ? <Img fluid={image} Tag='div' /> : <img src={image} />
}

export default Image
