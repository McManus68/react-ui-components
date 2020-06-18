import React from 'react'
import PropTypes from 'prop-types'
import { FaAsterisk } from 'react-icons/fa'
import styled from 'styled-components'

const HeadlineSeparator = ({ className, primary }) => <FaAsterisk className={className} />

const StyledHeadlineSeparator = styled(HeadlineSeparator)`
  color: ${props => (props.primary ? props.theme.color.primary : 'currentColor')};
`

export default StyledHeadlineSeparator

StyledHeadlineSeparator.propTypes = {
  primary: PropTypes.bool,
  className: PropTypes.string,
}

StyledHeadlineSeparator.defaultProps = {
  primary: false,
}
