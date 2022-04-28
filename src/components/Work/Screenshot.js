import React, { useState } from "react";
import styled from "styled-components";

const ScreenshotContainer = styled.div`
    max-height: 200px;
    width: 300px;
    overflow: hidden;
    border: 1px solid var(--neonPink);
    transition: .5s ease all;

    &.expanded {
        width: 100%;
        max-height: 2000px;
    }

    img {
        width: 100%;
        height: auto;
        transition: .5s ease all;
    }
`

const Screenshot = ({image}) => {
    const [expanded, setExpand] = useState(false);

    return (
        <ScreenshotContainer className={expanded ? 'expanded' : null} onClick={() => setExpand(!expanded)}>
            <img src={image} />
        </ScreenshotContainer>
    )
}

export default Screenshot;