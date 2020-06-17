import React from 'react'
import { Page, Section } from '@bit/mcmanus68.webmaker.types.types'
import SectionFactory from '@bit/mcmanus68.webmaker.factory.factory-section'

interface Props {
  page: Page
}

const FactoryPage: React.FC<Props> = ({ page }) => (
  <>
    {page.sections.map((section: Section, i: number) => (
      <SectionFactory key={i} section={section} recursive />
    ))}
  </>
)

export default FactoryPage
