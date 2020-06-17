import React from 'react'
import { Row as RowBootstrap } from 'react-bootstrap'
import { Row, Block } from '@bit/mcmanus68.webmaker.types.types'
import BlockFactory from '@bit/mcmanus68.webmaker.factory.factory-block'

interface Props {
  row: Row
}

const FactoryRow: React.FC<Props> = ({ row }) => (
  <RowBootstrap>
    {row.blocks.map((block: Block, i: number) => (
      <BlockFactory key={i} block={block} />
    ))}
  </RowBootstrap>
)

export default FactoryRow
