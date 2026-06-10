import BottomNav from "../Components/WALLET/BottomNav";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="bg-[#0B0F19] h-screen w-full flex flex-col overflow-hidden">
      <main className="flex-1 overflow-y-auto w-full">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
};
export default AppLayout;
