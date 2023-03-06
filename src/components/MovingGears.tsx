<<<<<<< HEAD
import React from "react";
import styled, { keyframes } from "styled-components";
import gear1 from "../images/gears/1.png";
import gear2 from "../images/gears/2.png";
import gear3 from "../images/gears/3.png";
import gear4 from "../images/gears/4.png";
import gear5 from "../images/gears/5.png";
import gear6 from "../images/gears/6.png";
import gear7 from "../images/gears/7.png";
import gear8 from "../images/gears/8.png";
import gear9 from "../images/gears/9.png";
import gear10 from "../images/gears/10.png";
import gear11 from "../images/gears/11.png";
import gear12 from "../images/gears/12.png";
=======
import React from 'react'
import styled, { keyframes } from 'styled-components'
import gear1 from '../images/map.svg'
>>>>>>> d902712353209ebd113fd4dbc06c48541a2bd137

function MovingGears() {
  const rotation = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
<<<<<<< HEAD
  `;
=======
  `
>>>>>>> d902712353209ebd113fd4dbc06c48541a2bd137

  // Gear1
  const Gear1 = styled.img`
    width: 6.75%;
    object-fit: cover;
    object-position: 50% 50%;
    position: absolute;
<<<<<<< HEAD
    top: -26%;
    left: 8%;
    transform-origin: 50% 50%;
    animation: ${rotation} 8s linear infinite;
  `;

=======
    top: -25%;
    left: 8%;
    transform-origin: 50% 50%;
    animation: ${rotation} 9s linear infinite;
  `
>>>>>>> d902712353209ebd113fd4dbc06c48541a2bd137
  // Gear2
  const Gear2 = styled.img`
    width: 11%;
    object-fit: cover;
    object-position: 50% 50%;
    position: absolute;
<<<<<<< HEAD
    top: -26%;
    left: 27%;
    transform-origin: 50% 50%;
    animation: ${rotation} 13s linear infinite;
  `;
=======
    top: -24.5%;
    left: 27%;
    transform-origin: 50% 50%;
    animation: ${rotation} 13s linear infinite;
  `
>>>>>>> d902712353209ebd113fd4dbc06c48541a2bd137

  // Gear3
  const Gear3 = styled.img`
    width: 4.25%;
    object-fit: cover;
    object-position: 50% 50%;
    position: absolute;
<<<<<<< HEAD
    top: -23%;
    left: 44%;
    transform-origin: 50% 50%;
    animation: ${rotation} 6s linear infinite;
  `;

  // Gear4 top:
=======
    top: -22%;
    left: 44%;
    transform-origin: 50% 50%;
    animation: ${rotation} 7s linear infinite;
  `

  // Gear4
>>>>>>> d902712353209ebd113fd4dbc06c48541a2bd137
  const Gear4 = styled.img`
    width: 3.75%;
    object-fit: cover;
    object-position: 50% 50%;
    position: absolute;
<<<<<<< HEAD
    top: -23%;
    left: 62.5%;
    transform-origin: 50% 50%;
    animation: ${rotation} 4s linear infinite;
  `;
=======
    top: -22.5%;
    left: 62.5%;
    transform-origin: 50% 50%;
    animation: ${rotation} 5s linear infinite;
  `
>>>>>>> d902712353209ebd113fd4dbc06c48541a2bd137

  // Gear5
  const Gear5 = styled.img`
    width: 25%;
    object-fit: cover;
    object-position: 50% 50%;
    position: absolute;
<<<<<<< HEAD
    top: -28%;
    left: 80%;
    transform-origin: 50% 50%;
    animation: ${rotation} 18s linear infinite;
  `;

  // Gear6
  const Gear6 = styled.img`
    width: 5.5%;
    object-fit: cover;
    object-position: 50% 50%;
    position: absolute;
    top: -13%;
    left: -0.5%;
    transform-origin: 50% 50%;
    animation: ${rotation} 5s linear infinite;
  `;
=======
    top: -24%;
    left: 80%;
    transform-origin: 50% 50%;
    animation: ${rotation} 18s linear infinite;
  `
>>>>>>> d902712353209ebd113fd4dbc06c48541a2bd137

  // Gear7
  const Gear7 = styled.img`
    width: 9.5%;
    object-fit: cover;
    object-position: 50% 50%;
    position: absolute;
<<<<<<< HEAD
    top: -17.5%;
    left: 6%;
    transform-origin: 50% 50%;
    animation: ${rotation} 10s linear infinite;
  `;
=======
    top: -13.5%;
    left: 6%;
    transform-origin: 50% 50%;
    animation: ${rotation} 11s linear infinite;
  `
>>>>>>> d902712353209ebd113fd4dbc06c48541a2bd137

  // Gear8
  const Gear8 = styled.img`
    width: 5%;
    object-fit: cover;
    object-position: 50% 50%;
    position: absolute;
<<<<<<< HEAD
    top: -14.5%;
    left: 89.75%;
    transform-origin: 50% 50%;
    animation: ${rotation} 9s linear infinite;
  `;
=======
    top: -10.5%;
    left: 89.75%;
    transform-origin: 50% 50%;
    animation: ${rotation} 10s linear infinite;
  `
>>>>>>> d902712353209ebd113fd4dbc06c48541a2bd137

  // Gear9
  const Gear9 = styled.img`
    width: 20%;
    object-fit: cover;
    object-position: 50% 50%;
    position: absolute;
<<<<<<< HEAD
    top: -7%;
    left: -1.5%;
    transform-origin: 50% 50%;
    animation: ${rotation} 25s linear infinite;
  `;
=======
    top: -3.5%;
    left: -1.5%;
    transform-origin: 50% 50%;
    animation: ${rotation} 25s linear infinite;
  `
>>>>>>> d902712353209ebd113fd4dbc06c48541a2bd137

  // Gear10
  const Gear10 = styled.img`
    width: 6.5%;
    object-fit: cover;
    object-position: 50% 50%;
    position: absolute;
<<<<<<< HEAD
    top: -7%;
    left: 25.5%;
    transform-origin: 50% 50%;
    animation: ${rotation} 7s linear infinite;
  `;
=======
    top: -4.25%;
    left: 25.5%;
    transform-origin: 50% 50%;
    animation: ${rotation} 8s linear infinite;
  `
>>>>>>> d902712353209ebd113fd4dbc06c48541a2bd137

  // Gear11
  const Gear11 = styled.img`
    width: 9%;
    object-fit: cover;
    object-position: 50% 50%;
    position: absolute;
<<<<<<< HEAD
    top: -2.5%;
    left: 57%;
    transform-origin: 50% 50%;
    animation: ${rotation} 11s linear infinite;
  `;
=======
    top: -1.25%;
    left: 57%;
    transform-origin: 50% 50%;
    animation: ${rotation} 11s linear infinite;
  `
>>>>>>> d902712353209ebd113fd4dbc06c48541a2bd137

  // Gear12
  const Gear12 = styled.img`
    width: 14%;
    object-fit: cover;
    object-position: 50% 50%;
    position: absolute;
<<<<<<< HEAD
    top: -2.75%;
    left: 89%;
    transform-origin: 50% 50%;
    animation: ${rotation} 14s linear infinite;
  `;
=======
    top: -0.5%;
    left: 89%;
    transform-origin: 50% 50%;
    animation: ${rotation} 14s linear infinite;
  `
>>>>>>> d902712353209ebd113fd4dbc06c48541a2bd137

  return (
    <div>
      <Gear1 src={gear1} alt="gear1" />
<<<<<<< HEAD
      <Gear2 src={gear2} alt="gear2" />
      <Gear3 src={gear3} alt="gear3" />
      <Gear4 src={gear4} alt="gear4" />
      <Gear5 src={gear5} alt="gear5" />
      <Gear6 src={gear6} alt="gear6" />
      <Gear7 src={gear7} alt="gear7" />
      <Gear8 src={gear8} alt="gear8" />
      <Gear9 src={gear9} alt="gear9" />
      <Gear10 src={gear10} alt="gear10" />
      <Gear11 src={gear11} alt="gear11" />
      <Gear12 src={gear12} alt="gear12" />
    </div>
  );
}

export default MovingGears;
=======
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
>>>>>>> d902712353209ebd113fd4dbc06c48541a2bd137
