import React from 'react'
import styled from 'styled-components'

const StyledContent = styled.div`
  text-align: center;
  padding: ${props => props.theme.block.padding};

  & > *:not(:last-child) {
    margin-bottom: ${props => props.theme.block.spacing};
  }
`
const Content = ({ children }) => {
  return <StyledContent>{children}</StyledContent>
}

export default Content
