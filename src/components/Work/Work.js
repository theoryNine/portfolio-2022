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
                        screenshot2={data.screenshot2}
                        screenshot3={data.screenshot3}
                        liveUrl={data.liveUrl}
                        role={data.role}
                        description={data.description}
                        stack={data.stack}
                        key={key} />
                );
            })}
        </SectionWrapper>
    )
}

export default Work;