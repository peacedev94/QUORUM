import React from "react";
import { useNavigate } from "react-router-dom";

const NomineesManagement = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#090A10] text-white flex flex-col px-5 pt-12 pb-10 antialiased select-none">
       {/* Back Arrow Navigation */}
      <div className="mb-6">
        <button
          onClick={() => navigate("/organizer/dashboard")}
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
      {/* Page Title Header Header */}
      <div className="mb-6">
        <h1 className="text-[28px] font-bold tracking-tight text-white">Analytics</h1>
      </div>

      {/* Timeframe Selector Dropdown */}
      <div className="mb-6 relative">
        <select 
          className="w-full bg-[#0E0F19] border border-[#2E305E] focus:border-[#7F4DFF] rounded-xl py-4 px-4 text-gray-300 outline-none appearance-none cursor-pointer transition-colors"
          defaultValue="this-week"
        >
          <option value="this-week">This Week</option>
          <option value="this-month">This Month</option>
          <option value="all-time">All Time</option>
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Two Column Metric Grid Cards Row */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {/* Total Votes Card */}
        <div className="bg-[#0E0F19] border border-[#2E305E] rounded-xl py-5 px-4 text-center">
          <p className="text-sm font-medium text-gray-400 mb-1">Total Votes</p>
          <p className="text-2xl font-bold text-gray-100 tracking-tight">8,450</p>
        </div>

        {/* Total Revenue Card */}
        <div className="bg-[#0E0F19] border border-[#2E305E] rounded-xl py-5 px-4 text-center">
          <p className="text-sm font-medium text-gray-400 mb-1">Total Revenue</p>
          <p className="text-2xl font-bold text-gray-100 tracking-tight">₦10,000</p>
        </div>
      </div>

      {/* Chart Visual Section Area Container */}
      <div className="mb-8 flex-1 flex flex-col">
        <h2 className="text-base font-semibold text-gray-200 mb-4 tracking-tight">
          Votes Over Time
        </h2>
        
        {/* SVG Gradient Area Chart Vector Simulation */}
        <div className="w-full bg-[#0E0F19]/40 border-b border-l border-gray-800/80 rounded-t-sm h-52 relative flex items-end overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4DE0B6" stopOpacity="0.85" />
                <stop offset="35%" stopColor="#3877F1" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#7F4DFF" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            {/* Filled Area path matching the snapshot hills and valleys */}
            <path 
              d="M 0 35 
                 Q 10 42 13 45 
                 Q 18 38 25 28 
                 Q 32 37 36 41 
                 Q 40 41 45 27 
                 Q 51 34 58 39 
                 Q 65 29 70 33 
                 Q 75 35 80 29 
                 Q 87 27 92 23 
                 Q 98 18 100 15 
                 L 100 50 L 0 50 Z" 
              fill="url(#chartGradient)" 
            />
          </svg>
        </div>
      </div>

      {/* Bottom Row Split Metric Layout Blocks */}
      <div className="grid grid-cols-2 border border-[#2E305E] rounded-xl overflow-hidden bg-[#0E0F19]/40">
        <div className="py-4 text-center border-r border-[#2E305E] text-gray-400 text-sm font-medium">
          Top Category
        </div>
        <div className="py-4 text-center text-gray-300 text-sm font-medium">
          Best Artist
        </div>
      </div>

    </div>
  );
};

export default NomineesManagement;