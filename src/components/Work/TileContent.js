import React from "react";
import styled from "styled-components";
import Screenshot from "./Screenshot";

const ContentContainer = styled.div`
    max-height: 0;
    overflow: hidden;
    background: var(--black75);
    padding: 0;
        
    &.expanded {
        max-height: 9999px;
        padding: 25px 10px;
        opacity: 1;
    }
`

const TileContent = ({expanded, liveUrl, screenshot1}) => {
    return (
        <ContentContainer className={expanded ? 'expanded' : null}>
            <Screenshot image={screenshot1} />
            Live Site: {liveUrl}
        </ContentContainer>
    )
}

export default TileContent;