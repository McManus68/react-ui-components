import React from 'react'
import PropTypes from 'prop-types'
import scrollTo from 'gatsby-plugin-smoothscroll'

import { FaChevronUp } from 'react-icons/fa'

import styled from 'styled-components'

const StyledBackToTop = styled.div`
  text-align: center;
  width: 4rem;
  height: 4rem;
  background-color: ${props => props.theme.footer.bg};
  position: absolute;
  top: -2rem;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
`

const StyledLink = styled.a`
  color: ${props => props.theme.footer.color};
  svg {
    cursor: pointer;
    margin: 1.2rem;
  }
`

const BackToTop = ({ anchor }) => {
  return (
    <StyledBackToTop>
      <StyledLink onClick={() => scrollTo('#' + anchor)}>
        <FaChevronUp />
      </StyledLink>
    </StyledBackToTop>
  )
}

export default BackToTop

BackToTop.propTypes = {
  anchor: PropTypes.string,
}

BackToTop.defaultProps = {
  anchor: 'hero',
}
