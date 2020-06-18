import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

const LinkText = ({ color, className, children, to }) => (
  <Link to={'/' + to} className={className}>
    {children}
  </Link>
)

const StyledLinkText = styled(LinkText)`
  display: inline-block;
  text-transform: uppercase;
  cursor: pointer;
  letter-spacing: 2px;
  margin-right: -2px;
  color: ${props => props.theme.color.primary};
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
    background-color: ${props => props.theme.color.primary};
    transition: background-color 0.5s;
  }

  &:hover,
  &:focus {
    color: ${props => props.theme.color.primaryDark};
  }

  &:hover::before,
  &:focus::before {
    background-color: ${props => props.theme.color.primaryDark};
  }
`
export default StyledLinkText

StyledLinkText.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary']),
  className: PropTypes.string,
  to: PropTypes.string,
}

StyledLinkText.defaultProps = {
  color: 'primary',
  className: '',
}
