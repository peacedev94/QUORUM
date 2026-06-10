export default function NomineeCard({ nominee, onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="flex flex-col items-center shrink-0 w-full text-center"
    >
      <div className="rounded-full overflow-x-hidden">
        <img
          src={nominee.img}
          alt={nominee.name}
          className= "object-cover"
        />
      </div>

      <div className="mt-3">
        <p className="text-white text-[16px] font-semibold">
          {nominee.name}
        </p>

        <p className="text-[#9CA3AF] text-[12px] leading-tight">
          {nominee.category}
        </p>
      </div>
    </button>
  );
}