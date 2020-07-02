import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  color: white;
  text-align: center;
  border: none;
  width: 180px;
  height: 40px;
  background: transparent;
  border-bottom: 1px solid #ca2e19;
  font-size: 150%;
  opacity: 0.6;
  transition: 0.3s ease-out;

  &:focus {
    outline: none;
    placeholder: none;
  }

  &:focus::placeholder {
    color: transparent;
    transition: 0.3s ease-out;
  }

  &:hover {
    opacity: 1;
  }
`;

const input = (props) => (
  <StyledInput
    type="text"
    spellCheck="false"
    onChange={props.change}
    value={props.inputField}
    placeholder={props.placeholder}
  />
);

export default input;
