import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SearchBar from "../../Components/Voting/SearchBar";
import { getNomineesByCategory } from "../../Data/VotingData.js";

 function CategoryNomineesPage() {
  const { label } = useParams(); 
  const categoryLabel = decodeURIComponent(label);

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const nominees = useMemo(() => getNomineesByCategory(categoryLabel), [categoryLabel]);

  const filtered = useMemo(() => {
    return nominees.filter((n) =>
      n.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [nominees, search]);

  return (
    <div className="min-h-screen bg-[#06060e] px-5 pt-6 text-white">
      <div className="mb-1 text-xs text-white/50">Category</div>
      <h1 className="text-base font-bold">{categoryLabel}</h1>

      <div className="mt-3">
        <SearchBar value={search} onChange={setSearch} />
      </div>

      <div className="mt-4 space-y-3">
        {filtered.map((n) => (
          <div
            key={n.id}
            className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3"
          >
            <div className="flex items-center gap-3 min-w-0">
              <img
                src={n.img}
                alt={n.name}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div className="min-w-0">
                <p className="truncate text-sm font-bold">{n.name}</p>
                <p className="truncate text-xs text-white/60">
                  Rank #{n.rank} • Votes {n.votes.toLocaleString()}
                </p>
              </div>
            </div>

            <button
              onClick={() => navigate(`/nominees/${n.id}`)}
              className="rounded-lg bg-[#6A2EE6] px-3 py-2 text-xs font-semibold"
            >
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryNomineesPage;