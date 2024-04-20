import "./App.css";
import Nav from "./Nav/Nav";
import Auto from "./Auto/Auto";
import Token from "./Token/Token";
import WalletAmounts from "./WalletAmounts/WalletAmounts";
import Transfer from "./Transfer/Transfer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert } from "./Toast/Toast";
import { useState } from "react";

function App() {
  const [tokenaddress, setTokenAddress] = useState(
    "HLptm5e6rTgh4EKgDpYFrnRHbjpkMyVdEeREEa2G7rf9"
  );
  const [walletAmount, setWalletAmount] = useState(100);
  const [solAmount, setSolAmount] = useState(3);
  const [walletUnit, setWalletUnit] = useState(10);
  const [sleepTime, setSleepTime] = useState(10);
  const [isRootTransfer, setIsRootTransfer] = useState(false);
  const [isRootSwap, setIsRootSwap] = useState(false);

  return (
    <div className="bg-slate-900">
      <Nav />
      <div className="flex flex-col lg:flex-row gap-16 items-center justify-center w-full px-auto lg:p-16">
        <img src='/assets/bot_dark.png' className="w-[30%] max-w-[400px] object-cover object-left" />
        <div className="flex max-w-[800px] flex-col w-full gap-4">
          <div className="flex flex-col gap-2 p-4 solid border-gray-600 border-4 rounded-xl">
            <WalletAmounts
              walletAmount={walletAmount}
              setWalletAmount={setWalletAmount}
              isRootTransfer={isRootTransfer}
              setIsRootTransfer={setIsRootTransfer}
              isRootSwap={isRootSwap}
              setIsRootSwap={setIsRootSwap}
            />
            <Transfer
              solAmount={solAmount}
              setSolAmount={setSolAmount}
              walletUnit={walletUnit}
              setWalletUnit={setWalletUnit}
              sleepTime={sleepTime}
              setSleepTime={setSleepTime}
              walletAmount={walletAmount}
              setIsRootTransfer={setIsRootTransfer}
            />
          </div>
          <div className="flex flex-col gap-4 p-4 solid border-gray-600 border-4 rounded-xl">
            <Token tokenaddress={tokenaddress} setTokenAddress={setTokenAddress} />
            <div>
              <Auto
                tokenaddress={tokenaddress}
                walletUnit={walletUnit}
                walletAmount={walletAmount}
                setIsRootSwap={setIsRootSwap}
              />
            </div>
          </div>
        </div>
      </div>
      <Alert />
    </div>
  );
}

export default App;
