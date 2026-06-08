import { useNavigate, useLocation } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import {  useMemo, useState } from "react";

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-white/6 last:border-0">
      <span className="text-sm text-white/40">{label}</span>
      <span className="text-sm font-bold text-white">{value}</span>
    </div>
  );
}

export default function VotingReceipt() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showFormatPicker, setShowFormatPicker] = useState(false);
  const [format, setFormat] = useState("Img");

  const { voteCount = 1, totalCost = 0, nominee } = location.state || {};

  const receiptId = useMemo(
    () => `#QRM-V-${Math.random().toString(36).slice(2, 10).toUpperCase()}`,
    []
  );

  const date = useMemo(() => new Date().toLocaleDateString("en-GB", {
    day: "numeric", month: "long", year: "numeric",
  }), []);

  const time = useMemo(() => new Date().toLocaleTimeString("en-US", {
    hour: "2-digit", minute: "2-digit",
  }), []);

  const handleConfirmDownload = () => {
    setShowFormatPicker(false);
    // TODO: implement actual download
    alert(`Downloading as ${format}...`);
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#06060e] px-5 pb-10 text-white">
      {/* Header */}
      <div className="flex flex-col items-center pt-10 pb-6">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-green-400/50 bg-green-500/10">
          <CheckCircle2 className="h-8 w-8 text-green-400" />
        </div>
        <h1 className="text-xl font-extrabold">Voting Receipt</h1>
        <p className="mt-1 text-center text-xs text-white/40 max-w-50">
          Your voting transaction has been completed successfully.
        </p>
      </div>

      {/* Receipt rows */}
      <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-2 mb-6">
        <Row label="Nominee Name" value={nominee?.name ?? "—"} />
        <Row label="Votes Cast" value={voteCount} />
        <Row label="Coins Used" value={`${totalCost} Coins`} />
        <Row label="Transaction ID" value={receiptId} />
        <Row label="Date" value={date} />
        <Row label="Time" value={time} />
      </div>

      {/* Actions */}
      <button
        onClick={() => setShowFormatPicker(true)}
        className="mb-3 w-full rounded-2xl bg-[#6A2EE6] py-4 text-sm font-extrabold"
      >
        Download Receipt
      </button>

      <button
        onClick={() => navigate("/")}
        className="w-full rounded-2xl border border-white/20 py-4 text-sm font-bold"
      >
        Done
      </button>

      {/* Format picker modal */}
      {showFormatPicker && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60">
          <div className="w-full max-w-md rounded-t-3xl bg-[#0d1220] px-6 pt-6 pb-10">
            <div className="mb-6 text-center text-base font-extrabold">
              Choose download format
            </div>

            {["Img", "Pdf"].map((f) => (
              <button
                key={f}
                onClick={() => setFormat(f)}
                className="flex w-full items-center justify-between rounded-xl px-4 py-4 mb-2 border border-white/10"
              >
                <span className="text-sm font-semibold">{f}</span>
                <div className={[
                  "h-5 w-5 rounded-full border-2",
                  format === f
                    ? "border-[#6A2EE6] bg-[#6A2EE6]"
                    : "border-white/30 bg-transparent",
                ].join(" ")} />
              </button>
            ))}

            <button
              onClick={handleConfirmDownload}
              className="mt-4 w-full rounded-2xl bg-[#6A2EE6] py-4 text-sm font-extrabold"
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </div>
  );
}