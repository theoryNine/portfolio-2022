import React from "react";
import styled from "styled-components";

const BorderedContainer = styled.div`
    display: flex;
    justify-content: center;
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
    width: 75%;
    padding: 0 0 1rem 0;

    @media (max-width: 1024px) {
        width: 100%;
    }
`

const TextContent = styled.div`
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding: 0 1rem;

    @media (max-width: 1024px) {
        width: 100%;
        padding: 0 2em;
        margin-right: auto;
    }

    @media (max-width: 767px) {
        padding: 0 1em;
    }
`
    
const SectionWrapper = ({ children }) => {
    return (
        <BorderedContainer>
            <InnerContainer>
                <TextContent>
                    {children}
                </TextContent>
            </InnerContainer>
        </BorderedContainer>
    )
}

export default SectionWrapper;