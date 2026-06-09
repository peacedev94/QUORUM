// Search button
import { Search, X } from "lucide-react";

export default function SearchBar({ value, onChange, placeholder }) {

  return (
    <div className="flex items-center gap-6 bg-white/5 border-3 border-[rgb(68,81,101)] rounded-2xl px-12 py-3">

      {/* Icon */}
      <Search className="w-6 h-6 text-white shrink-0" />

      <input
        type="text"
        value={value}                          
        onChange={(e) => onChange(e.target.value)} 
        placeholder={placeholder}              
        className="
          bg-transparent       
          text-[rgb(240,240,241)]       
          text-sm              
          placeholder:text-[rgb(226,227,229)]
          outline-none         
          flex-1               
        "
      />

      {/* Clear button */}
      {value && value.length > 0 && (
        <button
          onClick={() => onChange("")} 
          className="text-white/50 hover:text-white/60 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      )}

    </div>
  );
}