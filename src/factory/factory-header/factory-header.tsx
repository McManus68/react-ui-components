import React from 'react'
import { Container } from 'react-bootstrap'
import HeaderClassic from '@bit/mcmanus68.webmaker.header.header-classic'
import { Site, HeaderType } from '@bit/mcmanus68.webmaker.types.types'
import styled from 'styled-components'

const StyledHeader = styled.header`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: ${props => props.theme.header.bg};
`

interface Props {
  site: Site
}

const FactoryHeader: React.FC<Props> = ({ site }) => {
  var content = (() => {
    switch (site.header.type) {
      case HeaderType.HeaderClassic:
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
