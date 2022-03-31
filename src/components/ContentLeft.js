import React from "react";
import styled from "styled-components";

const BorderedContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 2rem 0;
`

const InnerContainer = styled.div`
    border: 1px solid var(--fireTeal);
    border-left: none;
    width: 75%;
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
    return (
        <BorderedContainer>
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