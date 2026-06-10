import React from "react";
import { useNavigate } from "react-router-dom";

const AddNominee = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0A0A12] text-white flex flex-col px-5 pt-12 pb-10 antialiased select-none">
      
      {/* Back Arrow Navigation */}
      <div className="mb-6">
        <button 
          onClick={() => navigate("/organizer/dashboard")} 
          className=" hover:opacity-80 transition-opacity cursor-pointer focus:outline-none"
        >
          <svg className="w-5 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
      </div>

      {/* Main Title Typography */}
      <div className="mb-10">
        <h1 className="text-[26px] font-semibold tracking-tight text-gray-100">Add Nominee</h1>
      </div>

      {/* Form Fields Stack */}

      <div className="space-y-6  bg-[#0A0A12] flex-1">
        
        {/* Category Dropdown Selector */}
        <div>
          <label className="block text-sm font-medium text-gray-200 mb-2.5">
            Category
          </label>
          <div className="relative">
            <select 
              className="w-full bg-[#0A0A12] border border-[#2E305E] focus:border-[#7F4DFF] rounded-xl py-4 px-4 text-gray-500 outline-none appearance-none cursor-pointer transition-colors"
              defaultValue=""
            >
              <option value="" disabled hidden>Select Category</option>
              <option value="best-artist">Best Artist</option>
              <option value="best-influencer">Best Influencer</option>
              <option value="best-content-creator">Best Content Creator</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Nominee Name Input */}
        <div>
          <label className="block text-sm font-medium text-gray-200 mb-2.5">
            Nominee Name
          </label>
          <input 
            type="text" 
            placeholder="Enter Nominee Name" 
            className="w-full bg-[#0E0F19] border border-[#2E305E] focus:border-[#7F4DFF] rounded-xl py-4 px-4 text-gray-100 placeholder-gray-600 outline-none transition-colors"
          />
        </div>

        {/* Bio Textarea Input */}
        <div>
          <label className="block text-sm font-medium text-gray-200 mb-2.5">
            Bio
          </label>
          <textarea 
            placeholder="Enter Short Bio" 
            rows="5" 
            className="w-full bg-[#0E0F19] border border-[#2E305E] focus:border-[#7F4DFF] rounded-xl py-4 px-4 text-gray-100 placeholder-gray-600 outline-none resize-none transition-colors"
          />
        </div>

        {/* Photo Upload Container with Rounded Preview Layout */}
        <div>
          <label className="block text-sm font-medium text-gray-200 mb-2.5">
            Photo
          </label>
          <div className="w-full bg-[#0E0F19] border border-[#2E305E] rounded-xl p-4 flex items-center">
            {/* Circular Preview Container matching image canvas style */}
            <div className="w-20 h-20 rounded-full border border-gray-700/60 overflow-hidden bg-gray-800 flex items-center justify-center shadow-inner">
              <img 
                src="/src/assets/Images/Background.png" 
                alt="Nominee Preview Placeholder" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>

      {/* Full Width Primary Bottom Call-To-Action Button */}
      <div className="mt-8">
        <button           onClick={() => navigate("")} 
 className="w-full bg-[#7F4DFF] hover:bg-[#6A3BE6] active:scale-[0.99] text-white font-medium py-4 rounded-xl transition-all shadow-lg text-center tracking-wide text-base cursor-pointer">
          Add Nominee
        </button>
      </div>

    </div>
  );
};

export default AddNominee;