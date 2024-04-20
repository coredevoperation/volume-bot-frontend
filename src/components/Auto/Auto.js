import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Run from "./Run";
import "./Auto.css";
import { InputField, InputLabel } from "../Input";

const Auto = (props) => {
  const [maxVal, setMaxVal] = useState(0.3);
  const [minVal, setMinVal] = useState(0.9);
  const [timestamp, setTimestamp] = useState(10);
  const [option, setOption] = useState("");

  return (
    <div className="flex flex-col">
      <div className="flex flex-col lg:flex-row justify-center gap-4 items-center mb-4">
        {/* buy sell option */}
        {/* <div className="buy-sell-option">
          <Form>
            <Form.Check
              inline
              label="Buy"
              name="group1"
              type="radio"
              id={`inline-radio-1`}
              onChange={() => setOption("buy")}
              value={option}
            />
            <Form.Check
              inline
              label="Sell"
              name="group1"
              type="radio"
              id={`inline-radio-2`}
              onChange={() => setOption("sell")}
              value={option}
            />
          </Form>
        </div> */}
        {/* Sol Max and Min value */}

        <div className="flex flex-col gap-2">
          <div className="flex items-center">
            <div className="w-[50px]">
              <InputLabel id="inputGroup-sizing-lg">Max:</InputLabel>
            </div>
            <InputField
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              type="number"
              placeholder="0"
              value={maxVal}
              onChange={(e) => setMaxVal(e.target.value)}
            />
            <InputLabel>SOL</InputLabel>
          </div>
          <div className="flex items-center">
            <div className="w-[50px]">
              <InputLabel id="inputGroup-sizing-lg">Min:</InputLabel>
            </div>
            <InputField
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              type="number"
              placeholder="0"
              value={minVal}
              onChange={(e) => setMinVal(e.target.value)}
            />
            <InputLabel>SOL</InputLabel>
          </div>
        </div>

        {/* timestamp */}
        <div className="flex items-center">
          <InputLabel id="inputGroup-sizing-lg">
            TimeStamp:
          </InputLabel>
          <InputField
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            type="number"
            placeholder="0"
            value={timestamp}
            onChange={(e) => setTimestamp(e.target.value)}
          />
          <InputLabel>Seconds</InputLabel>
        </div>
      </div>

      {/* Button */}
      <div className="flex flex-row justify-center">
        <Run
          tokenaddress={props.tokenaddress}
          maxVal={maxVal}
          minVal={minVal}
          timestamp={timestamp}
          option={option}
          walletUnit={props.walletUnit}
          walletAmount={props.walletAmount}
          setIsRootSwap={props.setIsRootSwap}
        />
      </div>
    </div>
  );
};

export default Auto;
