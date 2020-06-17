import React from 'react'
import Content from '@bit/mcmanus68.webmaker.ui.content'
import { FaEnvelope } from 'react-icons/fa'
import styled from 'styled-components'

const Description = styled.h4`
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 100;
  letter-spacing: 3px;
`
const StyledForm = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
`
const Email = styled.input`
  width: 100%;
  max-width: 25rem;
  padding: 1rem;
  border-radius: 0.4rem;
`
const Send = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${props => props.theme.color.primary};
  font-size: 1.6rem;
  padding: 1px 0.6rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 10.5rem;
`

const FooterNewsLetter: React.FC = () => {
  return (
    <Content>
      <Description>Newsletter</Description>
      <StyledForm action=''>
        <Email type='text' placeholder='Your email address...' />
        <Send type='submit'>
          <FaEnvelope />
        </Send>
      </StyledForm>
    </Content>
  )
}

export default FooterNewsLetter
