import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
    border: 1px solid var(--neonPink);
    width: 100%;
    background: var(--black);

    @media (max-width: 767px) {
        margin-bottom: .5rem;
    }
`

const CardTitle = styled.h3`
    font-size: 1rem;
    text-align: center;
    margin: 1rem 5px;
`

const SkillCard = ({toolName}) => {
    return (
        <div>
        <CardContainer>
            <CardTitle>{toolName}</CardTitle>
        </CardContainer>
        </div>
    )
}

export default SkillCard;