import React from "react";
import styled from "styled-components";

const BorderedContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 2rem 0;
`

const InnerContainer = styled.div`
    border: 1px solid var(--fireTeal);
    border-right: none;
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

const ContentRight = ({ children }) => {
    return (
        <BorderedContainer>
            <ImageContainer />
            <InnerContainer>
                <TextContent>
                    {children}
                </TextContent>
            </InnerContainer>
        </BorderedContainer>
    )
}

export default ContentRight;