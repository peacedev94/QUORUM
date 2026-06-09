export default function NomineeCard({ nominee, onClick }) {
  return (
    <button
      onClick={onClick}
      className="relative w-108.5 shrink-0 cursor-pointer overflow-hidden rounded-[14px] border border-white/10 bg-white/3 text-left"
      type="button"
    >
      <img
        src={nominee.img}
        alt={nominee.name}
        className="h-30 w-full object-cover"
      />

      <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-[#06060e]/80 to-transparent p-3">
        <div className="flex items-center justify-between">
          <div className="min-w-0">
            <p className="truncate text-sm font-bold text-white">{nominee.name}</p>
            <p className="truncate text-xs text-white/50">{nominee.category}</p>
          </div>

          {typeof nominee.rank !== "undefined" && (
            <span className="ml-3 rounded-full bg-white/10 px-2 py-1 text-[10px] font-bold text-white/80">
              #{nominee.rank}
            </span>
          )}
        </div>
      </div>
    </button>
  );
}