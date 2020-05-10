import React from 'react'
import PropTypes from 'prop-types'

import { FaAsterisk } from 'react-icons/fa'

import '@bit/mcmanus68.ui-react.styles'

import style from './headline-separator.module.scss'

const HeadlineSeparator = ({ className }) => {
  return (
    <FaAsterisk className={[style.headlineSeparator, className].join(' ')} />
  )
}

export default HeadlineSeparator

HeadlineSeparator.propTypes = {
  className: PropTypes.string,
}
