import React from 'react'
import { FaAsterisk } from 'react-icons/fa'
import styled from 'styled-components'

interface Props {
  className?: string
  primary: boolean
}

const HeadlineSeparator: React.FC<Props> = ({ className, primary = false }) => (
  <FaAsterisk className={className} />
)

const StyledHeadlineSeparator = styled(HeadlineSeparator)`
  color: ${props => (props.primary ? props.theme.color.primary : 'currentColor')};
`

export default StyledHeadlineSeparator
