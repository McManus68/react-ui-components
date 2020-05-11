import React from 'react'
import PropTypes from 'prop-types'
import scrollTo from 'gatsby-plugin-smoothscroll'

import { FaChevronUp } from 'react-icons/fa'

import '@bit/mcmanus68.ui-react.styles'

import style from './back-to-top.module.scss'

const BackToTop = ({ anchor }) => {
  return (
    <div className={style.backToTop}>
      <a onClick={() => scrollTo('#' + anchor)}>
        <FaChevronUp className={style.chevron} />
      </a>
    </div>
  )
}

export default BackToTop

BackToTop.propTypes = {
  anchor: PropTypes.string,
}

BackToTop.defaultProps = {
  anchor: 'hero',
}
