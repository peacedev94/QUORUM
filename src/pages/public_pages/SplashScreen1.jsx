import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logoIcon from '/src/assets/icons/logo.png'; 

const SplashScreen1 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/splash-2');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#0F172A] text-white flex flex-col items-center justify-center px-5 relative antialiased select-none">
      <div className="flex items-center justify-center space-x-4">
        <img src={logoIcon} alt="Quorum Icon" className="h-16 w-auto object-contain" draggable="false" />
        <span className="text-xl font-semibold tracking-wide uppercase font-sans">Quorum</span>
      </div>
    </div>
  );
};

export default SplashScreen1;