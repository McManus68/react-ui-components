import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'

import '@bit/mcmanus68.ui-react.styles'

import style from './link-text.module.scss'

const LinkText = ({ className, children, to }) => {
  return (
    <Link to={to} className={[style.linkText, className].join(' ')}>
      {children}
    </Link>
  )
}

export default LinkText

LinkText.propTypes = {
  children: PropTypes.object,
  className: PropTypes.string,
}
