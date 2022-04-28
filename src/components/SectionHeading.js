import React from "react";
import styled from "styled-components";

const Heading = styled.h2`
    font-family: var(--secondaryFont);
    font-size: 2em;
    letter-spacing: 1px;
    text-shadow: 0 0 3px var(--pureWhite);
    line-height: 1.2;
    opacity: .9;
    color: var(--pureWhite);
    text-align: ${props => props.align};
    width: 100%;
    margin: 1rem 0 1.5rem 0;

    @media (max-width: 767px) {
        font-size: 1.8em;
    }
`

const SectionHeading = ({ content, align }) => {
    return (
        <Heading align={align}>
            {content}
        </Heading>
    )
}

export default SectionHeading;