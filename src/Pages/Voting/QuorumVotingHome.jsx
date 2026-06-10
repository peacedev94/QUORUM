import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { SunIcon, NotificationIcon, TrophyIcon } from "../../assets/Icon";
import {Banner} from "../../assets/Images/Banner.png"
import SearchBar from "../../Components/Voting/SearchBar";
import NomineeCard from "../../Components/Voting/NomineeCard";
import CategoryRow from "../../Components/Voting/CategoryRow";

import {
  trendingNominees,
  topCategories,
  getLeader,
} from "../../Data/VotingData";

function QuorumVotingHome({ setIsOpen }) {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const leader = getLeader();

  const filteredTrending = useMemo(() => {
    const q = search.trim().toLowerCase();

    if (!q) return trendingNominees;

    return trendingNominees.filter((n) =>
      `${n.name} ${n.category}`.toLowerCase().includes(q),
    );
  }, [search]);

  return (
    <div className="min-h-screen bg-[#0A0A12] text-white">
      <div className="px-5 pt-10 pb-28">
        {/* TOP BAR */}
        <div className="flex items-start justify-between">
          <button
            onClick={() => navigate("/notifications")}
            className="relative"
          >
            <NotificationIcon size={24} className="text-white" />

            <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-white" />
          </button>
        </div>

        {/* GREETING */}
        <div className="mt-6">
          <p className="text-sm text-[#B8BCC8]">Good Morning</p>

          <div className="flex items-center gap-2 mt-1">
            <h1 className="text-[20px] font-bold">Amaka</h1>

            <SunIcon size={18} className="text-yellow-400" />
          </div>
        </div>

        {/* SEARCH */}
        <div className="mt-6">
          <SearchBar
            value={search}
            onChange={setSearch}
            placeholder="Search nominees or categories"
          />
        </div>

        {/* BANNER */}
        <div className="relative mt-6 rounded-xl ponter-events-none ">
         <img src={Banner}   alt="Vote Banner" className="w-full h-full object-cover rounded-xl "/>
        </div>

        {/* TRENDING NOMINEES */}
        <div className="flex justify-between items-center mt-8 mb-4">
          <h2 className="text-[22px] font-semibold">Trending Nominees</h2>

          <button
            onClick={() => navigate("/nominees")}
            className="text-[#7C3AED] text-sm"
          >
            View All
          </button>
        </div>

        <div className="flex gap-5 overflow-x-auto scrollbar-hide">
          {filteredTrending.map((nominee) => (
            <NomineeCard
              key={nominee.id}
              nominee={nominee}
              onClick={() => navigate(`/nominees/${nominee.id}`)}
            />
          ))}
        </div>

        {/* TOP CATEGORIES */}
        <div className="flex justify-between items-center mt-8 mb-4">
          <h2 className="text-[22px] font-semibold">Top Categories</h2>

          <button
            onClick={() => navigate("/categories")}
            className="text-[#7C3AED] text-sm "
          >
            View All
          </button>
        </div>

        <div className="flex gap-5 overflow-x-auto scrollbar-hide">
          {topCategories.map((cat) => (
            <CategoryRow
              key={cat.id}
              label={cat.label}
              img={cat.img}
              onClick={() =>
                navigate(`/categories/${encodeURIComponent(cat.label)}`)
              }
            />
          ))}
        </div>

        {/* LEADERBOARD */}
        <div className="mt-8 mb-4">
          <h2 className="text-[22px] font-semibold">Leaderboard Preview</h2>
        </div>

        <div
          onClick={() => navigate("/leaderboard")}
          className="
            bg-[#1B2740]
            rounded-2xl
            border-l-4
            border-[#7C3AED]
            p-4
            flex
            items-center
            justify-between
            cursor-pointer
          "
        >
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={leader.img}
                alt={leader.name}
                className="rounded-full object-cover"
              />

              <span className="absolute top-1 -right-1">
                <TrophyIcon />
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-lg">{leader.name}</h3>

                <span
                  className="
                    px-2
                    py-1
                    rounded-full
                    text-[10px]
                    font-semibold
                    bg-yellow-500/20
                    text-yellow-400
                  "
                >
                  LEADING
                </span>
              </div>

              <p className="text-sm text-[#9AA3B2]">{leader.category}</p>
            </div>
          </div>

          <div className="text-right">
            <p className="font-bold text-xl">
              {leader.votes >= 1000
                ? `${(leader.votes / 1000).toFixed(1)}k`
                : leader.votes}
            </p>

            <p className="text-green-400 text-sm">+1.2k trending</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuorumVotingHome;
