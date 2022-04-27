import React from "react";
import styled from "styled-components";
import Aquarius from "./Aquarius";
import Portrait from "./Portrait";

const BorderedContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 2em 0;
    position: relative;

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
    z-index: 1;
    border-right: none;
    width: 75%;

    @media (max-width: 1024px) {
        border-right: 1px solid var(--fireTeal);
        width: 100%;
    }
`

const TextContent = styled.div`
    width: 80%;
    margin-right: auto;
    margin-left: 2em;
    max-width: 1400px;

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
    overflow: hidden;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 25%;

    @media (max-width: 1024px) {
        overflow: visible;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
    }
    `
    
const AboutWrapper = ({ children }) => {
    return (
        <BorderedContainer>
            <ImageContainer>
                <Portrait />
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