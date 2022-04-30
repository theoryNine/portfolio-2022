import React from "react";
import styled from "styled-components";
import Screenshot from "./Screenshot";

const ExpandContainer = styled.div`
    overflow: hidden;
    padding: 0;
    transition: .5s linear max-height;
        
    &.expanded {
        opacity: 1;
    }
`

const ContentContainer = styled.div`
    background: var(--black75);
    margin: 25px 10px;
    padding: 1rem;
`

const TileContent = ({expanded, liveUrl, screenshot1}) => {
    return (
        <ExpandContainer className={expanded ? 'expanded' : null}>
            <ContentContainer>
                <Screenshot image={screenshot1} />
                Live Site: {liveUrl}
            </ContentContainer>
        </ExpandContainer>
    )
}

export default TileContent;