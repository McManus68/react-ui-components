import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap'
import BackToTop from '@bit/mcmanus68.webmaker.ui.back-to-top'
import RowFactory from '@bit/mcmanus68.webmaker.factory.factory-row'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  background-color: ${props => props.theme.footer.bg};
  color: ${props => props.theme.footer.color};
  text-align: center;
  position: relative;
`

const FactoryFooter = ({ footer, recursive, children }) => {
  return (
    <StyledFooter>
      <Container>
        <BackToTop />
        {recursive ? footer.rows.map((row, i) => <RowFactory key={i} row={row} />) : children}
      </Container>
    </StyledFooter>
  )
}

export default FactoryFooter

FactoryFooter.propTypes = {
  footer: PropTypes.object.isRequired,
  recursive: PropTypes.bool,
}

FactoryFooter.defaultProps = {
  recursive: true,
}
