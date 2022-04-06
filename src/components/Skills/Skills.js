import React from "react";
import SectionHeading from "../SectionHeading";
import SkillCard from "./SkillCard";
import SkillsWrapper from "./SkillsWrapper";
import styled from "styled-components";

const SkillCardGrid = styled.div`
    display: flex;
`

const Skills = () => {
    return(
        <SkillsWrapper>
            <SectionHeading align="center" content="my toolbox" />
            <SkillCardGrid>
                <SkillCard toolName="HTML" toolDesc="The core of our web markup." />
                <SkillCard toolName="CSS/SASS/Styled Components" toolDesc="Styling tools." />
            </SkillCardGrid>
        </SkillsWrapper>
    )
}

export default Skills;