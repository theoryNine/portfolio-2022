import React from "react"
import styled from "styled-components"

const Headline = styled.h1`
  font-size: 35px;
  font-family: 'Pacifico';
  font-weight: 700;
`

const SubHeadline = styled.h2`
  font-size: 30px;
  font-family: 'Mulish';
  font-weight: 400;
`

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 600px;
`

const Hero = ({ headline, subhead }) => {
    return (
        <HeroContainer>
            <Headline>{headline}</Headline>
            <SubHeadline>{subhead}</SubHeadline>
        </HeroContainer>
    )
}

export default Hero