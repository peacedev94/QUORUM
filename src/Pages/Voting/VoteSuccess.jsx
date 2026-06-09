import { useNavigate, useLocation, useParams } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { useMemo } from "react";

export default function VoteSuccess() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  const { voteCount = 1, totalCost = 0, nominee } = location.state || {};

  const txHash = useMemo(
    () => `0x7B3...F2EE`,
    []
  );

  return (
    <div className="flex min-h-screen flex-col bg-[#06060e] px-5 text-white">
      {/* Back */}
      <div className="pt-6 pb-4">
        <button onClick={() => navigate("/")} className="text-white/60 text-xl">
          ←
        </button>
      </div>

      {/* Centered content */}
      <div className="flex flex-1 flex-col items-center justify-center text-center px-4">
        {/* Green check */}
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-green-400/60 bg-green-500/10">
          <CheckCircle2 className="h-10 w-10 text-green-400" />
        </div>

        <h1 className="mb-3 text-2xl font-extrabold">Vote Successful!</h1>
        <p className="mb-8 text-sm text-white/50 leading-relaxed max-w-65">
          Your vote has been counted successfully and the leaderboard has been updated.
        </p>

        {/* Transaction info */}
        <div className="mb-2 w-full max-w-xs rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-[#6ee7b7]">{txHash}</span>
            <span className="text-xs font-bold uppercase tracking-widest text-white/40">
              Transaction Hash
            </span>
          </div>
          <div className="flex items-center justify-end gap-2">
            <span className="text-xs text-white/40">Status</span>
            <div className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              <span className="text-xs font-bold text-green-400">Confirmed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom buttons */}
      <div className="space-y-3 px-5 pb-10">
        <button
          onClick={() => navigate("/nominees")}
          className="w-full rounded-2xl bg-[#6A2EE6] py-4 text-sm font-extrabold"
        >
          View Leaderboard
        </button>

        <button
          onClick={() =>
            navigate(`/nominees/${id}/receipt`, {
              state: { voteCount, totalCost, nominee },
            })
          }
          className="w-full rounded-2xl border border-white/20 py-4 text-sm font-bold"
        >
          View Receipt
        </button>
      </div>
    </div>
  );
}