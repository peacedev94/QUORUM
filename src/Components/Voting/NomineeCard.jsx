export default function NomineeCard({ nominee, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-24 cursor-pointer shrink-0 w-96 mt-12 text-center"
      type="button"
    >
      <div className="w-64 h-64 gap-24 rounded-full overflow-hidden border-2 border-white/10">
        <img
          src={nominee.img}
          alt={nominee.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center justify-between items-center p-3 ">
        <p className="text-lg font-bold text-white leading-tight">{nominee.name}</p>
        <p className="text-sm text-[#8a94a8] mt-0.5">{nominee.category}</p>
      </div>

    </button>
  );
}