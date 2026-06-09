import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SplashScreen2 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/onboarding-1');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#0A0A12] text-white flex flex-col justify-between px-5 pt-10 pb-24 relative antialiased select-none">
      <div className="h-6" />

      <div className="flex flex-col items-center justify-center text-center px-4 my-auto">
        <h1 className="text-2xl font-semibold tracking-tight leading-tight mb-3">
          Welcome to <br /> Quorum
        </h1>
        <p className="text-sm font-medium text-slate-300 tracking-wide mb-6">
          Vote. Compete. Celebrate Excellence.
        </p>
        <p className="text-xs leading-relaxed text-gray-400 font-medium max-w-[260px]">
          A real-time award voting platform powered by secure wallet-based voting.
        </p>
      </div>

      <div className="flex items-center justify-center pt-4">
        <span className="text-xs font-semibold text-[#F4B400] tracking-wide">
          Preparing your voting experience...
        </span>
      </div>
    </div>
  );
};

export default SplashScreen2;