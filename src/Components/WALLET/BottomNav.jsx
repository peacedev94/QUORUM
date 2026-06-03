import {
  EventsIcon,
  HomeIcon,
  LeaderboardIcon,
  VotesIcon,
  WalletIcon,
} from "../../assets/Icon";

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full right-0 bg-[#1E293B] border-t border-gray-800 flex justify-around py-5 z-50">
      <div className="flex flex-col items-center text-[#8593A8] gap-2">
        <HomeIcon />
        <p className="text-[10px] ">HOME</p>
      </div>

      <div className="flex flex-col items-center text-[#8593A8] gap-2">
        <EventsIcon />
        <p className="text-[10px] ">EVENTS</p>
      </div>

      <div className="flex flex-col items-center text-[#8593A8] gap-2">
        <WalletIcon />
        <p className="text-[10px] ">WALLET</p>
      </div>

      <div className="flex flex-col items-center text-[#8593A8] gap-2">
        <VotesIcon />
        <p className="text-[10px] ">VOTES</p>
      </div>

      <div className="flex flex-col items-center text-[#8593A8] gap-2">
        <LeaderboardIcon />
        <p className="text-[10px] ">LEADERBOARD</p>
      </div>
    </div>
  );
};
export default BottomNav;
