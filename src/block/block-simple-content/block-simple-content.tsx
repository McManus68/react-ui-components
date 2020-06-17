import React from 'react'
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

interface Props {
  title: string
  subtitle?: string
  description?: string
  className?: string
  buttonText?: string
}

const BlockSimpleContent: React.FC<Props> = ({
  title,
  subtitle,
  description,
  className = '',
  buttonText,
}) => {
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
