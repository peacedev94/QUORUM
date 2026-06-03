import React from "react";
import { NotificationIcon, VoteIcon } from "../../assets/Icon";

const Wallet = () => {
  const transactions = [
    {
      title: "Vote Deduction",
      date: "20 May 2025",
      amount: "-5 Coins",
      type: "debit",
    },

    {
      title: "Vote Deduction",
      date: "20 May 2025",
      amount: "-5 Coins",
      type: "debit",
    },

    {
      title: "Vote Deduction",
      date: "20 May 2025",
      amount: "-5 Coins",
      type: "debit",
    },

    {
      title: "Vote Deduction",
      date: "20 May 2025",
      amount: "-5 Coins",
      type: "debit",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0F172A] text-white flex flex-col px-5 pt-10 pb-24">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-semibold">My Wallet</h2>
          <p className="text-gray-400 mt-1 text-sm">
            Your voting power starts here.
          </p>
        </div>
        <NotificationIcon className="w-6 h-6 cursor-pointer" />
      </div>

      {/* WALLET CARD */}
      <div className="mt-5 rounded-lg p-5 bg-[#7B3FF2]">
        <p className="text-xs py-3 text-[#E7E0EE]">Current Balance</p>

        <div className="flex justify-between items-start">
          <div>
            {/* Balance */}
            <div className="flex items-end gap-2 mt-2">
              <h1 className="text-[40px] font-bold leading-none">120</h1>
              <span className="text-sm text-black font-medium">Coins</span>
            </div>

            {/* Wallet ID */}
            <div className="text-gray-100 px-2 mt-4">
              <p className="text-xs">WALLET ID</p>
              <p className="text-sm mt-1">QRM-2284</p>
            </div>
          </div>

          {/* Button */}
          <button className="bg-[#F4B400] text-black px-6 py-3 rounded-lg font-semibold">
            Vote Now
          </button>
        </div>
      </div>

      {/* TRANSACTIONS */}
      <div className="flex justify-between items-center mt-6">
        <h2 className="text-xl">Recent Transactions</h2>
        <button className="text-xs text-gray-300">View All</button>
      </div>

      {/* Transactions List */}
      <div className="mt-4">
        {transactions.map((tx, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-4 border-b border-gray-800"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center">
                <VoteIcon alt="icon" className="w-5 h-5" color="#9747FF"/>
              </div>

              <div>
                <h3 className="font-semibold text-sm">{tx.title}</h3>
                <p className="text-gray-400 text-xs">{tx.date}</p>
              </div>
            </div>

            {/* Right side */}
            <p className="text-[#F4B400] font-semibold">{tx.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wallet;
