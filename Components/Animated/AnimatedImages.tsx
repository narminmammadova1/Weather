import { AnimatedPropss } from '@/interfaces';
import React from 'react'
import {  useSpring,animated} from 'react-spring'
import { useInView } from 'react-intersection-observer';

const AnimatedImages:React.FC<AnimatedPropss> = ({children}) => {

const {ref}=useInView({
    threshold:0.1
})

const slideStyles = useSpring({
    from: { opacity:0.2},
    to:{opacity:0.8},
    reset: true,
    config: { duration: 1500 },
  });


  return (
    <animated.div ref={ref} style={slideStyles}>
      {children}
    </animated.div>
  )
}

export default AnimatedImages
