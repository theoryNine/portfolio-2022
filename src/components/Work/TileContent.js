import React from "react";
import styled from "styled-components";
import Screenshot from "./Screenshot";

const ExpandContainer = styled.div`
    height: 0;
    overflow: hidden;
    padding: 0;
    transition: .5s linear max-height;
        
    &.expanded {
        height: auto;
        opacity: 1;
    }
`

const ContentContainer = styled.div`
    background: var(--black75);
    margin: 25px 10px;
    padding: 1rem;
`

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: top;

    @media (max-width: 767px) {
        flex-direction: column;
    }
`

const TileContent = ({expanded, liveUrl, screenshot1, screenshot2}) => {
    return (
        <ExpandContainer className={expanded ? 'expanded' : null}>
            <ContentContainer>
                <ImageContainer>
                    <Screenshot image={screenshot1} />
                    {screenshot2 && <Screenshot image={screenshot2} />}
                </ImageContainer>
                Live Site: {liveUrl}
            </ContentContainer>
        </ExpandContainer>
    )
}

export default TileContent;