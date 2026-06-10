import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BackArrowIcon } from "../../assets/Icon";

const mockCandidates = [
  // Best Female Artist
  {
    id: "f1",
    name: "Arya Starr",
    category: "Best Female Artist",
    votes: "10.1k",
    votesVal: 10100,
    change: "+800",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80"
  },
  {
    id: "f2",
    name: "Tems",
    category: "Best Female Artist",
    votes: "9.5k",
    votesVal: 9500,
    change: "+500",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=256&q=80"
  },
  {
    id: "f3",
    name: "Tiwa Savage",
    category: "Best Female Artist",
    votes: "8.7k",
    votesVal: 8700,
    change: "-250",
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=256&q=80"
  },
  {
    id: "f4",
    name: "Omawunmi",
    category: "Best Female Artist",
    votes: "8.0k",
    votesVal: 8000,
    change: "-100",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80"
  },
  {
    id: "f5",
    name: "Simi",
    category: "Best Female Artist",
    votes: "7.2k",
    votesVal: 7200,
    change: "+400",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=256&q=80"
  },
  // Best Male Artist
  {
    id: "m1",
    name: "Burna Boy",
    category: "Best Male Artist",
    votes: "12.4k",
    votesVal: 12400,
    change: "+1.2k trending",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80"
  },
  {
    id: "m2",
    name: "Rema",
    category: "Best Male Artist",
    votes: "9.8k",
    votesVal: 9800,
    change: "-200",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80"
  },
  {
    id: "m3",
    name: "Davido",
    category: "Best Male Artist",
    votes: "9.2k",
    votesVal: 9200,
    change: "-150",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=256&q=80"
  },
  {
    id: "m4",
    name: "Wizkid",
    category: "Best Male Artist",
    votes: "9.0k",
    votesVal: 9000,
    change: "+300",
    avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=256&q=80"
  },
  {
    id: "m5",
    name: "Asake",
    category: "Best Male Artist",
    votes: "8.5k",
    votesVal: 8500,
    change: "+950",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=256&q=80"
  },
  // Best New Act
  {
    id: "n1",
    name: "Victony",
    category: "Best New Act",
    votes: "11.2k",
    votesVal: 11200,
    change: "+1.5k trending",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=256&q=80"
  },
  {
    id: "n2",
    name: "Seyi Vibez",
    category: "Best New Act",
    votes: "9.4k",
    votesVal: 9400,
    change: "+700",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=256&q=80"
  },
  {
    id: "n3",
    name: "Shallipopi",
    category: "Best New Act",
    votes: "8.9k",
    votesVal: 8900,
    change: "-120",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=256&q=80"
  },
  {
    id: "n4",
    name: "Odumodublvck",
    category: "Best New Act",
    votes: "8.2k",
    votesVal: 8200,
    change: "+1.1k",
    avatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=256&q=80"
  }
];

const categories = ["All", "Best Male Artist", "Best Female Artist", "Best New Act"];

const Leaderboard = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Best Female Artist");
  
  // Countdown timer state initialized to 4:12:59 (15179 seconds)
  const [secondsLeft, setSecondsLeft] = useState(15179);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    
    const pad = (num) => String(num).padStart(2, "0");
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  };

  // Filter and sort candidates
  const filteredCandidates = mockCandidates
    .filter((cand) => selectedCategory === "All" || cand.category === selectedCategory)
    .sort((a, b) => b.votesVal - a.votesVal);

  return (
    <div className="w-full min-h-screen bg-[#0B0F19] text-white flex flex-col pb-28 select-none">
      {/* Mobile Header / Status Bar Simulation */}
      <div className="flex justify-between items-center text-[11px] font-medium text-slate-400 px-6 py-2 select-none md:max-w-xl md:mx-auto w-full">
        <span>9:41</span>
        <div className="flex items-center gap-1.5">
          {/* Signal Icon */}
          <svg className="w-3.5 h-3.5 fill-current opacity-80" viewBox="0 0 24 24">
            <path d="M2 22h20V2L2 22z" />
          </svg>
          {/* Wifi Icon */}
          <svg className="w-3.5 h-3.5 fill-current opacity-80" viewBox="0 0 24 24">
            <path d="M12 21l-12-18h24z" />
          </svg>
          {/* Battery Icon */}
          <div className="w-5 h-2.5 border border-slate-400 rounded-sm p-0.5 flex items-center opacity-80">
            <div className="bg-slate-400 h-full w-full rounded-2xs"></div>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="w-full flex-1 flex flex-col md:max-w-xl md:mx-auto">
        {/* Navigation / Page Header */}
        <div className="flex items-center justify-between px-5 pt-4 pb-5">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate(-1)} 
              className="p-2 -ml-2 rounded-full hover:bg-slate-800/40 text-slate-300 active:scale-95 transition-all"
            >
              <BackArrowIcon color="currentColor" />
            </button>
            <h1 className="text-2xl font-bold tracking-tight text-white">Leaderboard</h1>
          </div>

          {/* Live Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            LIVE
          </div>
        </div>

        {/* Divider */}
        <div className="border-b border-slate-900 w-full mb-5 opacity-60"></div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 py-4 border-y border-slate-900 bg-slate-950/20 mb-6">
          <div className="text-center border-r border-slate-800/50">
            <p className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">Total Votes</p>
            <p className="text-lg font-bold text-white mt-1">1.2M+</p>
          </div>
          <div className="text-center border-r border-slate-800/50">
            <p className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">Time Left</p>
            <p className="text-lg font-bold text-red-500 tracking-wider mt-1">{formatTime(secondsLeft)}</p>
          </div>
          <div className="text-center">
            <p className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">Categories</p>
            <p className="text-lg font-bold text-cyan-400 mt-1">24 Active</p>
          </div>
        </div>

        {/* Category Horizontal Chips */}
        <div className="overflow-x-auto scrollbar-none px-5 mb-6">
          <div className="flex gap-3 min-w-max pb-1">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide border transition-all duration-200 active:scale-95 whitespace-nowrap cursor-pointer ${
                    isSelected
                      ? "bg-[#7B3FF2] border-[#7B3FF2] text-white shadow-[0_4px_16px_rgba(123,63,242,0.35)]"
                      : "bg-transparent border-[#7B3FF2]/40 text-slate-300 hover:border-[#7B3FF2]/70 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Leaderboard Candidate List */}
        <div className="flex flex-col gap-4 px-5 flex-1 animate-fadeIn">
          {filteredCandidates.map((candidate, index) => {
            // Find max possible votes within current list to normalize progress bar
            const maxVal = Math.max(...filteredCandidates.map((c) => c.votesVal));
            // Calculate filled percentage
            const percentage = maxVal > 0 ? (candidate.votesVal / maxVal) * 80 + 10 : 0;
            
            return (
              <div 
                key={`${selectedCategory}-${candidate.id}`}
                className="relative flex flex-col bg-[#111625]/90 border border-slate-800/50 rounded-2xl p-4 pl-5 shadow-lg overflow-hidden transition-all duration-300 hover:scale-[1.01]"
              >
                {/* Purple vertical bar accent for Leading Rank */}
                {index === 0 && (
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#7B3FF2] rounded-l-2xl"></div>
                )}

                {/* Card Top Row: Candidate details, Avatar, Rank Badge, Votes */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    
                    {/* Rank Number for Rank 4+ */}
                    {index >= 3 && (
                      <span className="text-slate-500 font-bold text-[15px] w-5 text-center">
                        {index + 1 < 10 ? `0${index + 1}` : index + 1}
                      </span>
                    )}

                    {/* Avatar Container */}
                    <div className="relative">
                      <img 
                        src={candidate.avatar} 
                        alt={candidate.name} 
                        className="w-13 h-13 rounded-full object-cover border border-slate-800/60 shadow-inner"
                      />
                      {/* Rank Overlay Badge for Rank 1, 2, 3 */}
                      {index < 3 && (
                        <div className={`absolute -top-1.5 -right-1.5 w-[22px] h-[22px] rounded-full flex items-center justify-center shadow-md border ${
                          index === 0 
                            ? 'bg-gradient-to-br from-amber-300 via-amber-400 to-yellow-600 border-yellow-300/40 text-slate-950' 
                            : index === 1 
                              ? 'bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400 border-slate-200/40 text-slate-900' 
                              : 'bg-gradient-to-br from-orange-300 via-orange-400 to-amber-700 border-orange-300/40 text-slate-100'
                        }`}>
                          {index === 0 && (
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v3c0 2.44 1.72 4.48 4 4.9V19h-3v2h16v-2h-3v-4.1c2.28-.42 4-2.46 4-4.9V7c0-1.1-.9-2-2-2zM5 9V7h2v4.18C5.83 10.74 5 9.95 5 9zm14 0c0 .95-.83 1.74-2 2.18V7h2v2z" />
                            </svg>
                          )}
                          {index === 1 && (
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C7.58 2 4 5.58 4 10c0 2.29.97 4.37 2.52 5.82L5 22l7-2 7 2-1.52-6.18C19.03 14.37 20 12.29 20 10c0-4.42-3.58-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
                            </svg>
                          )}
                          {index === 2 && (
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C7.58 2 4 5.58 4 10c0 2.29.97 4.37 2.52 5.82L5 22l7-2 7 2-1.52-6.18C19.03 14.37 20 12.29 20 10c0-4.42-3.58-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
                            </svg>
                          )}
                        </div>
                      )}
                    </div>
                    
                    {/* Candidate Identity */}
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-[15px] tracking-wide">{candidate.name}</span>
                        {index === 0 && (
                          <span className="px-1.5 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 select-none">
                            LEADING
                          </span>
                        )}
                      </div>
                      <p className="text-slate-400 text-[11px] mt-0.5">{candidate.category}</p>
                    </div>
                  </div>

                  {/* Vote Count & Trending */}
                  <div className="text-right">
                    <p className="font-extrabold text-white text-base tracking-wide">{candidate.votes}</p>
                    <p className={`text-[10px] font-bold mt-0.5 ${
                      candidate.change.startsWith("-") ? "text-rose-500" : "text-emerald-400"
                    }`}>
                      {candidate.change}
                    </p>
                  </div>
                </div>

                {/* Progress Bar Track */}
                <div className="mt-3.5 w-full bg-slate-800/60 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full bg-gradient-to-r from-[#7B3FF2] to-[#9945FF] transition-all duration-700 ease-out"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
