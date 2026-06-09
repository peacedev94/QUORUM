import { useNavigate, useLocation } from "react-router-dom";
import { TriangleAlert } from "lucide-react";

export default function InsufficientCoins() {
  const navigate = useNavigate();
  const location = useLocation();

  const { has = 12 } = location.state || {};

  return (
    <div className="flex min-h-screen flex-col bg-[#06060e] px-5 text-white">
      {/* Back */}
      <div className="pt-6 pb-4">
        <button onClick={() => navigate(-1)} className="text-white/60 text-xl">
          ←
        </button>
      </div>

      {/* Centered content */}
      <div className="flex flex-1 flex-col items-center justify-center text-center px-4">
        {/* Warning icon */}
        <div className="mb-8">
          <TriangleAlert className="h-12 w-12 text-orange-400" />
        </div>

        <h1 className="mb-5 text-2xl font-extrabold leading-tight">
          Insufficient Voting
          <br />
          Coins
        </h1>

        <p className="mb-8 text-sm text-white/60 leading-relaxed max-w-67.5">
          We could not process your vote due to insufficient coins. Fund your
          wallet to continue voting.
        </p>

        {/* Balance row */}
        <div className="mb-8 flex w-full max-w-xs items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
          <span className="text-xs font-bold uppercase tracking-widest text-white/40">
            Your Balance
          </span>
          <div className="flex items-center gap-2">
            <span className="text-lg">🪙</span>
            <span className="text-sm font-extrabold">{has}</span>
          </div>
        </div>
      </div>

      {/* Bottom buttons */}
      <div className="space-y-3 px-5 pb-10">
        <button
          onClick={() => navigate("/buy-coins")}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#c9a84c] py-4 text-sm font-extrabold text-black"
        >
          <span>⊕</span> Purchase Coins
        </button>

        <button
          onClick={() => navigate("/categories")}
          className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/20 py-4 text-sm font-bold"
        >
          ← Return to Categories
        </button>
      </div>
    </div>
  );
}