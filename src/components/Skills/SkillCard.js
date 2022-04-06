import React, { useState } from "react";
import styled from "styled-components";

const CardContainer = styled.div`
    border: 1px solid var(--fireTeal);
    padding: 1rem;
`

const CardDesc = styled.div`
    display: none;

    &.active {
        display: block;
    }
`

const SkillCard = ({toolName, toolDesc}) => {
    const [cardActive, toggleActive] = useState(false);
    
    const handleClick = () => {
        toggleActive(!cardActive);
    }

    return (
        <CardContainer>
            <h3>{toolName}</h3>
            <CardDesc className={cardActive ? 'active' : ''}>
                <p>{toolDesc}</p>
            </CardDesc>
            <div>
                <button onClick={handleClick}>Dropdown Toggle</button>
            </div>
        </CardContainer>
    )
}

export default SkillCard;