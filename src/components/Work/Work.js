import React from "react";
import SectionHeading from "../SectionHeading";
import SectionWrapper from "../SectionWrapper";
import ProjectTile from "./ProjectTile";

const Work = () => {
    return (
        <SectionWrapper>
            <SectionHeading align="center" content="Some Of My Work"></SectionHeading>
            <ProjectTile></ProjectTile>
        </SectionWrapper>
    )
}

export default Work;