import React from 'react'
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

interface Props {
  color: 'primary' | 'secondary'
}

const Button: React.FC<Props> = ({ color = 'primary', children, ...otherProps }) => {
  return (
    <StyledButton color={color} {...otherProps}>
      {children}
    </StyledButton>
  )
}

export default Button
