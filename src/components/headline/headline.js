import React from 'react'
import PropTypes from 'prop-types'

import '@bit/mcmanus68.ui-react.styles'
import style from './headline.module.scss'

const Headline = ({ title, subtitle }) => {
  return (
    <div className={style.headline}>
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
