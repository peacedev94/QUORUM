import React, { useState } from "react";
import { CardIcon, BankIcon, UssdIcon, EWalletIcon } from "../../assets/Icon";
import { BackArrowIcon } from "../../assets/Icon";
import { useNavigate } from "react-router-dom";

const WalletPay = () => {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState(null);

  return (
    <div className="min-h-screen bg-[#0A0A12] text-[#F8FAFC] px-6 pt-8 pb-24">
      {/* Header */}
      <div
        className="absolute top-10 left-4 text-[#D1BCFF] cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <BackArrowIcon />
      </div>

      <div>
        <h1 className="text-2xl pt-22 font-semibold">Select Payment Method</h1>
      </div>

      {/* Payment Methods */}
      <div className="mt-10 space-y-4">
        {/* Card Payment */}
        <div
          onClick={() => setSelectedMethod("card")}
          className={`border border-[#7B3FF2] rounded-lg px-4 py-3 text-sm flex items-center justify-between cursor-pointer transition duration-200 `}
        >
          <div className="flex items-center gap-4">
            <CardIcon />
            <span className="font-semibold">Card Payment</span>
          </div>

          <div
            className={`w-5 h-5 rounded-full border-2 border-white ${
              selectedMethod === "card" ? "bg-white" : ""
            }`}
          />
        </div>

        {/* Bank Transfer */}
        <div
          onClick={() => setSelectedMethod("bank")}
          className={`border border-[#7B3FF2] rounded-lg px-4 py-4 text-sm flex items-center justify-between cursor-pointer transition duration-200 ${
            selectedMethod === "bank" ? "" : ""
          }`}
        >
          <div className="flex items-center gap-4">
            <BankIcon />
            <span className="font-semibold">Bank Transfer</span>
          </div>

          <div
            className={`w-5 h-5 rounded-full border-2 border-white ${
              selectedMethod === "bank" ? "bg-white" : ""
            }`}
          />
        </div>

        {/* USSD */}
        <div
          onClick={() => setSelectedMethod("ussd")}
          className={`border border-[#7B3FF2] rounded-lg px-4 py-3 text-sm flex items-center justify-between cursor-pointer transition duration-200`}
        >
          <div className="flex items-center gap-4">
            <UssdIcon />
            <span className="font-semibold">USSD</span>
          </div>

          <div
            className={`w-5 h-5 rounded-full border-2 border-white ${
              selectedMethod === "ussd" ? "bg-white" : ""
            }`}
          />
        </div>

        {/* E-Wallet */}
        <div
          onClick={() => setSelectedMethod("ewallet")}
          className={`border border-[#7B3FF2] rounded-lg px-4 py-3 text-sm flex items-center justify-between cursor-pointer transition duration-200 `}
        >
          <div className="flex items-center gap-4">
            <EWalletIcon />
            <span className="font-semibold">E-Wallet</span>
          </div>

          <div
            className={`w-5 h-5 rounded-full border-2 border-white ${
              selectedMethod === "ewallet" ? "bg-white" : ""
            }`}
          />
        </div>
      </div>

      {/* Pay Button */}
      <div className="mt-18" onClick={() => navigate("/")}>
        <button
          disabled={!selectedMethod}
          className={`w-full py-3 rounded-lg font-medium transition ${
            selectedMethod
              ? "bg-[#7B3FF2] text-base text-white"
              : "bg-gray-600 text-gray-300 cursor-not-allowed"
          }`}
        >
          Pay NGN5,000
        </button>
      </div>
    </div>
  );
};

export default WalletPay;
