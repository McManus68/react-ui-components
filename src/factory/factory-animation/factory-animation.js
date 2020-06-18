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
    case AnimationType.Bounce:
      return <Bounce {...animation}>{children}</Bounce>
    case AnimationType.Fade:
      return <Fade {...animation}>{children}</Fade>
    case AnimationType.Flip:
      return <Flip {...animation}>{children}</Flip>
    case AnimationType.Pulse:
      return <Pulse {...animation}>{children}</Pulse>
    case AnimationType.Reveal:
      return <Reveal {...animation}>{children}</Reveal>
    case AnimationType.Roll:
      return <Roll {...animation}>{children}</Roll>
    case AnimationType.Rotate:
      return <Rotate {...animation}>{children}</Rotate>
    case AnimationType.Shake:
      return <Shake {...animation}>{children}</Shake>
    case AnimationType.Slide:
      return <Slide {...animation}>{children}</Slide>
    case AnimationType.Spin:
      return <Spin {...animation}>{children}</Spin>
    case AnimationType.Zoom:
      return <Zoom {...animation}>{children}</Zoom>
    default:
      return null
  }
}

export default FactoryAnimation

FactoryAnimation.propTypes = {
  animation: PropTypes.object.isRequired,
}
