function CategoryRow({ label, img, onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center gap-2 cursor-pointer shrink-0 w-46"
    >
      <div className="w-46 h-46 rounded-full overflow-hidden border-2 border-white/10 bg-white/5">
        <img
          src={img}
          alt={label}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-[14px] text-center text-[#8a94a8] leading-tight max-w-18">{label}</p>
    </div>
  );
}

export default CategoryRow;