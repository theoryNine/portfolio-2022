import React from "react"
import styled from "styled-components"

const Headline = styled.h1`
  font-size: 35px;
`

const SubHeadline = styled.h2`
  font-size: 30px;
`

const Hero = ({ headline, subhead }) => {
    return (
        <div>
            <Headline>{headline}</Headline>
            <SubHeadline>{subhead}</SubHeadline>
        </div>
    )
}

export default Hero