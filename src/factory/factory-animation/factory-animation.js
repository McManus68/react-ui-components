import React from 'react'
import PropTypes from 'prop-types'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'
import Flip from 'react-reveal/Flip'
import Pulse from 'react-reveal/Pulse'
import Reveal from 'react-reveal/Reveal'
import Roll from 'react-reveal/Roll'
import Rotate from 'react-reveal/Rotate'
import Shake from 'react-reveal/Shake'
import Slide from 'react-reveal/Slide'
import Spin from 'react-reveal/Spin'
import Zoom from 'react-reveal/Zoom'

const FactoryAnimation = ({ animation, children }) => {
  switch (animation.type) {
    case 'BOUNCE':
      return <Bounce {...animation}>{children}</Bounce>
    case 'FADE':
      return <Fade {...animation}>{children}</Fade>
    case 'FLIP':
      return <Flip {...animation}>{children}</Flip>
    case 'PULSE':
      return <Pulse {...animation}>{children}</Pulse>
    case 'REVEAL':
      return <Reveal {...animation}>{children}</Reveal>
    case 'ROLL':
      return <Roll {...animation}>{children}</Roll>
    case 'ROTATE':
      return <Rotate {...animation}>{children}</Rotate>
    case 'SHAKE':
      return <Shake {...animation}>{children}</Shake>
    case 'SLIDE':
      return <Slide {...animation}>{children}</Slide>
    case 'SPIN':
      return <Spin {...animation}>{children}</Spin>
    case 'ZOOM':
      return <Zoom {...animation}>{children}</Zoom>
    default:
      return null
  }
}

export default FactoryAnimation

FactoryAnimation.propTypes = {
  animation: PropTypes.object.isRequired,
}
