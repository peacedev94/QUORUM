import { Routes, Route, useNavigate } from "react-router-dom"; // <-- Swapped Link for useNavigate
import WalletHome from "./pages/WALLET/WalletHome";
import AppLayout from "./Layouts/AppLayout";
import WalletCoins from "./pages/WALLET/WalletCoins";
import WalletPay from "./pages/WALLET/WalletPay";
import PaymentProcess from "./pages/WALLET/PaymentProcess";
import TransactionHistory from "./pages/WALLET/TransactionHistory";
import VotingHistory from "./pages/WALLET/VotingHistory";
import Profile from "./pages/WALLET/Profile";

// Splash & Onboarding Pages
import SplashScreen1 from "./pages/public_pages/SplashScreen1";
import SplashScreen2 from "./pages/public_pages/SplashScreen2";
import OnboardingStep1 from "./pages/public_pages/OnboardingStep1";
import OnboardingStep2 from "./pages/public_pages/OnboardingStep2";
import OnboardingStep3 from "./pages/public_pages/OnboardingStep3";

// Step-by-Step Organizer Feature Reconstruction
import TestDash from "./pages/organizers/TestDash.jsx";
import CreateEvent from "./pages/organizers/CreateEvent.jsx";
import ManageCategories from "./pages/organizers/ManageCategories.jsx";
import AddNominee from "./pages/organizers/AddNominee.jsx";
import NomineesManagement from "./pages/organizers/NomineesManagement.jsx";
import RevenueOverview from "./pages/organizers/RevenueOverview.jsx"; 

function App() {
  const navigate = useNavigate();

  // Handle jumping to screens directly from the selector dropdown box
  const handleDevNavigation = (e) => {
    const selectedPath = e.target.value;
    if (selectedPath) {
      navigate(selectedPath);
    }
  };

  return (
    <>
      {/* 🛠️ MASTER DEV SHORTCUT DROPDOWN - CENTRED TOP MIDDLE */}
      <div className="fixed top-2 left-1/2 -translate-x-1/2 z-[99999] flex items-center bg-[#7F4DFF] text-white px-2 py-1 rounded-lg shadow-xl border border-white/10 select-none scale-90">
        <label htmlFor="dev-route-select" className="text-[10px] uppercase font-bold tracking-wider mr-2 text-purple-200">
          Dev Navigation:
        </label>
        <select
          id="dev-route-select"
          onChange={handleDevNavigation}
          defaultValue=""
          className="bg-[#090A10] text-white text-xs font-semibold rounded-lg px-2 py-1 outline-none border border-[#2E305E] cursor-pointer"
        >
          <option value="" disabled>--- Select Organizer Page ---</option>
          <option value="/organizer/dashboard">1. Organizer Dashboard</option>
          <option value="/organizer/create-event">2. Create Event Form</option>
          <option value="/organizer/manage-categories">3. Manage Categories Panel</option>
          <option value="/organizer/add-nominee">4. Add Nominee Screen</option>
          <option value="/organizer/nominees-management">5. Analytics Board</option>
          <option value="/organizer/revenue">6. Revenue Overview Ledger</option>
        </select>
      </div>

      <Routes>
        {/* Splash & Onboarding Routes */}
        <Route path="/" element={<SplashScreen1 />} />
        <Route path="/splash-2" element={<SplashScreen2 />} />
        <Route path="/onboarding-1" element={<OnboardingStep1 />} />
        <Route path="/onboarding-2" element={<OnboardingStep2 />} />
        <Route path="/onboarding-3" element={<OnboardingStep3 />} />

        {/* Wallet Routes Wrapper */}
        <Route path="" element={<AppLayout />}>
          <Route path="/wallet" element={<WalletHome />} />
          <Route path="/wallet-coins" element={<WalletCoins />} />
          <Route path="/wallet-pay" element={<WalletPay />} />
        </Route>
        <Route path="/payment-process" element={<PaymentProcess />} />
        <Route path="/transaction-history" element={<TransactionHistory />} />
        <Route path="/voting-history" element={<VotingHistory />} />
        <Route path="/profile" element={<Profile />} />

        {/* Organizer Flow Module Base */}
        <Route path="/organizer/dashboard" element={<TestDash />} />
        <Route path="/organizer/create-event" element={<CreateEvent />} />
        <Route path="/organizer/manage-categories" element={<ManageCategories />} />
        <Route path="/organizer/add-nominee" element={<AddNominee />} />
        <Route path="/organizer/nominees-management" element={<NomineesManagement />} />
        <Route path="/organizer/revenue" element={<RevenueOverview />} /> 
      </Routes>
    </>
  );
}

export default App;