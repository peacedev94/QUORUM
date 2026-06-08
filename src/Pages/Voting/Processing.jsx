import { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";

const STEPS = ["VERIFYING IDENTITY", "SUBMITTING VOTE", "CONFIRMING TRANSACTION"];

export default function Processing() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  const { voteCount, totalCost, nominee } = location.state || {};
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    // Cycle through status steps
    const stepTimer = setInterval(() => {
      setStepIndex((i) => Math.min(i + 1, STEPS.length - 1));
    }, 900);

    // Navigate after 2.8s
    const doneTimer = setTimeout(() => {
      clearInterval(stepTimer);
      const success = true; 
      if (success) {
        navigate(`/nominees/${id}/vote-success`, {
          replace: true,
          state: { voteCount, totalCost, nominee },
        });
      } else {
        navigate(`/nominees/${id}/campaign-paused`, { replace: true });
      }
    }, 2800);

    return () => {
      clearInterval(stepTimer);
      clearTimeout(doneTimer);
    };
  }, [id, navigate, voteCount, totalCost, nominee]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#06060e] px-5 text-white">
      {/* Dotted spinner */}
      <div className="mb-12 relative h-16 w-16">
        <svg className="animate-spin h-16 w-16" viewBox="0 0 64 64" fill="none">
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x = 32 + 22 * Math.sin(angle);
            const y = 32 - 22 * Math.cos(angle);
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="3"
                fill="white"
                opacity={((i + 1) / 12).toFixed(2)}
              />
            );
          })}
        </svg>
      </div>

      <h1 className="mb-3 text-2xl font-extrabold">Processing Your Vote</h1>
      <p className="mb-6 text-center text-sm text-white/50 leading-relaxed max-w-60">
        Please wait while we securely process your transaction.
      </p>

      {/* Animated status */}
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-[#6A2EE6] animate-pulse" />
        <span className="text-xs font-bold tracking-widest text-[#6A2EE6] uppercase">
          {STEPS[stepIndex]}
        </span>
      </div>

      <p className="mt-12 text-xs text-white/20">Please don't close this screen</p>
    </div>
  );
}
