import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledHeadline = styled.div`
  text-align: center;
`
const Title = styled.h1`
  color: currentColor;
  font-family: ${props => props.theme.font.primary};
  font-size: 3.1rem;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 5px;
  margin-right: -5px;
`
const SubTitle = styled.h2`
  color: ${props =>
    props.color === 'primary' ? props.theme.color.primary : props.theme.color.secondary};
  font-family: ${props => props.theme.font.secondary};
  font-size: 4.2rem;
  font-weight: 600;
  line-height: 0.4;
  letter-spacing: 2px;
  &::first-letter {
    text-transform: uppercase;
    font-size: 5rem;
  }
`

const Headline = ({ title, subtitle, color }) => {
  return (
    <StyledHeadline>
      <SubTitle color={color}>{subtitle}</SubTitle>
      <Title>{title}</Title>
    </StyledHeadline>
  )
}

export default Headline

Headline.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary']),
}

Headline.defaultProps = {
  color: 'primary',
}
