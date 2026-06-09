import React from 'react';
import { useNavigate } from 'react-router-dom';

const OnboardingStep1 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0F172A] text-white flex flex-col justify-between px-5 pt-10 pb-24 relative antialiased select-none">
      <div className="flex justify-end">
        <button 
          onClick={() => navigate("/wallet")}
          className="text-[15px] font-medium text-[#7B3FF2] hover:text-purple-400 transition-colors cursor-pointer"
        >
          Skip
        </button>
      </div>

      <div className="w-full flex flex-col items-center flex-1 justify-end">
        <div className="text-center px-1 mb-10">
          <h2 className="text-2xl font-semibold tracking-tight leading-[1.25]">
            Support Your <br /> Favorite Nominees
          </h2>
          <p className="text-sm leading-[1.6] text-gray-400 font-normal max-w-[260px] mx-auto mt-3.5">
            Vote for nominees across multiple award categories and help them rise on the leaderboard.
          </p>
        </div>

        <div className="w-full flex flex-col items-center space-y-6">
          <button 
            onClick={() => navigate("/onboarding-2")}
            className="w-full py-3.5 rounded-2xl text-[15px] font-semibold bg-[#7B3FF2] hover:opacity-90 text-white tracking-wide transition-all cursor-pointer shadow-lg"
          >
            Next
          </button>

          <div className="flex space-x-2.5 items-center justify-center pt-1">
            <span className="h-2 w-2 rounded-full bg-[#F4B400]" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingStep1;