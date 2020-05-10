import React from 'react'
import PropTypes from 'prop-types'

import '@bit/mcmanus68.ui-react.styles'

import style from './section.module.scss'

const Section = ({ children, id, className }) => {
  return (
    <section className={[style.section, className].join(' ')} id={id}>
      {children}
    </section>
  )
}

export default Section

Section.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
}
