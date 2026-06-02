// Search button
import { Search, X } from "lucide-react";

export default function SearchBar({ value, onChange, placeholder }) {

  return (
    <div className="flex items-center gap-6 bg-white/5 border border-white/10 rounded-lg px-12 py-3">

      {/* Icon */}
      <Search className="w-6 h-6 text-white/40 shrink-0" />

      <input
        type="text"
        value={value}                          
        onChange={(e) => onChange(e.target.value)} 
        placeholder={placeholder}              
        className="
          bg-transparent       
          text-white/70        
          text-sm              
          placeholder:text-white/40 
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