import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'

import styled from 'styled-components'

const LinkText = ({ color, className, children, to }) => (
  <Link to={'/' + to} className={className}>
    {children}
    {console.log('props:', color)}
  </Link>
)

const StyledLinkText = styled(LinkText)`
  display: inline-block;
  text-transform: uppercase;
  cursor: pointer;
  letter-spacing: 2px;
  margin-right: -2px;
  color: ${props => props.theme.colors.primary};
  position: relative;
  transition: color 0.5s;
  text-align: center;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 100%;
    height: 2px;
    background-color: ${props => props.theme.colors.primary};
    transition: background-color 0.5s;
  }

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.primaryDark};
  }

  &:hover::before,
  &:focus::before {
    background-color: ${props => props.theme.colors.primaryDark};
  }
`

export default StyledLinkText

LinkText.propTypes = {
  children: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary']),
}

LinkText.defaultProps = {
  color: 'primary',
}
