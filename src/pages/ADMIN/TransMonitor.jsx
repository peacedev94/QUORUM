import React, { useState } from "react";
import { ChevronDown } from "../../assets/Icon";
import AdminHeader from "../../Components/ADMIN/AdminHeader";
import SideBar from "../../Components/ADMIN/SideBar";

export default function TransMonitor() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const transactions = [
    {
      id: "TXN 001",
      name: "John Doe",
      amount: "₦10,000",
      status: "Success",
      color: "text-green-500",
    },
    {
      id: "TXN 001",
      name: "Jane Doe",
      amount: "₦10,000",
      status: "Pending",
      color: "text-yellow-400",
    },
    {
      id: "TXN 001",
      name: "Jane Doe",
      amount: "₦10,000",
      status: "Failed",
      color: "text-red-500",
    },
  ];

  const statusOptions = ["All Status", "Pending", "Success", "Failed"];

  const filteredTransactions =
    selectedStatus === "All Status"
      ? transactions
      : transactions.filter((txn) => txn.status === selectedStatus);

  return (
    <div className="min-h-screen bg-[#0A0A12] text-white px-3 ">
      {/* Header */}
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex items-center justify-between mb-10">
        <button>
          <AdminHeader setIsOpen={setIsOpen} />
        </button>
      </div>

      {/* Filter Dropdown*/}
      <div className="relative pt-18 mb-8">
        <button
          className="
          w-full
          flex
          items-center
          justify-between
          px-4
          py-3
          rounded-lg
          border
          border-[#887EAF]
          text-[#A1A1AA]
          text-lg
          
        "
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span>{selectedStatus}</span>
          <ChevronDown
            className={`transition-transform duration-200 ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isDropdownOpen && (
          <div
            className="

              absolute

              top-full

              left-0

              mt-2

              w-full

              bg-[#0F172A]

              border

              border-[#3B2A72]

              rounded-lg

              overflow-hidden

              z-50

              shadow-lg

            "
          >
            {statusOptions.map((option) => (
              <button
                key={option}
                onClick={() => {
                  setSelectedStatus(option);

                  setIsDropdownOpen(false);
                }}
                className={`

                  w-full

                  text-left

                  px-4

                  py-3

                  text-sm

                  transition-colors

                  hover:bg-[#1E293B]

                  ${
                    selectedStatus === option
                      ? "bg-[#7B3FF2] text-white"
                      : "text-[#A1A1AA]"
                  }
                `}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Transactions */}
      <div className="space-y-3">
        {filteredTransactions.map((txn, index) => (
          <div
            key={index}
            className="
              border
              border-[#7B3FF2]
              rounded-xl
              px-4
              py-3
              flex
              justify-between
              items-center
            "
          >
            <div>
              <h3 className="font-semibold text-lg">{txn.id}</h3>

              <p className="text-[#9CA3AF] text-base mt-1">{txn.name}</p>
            </div>

            <div className="text-right">
              <p className="text-[#D1D5DB] text-lg">{txn.amount}</p>

              <p className={`text-base mt-1 ${txn.color}`}>{txn.status}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <button
        className="
          w-full
          mt-20
          bg-[#7B3FF2]
          hover:bg-[#8B5CF6]
          rounded-lg
          py-3
          font-medium
          transition-all
          text-xl
        "
      >
        View all Transactions
      </button>
    </div>
  );
}
