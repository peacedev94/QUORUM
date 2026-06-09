import {React, useState} from "react";
import { useNavigate } from "react-router-dom";
import { MultipleVotesIcon, PaymentDiscrepancyIcon } from "../../assets/Icon";
import AdminHeader from "../../Components/ADMIN/AdminHeader";
import SideBar from "../../Components/ADMIN/SideBar";

const FraudDetection = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const alerts = [
    {
      title: "Multiple Votes Detected",
      user: "John Doe",
      date: "May 10, 2025",
      icon: <MultipleVotesIcon />,
    },
    {
      title: "Payment Discrepancy",
      user: "John Doe",
      date: "May 10, 2025",
      icon: <PaymentDiscrepancyIcon />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A12] text-white px-2 ">
      {/* Sidebar */}
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}
      {/* Header */}
      <AdminHeader setIsOpen={setIsOpen} />

      {/* Title */}
      <h2 className="text-3xl font-semibold mt-26 mb-4">
        Suspicious Activities
      </h2>

      {/* Alerts */}
      <div className="space-y-4">
        {alerts.map((alert, index) => (
          <div
            key={index}
            className="border border-[#7B3FF2] rounded-lg px-6 py-4 flex items-center gap-4"
          >
            <div>{alert.icon}</div>

            <div>
              <h3 className="font-medium text-[22px] ">{alert.title}</h3>

              <p className="text-md text-white/80">User: {alert.user}</p>

              <p className="text-md text-white/80">{alert.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-30">
        <button
          onClick={() => navigate("/alerts")}
          className="w-full bg-[#7B3FF2] py-3 rounded-lg text-lg font-medium"
        >
          View All Alerts
        </button>
      </div>
    </div>
  );
};

export default FraudDetection;
