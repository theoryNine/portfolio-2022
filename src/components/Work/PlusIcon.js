import React from "react";
import styled from "styled-components";

const Plus = styled.div`
    position: absolute;
    right: 1rem;
    top: 50px;
    width: 30px;
    height: 30px;
    z-index: 2;
`

const HoriLine = styled.span`
    width: 100%;
    box-shadow: 0 0 3px var(--pureWhite);
    height: 2px;
    background-color: var(--pureWhite);
    position: absolute;
    top: 50%;
    transition: .3s ease box-shadow;
`

const VertLine = styled.span`
    height: 100%;
    box-shadow: 0 0 3px var(--pureWhite);
    width: 2px;
    background-color: var(--pureWhite);
    position: absolute;
    left: 50%;
    transition: .5s ease all;
`

const PlusIcon = () => {
    return (
        <Plus>
            <HoriLine className="plus-hori" />
            <VertLine className="plus-vert" />
        </Plus>
    )
}

export default PlusIcon;