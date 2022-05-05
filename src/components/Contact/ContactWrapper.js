import React, { useEffect, useState } from "react";
import styled from "styled-components";

const BorderedContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 2em 0;
    margin-bottom: 1rem;
    position: relative;
    transition: 2s ease-in-out transform, 2s ease-in-out opacity;
    transition-delay: .5s;
    transform: translateY(-20px);
    opacity: 0;

    &.animate {
        transform: translateY(0);
        opacity: 1;
    }

    @media (max-width: 1024px) {
        margin: 2em;
    }

    @media (max-width: 767px) {
        margin: 0.5em;
    }
`

const InnerContainer = styled.div`
    border: 1px solid var(--fireTeal);
    overflow: hidden;
    position: relative;
    background: rgba(0,0,0,.6);
    z-index: 1;
    width: 75%;
    padding: 0 0 1rem 0;

    @meda (max-width: 1400px) {
        width: 65%;
    }

    @media (max-width: 1024px) {
        width: 100%;
    }
`

const TextContent = styled.div`
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding: 0 1rem;

    @media (max-width: 1024px) {
        width: 100%;
        padding: 0 2em;
        margin-right: auto;
    }

    @media (max-width: 767px) {
        padding: 1em 0.4em;
    }
`
    
const ContactWrapper = ({ children }) => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
      // setAnimate sets the animate state
      setAnimate(true);
    },[])

    return (
        <BorderedContainer className={animate === true ? 'animate' : ''}>
            <InnerContainer>
                <TextContent>
                    {children}
                </TextContent>
            </InnerContainer>
        </BorderedContainer>
    )
}

export default ContactWrapper;