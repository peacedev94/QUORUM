import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Sun, Bell } from "lucide-react";

import SearchBar from "../../Components/Voting/SearchBar";
import NomineeCard from "../../Components/Voting/NomineeCard";
import CategoryRow from "../../Components/Voting/CategoryRow";
// import Button from "../../Components/Voting/Button";
import Banner from "../../assets/Images/Banner.png";

import { trendingNominees, topCategories, getLeader } from "../../Data/VotingData";

function QuorumVotingHome() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const leader = getLeader();

  // filter trending nominees by search
  const filteredTrending = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return trendingNominees;
    return trendingNominees.filter((n) =>
      `${n.name} ${n.category}`.toLowerCase().includes(q)
    );
  }, [search]);

  return (
    <div className="relative min-h-screen overflow-hidden text-[#f5f3ee] bg-[rgb(38,46,66)]">
      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_600px_300px_at_80%_10%,rgba(58,111,216,0.07)_0%,transparent_70%),radial-gradient(ellipse_400px_400px_at_10%_70%,rgba(201,168,76,0.05)_0%,transparent_60%)]" />

      <div className="relative z-2 overflow-y-auto px-5 pb-20">
        {/* Greeting */}
        <div className="pt-7 pb-1">
          <div className="mb-1 text-[16px] font-light tracking-[2px] text-rgb(221 221 221)">
            Good Morning
          </div>

          {/* NAME + NOTIFICATION */}
          <div className="mb-2 flex items-center justify-between gap-3">
           <div className="text-[27px] font-extrabold leading-[1.2] flex items-center gap-2">
           <span className="text-[rgb(235,226,241)]">Amaka</span>
            <Sun className="w-6 h-6 text-[rgb(247,211,65)]" />
          </div>

            <button
              type="button"
              className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/4 text-[#8a94a8]"
              aria-label="Notifications"
            >
              <Bell className="w-10 h-10 text-[rgb(255,255,255)]" />
              <span className="absolute right-2 top-0.5 h-2.5 w-2.5 rounded-full border-[1.5px] border-[#06060e] bg-[rgb(255,255,255)]" />
            </button>
          </div>

          {/* Search */}
          <div className="mt-6">
            <SearchBar
              value={search}
              onChange={setSearch}
              placeholder="Search nominees or categories"
            />
          </div>

        </div>

        {/* Campaign Banner */}
        <div className="relative mt-8 overflow-hidden rounded-2xl pointer-events-none">
          <img
            src={Banner}
            alt="Vote for your favourite Nominee"
            className="w-full h-full object-cover rounded-2xl"
          />
         </div>

        {/* Trending Nominees */}
        <div className="my-6 mb-3 flex items-baseline justify-between">
          <div className="text-[35px] font-bold">Trending Nominees</div>

          <button
            onClick={() => navigate("/nominees")}
            className="text-lg font-semibold text-[#6A2EE6]"
          >
            View All
          </button>
        </div>

        <div className="flex gap-18px overflow-x-auto pb-1 scrollbar-none [&::-webkit-scrollbar]:hidden">
          {filteredTrending.map((n) => (
            <NomineeCard
              key={n.id}
              nominee={n}
              onClick={() => navigate(`/nominees/${n.id}`)}
            />
          ))}
        </div>

        {/* Top Categories */}
        <div className="my-6 mb-3 flex items-baseline justify-between">
          <div className="text-[35px] font-bold">Top Categories</div>

          <button
            onClick={() => navigate("/categories")}
            className="text-lg font-semibold text-[#6A2EE6]"
          >
            View All
          </button>
        </div>

        <div className="flex gap-24 overflow-x-auto pb-1 [&::-webkit-scrollbar]:hidden">
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

        {/* Leaderboard Preview */}
        <div className="mt-6 mb-3 text-[35px] font-bold">Leaderboard Preview</div>
        <div
          onClick={() => navigate("/leaderboard")}
          className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0d1f3c] px-4 py-12 cursor-pointer"
          style={{ borderLeft: "4px solid #6A2EE6" }}
        >
          {/* Avatar with trophy badge */}
          <div className="relative shrink-0">
            <img
              src={leader.img}
              alt={leader.name}
              className="w-18 h-18 rounded-full object-cover border-2 border-white/10"
            />
            <span className="absolute -top-1 right-0 text-md">🏆</span>
          </div>

          {/* Name + category */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[25px] font-bold text-white">{leader.name}</span>
              <span className="text-[15px] font-bold px-2 py-0.5 rounded-full bg-[rgba(201,168,76,0.2)] text-[#e8c97a] border border-[rgba(201,168,76,0.3)]">
                LEADING
              </span>
            </div>
            <div className="text-[15px] text-[#8a94a8] mt-0.5">{leader.category}</div>
          </div>

          {/* Votes + trending */}
          <div className="text-right shrink-0">
            <div className="text-[28px] font-bold text-white">
              {leader.votes >= 1000
                ? `${(leader.votes / 1000).toFixed(1)}k`
                : leader.votes}
            </div>
            <div className="text-[16px] font-semibold text-[#4ade80]">+1.2k trending</div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default QuorumVotingHome;