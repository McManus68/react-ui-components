import React from 'react'
import PropTypes from 'prop-types'
import SectionFactory from '@bit/mcmanus68.webmaker.factory.factory-section'

const FactoryPage = ({ page }) => (
  <>
    {page.sections.map((section, i) => (
      <SectionFactory key={i} section={section} recursive />
    ))}
  </>
)

export default FactoryPage

FactoryPage.propTypes = {
  page: PropTypes.object.isRequired,
}
