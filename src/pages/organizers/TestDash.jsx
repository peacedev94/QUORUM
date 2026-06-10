import React from "react";
import { useNavigate } from "react-router-dom";

const TestDash = () => {
  const navigate = useNavigate();

  //  "Total User" cards
  const stats = [
    { label: "Total User", value: "8,450" },
    { label: "Total Votes", value: "1.5M" },
    { label: "Total Nominees", value: "210" },
    { label: "Active Campaign", value: "5" },
  ];

  // icon labels
  const quickAccessItems = [
    {
      label: "Create Events",
      path: "/organizer/create-event",
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
    },
    {
      label: "Add Nominee",
      path: "/organizer/add-nominee",
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
          />
        </svg>
      ),
    },
    {
      label: "View Analytics",
      path: "/organizer/nominees-management", // <-- Linked dynamically to your Analytics view route
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h2a2 2 0 002-2zm12 0v-11a2 2 0 00-2-2h-2a2 2 0 00-2 2v11a2 2 0 002 2h2a2 2 0 002-2z"
          />
        </svg>
      ),
    },
    {
      label: "Withdraw",
      path: "/withdraw",
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A12] text-white flex flex-col px-5 pt-12 pb-10 antialiased select-none">
      {/* Top Navbar Row */}
      <div className="items-center w-full mb-10">
        <button
          onClick={() => navigate("/notification")}
          className="text-white absolute hover:opacity-80 transition-opacity right-6 cursor-pointer"
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
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </button>
      </div>

      {/* Greeting Title */}
      <div className="mb-10">
        <h1 className="text-[26px] font-medium tracking-tight text-gray-100">
          Welcome, Organizer
        </h1>
      </div>

      {/* Grid Layout for Stats Cards */}
      <div className="grid grid-cols-2 gap-4 mb-16">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-[#1A1B3E] border border-[#7B3FF2] rounded-md py-4 flex flex-col items-center justify-center text-center"
          >
            <p className="text-lg text-gray-300 font-normal tracking-wide mb-2">
              {stat.label}
            </p>
            <h3 className="text-[26px] font-medium tracking-tight text-gray-100">
              {stat.value}
            </h3>
          </div>
        ))}
      </div>

      {/* Section Divider Sub-Header */}
      <div className="mb-8">
        <h2 className="text-[26px] font-medium tracking-tight text-gray-100">
          Quick Access
        </h2>
      </div>

      {/* Action Row matching design elements */}
      <div className="grid grid-cols-4 gap-3 w-full">
        {quickAccessItems.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(item.path)}
            className="flex flex-col items-center cursor-pointer group"
          >
            {/* The individual crisp purple square button background */}
            <div className="w-22 h-20 bg-[#7F4DFF] hover:bg-[#6A3BE6] active:scale-[0.96] transition-all rounded-md flex items-center justify-center text-white shadow-lg mb-3">
              {item.icon}
            </div>
            {/* White labeling positioned perfectly beneath */}
            <span className="text-sm text-white text-center tracking-tight leading-tight whitespace-nowrap">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestDash;
