import React, { useState } from "react";
import { CoinsIcon, RefreshCw } from "../../assets/Icon";
import { XCircleIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BackArrowIcon } from "../../assets/Icon";


const TransactionHistory = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("all");

  const transactions = [
    {
      title: "Coin Purchase",
      date: "20 May 2025",
      amount: "+100 Coins",
      type: "credit",
      status: "Successful",
    },
    {
      title: "Coin Purchase",
      date: "20 May 2025",
      amount: "+100 Coins",
      type: "credit",
      status: "Successful",
    },
    {
      title: "Coin Purchase",
      date: "20 May 2025",
      amount: "+100 Coins",
      type: "credit",
      status: "Successful",
    },
    {
      title: "Coin Purchase",
      date: "20 May 2025",
      amount: "+100 Coins",
      type: "credit",
      status: "Failed",
    },
  ];

  const filteredTransactions =
    activeTab === "all"
      ? transactions
      : transactions.filter((tx) => tx.type === activeTab);

  return (
    <div className="min-h-screen bg-[#0F172A] text-white px-4 pt-16 relative pb-24">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div
            className="absolute top-10 left-6 text-[#D1BCFF] cursor-pointer" onClick={() => navigate(-1)}
          >
            <BackArrowIcon />
          </div>
        <h1 className="text-3xl pt-4 font-semibold">Transaction History</h1>

        <button className="text-gray-400 absolute right-4 top-22">
          <RefreshCw className="w-6 h-6 text-white transition-transform duration-500"/>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mt-14">
        {["all", "credit", "debit"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1 rounded-3xl text-base capitalize border-2 border-[#F8FAFC] ${
              activeTab === tab ? "bg-[#7B3FF2]" : "bg-[#000000]/[.2]"
            }`}
          >
            {tab === "credit" ? "Credits": tab === "debit" ? "Debits" : "All"}
          </button>
        ))}
        <button >
          <XCircleIcon className="w-10 h-10" onClick={() => navigate("/wallet")}/>
        </button>
      </div>

      {/* Transaction List */}
      <div className="mt-4">
        {filteredTransactions.map((tx, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-4 px-5 border-b border-gray-600"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center">
                <CoinsIcon className="w-5 h-5" />
              </div>

              <div>
                <h3 className="font-semibold text-base">{tx.title}</h3>

                <p className="text-sm text-gray-400">{tx.date}</p>
              </div>
            </div>

            <div className="text-right">
              <p
                className={`font-semibold text-base ${
                  tx.type === "credit" ? "text-[#F8FAFC]" : "text-[#F4B400]"
                }`}
              >
                {tx.amount}
              </p>

              <p
                className={`text-base text-center ${
                  tx.status === "Successful" ? "text-green-400" : "text-red-400"
                }`}
              >
                {tx.status}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-gray-400 text-center text-xl font-medium text-[#F8FAFC] pt-28">No more transactions</p>
    </div>
  );
};

export default TransactionHistory;
