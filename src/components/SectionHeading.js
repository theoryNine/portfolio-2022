import React from "react";
import styled from "styled-components";

const Heading = styled.h2`
    font-family: var(--secondaryFont);
    font-size: 2em;
    text-shadow: 0 0 3px var(--pureWhite);
    line-height: 1;
    opacity: .9;
    color: var(--pureWhite);
    text-align: ${props => props.align};
    width: 100%;
`

const SectionHeading = ({ content, align }) => {
    return (
        <Heading align={align}>
            {content}
        </Heading>
    )
}

export default SectionHeading;