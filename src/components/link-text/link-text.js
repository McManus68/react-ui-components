import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'

import style from './link-text.module.scss'

const LinkText = ({ className, children, to }) => {
  return (
    <Link to={'/' + to} className={[style.linkText, className].join(' ')}>
      {children}
    </Link>
  )
}

export default LinkText

LinkText.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
}
