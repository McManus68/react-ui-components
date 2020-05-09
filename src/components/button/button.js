import React from 'react'
import PropTypes from 'prop-types'

import style from './button.scss'

const Button = ({ text, onClick, className }) => {
  return (
    <button className={`${style.button}${className}`} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
}

Button.defaultProps = {
  text: null,
  onClick: null,
  className: '',
}
