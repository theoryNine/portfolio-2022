import React from "react";
import SectionHeading from "../SectionHeading";
import SkillCard from "./SkillCard";
import SkillsWrapper from "./SkillsWrapper";
import styled from "styled-components";

const SkillCardGrid = styled.div`
    display: inline-grid;
    grid-template-columns: repeat(3, 1fr);
    gap: .5rem;
    width: 100%;
    margin-bottom: 1rem;

    @media (max-width: 767px) {
        display: inline-block;
    }
`

const Skills = () => {
    return(
        <SkillsWrapper>
            <SectionHeading align="center" content="my daily toolbox" />
            <SkillCardGrid>
                <SkillCard toolName="HTML" toolDesc="The core of our web markup." />
                <SkillCard toolName="CSS/SASS/Styled Components" toolDesc="Styling tools." />
                <SkillCard toolName="CSS/SASS/Styled Components" toolDesc="Styling tools." />
                <SkillCard toolName="HTML" toolDesc="The core of our web markup." />
                <SkillCard toolName="HTML" toolDesc="The core of our web markup." />
                <SkillCard toolName="HTML" toolDesc="The core of our web markup." />
            </SkillCardGrid>
            <SectionHeading align="center" content="other tools i tinker with" />
            <SkillCardGrid>
                <SkillCard toolName="HTML" toolDesc="The core of our web markup." />
                <SkillCard toolName="CSS/SASS/Styled Components" toolDesc="Styling tools." />
                <SkillCard toolName="CSS/SASS/Styled Components" toolDesc="Styling tools." />
                <SkillCard toolName="HTML" toolDesc="The core of our web markup." />
                <SkillCard toolName="HTML" toolDesc="The core of our web markup." />
                <SkillCard toolName="HTML" toolDesc="The core of our web markup." />
            </SkillCardGrid>
        </SkillsWrapper>
    )
}

export default Skills;