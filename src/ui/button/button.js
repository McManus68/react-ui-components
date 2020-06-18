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
    props.color === 'primary' ? props.theme.color.primary : props.theme.color.secondary};
  padding: 8px 16px;
  color: currentColor;
  border-radius: 3px;
  transition: background-color 0.5s;

  &:focus,
  &:hover {
    background-color: ${props =>
      props.color === 'primary' ? props.theme.color.primaryDark : props.theme.color.secondaryDark};
  }
`

const Button = ({ color = 'primary', children, ...otherProps }) => {
  return (
    <StyledButton color={color} {...otherProps}>
      {children}
    </StyledButton>
  )
}

export default Button

Button.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary']),
}

Button.defaultProps = {
  color: 'primary',
}
