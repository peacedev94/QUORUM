export default function CategoryRow({ label, img, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3"
      type="button"
    >
      <div className="flex items-center gap-3 min-w-0">
        <img src={img} alt={label} className="h-9 w-9 object-contain" />
        <p className="truncate text-sm font-semibold text-white/90">{label}</p>
      </div>

      <span className="text-lg text-white/40">{">"}</span>
    </button>
  );
}