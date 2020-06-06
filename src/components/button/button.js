import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const StyledButton = styled.button`
  display: inline-block;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
  letter-spacing: 2px;
  margin-right: -2px;
  background-color: ${props =>
    props.color === 'primary'
      ? props.theme.colors.primary
      : props.theme.colors.secondary};
  padding: 8px 16px;
  color: ${props => props.theme.colors.fontLight};
  border-radius: 3px;
  transition: background-color 0.5s;

  &:focus,
  &:hover {
    background-color: ${props =>
      props.color === 'primary'
        ? props.theme.colors.primaryDark
        : props.theme.colors.secondaryDark};
  }
`

const Button = ({ children, color, ...otherProps }) => {
  return (
    <StyledButton color={color} {...otherProps}>
      {children}
    </StyledButton>
  )
}

export default Button

Button.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(['primary', 'secondary']),
}

Button.defaultProps = {
  color: 'primary',
}
