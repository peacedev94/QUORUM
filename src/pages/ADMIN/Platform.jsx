import {React, useState } from "react";
import {
  PlatformcoinIcon,
  PayIcon,
  SettingsIcon,
  MailIcon,
  ShieldIcon,
} from "../../assets/Icon";
import AdminHeader from "../../Components/ADMIN/AdminHeader";
import SideBar from "../../Components/ADMIN/SideBar";

export default function Platform() {
const [isOpen, setIsOpen] = useState(false);
  
  const settingsItems = [
    {
      title: "General Settings",
      icon: SettingsIcon,
    },
    {
      title: "Coin Settings",
      icon: PlatformcoinIcon,
    },
    {
      title: "Payment Settings",
      icon: PayIcon,
    },
    {
      title: "Email Notifications",
      icon: MailIcon,
    },
    {
      title: "Security Settings",
      icon: ShieldIcon,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A12] text-white px-4">
       {/* Sidebar */}
            <SideBar isOpen={isOpen} setIsOpen={setIsOpen}  className="-[#D1BCFF]" />
      
            {/* Overlay */}
            {isOpen && (
              <div
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/50 z-40"
              />
            )}
      {/* Header */}
      <div className="flex items-center justify-between">
        <button>
          <AdminHeader setIsOpen={setIsOpen} />
        </button>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-semibold mt-24 mb-6">Settings</h1>

      {/* Settings Cards */}
      <div className="space-y-3">
        {settingsItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <button
              key={index}
              className="
                w-full flex items-center gap-4 px-5 py-3
                rounded-md
                border
                border-[#7B3FF2]
                bg-transparent
                hover:bg-[#7B3FF2]/10
                transition-all
              "
            >
              <Icon className="text-white" />

              <span className="text-lg text-[#E5E7EB]">{item.title}</span>
            </button>
          );
        })}
      </div>

      {/* Save Button */}
      <button
        className="
          w-full
          mt-18
          py-3
          rounded-md
          bg-[#7B3FF2]
          text-white
          font-medium
          text-xl
          hover:bg-[#8B5CF6]
          transition-all
        "
      >
        Save Changes
      </button>
    </div>
  );
}
