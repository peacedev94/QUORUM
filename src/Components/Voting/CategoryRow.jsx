function CategoryRow({ label, img, onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center shrink-0 w-full cursor-pointer"
    >
      <div className="w-[80px] h-[80px] rounded-full overflow-hidden">
        <img
          src={img}
          alt={label}
          className="w-full h-full object-cover"
        />
      </div>

      <p className="mt-2 text-center text-[11px] text-[#A1A1AA] leading-tight">
        {label}
      </p>
    </div>
  );
}

export default CategoryRow;