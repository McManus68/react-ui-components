import React from 'react'
import { Col } from 'react-bootstrap'
import { Block, BlockType, AnimationType } from '@bit/mcmanus68.webmaker.types.types'
import { reduceParams } from '@bit/mcmanus68.webmaker.utils.utils-param'
import BlockImageGallery from '@bit/mcmanus68.webmaker.block.block-image-gallery'
import BlockSimpleContent from '@bit/mcmanus68.webmaker.block.block-simple-content'
import FactoryAnimation from '@bit/mcmanus68.webmaker.factory.factory-animation'
import FooterSimpleContent from '@bit/mcmanus68.webmaker.footer.footer-simple-content'
import FooterSocial from '@bit/mcmanus68.webmaker.footer.footer-social'
import FooterNewsletter from '@bit/mcmanus68.webmaker.footer.footer-newsletter'

interface Props {
  block: Block
}

const FactoryBlock: React.FC<Props> = ({ block }) => {
  const params = reduceParams(block.params)
  var content = (() => {
    switch (block.type) {
      case BlockType.BlockSimpleContent:
        return <BlockSimpleContent {...params} />
      case BlockType.BlockGallery:
        return <BlockImageGallery {...params} />
      case BlockType.FooterSimpleContent:
        return <FooterSimpleContent {...params} />
      case BlockType.FooterSocial:
        return <FooterSocial {...params} />
      case BlockType.FooterNewsletter:
        return <FooterNewsletter {...params} />
      default:
        return null
    }
  })()

  if (block.animation.type !== AnimationType.None) {
    content = <FactoryAnimation animation={block.animation}>{content}</FactoryAnimation>
  }
  return (
    <Col className={`${block.classes} my-auto`} {...block.responsive}>
      {content}
    </Col>
  )
}

export default FactoryBlock
