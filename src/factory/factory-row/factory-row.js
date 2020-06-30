import React from 'react'
import PropTypes from 'prop-types'
import { Row } from 'react-bootstrap'
import BlockFactory from '@bit/mcmanus68.webmaker.factory.factory-block'

const FactoryRow = ({ row, recursive, children }) => (
  <Row>
    {recursive ? row.blocks.map((block, i) => <BlockFactory key={i} block={block} />) : children}
  </Row>
)

export default FactoryRow

FactoryRow.propTypes = {
  row: PropTypes.object.isRequired,
  recursive: PropTypes.bool,
}

FactoryRow.defaultProps = {
  recursive: true,
}
