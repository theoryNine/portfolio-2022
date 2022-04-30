import React, { useState } from "react";
import styled from "styled-components";
import PlusIcon from "./PlusIcon";
import TileContent from "./TileContent";

const TileContainer = styled.div`
    width: 100%;
    border: 1px solid var(--neonPink);
    transition: .3s ease-out box-shadow, .3s linear background-color, .3s linear border;
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

        img {
            top: 0;
        }
    }
    
    &.expanded {
        box-shadow: 0 0 10px var(--red);
        background-color: var(--darkRed15);
        border-color: var(--red);
        
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
    top: 30px;
    right: 10%;
    width: 75%;
    height: auto;
    opacity: .5;
    z-index: -1;
    transition: .5s ease transform, .5s ease top, .3s ease opacity;
    transform: rotate(2deg);

    &:hover {
        top: 10px;
    }
    
    &.expanded {
        transform: rotate(0deg);
        top: 0;
        
        @media (max-width: 767px) {
            opacity: .2;
        }
    }
    `

const TileHeader = styled.button`
    display: flex;
    padding: 25px 10px;
    background: none;
    border: none;
    width: 100%;
    align-items: flex-end;
    z-index: 2;
    color: var(--pureWhite);
    text-shadow: 0 0 5px var(--pureWhite);
    font-size: 1.2rem;
    cursor: pointer;
    
    @media (max-width: 767px) {
        font-size: .8rem;
    }
    `

const ProjectTile = ({title, background, liveUrl, screenshot1}) => {
    const [expanded, setExpand] = useState(false);
    
    return (
        <TileContainer className={expanded ? 'expanded' : null}>
            <BackgroundContainer src={background} className={expanded ? 'expanded' : null} />
            <TileHeader type="button" onClick={() => setExpand(!expanded)}>
                <h2>{title}</h2>
                <PlusIcon />
            </TileHeader>
            <TileContent screenshot1={screenshot1} expanded={expanded} liveUrl={liveUrl} />
        </TileContainer>
    )
}

export default ProjectTile;