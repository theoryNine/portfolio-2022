import React, { useState } from "react";
import styled from "styled-components";

const CardContainer = styled.div`
    border: 1px solid var(--fireTeal);
    padding: 1rem;
    width: 100%;
    background: var(--black);

    @media (max-width: 767px) {
        margin-bottom: .5rem;
    }
`

const CardDesc = styled.div`
    display: none;

    &.active {
        display: block;
    }
`

const CardTitle = styled.h3`
    font-size: 1rem;
`

const SkillCard = ({toolName, toolDesc}) => {
    const [cardActive, toggleActive] = useState(false);
    
    const handleClick = () => {
        toggleActive(!cardActive);
    }

    return (
        <div>
        <CardContainer>
            <CardTitle>{toolName}</CardTitle>
            <CardDesc className={cardActive ? 'active' : ''}>
                <p>{toolDesc}</p>
            </CardDesc>
            <div>
                <button onClick={handleClick}>Dropdown Toggle</button>
            </div>
        </CardContainer>
        </div>
    )
}

export default SkillCard;