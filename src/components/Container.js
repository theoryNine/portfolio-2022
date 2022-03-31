import React from "react";
import styled from "styled-components";

const ContainerComp = styled.div`
    max-width: 960px;
    width: 100%;
`

const Container = ({ children }) => {
    return (
        <ContainerComp>
            {children}
        </ContainerComp>
    )
}

export default Container;