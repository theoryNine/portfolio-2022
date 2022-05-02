import React from "react";
import SectionHeading from "../SectionHeading";
import SectionWrapper from "../SectionWrapper";
import ProjectTile from "./ProjectTile";
import { ProjectData } from "./ProjectData";

const Work = () => {
    console.log(ProjectData);
    return (
        <SectionWrapper>
            <SectionHeading align="center" content="Some Of My Work"></SectionHeading>
            {ProjectData.map((data, key) => {
                return (
                    <ProjectTile 
                        title={data.title}
                        background={data.background}
                        screenshot1={data.screenshot1}
                        liveUrl={data.liveUrl}
                        key={key} />
                );
            })}
        </SectionWrapper>
    )
}

export default Work;