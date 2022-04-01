import React, { useState, useEffect } from "react";
import styled from "styled-components";

const BorderedContainer = styled.div`
    justify-content: flex-start;
    margin: 2rem 0;
    transition: .5s ease-out box-shadow, 2s ease-in-out transform, 2s ease-in-out opacity;
    transform: translateX(-20px);
    transition-delay: 1s;
    opacity: 0;

    &.animate {
        transform: translateY(0);
        opacity: 1;
    }
`

const InnerContainer = styled.div`
    border: 1px solid var(--fireTeal);
    border-left: none;
    width: 75%;
    transition: .5s ease box-shadow;

    &:hover {
        box-shadow: 0 0 10px var(--fireTeal);
    }
`

const TextContent = styled.div`
    color: var(--pureWhite);
    width: 80%;
    margin-right: 2rem;
    margin-left: auto;
`

const ImageContainer = styled.div`
    width: 25%;
`

const ContentLeft = ({ children }) => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    })

    return (
        <BorderedContainer className={animate === true ? 'animate' : ''}>
            <InnerContainer>
                <TextContent>
                    {children}
                </TextContent>
            </InnerContainer>
            <ImageContainer />
        </BorderedContainer>
    )
}

export default ContentLeft;