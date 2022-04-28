import React, { useState } from "react";
import styled from "styled-components";
import PlusIcon from "./PlusIcon";

const TileContainer = styled.div`
    width: 100%;
    padding: 25px 10px;
    border: 1px solid var(--neonPink);
    cursor: pointer;
    transition: .3s ease-out box-shadow;
    position: relative;
    overflow: hidden;

    h2 {
        transition: .3s ease text-shadow;
    }

    &:not(:last-child) {
        margin-bottom: .5rem;
    }

    &:hover {
        box-shadow: 0 0 10px var(--neonPink);

        h2 {
            text-shadow: 0 0 10px var(--pureWhite);
        }

        .plus-hori,
        .plus-vert {
            box-shadow: 0 0 10px var(--pureWhite);
        }
    }

    &.expanded {
        box-shadow: 0 0 10px var(--neonPink);
        
        h2 {
            text-shadow: 0 0 10px var(--pureWhite);
        }
        
        .plus-vert {
            transform: rotate(90deg);
        }
    }
`

const BackgroundContainer = styled.img`
    position: absolute;
    top: 0;
    right: 10%;
    width: 75%;
    height: auto;
    opacity: .5;
    z-index: -1;
    transition: .3s ease transform, .3s ease opacity;
    transform: rotate(2deg);

    &.expanded {
        @media (max-width: 767px) {
            opacity: .3;
        }
    }
`

const TileHeader = styled.div`
    display: flex;
    align-items: flex-end;
    z-index: 2;
    color: var(--pureWhite);
    text-shadow: 0 0 5px var(--pureWhite);
    font-size: 1.2rem;
`

const TileContent = styled.div`
    height: 0;
    overflow: hidden;
    transition: .5s ease all;
        
    &.expanded {
        height: 300px;
    }
`

const ProjectTile = ({title, background}) => {
    const [expanded, setExpand] = useState(false);

    return (
        <TileContainer onClick={() => setExpand(!expanded)} className={expanded ? 'expanded' : null}>
            <BackgroundContainer src={background} className={expanded ? 'expanded' : null} />
            <TileHeader>
                <h2>{title}</h2>
                <PlusIcon />
            </TileHeader>
            <TileContent className={expanded ? 'expanded' : null}>
                <p>Some text</p>
            </TileContent>
        </TileContainer>
    )
}

export default ProjectTile;