import React from 'react';
import { useNavigate } from 'react-router-dom';

const OnboardingStep2 = () => {
  const navigate = useNavigate();
  const walletAsset = '/src/assets/icons/Gemini_Generated_Image_vlh3edvlh3edvlh3 1.png';

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

      <div className="flex-1 max-h-[180px] w-full flex items-center justify-center my-auto">
        <img 
          src={walletAsset} 
          alt="Coins Graphic" 
          className="h-full max-h-[160px] w-auto object-contain filter drop-shadow-[0_12px_24px_rgba(123,63,242,0.15)]"
          draggable="false"
          onError={(e) => {
            e.target.style.display = 'none';
            const fallback = e.target.parentNode;
            if (fallback) {
              fallback.innerHTML = `<div class="w-28 h-28 rounded-3xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center text-2xl">👛</div>`;
            }
          }}
        />
      </div>

      <div className="w-full flex flex-col items-center space-y-8">
        <div className="text-center px-1">
          <h2 className="text-2xl font-semibold tracking-tight leading-[1.25]">
            Power Your Votes <br /> with Coins
          </h2>
          <p className="text-sm leading-[1.6] text-gray-400 font-normal max-w-[270px] mx-auto mt-3.5">
            Purchase voting coins securely and use them to support your favorite contestants instantly.
          </p>
        </div>

        <div className="w-full flex flex-col items-center space-y-6">
          <button 
            onClick={() => navigate("/onboarding-3")}
            className="w-full py-3.5 rounded-2xl text-[15px] font-semibold bg-[#7B3FF2] hover:opacity-90 text-white tracking-wide transition-all cursor-pointer shadow-lg"
          >
            Continue
          </button>

          <div className="flex space-x-2.5 items-center justify-center pt-1">
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-[#F4B400]" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingStep2;