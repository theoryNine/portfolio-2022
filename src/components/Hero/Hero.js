// Component Name: Hero (main component)

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Starfield from "../Starfield";
import Background from "./Background";
import MainContent from "./MainContent";

const HeroContainer = styled.div`
  border-bottom: 1px solid var(--fireTeal);
  border-top: 1px solid var(--fireTeal);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 600px;
  position: relative;
  overflow: hidden;
  transition: .3s ease-out box-shadow, 2s ease-in-out transform, 2s ease-in-out opacity;
  transform: translateY(-20px);
  opacity: 0;
  z-index: 2;

  &:hover {
    box-shadow: 0 0 10px var(--fireTeal);

    img {
      transform: translateY(-8px);
    }
  }

  &.animate {
    transform: translateY(0);
    opacity: 1;
  }
`

const Hero = () => {
  // Declares our state, animate is the state, setAnimate is what we use to change it.
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // setAnimate sets the animate state
    setAnimate(true);
  },[])

    return (
        <HeroContainer className={animate === true ? 'animate' : ''}>
          <Background />
          <Starfield />
          <MainContent />
        </HeroContainer>
    )
}

export default Hero;