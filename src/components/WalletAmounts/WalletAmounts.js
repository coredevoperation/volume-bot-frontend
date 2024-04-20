import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { toast } from "react-toastify";
import { API_URL } from "../config";
import "./WalletAmounts.css";
import axios from "axios";
import { Button } from "../Button";
import { InputField, InputLabel } from "../Input";

const WalletAmounts = (props) => {
  const [isRemove, setIsRemove] = useState(false);

  const handleGenerate = async () => {
    try {
      const res = await axios.get(`${API_URL}generate`, {
        params: {
          wallet_amount: props.walletAmount,
        },
      });
      if (res) {
        toast.success(`${props.walletAmount} Wallets are generated now`);
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  const handleRemove = async () => {
    try {
      const res = await axios.get(`${API_URL}remove`).then((res) => {
        if (res) {
          console.log("Success Removed");
          toast.success(`Wallets are Removed now`);
          props.setIsRootTransfer(false);
          props.setIsRootSwap(false);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col lg:flex-row gap-4 p-4 justify-center rounded-lg solid border-1 border-gray-600">
      <div className="flex items-center">
        <InputLabel>
          Wallet Amounts:
        </InputLabel>
        <InputField
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          type="number"
          placeholder="0"
          value={props.walletAmount}
          onChange={(e) => props.setWalletAmount(e.target.value)}
        />
      </div>
      <div className="flex justify-center gap-4">
        <Button onClick={handleGenerate}>
          Generate
        </Button>
        {props.isRootSwap && (
          <Button onClick={handleRemove}>
            Remove wallets
          </Button>
        )}
      </div>
    </div>
  );
};

export default WalletAmounts;
