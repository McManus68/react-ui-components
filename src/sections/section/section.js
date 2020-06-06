import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const StyledSection = styled.section`
  padding: ${props => props.theme.section.padding};
  overflow: hidden;
`

const Section = ({ children, id }) => {
  return <StyledSection id={id}>{children}</StyledSection>
}

export default Section

Section.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
}
