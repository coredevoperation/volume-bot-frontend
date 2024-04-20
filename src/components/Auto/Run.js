import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { API_URL } from "../config";
import { Button } from "../Button";

const Run = (props) => {
  const [isRunning, setRunning] = useState(false);
  const tokenaddress = props.tokenaddress;
  const maxVal = props.maxVal;
  const minVal = props.minVal;
  const timestamp = props.timestamp;
  const option = props.option;
  const walletUnit = props.walletUnit;
  const walletAmount = props.walletAmount;

  const handleClickStart = async () => {
    // if (!option) {
    //   alert("Please select Buy or Sell");
    //   return;
    // }
    setRunning(true);
    try {
      const res = await axios.get(`${API_URL}start`, {
        params: {
          tokenaddress: tokenaddress,
          option: option,
          maxVal: maxVal,
          minVal: minVal,
          timestamp: timestamp,
          walletUnit: walletUnit,
          walletAmount: walletAmount,
        },
      });

      console.log(res.data);
      if (res.data) {
        setRunning(false);
        props.setIsRootSwap(true);
        toast.success(`Success`);
      }
    } catch (err) {
      console.log("error");
    }
  };

  return (
    <Button
      variant={isRunning ? "danger" : "primary"}
      onClick={handleClickStart}
      disabled={isRunning ? true : false}
    >
      {isRunning ? "Running Bot" : "Start Bot"}
    </Button>
  );
};

export default Run;
