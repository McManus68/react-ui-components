import React from 'react'
import PropTypes from 'prop-types'
import { LoremIpsum } from 'react-lorem-ipsum'
import Content from '@bit/mcmanus68.webmaker.ui.content'
import Headline from '@bit/mcmanus68.webmaker.ui.headline'
import LinkText from '@bit/mcmanus68.webmaker.ui.link-text'
import HeadlineSeparator from '@bit/mcmanus68.webmaker.ui.headline-separator'
import styled from 'styled-components'

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 2rem;
`

const StyledLorem = styled(LoremIpsum)`
  font-size: 1rem;
  line-height: 2rem;
`

const BlockSimpleContent = ({ title, subtitle, description, className, buttonText }) => {
  return (
    <Content className={className}>
      <Headline title={title} subtitle={subtitle} />
      <HeadlineSeparator />
      {description ? <Paragraph>{description}</Paragraph> : <StyledLorem p={1} />}
      <LinkText>{buttonText}</LinkText>
    </Content>
  )
}

export default BlockSimpleContent

BlockSimpleContent.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
  buttonText: PropTypes.string,
}

BlockSimpleContent.defaultProps = {
  className: '',
}
