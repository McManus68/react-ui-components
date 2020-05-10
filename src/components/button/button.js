import React from 'react'
import PropTypes from 'prop-types'

import '@bit/mcmanus68.ui-react.styles'

import style from './button.module.scss'

const Button = ({ children, className, ...otherProps }) => {
  return (
    <button className={[style.button, className].join(' ')} {...otherProps}>
      {children}
    </button>
  )
}

export default Button

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}
