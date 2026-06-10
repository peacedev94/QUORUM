import React from "react";
import { useNavigate } from "react-router-dom";

const RevenueOverview = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#090A10] text-white flex flex-col px-5 pt-12 pb-10 antialiased select-none">
      {/* Back Arrow Navigation */}
      <div className="mb-6">
        <button
          onClick={() => navigate("/organizer/create-event")}
          className="text-white hover:opacity-80 transition-opacity cursor-pointer focus:outline-none"
        >
          <svg
            className="w-5 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </button>
      </div>
      {/* Title Header Section */}
      <div className="mb-6">
        <h1 className="text-[26px] font-bold tracking-tight text-gray-100">
          Revenue Overview
        </h1>
      </div>

      {/* Timeframe Filter Dropdown */}
      <div className="mb-6 relative">
        <select
          className="w-full bg-[#0E0F19] border border-[#2E305E] focus:border-[#7F4DFF] rounded-xl py-4 px-4 text-gray-400 outline-none appearance-none cursor-pointer transition-colors"
          defaultValue="this-month"
        >
          <option value="this-week">This Week</option>
          <option value="this-month">This Month</option>
          <option value="all-time">All Time</option>
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {/* Hero Total Revenue Showcase Card */}
      <div className="bg-[#0E0F19] border border-[#2E305E] rounded-xl py-6 px-5 mb-8">
        <p className="text-sm font-medium text-gray-400 mb-1.5">
          Total Revenue
        </p>
        <p className="text-3xl font-semibold text-gray-100 tracking-tight flex items-center gap-1">
          ₦10,000
        </p>
      </div>

      {/* Ledger History List Container */}
      <div className="flex-1 flex flex-col">
        <h2 className="text-sm font-medium text-gray-400 tracking-wide mb-3 uppercase">
          Transactions
        </h2>

        {/* Transaction Ledger Card Row */}
        <div className="bg-[#0E0F19] border border-[#2E305E] rounded-xl py-5 px-5 flex justify-between items-center">
          <span className="text-sm font-normal text-gray-300">
            May 10, 2025
          </span>
          <span className="text-base font-semibold text-gray-100 tracking-tight">
            ₦10,000
          </span>
        </div>
      </div>

      {/* Primary Action Footer Button Container */}
      <div className="mt-8">
        <button className="w-full bg-[#7F4DFF] hover:bg-[#6A3BE6] active:scale-[0.99] text-white font-medium py-4 rounded-xl transition-all shadow-lg text-center tracking-wide text-base cursor-pointer">
          View All Reports
        </button>
      </div>
    </div>
  );
};

export default RevenueOverview;
