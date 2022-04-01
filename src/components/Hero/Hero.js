import React from "react";
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
  transition: .5s ease box-shadow;

  &:hover {
    box-shadow: 0 0 10px var(--fireTeal);
  }
`

const Hero = () => {
    return (
        <HeroContainer>
          <Background />
          <Starfield />
          <MainContent />
        </HeroContainer>
    )
}

export default Hero;