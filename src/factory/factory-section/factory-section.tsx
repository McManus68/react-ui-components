import React from 'react'
import { Section, Row, SectionType } from '@bit/mcmanus68.webmaker.types.types'
import { Container } from 'react-bootstrap'
import reduceParams from '@bit/mcmanus68.webmaker.utils.utils-param'
import RowFactory from '@bit/mcmanus68.webmaker.factory.factory-row'
import SectionCustom from '@bit/mcmanus68.webmaker.section.section-custom'
import SectionHeadline from '@bit/mcmanus68.webmaker.section.section-headline'
import SectionHero from '@bit/mcmanus68.webmaker.section.section-hero'

interface Props {
  section: Section
  recursive: boolean
}

const FactorySection: React.FC<Props> = ({ section, recursive, children }) => {
  const params = reduceParams(section.params)
  switch (section.type) {
    case SectionType.SectionHero:
      return <SectionHero {...params} />
    case SectionType.SectionHeadline:
      return <SectionHeadline {...params} />
    case SectionType.SectionCustom:
      return (
        <SectionCustom>
          <Container>
            {recursive
              ? section.rows.map((row: Row, i: number) => (
                  <RowFactory key={i} row={row} />
                ))
              : children}
          </Container>
        </SectionCustom>
      )
    default:
      return null
  }
}

export default FactorySection
