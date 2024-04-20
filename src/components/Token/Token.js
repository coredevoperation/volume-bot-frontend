import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./Token.css";
import { InputField, InputLabel } from "../Input";

const Token = (props) => {
  return (
    <div className="flex items-center">
      <InputLabel>
        Token Address:
      </InputLabel>
      <InputField
        aria-label="Large"
        aria-describedby="inputGroup-sizing-sm"
        placeholder={props.tokenaddress}
        value={props.tokenaddress}
        onChange={(e) => props.setTokenAddress(e.target.value)}
      />
    </div>
  );
};

export default Token;
