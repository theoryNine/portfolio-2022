import React from "react";
import SectionHeading from "../SectionHeading";
import SectionWrapper from "../SectionWrapper";
import ProjectTile from "./ProjectTile";
import MazdaDesktopSS from "../../images/sitegrabs/Mazda_Desk_SS.png";
import BNYDesktopSS from "../../images/sitegrabs/BNY_Desk.png";
import SpectrumDesktopSS from "../../images/sitegrabs/spectrum_mobile_full.jpg";
import NYLDesktopSS from "../../images/sitegrabs/nyl_full.jpg";
import ATTDesktopSS from "../../images/sitegrabs/att_full.jpg";
import CanonDesktopSS from "../../images/sitegrabs/canon_full.jpg";
import ACUDesktopSS from "../../images/sitegrabs/acu_full.jpg";
import FreshDesktopSS from "../../images/sitegrabs/fresh_full.jpg";

const Work = () => {
    return (
        <SectionWrapper>
            <SectionHeading align="center" content="Some Of My Work"></SectionHeading>
            <ProjectTile title="Mazda Brand Academy" background={MazdaDesktopSS}></ProjectTile>
            <ProjectTile title="Bank of New York Mellon" background={BNYDesktopSS}></ProjectTile>
            <ProjectTile title="Spectrum" background={SpectrumDesktopSS}></ProjectTile>
            <ProjectTile title="New York Life" background={NYLDesktopSS}></ProjectTile>
            <ProjectTile title="AT&T" background={ATTDesktopSS}></ProjectTile>
            <ProjectTile title="Canon USA" background={CanonDesktopSS}></ProjectTile>
            <ProjectTile title="Abilene Christian University" background={ACUDesktopSS}></ProjectTile>
            <ProjectTile title="Fresh Image Center" background={FreshDesktopSS}></ProjectTile>
        </SectionWrapper>
    )
}

export default Work;