import React from "react"
import styled from "styled-components"

const Headline = styled.h1`
  font-size: 35px;
`

const SubHeadline = styled.h2`
  font-size: 30px;
`

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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