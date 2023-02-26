import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styled from 'styled-components'

const Wave = () => {
  const svgRef = useRef<SVGPathElement>(null)

  const Div = styled.div`
    position: relative;
    height: 4rem;
    top: calc(100% - 4rem);
    @media (min-width: 768px) {
      height: 16rem;
      top: calc(100% - 16rem);
    }
  `

  const myStyle = {
    height: '100%',
    width: '100%',
    transform: 'rotate(180deg)',
    fill: 'black', // '#cd5d28',
    position: 'absolute',
    top: '100%',
    left: '0',
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const svgPath = svgRef.current
    const startD = 'M0 120 Q360 -63 720 120 T 1440 120 V240 H0 Z'
    const endD = 'M0 120 Q360 250 720 120 T 1440 120 V240 H0 Z'

    gsap.fromTo(
      svgPath,
      { attr: { d: startD } },
      {
        attr: { d: endD },
        duration: 1,
        scrollTrigger: {
          trigger: svgPath,
          start: 'top 80%', // Start animation when the top of the SVG is 80% from the top of the viewport
          end: 'bottom 20%', // End animation when the bottom of the SVG is 20% from the top of the viewport
          scrub: true, // Enable scrubbing, allowing the animation to follow the scroll position
        },
      }
    )
  }, [])

  return (
    <Div>
      <svg
        className="successhero__wave first"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -400 1440 620"
        preserveAspectRatio="none"
        style={myStyle}
      >
        <path
          ref={svgRef}
          d="M0 120 Q360 -63 720 120 T 1440 120 V240 H0 Z"
        ></path>
      </svg>
    </Div>
  )
}

export default Wave
