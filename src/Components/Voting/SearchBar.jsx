import { SearchIcon} from "../../assets/Icon";
import {X } from "lucide-react"
export default function SearchBar({ value, onChange, placeholder }) {
  return (
    <div className="flex w-full items-center border border-[#334155] rounded-lg px-4 py-2">
      <SearchIcon size={18} className=" absolute ml-3 text-[#B8C0D0]" />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="
          flex-1
          bg-transparent
          text-white
          text-sm
          placeholder:text-[#8A94A8] pl-10
        "
      />

      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          className="ml-2 text-[#B8C0D0] hover:text-white"
          aria-label="Clear search"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
}
