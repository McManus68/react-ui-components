import React from 'react'
import PropTypes from 'prop-types'
import { Col } from 'react-bootstrap'
import { reduceParams } from '@bit/mcmanus68.webmaker.utils.utils-param'
import BlockImageGallery from '@bit/mcmanus68.webmaker.block.block-image-gallery'
import BlockSimpleContent from '@bit/mcmanus68.webmaker.block.block-simple-content'
import FactoryAnimation from '@bit/mcmanus68.webmaker.factory.factory-animation'
import FooterSimpleContent from '@bit/mcmanus68.webmaker.footer.footer-simple-content'
import FooterSocial from '@bit/mcmanus68.webmaker.footer.footer-social'
import FooterNewsletter from '@bit/mcmanus68.webmaker.footer.footer-newsletter'

const FactoryBlock = ({ block }) => {
  const params = reduceParams(block.params)
  var content = (() => {
    switch (block.type) {
      case 'BLOCK_SIMPLE_CONTENT':
        return <BlockSimpleContent {...params} />
      case 'BLOCK_GALLERY':
        return <BlockImageGallery {...params} />
      case 'FOOTER_SIMPLE_CONTENT':
        return <FooterSimpleContent {...params} />
      case 'FOOTER_SOCIAL':
        return <FooterSocial {...params} />
      case 'FOOTER_NEWSLETTER':
        return <FooterNewsletter {...params} />
      default:
        return null
    }
  })()

  if (block.animation.type !== 'NONE') {
    content = <FactoryAnimation animation={block.animation}>{content}</FactoryAnimation>
  }
  return (
    <Col className={`${block.classes} my-auto`} {...block.responsive}>
      {content}
    </Col>
  )
}

export default FactoryBlock

FactoryBlock.propTypes = {
  block: PropTypes.object.isRequired,
}
