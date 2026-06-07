import React from "react";
import { useNavigate } from "react-router-dom";

const ManageCategories = () => {
  const navigate = useNavigate();

  // Exactly matching the data, names, and nomination counts from Manage Categories_2.jpg
  const categories = [
    { title: "Best Artist", count: "12 Nominations" },
    { title: "Best Influencer", count: "12 Nominations" },
    { title: "Best Content Creator", count: "12 Nominations" },
  ];

  return (
    <div className="min-h-screen bg-[#090A10] text-white flex flex-col px-5 pt-12 pb-10 antialiased select-none">
      
      {/* Back Arrow Navigation */}
      <div className="mb-6">
        <button 
          onClick={() => navigate("/organizer/dashboard")} 
          className="text-[#7F4DFF] hover:opacity-80 transition-opacity cursor-pointer focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
      </div>

      {/* Title Text (Matching the "Create New Events" header verbatim from the design snapshot) */}
      <div className="mb-8">
        <h1 className="text-[26px] font-semibold tracking-tight text-gray-100">Create New Events</h1>
      </div>

      {/* Smaller Sub-Action Add Categories Button Wrapper */}
      <div className="mb-6 flex justify-start">
        <button className="bg-[#7F4DFF] hover:bg-[#6A3BE6] transition-colors text-white text-sm font-medium py-3 px-5 rounded-xl flex items-center gap-2 shadow-md cursor-pointer">
          <span className="text-base font-semibold">+</span> Add Categories
        </button>
      </div>

      {/* Category List Stack */}
      <div className="space-y-4 flex-1">
        {categories.map((item, index) => (
          <div 
            key={index} 
            className="bg-[#181931]/20 border border-[#2E305E] rounded-xl py-5 px-5 flex justify-between items-center"
          >
            {/* Meta Typography info columns */}
            <div>
              <h3 className="text-base font-semibold text-gray-100 tracking-tight mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-gray-400 font-normal">
                {item.count}
              </p>
            </div>

            {/* Edit / Delete Icons Grouping */}
            <div className="flex items-center gap-4 text-gray-400">
              <button className="hover:text-white transition-colors cursor-pointer">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
              <button className="hover:text-red-400 transition-colors cursor-pointer">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-14v4M1 7h22" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Section with Centered Text Label and Main Action Button */}
      <div className="mt-10 space-y-6">
        <p className="text-center text-base text-gray-100 font-medium tracking-tight">
          View all Transactions
        </p>
        <button className="w-full bg-[#7F4DFF] hover:bg-[#6A3BE6] active:scale-[0.99] text-white font-medium py-4 rounded-xl transition-all shadow-lg text-center tracking-wide text-base cursor-pointer">
          View all Transactions
        </button>
      </div>

    </div>
  );
};

export default ManageCategories;