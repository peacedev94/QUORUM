import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Sun, Bell, ChevronRight, Star, Trophy } from "lucide-react";

import SearchBar from "../../Components/Voting/SearchBar";
import NomineeCard from "../../Components/Voting/NomineeCard";
import CategoryRow from "../../Components/Voting/CategoryRow";
import Button from "../../Components/Voting/Button";

import { trendingNominees, topCategories } from "../../Data/VotingData";

function QuorumVotingHome() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // filter trending nominees by search
  const filteredTrending = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return trendingNominees;
    return trendingNominees.filter((n) =>
      `${n.name} ${n.category}`.toLowerCase().includes(q)
    );
  }, [search]);

  return (
    <div className="relative min-h-screen overflow-hidden text-[#f5f3ee] bg-[linear-gradient(175deg,#06060e_0%,#06060e_38%,#0a1628_65%,#0d2045_100%)]">
      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_600px_300px_at_80%_10%,rgba(58,111,216,0.07)_0%,transparent_70%),radial-gradient(ellipse_400px_400px_at_10%_70%,rgba(201,168,76,0.05)_0%,transparent_60%)]" />

      <div className="relative z-[2] overflow-y-auto px-5 pb-20">
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
              className="relative flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[#8a94a8]"
              aria-label="Notifications"
            >
              <Bell className="w-10 h-10 text-[rgb(255,255,255)]" />
              <span className="absolute right-2 top-[2px] h-[10px] w-[10px] rounded-full border-[1.5px] border-[#06060e] bg-[rgb(255,255,255)]" />
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
        <div className="relative mt-[32px] flex items-center justify-between gap-3 overflow-hidden rounded-2xl border border-[rgba(58,111,216,0.3)] bg-[rgb(221,221,221)] px-5 py-[18px]">
          {/* <div className="pointer-events-none absolute top-6 h-[120px] w-[120px] rounded-full bg-[rgb(221,221,221)]" /> */}
          <div className="pointer-events-none relative items-center gap-3">
            <div className="mb-1 text-[32px] font-bold tracking-[2px] text-white">
               Campaign Server
            </div>
          </div>
        </div>

        {/* Trending Nominees */}
        <div className="my-6 mb-3 flex items-baseline justify-between">
          <div className="text-[15px] font-bold">Trending Nominees</div>

          <button
            onClick={() => navigate("/nominees")}
            className="text-xs font-semibold text-[#6A2EE6]"
          >
            View All
          </button>
        </div>

        <div className="flex gap-[18px] overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
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
          <div className="text-[15px] font-bold">Top Categories</div>

          <button
            onClick={() => navigate("/categories")}
            className="text-xs font-semibold text-[#6A2EE6]"
          >
            View All
          </button>
        </div>

        {/* You can keep the 4-grid OR switch to rows; this uses rows for consistency */}
        <div className="space-y-3">
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

        {/* Quick action (example button component usage) */}
        <div className="mt-6">
          <Button variant="secondary" fullWidth onClick={() => navigate("/categories")}>
            Explore Categories
          </Button>
        </div>
      </div>
    </div>
  );
}

export default QuorumVotingHome;