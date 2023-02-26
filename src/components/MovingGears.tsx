import React from 'react'
import styled, { keyframes } from 'styled-components'
import gear1 from '../images/map.svg'

function MovingGears() {
  const rotation = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  `

  // Gear1
  const Gear1 = styled.img`
    width: 6.75%;
    object-fit: cover;
    object-position: 50% 50%;
    position: absolute;
    top: -25%;
    left: 8%;
    transform-origin: 50% 50%;
    animation: ${rotation} 9s linear infinite;
  `
  // Gear2
  const Gear2 = styled.img`
    width: 11%;
    object-fit: cover;
    object-position: 50% 50%;
    position: absolute;
    top: -24.5%;
    left: 27%;
    transform-origin: 50% 50%;
    animation: ${rotation} 13s linear infinite;
  `

  // Gear3
  const Gear3 = styled.img`
    width: 4.25%;
    object-fit: cover;
    object-position: 50% 50%;
    position: absolute;
    top: -22%;
    left: 44%;
    transform-origin: 50% 50%;
    animation: ${rotation} 7s linear infinite;
  `

  // Gear4
  const Gear4 = styled.img`
    width: 3.75%;
    object-fit: cover;
    object-position: 50% 50%;
    position: absolute;
    top: -22.5%;
    left: 62.5%;
    transform-origin: 50% 50%;
    animation: ${rotation} 5s linear infinite;
  `

  // Gear5
  const Gear5 = styled.img`
    width: 25%;
    object-fit: cover;
    object-position: 50% 50%;
    position: absolute;
    top: -24%;
    left: 80%;
    transform-origin: 50% 50%;
    animation: ${rotation} 18s linear infinite;
  `

  // Gear7
  const Gear7 = styled.img`
    width: 9.5%;
    object-fit: cover;
    object-position: 50% 50%;
    position: absolute;
    top: -13.5%;
    left: 6%;
    transform-origin: 50% 50%;
    animation: ${rotation} 11s linear infinite;
  `

  // Gear8
  const Gear8 = styled.img`
    width: 5%;
    object-fit: cover;
    object-position: 50% 50%;
    position: absolute;
    top: -10.5%;
    left: 89.75%;
    transform-origin: 50% 50%;
    animation: ${rotation} 10s linear infinite;
  `

  // Gear9
  const Gear9 = styled.img`
    width: 20%;
    object-fit: cover;
    object-position: 50% 50%;
    position: absolute;
    top: -3.5%;
    left: -1.5%;
    transform-origin: 50% 50%;
    animation: ${rotation} 25s linear infinite;
  `

  // Gear10
  const Gear10 = styled.img`
    width: 6.5%;
    object-fit: cover;
    object-position: 50% 50%;
    position: absolute;
    top: -4.25%;
    left: 25.5%;
    transform-origin: 50% 50%;
    animation: ${rotation} 8s linear infinite;
  `

  // Gear11
  const Gear11 = styled.img`
    width: 9%;
    object-fit: cover;
    object-position: 50% 50%;
    position: absolute;
    top: -1.25%;
    left: 57%;
    transform-origin: 50% 50%;
    animation: ${rotation} 11s linear infinite;
  `

  // Gear12
  const Gear12 = styled.img`
    width: 14%;
    object-fit: cover;
    object-position: 50% 50%;
    position: absolute;
    top: -0.5%;
    left: 89%;
    transform-origin: 50% 50%;
    animation: ${rotation} 14s linear infinite;
  `

  return (
    <div>
      <Gear1 src={gear1} alt="gear1" />
      <Gear2 src={gear1} alt="gear2" />
      <Gear3 src={gear1} alt="gear3" />
      <Gear4 src={gear1} alt="gear4" />
      <Gear5 src={gear1} alt="gear5" />
      <Gear7 src={gear1} alt="gear7" />
      <Gear8 src={gear1} alt="gear8" />
      <Gear9 src={gear1} alt="gear9" />
      <Gear10 src={gear1} alt="gear10" />
      <Gear11 src={gear1} alt="gear11" />
      <Gear12 src={gear1} alt="gear12" />
    </div>
  )
}

export default MovingGears
