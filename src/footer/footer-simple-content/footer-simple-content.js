import React from 'react'
import PropTypes from 'prop-types'

import { LoremIpsum } from 'react-lorem-ipsum'

import Content from '@bit/mcmanus68.ui-react.content'
import HeadlineSeparator from '@bit/mcmanus68.ui-react.headline-separator'

import styled from 'styled-components'

const Description = styled.h4`
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 100;
  letter-spacing: 3px;
`

const FooterSimpleContent = ({ title }) => {
  return (
    <Content>
      <Description>{title}</Description>
      <HeadlineSeparator primary />
      <LoremIpsum p={1} />
    </Content>
  )
}

export default FooterSimpleContent

FooterSimpleContent.propTypes = {
  title: PropTypes.string,
}

FooterSimpleContent.defaultProps = {
  title: 'About Us',
}
