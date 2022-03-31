import React from "react";
import styled from "styled-components";

const HeaderBar = styled.div`
    border-bottom: 1px solid var(--fireTeal);
    height: 75px;
    width: 100%;
`

const Header = () => {
    return (
        <HeaderBar />
    )
}

export default Header;