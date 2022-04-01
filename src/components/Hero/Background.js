import React from "react";
import styled from "styled-components";
import heroBg from "../../images/ClippedStars.png";

const HeroBackground = styled.img`
    position:absolute;
    opacity: .7;
    width:900px;
    height:auto;
    display:block;
    z-index:2;
    top: 40%;
`

const Background = () => {
    return (
        <HeroBackground src={heroBg} />
    )
}

export default Background;