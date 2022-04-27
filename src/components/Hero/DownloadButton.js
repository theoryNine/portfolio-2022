import React from "react";
import styled from "styled-components";

const ResumeButton = styled.button`
    z-index: 9;
`

const DownloadButton = () => {
    return (
        <ResumeButton>Access Resume PDF</ResumeButton>
    )
}

export default DownloadButton;