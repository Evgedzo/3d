import { OrbitControls, Stage } from '@react-three/drei'
import styled from 'styled-components'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Mac from './Mac'

const Desc = styled.div`
width: 200px;
height: 70px;
padding: 20px;
background-color: white;
border-radius: 10px;
position: absolute;
top: 100px;
right: 100px;
color:black;
font-size: 14px;
font-weight: 300;
@media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }

`

const WebDesign = () => {
  return (
    <>
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Mac />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
    <Desc>We design products with a strong focus on both world class design and ensuring your product is a market success.</Desc>
    </>
  )
}

export default WebDesign