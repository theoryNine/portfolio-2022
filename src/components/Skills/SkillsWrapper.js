import React from "react";
import styled from "styled-components";
import Image from "./Image";

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
    border-left: none;
    width: 75%;
    transition: .3s ease-out box-shadow;

    &:hover {
        box-shadow: 0 0 10px var(--fireTeal);
    }

    @media (max-width: 1024px) {
        border-left: 1px solid var(--fireTeal);
        width: 100%;
    }
`

const TextContent = styled.div`
    width: 80%;
    margin-right: 2rem;
    margin-left: auto;

    @media (max-width: 1024px) {
        width: 100%;
        padding: 0 2em;
        margin-right: auto;
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
        position: absolute;
        top: 150px;
        left: 0;
        width: 100%;
        height: 100%;
    }
    `
    
const SkillsWrapper = ({ children }) => {
    return (
        <BorderedContainer>
            <InnerContainer>
                <TextContent>
                    {children}
                </TextContent>
            </InnerContainer>
            <ImageContainer>
                <Image />
            </ImageContainer>
        </BorderedContainer>
    )
}

export default SkillsWrapper;