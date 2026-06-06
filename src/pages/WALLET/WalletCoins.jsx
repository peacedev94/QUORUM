import React, { useState } from "react";
import { BackArrowIcon } from "../../assets/Icon";
import { useNavigate } from "react-router-dom";

const WalletCoin = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-[#0F172A] relative text-[#F8FAFC] px-6 pt-6 pb-24">
      {/* Header */}
      <div
        className="absolute top-8 left-6 text-[#D1BCFF] cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <BackArrowIcon />
      </div>
      <div className=" pt-16">
        <h1 className="text-2xl font-semibold">Purchase Voting Coins</h1>

        <p className="mt-4 opacity-75 text-sm max-w-[280px] md:max-w-none">
          Choose a coin package to continue supporting nominees.
        </p>
      </div>
      {/* Coin Packages */}
      <div className="mt-12 space-y-4">
        <div
          onClick={() => setSelected(0)}
          className={`border border-[#7B3FF2] rounded-lg px-3 py-5 flex justify-between items-center cursor-pointer transition duration-200
          ${selected === 0 ? "bg-[#7B3FF2]" : "hover:bg-[#7B3FF2]"}`}
        >
          <span className="font-semibold text-sm">20 Coins</span>
          <span className="text-xs">NGN 1,000</span>
        </div>

        <div
          onClick={() => setSelected(1)}
          className={`border border-[#7B3FF2] rounded-lg px-3 py-5 flex justify-between items-center cursor-pointer transition duration-200
          ${selected === 1 ? "bg-[#7B3FF2]" : "hover:bg-[#7B3FF2]"}`}
        >
          <span className="font-semibold text-sm">100 Coins</span>
          <span className="text-xs">NGN 5,000</span>
        </div>

        <div
          onClick={() => setSelected(2)}
          className={`border border-[#7B3FF2] rounded-lg px-3 py-5 flex justify-between items-center cursor-pointer transition duration-200
          ${selected === 2 ? "bg-[#7B3FF2]" : "hover:bg-[#7B3FF2]"}`}
        >
          <span className="font-semibold text-sm">200 Coins</span>
          <span className="text-xs">NGN 10,000</span>
        </div>

        <div
          onClick={() => setSelected(3)}
          className={`border border-[#7B3FF2] rounded-lg px-3 py-5 flex justify-between items-center cursor-pointer transition duration-200
          ${selected === 3 ? "bg-[#7B3FF2]" : "hover:bg-[#7B3FF2]"}`}
        >
          <span className="font-semibold text-sm">500 Coins</span>
          <span className="text-xs">NGN 20,000</span>
        </div>
      </div>
      {/* PaymentButton */}
      <div className="mt-18" onClick={() => navigate("/wallet-pay")}>
        <button
          disabled={selected === null}
          className={`w-full font-medium py-4 rounded-lg transition text-base
            ${
              selected === null
                ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                : "bg-[#F4B400] text-black"
            }
          `}
        >
          Continue to Payment
        </button>
      </div>
    </div>
  );
};

export default WalletCoin;
