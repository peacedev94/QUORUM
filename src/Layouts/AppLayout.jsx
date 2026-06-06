import BottomNav from "../Components/WALLET/BottomNav";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="bg-red-300 h-screen flex ">
      <main className="flex-1">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
};
export default AppLayout;
