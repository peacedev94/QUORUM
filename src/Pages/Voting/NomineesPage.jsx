import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../Components/Voting/SearchBar";
import { nominees } from "../../Data/VotingData.js";

function NomineesPage() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filtered = useMemo(() => {
    return nominees.filter((n) =>
      `${n.name} ${n.category}`.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="min-h-screen bg-[#06060e] px-5 pt-6 text-white text-md">
      <h1 className="mb-3 text-base font-bold">All Nominees</h1>

      <SearchBar value={search} onChange={setSearch} />

      <div className="mt-4 space-y-8">
        {filtered.map((n) => (
          <button
            key={n.id}
            onClick={() => navigate(`/nominees/${n.id}`)}
            className="flex w-full items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-left"
          >
            <img src={n.img} alt={n.name} className="h-10 w-10 rounded-full object-cover" />
            <div className="min-w-0">
              <p className="truncate text-md font-bold">{n.name}</p>
              <p className="truncate text-sm text-white/60">
                {n.category} • Rank #{n.rank} • {n.votes.toLocaleString()} votes
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default NomineesPage;