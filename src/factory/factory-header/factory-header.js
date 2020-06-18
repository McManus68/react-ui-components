import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap'
import HeaderClassic from '@bit/mcmanus68.webmaker.header.header-classic'
import styled from 'styled-components'

const StyledHeader = styled.header`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: ${props => props.theme.header.bg};
`

const FactoryHeader = ({ site }) => {
  var content = (() => {
    switch (site.header.type) {
      case 'HEADER_CLASSIC':
        return <HeaderClassic site={site} />
      default:
        return null
    }
  })()
  return (
    <StyledHeader>
      <Container>{content}</Container>
    </StyledHeader>
  )
}

export default FactoryHeader

FactoryHeader.propTypes = {
  site: PropTypes.object.isRequired,
}
