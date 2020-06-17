import React from 'react'
import styled from 'styled-components'

const StyledSectionCustom = styled.section`
  padding: ${props => props.theme.section.padding};
  overflow: hidden;
`
interface Props {
  id: string
}

const SectionCustom: React.FC<Props> = ({ children, id }) => {
  return <StyledSectionCustom id={id}>{children}</StyledSectionCustom>
}

export default SectionCustom
