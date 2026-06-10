import React, { useRef, useState } from "react";
import "../../App.css";
import { useNavigate } from "react-router-dom";
const CreateEvent = () => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const dateRef = useRef(null);

  return (
    <div className="min-h-screen bg-[#0A0A12] text-white flex flex-col px-5 pt-12 pb-10 antialiased select-none">
      {/* Back Arrow Navigation */}
      <div className="mb-6">
        <button
          onClick={() => navigate("/organizer/dashboard")}
          className="hover:opacity-80 transition-opacity cursor-pointer focus:outline-none"
        >
          <svg
            className="w-6 h-6"
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

      {/* Main Title Typography */}
      <div className="mb-10">
        <h1 className="text-[26px] font-semibold tracking-tight text-gray-100">
          Create New Events
        </h1>
      </div>

      {/* Form Fields Stack */}
      <div className="space-y-3 flex-1">
        {/* Event Name Input */}
        <div>
          <label className="block text-sm font-medium text-gray-200 mb-2.5">
            Event Name
          </label>
          <input
            type="text"
            placeholder="Enter Event Name"
            className="w-full bg-[#0E0F19] border border-[#2E305E] focus:border-[#7F4DFF] rounded-xl py-4 px-4 text-gray-100 placeholder-gray-600 outline-none transition-colors"
          />
        </div>

        {/* Event Description Input */}
        <div>
          <label className="block text-sm font-medium text-gray-200 mb-2.5">
            Event Description
          </label>
          <input
            type="text"
            placeholder="Enter Description"
            className="w-full bg-[#0E0F19] border border-[#2E305E] focus:border-[#7F4DFF] rounded-xl py-4 px-4 text-gray-100 placeholder-gray-600 outline-none transition-colors"
          />
        </div>

        {/* Event Start Date Picker */}
        <div>
          <label className="block text-sm font-medium text-gray-200 mb-2.5">
            Event Start Date
          </label>
          <div className="relative">
            <input
              ref={dateRef}
              type="date"
              placeholder="Select Date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full bg-[#0E0F19] border border-[#2E305E] focus:border-[#7F4DFF] rounded-lg py-4 pl-4 pr-12 text-gray-100 placeholder-gray-600 outline-none transition-colors"
            />
            <div className="absolute right-4 pr-7 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
              <button 
              type="button"
              onClick={() => dateRef.current?.focus()}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Event End Date Picker */}
        <div>
          <label className="block text-sm font-medium text-gray-200 mb-2.5">
            Event End Date
          </label>
          <div className="relative">
           <input
              ref={dateRef}
              type="date"
              placeholder="Select Date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full bg-[#0E0F19] border border-[#2E305E] focus:border-[#7F4DFF] rounded-lg py-4 pl-4 pr-12 text-gray-100 placeholder-gray-600 outline-none transition-colors"
            />
            <div className="absolute right-4 pr-7 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
              <button 
              type="button"
              onClick={() => dateRef.current?.focus()}
              >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg></button>
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Primary Bottom Call-To-Action Button */}
      <div className="mt-10">
        <button
          onClick={() => navigate("/organizer/manage-categories")}
          className="w-full bg-[#7B3FF2] hover:bg-[#6A3BE6] active:scale-[0.99] text-white font-medium py-4 rounded-lg transition-all shadow-lg text-center tracking-wide text-base cursor-pointer"
        >
          Add Category
        </button>
      </div>
    </div>
  );
};

export default CreateEvent;
