import React from "react";
import SectionHeading from "../SectionHeading";
import SectionWrapper from "../SectionWrapper";
import ProjectTile from "./ProjectTile";
import MazdaDesktopSS from "../../images/sitegrabs/mazda_full.png";
import BNYDesktopSS from "../../images/sitegrabs/bny_full.png";
import SpectrumDesktopSS from "../../images/sitegrabs/spectrum_mobile_full.jpg";
import NYLDesktopSS from "../../images/sitegrabs/nyl_full.jpg";
import ATTDesktopSS from "../../images/sitegrabs/att_full.jpg";
import CanonDesktopSS from "../../images/sitegrabs/canon_full.jpg";
import ACUDesktopSS from "../../images/sitegrabs/acu_full.jpg";
import FreshDesktopSS from "../../images/sitegrabs/fresh_full.jpg";
import { ProjectData } from "./ProjectData";

const Work = () => {
    return (
        <SectionWrapper>
            <SectionHeading align="center" content="Some Of My Work"></SectionHeading>
            <ProjectTile 
                title="Mazda Brand Academy" 
                background={MazdaDesktopSS}
                screenshot1={MazdaDesktopSS}
                liveUrl="https://www.mazdausa.com" />
            <ProjectTile 
                title="Bank of New York Mellon" 
                background={BNYDesktopSS} />
            <ProjectTile 
                title="Spectrum" 
                background={SpectrumDesktopSS} />
            <ProjectTile 
                title="New York Life" 
                background={NYLDesktopSS} />
            <ProjectTile 
                title="AT&T" 
                background={ATTDesktopSS} />
            <ProjectTile 
                title="Canon USA" 
                background={CanonDesktopSS} />
            <ProjectTile 
                title="Abilene Christian University" 
                background={ACUDesktopSS} />
            <ProjectTile 
                title="Fresh Image Center" 
                background={FreshDesktopSS} />
        </SectionWrapper>
    )
}

export default Work;