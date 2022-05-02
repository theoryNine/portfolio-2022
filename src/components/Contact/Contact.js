import React from "react";
import SectionHeading from "../SectionHeading";
import ContactWrapper from "./ContactWrapper";
import ContactBackground from "./ContactBackground";

const Contact = () => {
    return (
        <ContactWrapper>
            <ContactBackground />
            <SectionHeading align="center" content="Get In Touch"></SectionHeading>
            <p>Text</p>
        </ContactWrapper>
    )
}

export default Contact;