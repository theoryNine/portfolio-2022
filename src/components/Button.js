import React from "react";
import styled from "styled-components";

const ButtonLink = styled.a`
    z-index: 9;
    margin-top: .5rem;

    button {
        border: 1px solid var(--fireTeal);
        background: var(--darkTeal);
        text-shadow: 0 0 5px var(--pureWhite);
        color: var(--pureWhite);
        font-size: 1rem;
        padding: 8px;
        text-transform: uppercase;
        cursor: pointer;
        transition: .3s ease box-shadow;
        letter-spacing: 2px;

        &:hover {
            box-shadow: 0 0 10px var(--fireTeal);
        }
    }
`

const Button = ({url, label, newWindow}) => {
    return (
        <ButtonLink target={newWindow ? "_blank" : null} rel={newWindow ? "noreferrer" : null} href={url}>
            <button>{label}</button>
        </ButtonLink>
    )
}

export default Button;