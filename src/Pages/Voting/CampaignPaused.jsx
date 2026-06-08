import { useNavigate } from "react-router-dom";
import { TriangleAlert } from "lucide-react";

export default function CampaignPaused() {
  const navigate = useNavigate();

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
          Voting Is Temporarily
          <br />
          Paused
        </h1>

        <p className="text-sm text-white/60 leading-relaxed max-w-70">
          The event organizer has paused live voting to recalibrate odds or
          address a technical update. Your wallet balance remains safe and
          your previous votes have been recorded.
        </p>
      </div>

      {/* Bottom button */}
      <div className="px-5 pb-10">
        <button
          onClick={() => navigate("/categories")}
          className="w-full rounded-2xl border border-white/20 bg-transparent py-4 text-sm font-bold"
        >
          Return to Categories
        </button>
      </div>
    </div>
  );
}