import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  HomeIcon,
  LeaderboardIcon,
  VoteIcon,
  WalletIcon,
  UserIcon,
} from "../../assets/Icon";

const BottomNav = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("home");

  const navItems = [
    { id: "home", label: "Home", icon: HomeIcon, path:"/", },
    { id: "leaderboard", label: "Leaderboard", icon: LeaderboardIcon, path:"/", },
    { id: "votes", label: "Votes", icon: VoteIcon, path:"/", },
    { id: "wallet", label: "Wallet", icon: WalletIcon, path:"/wallet",},
    { id: "profile", label: "Profile", icon: UserIcon, path:"/profile" },
  ];

   const handleNavigation = (item) => {
    setActiveTab(item.id);
    navigate(item.path);
  };

  return (
    <div className="fixed flex item-center bottom-0 left-0 w-full bg-[#0F172A] shadow-[0_-4px_20px_rgba(0,0,0,0.4)] border-t-[4px] border-black/50 justify-around z-50">
      {navItems.map((item) => {
        const isActive = activeTab === item.id;
        const Icon = item.icon;

        return (
          <div
            key={item.id}
            onClick={() => handleNavigation(item)}
            className={`flex flex-col items-center transition-all duration-300 ${
              isActive ? "-translate-y-7" : ""
            }`}
          >
            {/* ICON WRAPPER */}
            <div
              className={`p-2 rounded-full transition-all duration-300 ${
                isActive ? "bg-[#7B3FF2]" : ""
              }`}
            >
              <Icon
              color={isActive ? "#FFFFFF" : "#F8FAFC"} />
            </div>

            {/* LABEL */}
            <p
              className={`text-base transition-all duration-300 ${
                isActive ? "text-white opacity-100" : "opacity-0 translate-y-1"
              }`}
            >
              {item.label}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default BottomNav;
