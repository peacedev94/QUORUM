import React from "react";
import profile from "../../assets/Images/profile.png";
import { useNavigate } from "react-router-dom";
import {
  EditIcon,
  PwalletIcon,
  VoteIcon,
  NotificationIcon,
  SupportIcon,
  LogoutIcon,
  ChevronRight,
} from "../../assets/Icon";
import { BackArrowIcon } from "../../assets/Icon";

const Profile = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      title: "Edit",
      icon: <EditIcon color="white" />,
      action: () => navigate("/profile"),
    },
    {
      title: "Wallet",
      icon: <PwalletIcon color="white" />,
      action: () => navigate("/wallet"),
    },
    {
      title: "Voting History",
      icon: <VoteIcon color="white" />,
      action: () => navigate("/voting-history"),
    },
    {
      title: "Notifications",
      icon: <NotificationIcon color="white" />,
      action: () => navigate("/"),
    },
    {
      title: "Support",
      icon: <SupportIcon color="white" />,
      action: () => navigate("/"),
    },
    {
      title: "Log Out",
      icon: <LogoutIcon color="white" />,
      action: () => console.log(""),
    },
  ];

  return (
    <div className="min-h-screen bg-[#0F172A] text-white relative px-3 pt-10 pb-28">
      {/* Profile Section */}
      <div className="absolute top-10 left-6 text-[#D1BCFF] cursor-pointer" onClick={() => navigate("/wallet")}>
        <BackArrowIcon />
      </div>
      <div className="flex flex-col pt-14 items-center mb-10">
        <img
          src={profile}
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover"
        />

        <h2 className="mt-4 text-lg font-semibold">John Doe</h2>

        <p className="text-white/80 text-base">johndoe@gmail.com</p>
      </div>

      {/* Menu Items */}
      <div className="space-y-4">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={item.action}
            className="w-full border border-[#7B3FF2] rounded-lg px-6 py-3 flex items-center justify-between"
          >
            <div className="flex text-lg items-center gap-3">
              {item.icon}
              <span>{item.title}</span>
            </div>

            <ChevronRight color="white" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Profile;
