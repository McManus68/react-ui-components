import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const handleColor = (props, color) => {
  switch (color) {
    case 'primary':
      return props.theme.colors.primary
    case 'secondary':
      return props.theme.colors.secondary
    case 'light':
      return props.theme.colors.fontLight
    case 'dark':
      return props.theme.colors.fontDark
    default:
      return props.theme.colors.font
  }
}

const StyledHeadline = styled.div`
  text-align: center;
`
const StyledH1 = styled.h1`
  color: ${props => handleColor(props, props.titleColor)};
  font-family: ${props => props.theme.fonts.primary};
  font-size: 3.1rem;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 5px;
  margin-right: -5px;
`
const StyledH2 = styled.h2`
  color: ${props => handleColor(props, props.subtitleColor)};
  font-family: ${props => props.theme.fonts.secondary};
  font-size: 4.2rem;
  font-weight: 600;
  line-height: 0.4;
  letter-spacing: 2px;
  &::first-letter {
    text-transform: uppercase;
    font-size: 5rem;
  }
`

const Headline = ({ title, subtitle, titleColor, subtitleColor }) => {
  return (
    <StyledHeadline>
      <StyledH2 subtitleColor={subtitleColor}>{subtitle}</StyledH2>
      <StyledH1 titleColor={titleColor}>{title}</StyledH1>
    </StyledHeadline>
  )
}

export default Headline

Headline.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  titleColor: PropTypes.string,
  subtitleColor: PropTypes.string,
}

Headline.defaultProps = {
  titleColor: 'light',
  subtitleColor: 'primary',
}
