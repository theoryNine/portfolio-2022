import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const FormContainer = styled.div`
  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`

const Form = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://getform.io/f/7c407c5a-a765-4595-988d-301d4398a779",
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Thanks!", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };

  //GetForm.io
  return (
    <FormContainer>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />
        <label htmlFor="email">E-Mail Address</label>
        <input type="email" name="email" />
        <label htmlFor="message">Message</label>
        <input type="text" name="message" />
        <div>
          <button type="submit">Send</button>
          <button type="reset">Clear</button>
        </div>
      </form>
    </FormContainer>
  );
};

export default Form;