// import { useMemo, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import SearchBar from "../../Components/Voting/SearchBar";
// import { topCategories } from "../../Data/VotingData.js";

// function CategoriesPage() {
//   const [search, setSearch] = useState("");
//   const navigate = useNavigate();

//   const filtered = useMemo(() => {
//     return topCategories.filter((c) =>
//       c.label.toLowerCase().includes(search.toLowerCase())
//     );
//   }, [search]);

//   return (
//     <div className="min-h-screen bg-[#06060e] px-5 pt-6 text-white">
//       <div className="mb-3 text-base font-bold">All Categories</div>

//       <SearchBar value={search} onChange={setSearch} />

//       <div className="mt-4 space-y-3">
//         {filtered.map((cat) => (
//           <button
//             key={cat.id}
//             onClick={() => navigate(`/categories/${encodeURIComponent(cat.label)}`)}
//             className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3"
//           >
//             <div className="flex items-center gap-3">
//               <img src={cat.img} alt={cat.label} className="h-9 w-9 object-contain" />
//               <p className="text-sm font-semibold text-white/90">{cat.label}</p>
//             </div>

//             <span className="text-lg text-white/40">{">"}</span>
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CategoriesPage;

import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../Components/Voting/SearchBar"; // ✅ Fixed path (was "../Components/voting/SearchBar")
import { topCategories } from "../../Data/VotingData.js";

function CategoriesPage() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filtered = useMemo(() => {
    return topCategories.filter((c) =>
      c.label.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="min-h-screen bg-[#06060e] px-5 pt-6 text-white">
      <div className="mb-3 text-base font-bold">All Categories</div>

      <SearchBar value={search} onChange={setSearch} />

      <div className="mt-4 space-y-3">
        {filtered.map((cat) => (
          <button
            key={cat.id}
            onClick={() => navigate(`/categories/${encodeURIComponent(cat.label)}`)}
            className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3"
          >
            <div className="flex items-center gap-3">
              <img src={cat.img} alt={cat.label} className="h-9 w-9 object-contain" />
              <p className="text-sm font-semibold text-white/90">{cat.label}</p>
            </div>

            <span className="text-lg text-white/40">{">"}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoriesPage;