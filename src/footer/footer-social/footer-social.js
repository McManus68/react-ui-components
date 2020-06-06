import React from 'react'
import PropTypes from 'prop-types'

import Content from '@bit/mcmanus68.ui-react.content'

import {
  FaTwitter,
  FaFacebook,
  FaPinterest,
  FaLinkedinIn,
  FaTripadvisor,
} from 'react-icons/fa'

import styled from 'styled-components'

const Description = styled.h4`
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 100;
  letter-spacing: 3px;
`
const SocialList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
`

const SocialIcon = styled.a`
  padding: 0.8rem;
  svg {
    width: 1.6rem;
    height: 1.6rem;
    color: ${props => props.theme.colors.fontLight};
    opacity: 0.5;
    transition: color 0.5s;
    &:hover,
    &:focus {
      color: ${props => props.theme.colors.primary};
    }
  }
`

const FooterSocial = ({ title }) => {
  return (
    <Content>
      <Description>{title}</Description>
      <SocialList>
        <li>
          <SocialIcon href='/t'>
            <FaTwitter />
          </SocialIcon>
        </li>
        <li>
          <SocialIcon href='#home'>
            <FaFacebook />
          </SocialIcon>
        </li>
        <li>
          <SocialIcon href='#t'>
            <FaPinterest />
          </SocialIcon>
        </li>
        <li>
          <SocialIcon href='#t'>
            <FaLinkedinIn />
          </SocialIcon>
        </li>
        <li>
          <SocialIcon href='#t'>
            <FaTripadvisor />
          </SocialIcon>
        </li>
      </SocialList>
    </Content>
  )
}

export default FooterSocial

FooterSocial.propTypes = {
  title: PropTypes.string,
}

FooterSocial.defaultProps = {
  title: 'Follow along',
}
