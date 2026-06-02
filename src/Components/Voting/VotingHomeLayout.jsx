// import { useNavigate } from "react-router-dom";

// function VotingHomeLayout() {
//   const navigate = useNavigate();

//   return (
//     <>
//       {/* Trending nominees header */}
//       <button onClick={() => navigate("/nominees")} className="text-xs font-semibold text-[#6A2EE6]">
//         View All
//       </button>

//       {/* Top categories header */}
//       <button onClick={() => navigate("/categories")} className="text-xs font-semibold text-[#6A2EE6]">
//         View All
//       </button>
//     </>
//   );
// }

// export default VotingHomeLayout;



export default function VotingHomeLayout({ children }) {
  return (
    <div className="mx-auto w-full max-w-md min-h-screen bg-[#06060e]">
      {children}
    </div>
  );
}