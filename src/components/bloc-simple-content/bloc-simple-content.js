import React from 'react'
import PropTypes from 'prop-types'

import { LoremIpsum } from 'react-lorem-ipsum'

import Content from '@bit/mcmanus68.ui-react.content'
import Headline from '@bit/mcmanus68.ui-react.headline'

import LinkText from '@bit/mcmanus68.ui-react.link-text'
import HeadlineSeparator from '@bit/mcmanus68.ui-react.headline-separator'

const BlocContent = ({
  title,
  subtitle,
  description,
  className,
  buttonText,
}) => {
  return (
    <Content className={className}>
      <Headline title={title} subtitle={subtitle} />
      <HeadlineSeparator />
      {description ? <p>{description}</p> : <LoremIpsum p={1} />}
      <LinkText>{buttonText}</LinkText>
    </Content>
  )
}

export default BlocContent

BlocContent.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
  buttonText: PropTypes.string,
}

BlocContent.defaultProps = {
  className: '',
}
