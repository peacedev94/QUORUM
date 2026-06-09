import { useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {getNomineeById } from "../../Data/VotingData.js";


export default function NomineeDetailPage() {
  const { id } = useParams();
  const nominee = useMemo(() => getNomineeById(id), [id]);
  const navigate = useNavigate();


  const [tab, setTab] = useState("about"); // about | stats | achievements

  if (!nominee) {
    return (
      <div className="min-h-screen bg-[#06060e] px-5 pt-6 text-white">
        Nominee not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#06060e] px-5 pt-6 text-white">
      <div className="grid items-center gap-12 sm:flex-row">
        <img
          src={nominee.img}
          alt={nominee.name}
          className="h-16 w-16 rounded-2xl object-cover border border-white/10"
        />

        <div className="min-w-0 space-y-1">
          <h1 className="truncate text-2xl font-bold">{nominee.name}</h1>
          <p className="truncate text-md text-white border-[rgb(124,135,153)]">{nominee.category}</p>
          <p className="text-md text-white/50">
            Rank #{nominee.rank} • Votes {nominee.votes.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Tabs row */}
      <div className="mt-5 grid grid-cols-3 gap-2">
        {[
          { key: "about", label: "About" },
          { key: "stats", label: "Stats" },
          { key: "achievements", label: "Achievements" },
        ].map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={[
              "rounded-xl border px-3 py-2 text-xs font-semibold",
              tab === t.key
                ? "border-[#6A2EE6] bg-[#6A2EE6]/20 text-white"
                : "border-white/10 bg-white/5 text-white/70",
            ].join(" ")}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
        {tab === "about" && <p className="text-sm text-white/80">{nominee.about}</p>}

        {tab === "stats" && (
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="rounded-xl bg-black/20 p-3">
              <p className="text-xs text-white/50">Streams</p>
              <p className="font-bold">{nominee.stats?.streams ?? "-"}</p>
            </div>
            <div className="rounded-xl bg-black/20 p-3">
              <p className="text-xs text-white/50">Awards</p>
              <p className="font-bold">{nominee.stats?.awards ?? "-"}</p>
            </div>
            <div className="rounded-xl bg-black/20 p-3">
              <p className="text-xs text-white/50">Albums</p>
              <p className="font-bold">{nominee.stats?.albums ?? "-"}</p>
            </div>
          </div>
        )}

        {tab === "achievements" && (
          <ul className="list-disc pl-5 text-sm text-white/80 space-y-2">
            {(nominee.achievements ?? []).map((a, idx) => (
              <li key={idx}>{a}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Actions */}
      <div className="mt-16 flex flex-col gap-8 ">
        <button 
          onClick={() => navigate(`/nominees/${id}/select-votes`)}
          className="rounded-2xl bg-[rgb(151,38,251)] px-4 py-10 text-4xl font-normal text-white"
        >
          Vote
        </button>

        <button
          className="rounded-2xl border border-[rgb(138,41,228)] bg-white/5 px-4 py-8 text-3xl font-normal"
          onClick={() => {
            // basic share (you can upgrade later)
            const url = window.location.href;
            if (navigator.share) navigator.share({ title: nominee.name, url });
            else navigator.clipboard.writeText(url);
          }}
        >
          Share Profile
        </button>
      </div>
    </div>
  );
}