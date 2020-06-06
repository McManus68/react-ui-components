import React from 'react'
import PropTypes from 'prop-types'

import { FaAsterisk } from 'react-icons/fa'

import styled from 'styled-components'

const HeadlineSeparator = ({ className, primary }) => (
  <FaAsterisk className={className} />
)

const StyledHeadlineSeparator = styled(HeadlineSeparator)`
  color: ${props =>
    props.primary ? props.theme.colors.primary : props.theme.colors.fontDark};
`

export default StyledHeadlineSeparator

HeadlineSeparator.propTypes = {
  primary: PropTypes.bool,
}

HeadlineSeparator.defaultProps = {
  primary: false,
}
