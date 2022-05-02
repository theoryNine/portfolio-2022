import React, { useState } from "react";
import styled from "styled-components";

const ScreenshotContainer = styled.div`
    max-height: 200px;
    width: 300px;
    max-width: 100%;
    overflow: hidden;
    border: 1px solid var(--neonPink);
    transition: .5s cubic-bezier(0, 1, 0, 1) all;
    cursor: pointer;

    &.expanded {
        border-color: var(--red);
        width: 100%;
        max-height: 4000px;
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
            <img src={image} alt="" />
        </ScreenshotContainer>
    )
}

export default Screenshot;