import React, { useState } from "react";
import styled from "styled-components";

const ScreenshotContainer = styled.div`
    max-height: 200px;
    width: 300px;
    max-width: 100%;
    overflow: scroll;
    border: 1px solid var(--fireTeal);
    transition: .3s ease max-height, .3s ease width, .3s ease box-shadow;
    cursor: pointer;
    margin: .5rem;
    flex-shrink: 30px;

    @media (max-width: 767px) {
        width: 100%;
        margin: .5rem 0;
    }

    &:hover {
        box-shadow: 0 0 10px var(--fireTeal);
    }

    &.expanded {
        border-color: var(--neonPink);
        width: 100%;
        max-height: 900px;
        box-shadow: 0 0 10px var(--neonPink);
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