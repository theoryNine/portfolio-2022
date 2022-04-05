import React from "react";
import styled from "styled-components";
import Aquarius from "./Aquarius";
import useAnimate from "../../hooks/useAnimate";

const BorderedContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 2em 0;
    transition: .5s ease-out box-shadow, 2s ease-in-out transform, 2s ease-in-out opacity;
    transform: translateX(20px);
    transition-delay: 3s opacity, 3s transform;
    opacity: 0;

    &.animate {
        transform: translateY(0);
        opacity: 1;
    }

    @media (max-width: 1024px) {
        margin: 2em;
    }

    @media (max-width: 767px) {
        margin: 1em;
    }
`

const InnerContainer = styled.div`
    border: 1px solid var(--fireTeal);
    background: rgba(0,0,0,.6);
    backdrop-filter: blur(2px);
    z-index: 1;
    border-right: none;
    width: 75%;
    transition: .5s ease box-shadow;

    &:hover {
        box-shadow: 0 0 10px var(--fireTeal);
    }

    @media (max-width: 1024px) {
        border-right: 1px solid var(--fireTeal);
        width: 100%;
    }
`

const TextContent = styled.div`
    color: var(--pureWhite);
    width: 80%;
    margin-right: auto;
    margin-left: 2em;

    @media (max-width: 1024px) {
        width: 100%;
        padding: 0 2em;
        margin-left: auto;
    }

    @media (max-width: 767px) {
        padding: 0 1em;
    }
`

const ImageContainer = styled.div`
    overflow: visible;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;

    @media (max-width: 1024px) {
        width: 0;
    }
    `
    

const AboutWrapper = ({ children }) => {

    const animate = useAnimate();

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