import React from "react";
import { useNavigate } from "react-router-dom";
import profile from "../../assets/Images/profile.png";
import { BackArrowIcon } from "../../assets/Icon";

const VotingHistory = () => {
  const navigate = useNavigate();

  const votingHistory = [
    {
      id: 1,
      candidate: "Jane Doe",
      votes: 5,
      date: "20 May 2025",
      image: "",
    },
    {
      id: 2,
      candidate: "Jane Doe",
      votes: 5,
      date: "20 May 2025",
      image: "",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A12] text-[#F8FAFC] px-4 pt-20">
      {/* Header */}
      <div
        className="absolute top-10 left-6 text-[#D1BCFF] cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <BackArrowIcon />
      </div>

      <h1 className="text-center pt-8 text-[32px] font-semibold mb-14">
        Voting History
      </h1>

      {/* History List */}
      <div className="space-y-8">
        {votingHistory.map((vote) => (
          <div key={vote.id}>
            <div className="flex items-center gap-4">
              <img
                src={profile}
                alt={vote.candidate}
                className="w-20 h-20 rounded-full object-cover"
              />

              <div>
                <h3 className="font-semibold text-lg">{vote.candidate}</h3>

                <p className="text-gray-300 text-base">{vote.votes} Votes</p>

                <p className="text-gray-400 text-base">{vote.date}</p>
              </div>
            </div>

            <div className="mt-4 border-b-2 border-[#7B3FF2]/80"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VotingHistory;
