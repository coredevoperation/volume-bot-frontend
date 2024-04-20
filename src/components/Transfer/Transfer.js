import React, { useState } from "react";
import { toast } from "react-toastify";
import "./Transfer.css";
import axios from "axios";
import { API_URL } from "../config";
import { InputField, InputLabel } from "../Input";
import { Button } from "../Button";

const Transfer = (props) => {
  const [isGathering, setIsGathering] = useState(false);
  const [isTransferring, setIsTransferring] = useState(false);
  const handleTransfer = async () => {
    setIsTransferring(true);
    try {
      const res = await axios.get(`${API_URL}transfer`, {
        params: {
          walletAmount: props.walletAmount,
          sol_amount: props.solAmount,
          wallet_unit: props.walletUnit,
          sleepTime: props.sleepTime,
        },
      });
      console.log(res.data);
      if (res.data) {
        setIsTransferring(false);
        props.setIsRootTransfer(true);
        toast.success(`Success`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleGather = async () => {
    setIsGathering(true);
    try {
      const res = await axios.get(`${API_URL}gather`, {
        params: {
          walletAmount: props.walletAmount,
        },
      });
      if (res.data) {

        setIsGathering(false);
        toast.success(`Success`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 p-4 justify-center rounded-lg solid border-1 border-gray-600">
      <div className="flex flex-col gap-2">
        <div className="flex items-center">
          <div className="min-w-[120px] flex justify-end">
            <InputLabel>
              SOL Transfer:
            </InputLabel>
          </div>
          <InputField
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            type="number"
            placeholder="0"
            value={props.solAmount}
            onChange={(e) => props.setSolAmount(e.target.value)}
          />
          <div className="min-w-[80px] flex justify-start">
            <InputLabel>SOL</InputLabel>
          </div>
        </div>
        <div className="flex items-center">
          <div className="min-w-[120px] flex justify-end">
            <InputLabel>Unit:</InputLabel>
          </div>
          <InputField
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            type="number"
            placeholder="0"
            value={props.walletUnit}
            onChange={(e) => props.setWalletUnit(e.target.value)}
          />
          <div className="min-w-[80px] flex justify-start">
            <InputLabel>Wallets</InputLabel>
          </div>
        </div>
        <div className="flex items-center">
          <div className="min-w-[120px] flex justify-end">
            <InputLabel>SleepTime:</InputLabel>
          </div>
          <InputField
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            type="number"
            placeholder="0"
            value={props.sleepTime}
            onChange={(e) => props.setSleepTime(e.target.value)}
          />
          <div className="min-w-[80px] flex justify-start">
            <InputLabel>Seconds</InputLabel>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-col justify-center gap-10">
        <Button onClick={handleTransfer}>
          {isTransferring ? "Transferring" : "Transfer"}
        </Button>
        <Button onClick={handleGather}>
          {isGathering ? "Gathering" : "Gather"}
        </Button>
      </div>
    </div>
  );
};

export default Transfer;
