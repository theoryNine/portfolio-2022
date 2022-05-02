import React from "react";
import SectionHeading from "../SectionHeading";
import SkillCard from "./SkillCard";
import styled from "styled-components";
import SectionWrapper from "../SectionWrapper";

const SkillCardGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;

    @media (max-width: 767px) {
        display: inline-block;
    }
`

const Skills = () => {
    return(
        <SectionWrapper>
            <SectionHeading align="center" content="My Daily Tools" />
            <SkillCardGrid>
                <SkillCard toolName="HTML/CSS/JavaScript" />
                <SkillCard toolName="React" />
                <SkillCard toolName="Adobe Experience Manager" />
                <SkillCard toolName="TypeScript" />
                <SkillCard toolName="SASS/LESS/Stylus" />
                <SkillCard toolName="Styled Components/Emotion" />
            </SkillCardGrid>
            <SectionHeading align="center" content="I Often Tinker With..." />
            <SkillCardGrid>
                <SkillCard toolName="Vue" />
                <SkillCard toolName="Angular" />
                <SkillCard toolName="Next.js" />
                <SkillCard toolName="React Native" />
                <SkillCard toolName="UI Libraries (i.e. MUI)" />
                <SkillCard toolName="WordPress" />
                <SkillCard toolName="PHP" />
                <SkillCard toolName="GraphQL" />
                <SkillCard toolName="Countless JS Libraries" />
            </SkillCardGrid>
        </SectionWrapper>
    )
}

export default Skills;