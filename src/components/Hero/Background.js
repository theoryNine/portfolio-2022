// Component Name: Hero Background

import React from "react";
import styled, {keyframes } from "styled-components";
import heroBg from "../../images/ClippedStars.png";

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(70px);
  }
  100% {
    opacity: .7;
    transform: translateY(0);
  }
`

const HeroBackground = styled.img`
    position:absolute;
    opacity: .7;
    width:900px;
    height:auto;
    display:block;
    z-index:2;
    top: 30%;
    animation-name: ${fadeInUp};
    animation-duration: 4s;
`

const Background = () => {
    return (
        <HeroBackground src={heroBg} />
    )
}

export default Background;