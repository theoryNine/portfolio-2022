import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Aquarius from "./Aquarius";

const BorderedContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 2rem 0;
    transition: .5s ease-out box-shadow, 2s ease-in-out transform, 2s ease-in-out opacity;
    transform: translateX(20px);
    transition-delay: 3s opacity, 3s transform;
    opacity: 0;

    &.animate {
        transform: translateY(0);
        opacity: 1;
    }
`

const InnerContainer = styled.div`
    border: 1px solid var(--fireTeal);
    border-right: none;
    width: 75%;
    transition: .5s ease box-shadow;

    &:hover {
        box-shadow: 0 0 10px var(--fireTeal);
    }
`

const TextContent = styled.div`
    color: var(--pureWhite);
    width: 80%;
    margin-right: auto;
    margin-left: 2rem;
`

const ImageContainer = styled.div`
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
`

const AboutWrapper = ({ children }) => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    },[])

    return (
        <BorderedContainer className={animate === true ? 'animate' : ''}>
            <ImageContainer>
                <Aquarius />
            </ImageContainer>
            <InnerContainer>
                <TextContent>
                    {children}
                </TextContent>
            </InnerContainer>
        </BorderedContainer>
    )
}

export default AboutWrapper;