import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { categories, contestants } from "../../Data/LeaderboardData";
import { BackArrowIcon, TrophyIcon } from "../../assets/Icon";
import { DotIcon } from "../../assets/icon";

export default function LeaderBoard() {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const getRankBadge = (rank) => {
    if (rank === 1) return <TrophyIcon className="text-yellow-400" />;
    if (rank === 2) return <span></span>;
    if (rank === 3) return <span></span>;
    return <span className="text-gray-400">#{rank}</span>;
  };

  // DISPLAY lOGIC
  const filteredContestants =
    activeCategory === "all"
      ? contestants
      : contestants.filter((item) => item.category === activeCategory);
  const displayContestants = showAll
    ? filteredContestants
    : filteredContestants.slice(0, 6);
  return (
    <div className="h-screen w-full bg-[#0A0A12] text-[#E7E0EE] overflow-x-hidden pb-46 flex flex-col">
      {/* ================= FIXED HEADER ================= */}
      <div className=" top-0 left-0 right-0 z-50  border-b border-[#ffffff]/20 mr-18 px-4 py-6">
        <div className="flex items-center pt-3 gap-2">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate("/")}>
              <BackArrowIcon />
            </button>

            <h1 className="text-[26px] font-semibold">Leaderboard</h1>
          </div>

          <span className="bg-[#22C55E]/20 text-[#22C55E] px-3 py-1 rounded-full text-xs flex items-center gap-2">
            <DotIcon />
            LIVE
          </span>
        </div>
      </div>

      {/* ================= SCROLL AREA (VERTICAL ONLY) ================= */}
      <div className="flex-1 pt-4 w-screen px-1  pb-6">
        {/* ================= STATS (FIXED IN FLOW, NOT SCROLLABLE HORIZONTALLY) ================= */}
        <div className="grid grid-cols-3 justify-between pt-6 text-center gap-18 mb-6 w-full">
          <div>
            <p className="text-gray-400 text-xs">TOTAL VOTES</p>
            <h3 className="text-xl font-bold">1.2M+</h3>
          </div>

          <div>
            <p className="text-gray-400 text-xs">TIME LEFT</p>
            <h3 className="text-[#EF4444] text-xl font-bold">04:12:59</h3>
          </div>

          <div>
            <p className="text-gray-400 text-xs">CATEGORIES</p>
            <h3 className="text-[#22D3EE] text-xl font-bold">24 Active</h3>
          </div>
        </div>

        {/* ================= CATEGORY (ONLY HORIZONTAL SCROLL HERE) ================= */}
        <div className="mb-10">
          <div className="flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`shrink-0 border font-semibold rounded-full px-5 py-2 text-sm
      ${
        activeCategory === cat.id
          ? "bg-[#7B3FF2] text-white border-[#7B3FF2]"
          : "border-[#7B3FF2] text-white/50"
      }
    `}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* ================= CONTESTANTS (VERTICAL ONLY) ================= */}
        <div className="space-y-3">
          {displayContestants.map((item, index) => {
            const rank = index + 1;

            return (
              <div
                key={item.id}
                className="bg-[#1E293B] rounded-[21px] p-4 border border-[#334155] w-full"
              >
                <div className="flex items-center justify-between">
                  {/* LEFT */}
                  <div className="flex items-center gap-4 min-w-0">
                    {/* IMAGE + BADGE */}
                    <div className="relative w-14 h-14 ">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 h-14 rounded-full object-cover"
                      />

                      {rank === 1 && (
                        <div className="absolute -top-2 -right-2">
                          <TrophyIcon className="w-5 h-5 text-yellow-400" />
                        </div>
                      )}

                      {rank === 2 && (
                        <div className="absolute -top-2 -right-2"></div>
                      )}

                      {rank === 3 && (
                        <div className="absolute -top-2 -right-2"></div>
                      )}
                    </div>

                    {/* NAME + LEADING */}
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-xl truncate">
                          {item.name}
                        </h3>

                        {rank === 1 && (
                          <span className="bg-[#FDBC13]/20 text-[#FDBC13] text-xs px-2 py-1 rounded-full">
                            Leading
                          </span>
                        )}
                      </div>

                      <p className="text-gray-400 text-sm truncate">
                        {item.title}
                      </p>
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="text-right flex-shrink-0">
                    <h3 className="font-bold text-xl">{item.votes}</h3>
                    <p
                      className={
                        item.change.includes("+")
                          ? "text-[#4ADE80] text-sm"
                          : "text-[#F87171] text-sm"
                      }
                    >
                      {item.change}
                    </p>
                  </div>
                </div>

                {/* PROGRESS */}
                <div className="w-full bg-[#344155] h-2 rounded-full mt-4 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-purple-600 to-purple-400 h-2 rounded-full"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>
            );
          })}
          {contestants.length > 6 && (
            <div className="flex flex-col items-center mt-8 mb-10 text-gray-400">
              {/* TEXT */}
              <p className="text-base text-center">
                {showAll
                  ? `Showing all ${contestants.length} nominees`
                  : `Showing 6 of ${contestants.length} nominees • Scroll to see more`}
              </p>

              {/* ARROW BUTTON */}
              <button
                onClick={() => setShowAll(!showAll)}
                className="mt-2 text-2xl animate-bounce"
              >
                {showAll ? "⌃" : "⌄"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
