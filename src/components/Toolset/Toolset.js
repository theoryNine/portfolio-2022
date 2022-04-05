import React from "react";
import styled from "styled-components";
import useAnimate from "../../hooks/useAnimate";
import SectionHeading from "../SectionHeading";

const BorderedContainer = styled.div`
    display: flex;
    transition: .5s ease-out box-shadow, 2s ease-in-out transform, 2s ease-in-out opacity;
    transform: translateY(20px);
    transition-delay: 1s opacity, 1s transform;
    opacity: 0;
    border: 1px solid var(--fireTeal);
    background: rgba(0,0,0,.6);
    backdrop-filter: blur(2px);
    z-index: 1;
    margin: 2rem;

    &.animate {
        transform: translateY(0);
        opacity: 1;
    }

    &:hover {
        box-shadow: 0 0 10px var(--fireTeal);
    }

    @media (max-width: 1024px) {
        margin: 2em;
    }

    @media (max-width: 767px) {
        margin: 1em;
    }
`

const Toolset = () => {
    const animate = useAnimate();

    return (
        <BorderedContainer className={animate === true ? 'animate' : ''}>
            <SectionHeading align="center" content="my skills & tools" />
            <p>Some content</p>
        </BorderedContainer>
    )
}

export default Toolset;