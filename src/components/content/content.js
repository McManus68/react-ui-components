import React from 'react'
import PropTypes from 'prop-types'

import '@bit/mcmanus68.ui-react.styles'

import style from './content.module.scss'

const Content = ({ children, className }) => {
  return <div className={[style.content, className].join(' ')}>{children}</div>
}

export default Content

Content.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}
