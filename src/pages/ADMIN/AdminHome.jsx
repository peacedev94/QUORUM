import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  UsersIcon,
  CalendarIcon,
  ClipboardIcon,
  FileIcon,
} from "../../assets/Icon";
import AdminHeader from "../../Components/ADMIN/AdminHeader";
import SideBar from "../../Components/ADMIN/SideBar";

const stats = [
  { title: "Total Users", value: "8,450" },
  { title: "Active Users", value: "6,320" },
  { title: "Total Events", value: "124" },
  { title: "Transactions", value: "1,892" },
];

export default function AdminHome() {
    const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const quickAccess = [
    {
      title: "Users",
      icon: <UsersIcon size={22}/>,
       path:"/users",
    },
    {
      title: "Events",
      icon: <CalendarIcon size={22} />,
      path:"/event",
    },
    {
      title: "Transactions",
      icon: <ClipboardIcon size={22} />,
      path:"/transactions",
    },
    {
      title: "Reports",
      icon: <FileIcon size={22} />,
      path:"/reports",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A12] text-white">
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
      <AdminHeader setIsOpen={setIsOpen} />
      
      {/* Main Content */}
      <main className="px-4 pt-20 pb-10">
        <h1 className="text-[26px] font-medium mb-8">Welcome, Admin</h1>

        {/* Statistics */}
        <div className="grid grid-cols-2 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-[#1A1B3E] border border-[#7B3FF2]
              rounded-lg p-3 text-center"
            >
              <p className="text-white/70 text-lg">{item.title}</p>

              <h2 className="text-[26px] text-white/80 font-semibold">
                {item.value}
              </h2>
            </div>
          ))}
        </div>

        {/* Summary Card */}
        <div className="mt-14">
          <div className="bg-[#7B3FF2] border border-[#9E9E9E] rounded-md p-4 text-center">
            <p className="text-white/70 text-lg">Total Users</p>

            <h2 className="text-cyan-300 text-[26px] font-medium">8,450</h2>
          </div>
        </div>

        {/* Quick Access */}
        <div className="mt-10">
          <h2 className="text-[26px] text-white/80 font-medium mb-6">
            Quick Access
          </h2>

          <div className="grid grid-cols-4 gap-4">
            {quickAccess.map((item, index) => (
              <div key={index} 
               onClick={() => navigate(item.path)}
              className="flex flex-col items-center">
                <button
                  className="w-17 h-17 rounded-md
                  bg-[#7B3FF2]
                  hover:bg-[#8B5CF6]
                  transition-all
                  flex items-center justify-center"
                >
                  {item.icon}
                </button>

                <span className="mt-2 text-lg text-whit/80">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
