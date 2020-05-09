import React from 'react'
import PropTypes from 'prop-types'

const Headline = ({ title, subtitle }) => {
  return (
    <div>
      <h2>{subtitle}</h2>
      <h1>{title}</h1>
    </div>
  )
}

export default Headline

Headline.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}
