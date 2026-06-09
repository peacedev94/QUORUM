import { SidebarIcon } from "../../assets/Icon";
import { NotificationIcon } from "../../assets/Icon";
import { useNavigate } from "react-router-dom";


export default function AdminHeader({ setIsOpen }) {
  const navigate = useNavigate();
  return (
    <header >
      <button className="relative top-9 text-[#D1BCFF] left-6 z-30" onClick={() => setIsOpen(true)}>
        <SidebarIcon />
        
      </button>
      <div
        className="cursor-pointer absolute text-[#D1BCFF] right-6 top-8"
        onClick={() => navigate("/")}
      >
        <NotificationIcon />
      </div>
    </header>
  );
}