import React from 'react'
import { Container } from 'react-bootstrap'
import { Footer, Row } from '@bit/mcmanus68.webmaker.types.types'
import BackToTop from '@bit/mcmanus68.webmaker.ui.back-to-top'
import RowFactory from '@bit/mcmanus68.webmaker.factory.factory-row'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  background-color: ${props => props.theme.footer.bg};
  color: ${props => props.theme.footer.color};
  text-align: center;
  position: relative;
`

interface Props {
  footer: Footer
}

const FactoryFooter: React.FC<Props> = ({ footer }) => {
  return (
    <StyledFooter>
      <Container>
        <BackToTop />
        {footer.rows.map((row: Row, i: number) => (
          <RowFactory key={i} row={row} />
        ))}
      </Container>
    </StyledFooter>
  )
}

export default FactoryFooter
