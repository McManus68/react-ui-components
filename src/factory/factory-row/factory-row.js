import React from 'react'
import PropTypes from 'prop-types'
import { Row as RowBootstrap } from 'react-bootstrap'
import BlockFactory from '@bit/mcmanus68.webmaker.factory.factory-block'

const FactoryRow = ({ row }) => (
  <RowBootstrap>
    {row.blocks.map((block, i) => (
      <BlockFactory key={i} block={block} />
    ))}
  </RowBootstrap>
)

export default FactoryRow

FactoryRow.propTypes = {
  row: PropTypes.object.isRequired,
}
