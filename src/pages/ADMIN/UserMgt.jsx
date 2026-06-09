import {React, useState} from "react";
import { useNavigate } from "react-router-dom";
import AdminHeader from "../../Components/ADMIN/AdminHeader";
import profile from "../../assets/Images/profile.png";
import { SearchIcon } from "../../assets/Icon";
import SideBar from "../../Components/ADMIN/SideBar";

const User = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const users = [
    {
      name: "John Doe",
      email: "johndoe@gmail.com",
      status: null,
    },
    {
      name: "John Doe",
      email: "johndoe@gmail.com",
      status: "Inactive",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A12] text-white px-2 pb-24">
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex items-center justify-between mb-10">
        <button>
          <AdminHeader setIsOpen={setIsOpen} />
        </button>
      </div>

      {/* Search */}
      <div className="relative mt-24">
        <div className="absolute left-4 px-4 top-1/2 -translate-y-1/2">
          <SearchIcon />
        </div>

        <input
          type="text"
          placeholder="Search"
          className="w-full text-lg border font-semibold text-white/80 border-[#887EAF] rounded-lg py-2 pl-18 pr-4 outline-none"
        />
      </div>

      {/* Users */}
      <div className="mt-8 space-y-6">
        {users.map((user, index) => (
          <div
            key={index}
            className="border border-[#7B3FF2] rounded-lg px-3 py-5 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <img
                src={profile}
                alt="profile"
                className="w-12 h-12 rounded-full object-cover"
              />

              <div>
                <h3 className="font-semibold text-lg ">{user.name}</h3>

                <p className="text-sm text-white/60">{user.email}</p>
              </div>
            </div>

            {user.status && (
              <div className="border border-gray-400 px-4  rounded-full text-base text-[#F8FAFC]/60">
                {user.status}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Button */}
      <button
        onClick={() => navigate("/users")}
        className="w-full bg-[#7B3FF2] py-3 rounded-lg mt-28 text-xl font-medium"
      >
        View all Users
      </button>
    </div>
  );
};

export default User;
