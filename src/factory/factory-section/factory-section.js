import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap'
import { reduceParams } from '@bit/mcmanus68.webmaker.utils.utils-param'
import RowFactory from '@bit/mcmanus68.webmaker.factory.factory-row'
import SectionCustom from '@bit/mcmanus68.webmaker.section.section-custom'
import SectionHeadline from '@bit/mcmanus68.webmaker.section.section-headline'
import SectionHero from '@bit/mcmanus68.webmaker.section.section-hero'

const FactorySection = ({ section, recursive, children }) => {
  const params = reduceParams(section.params)
  switch (section.type) {
    case 'SECTION_HERO':
      return <SectionHero {...params} />
    case 'SECTION_HEADLINE':
      return <SectionHeadline {...params} />
    case 'SECTION_CUSTOM':
      return (
        <SectionCustom>
          <Container>
            {recursive ? section.rows.map((row, i) => <RowFactory key={i} row={row} />) : children}
          </Container>
        </SectionCustom>
      )
    default:
      return null
  }
}

export default FactorySection

FactorySection.propTypes = {
  section: PropTypes.object.isRequired,
  recursive: PropTypes.bool,
}

FactorySection.defaultProps = {
  recursive: true,
}
