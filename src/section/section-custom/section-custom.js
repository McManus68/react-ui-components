import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledSectionCustom = styled.section`
  padding: ${props => props.theme.section.padding};
  overflow: hidden;
`

const SectionCustom = ({ children, id }) => {
  return <StyledSectionCustom id={id}>{children}</StyledSectionCustom>
}

export default SectionCustom

SectionCustom.propTypes = {
  id: PropTypes.string.isRequired,
}
