import { Routes, Route, useNavigate } from "react-router-dom";

// Voting Pages
import QuorumVotingHome from "./Pages/Voting/QuorumVotingHome";
import CategoriesPage from "./Pages/Voting/CategoriesPage";
import CategoryNomineesPage from "./Pages/Voting/CategoryNomineesPage";
import NomineesPage from "./Pages/Voting/NomineesPage";
import NomineeDetailPage from "./Pages/Voting/NomineeDetailPage";
import SelectVotes from "./Pages/Voting/SelectVote";
import Processing from "./Pages/Voting/Processing";
import CampaignPaused from "./Pages/Voting/CampaignPaused";
import InsufficientCoins from "./Pages/Voting/InsufficientCoins";
import VoteSuccess from "./Pages/Voting/VoteSuccess";
import VotingReceipt from "./Pages/Voting/VotingReceipt";

// Wallet Pages
import WalletHome from "./pages/WALLET/WalletHome";
import WalletCoins from "./pages/WALLET/WalletCoins";
import WalletPay from "./pages/WALLET/WalletPay";
import PaymentProcess from "./pages/WALLET/PaymentProcess";
import TransactionHistory from "./pages/WALLET/TransactionHistory";
import VotingHistory from "./pages/WALLET/VotingHistory";
import Profile from "./pages/WALLET/Profile";
import AdminHome from "./pages/ADMIN/AdminHome";
import FraudDetect from "./pages/ADMIN/FraudDetect";
import UserMgt from "./pages/ADMIN/UserMgt";
import TransMonitor from "./pages/ADMIN/TransMonitor";
import Platform from "./pages/ADMIN/Platform";
import SignIn from "./pages/AUTHENTICATION/SignIn";
import SignUp from "./pages/AUTHENTICATION/SignUp";
import ResetPassword from "./pages/AUTHENTICATION/ResetPassword";

// Layout
import AppLayout from "./Layouts/AppLayout";

// Splash & Onboarding Pages
import SplashScreen1 from "./pages/public_pages/SplashScreen1";
import SplashScreen2 from "./pages/public_pages/SplashScreen2";
import OnboardingStep1 from "./pages/public_pages/OnboardingStep1";
import OnboardingStep2 from "./pages/public_pages/OnboardingStep2";
import OnboardingStep3 from "./pages/public_pages/OnboardingStep3";

// Organizer Pages
import TestDash from "./pages/organizers/TestDash.jsx";
import CreateEvent from "./pages/organizers/CreateEvent.jsx";
import ManageCategories from "./pages/organizers/ManageCategories.jsx";
import AddNominee from "./pages/organizers/AddNominee.jsx";
import NomineesManagement from "./pages/organizers/NomineesManagement.jsx";
import RevenueOverview from "./pages/organizers/RevenueOverview.jsx";

function App() {
  const navigate = useNavigate();

  return (
    <Routes>
      {/* Splash & Onboarding Routes */}
      <Route path="/" element={<SplashScreen1 />} />
      <Route path="/splash-2" element={<SplashScreen2 />} />
      <Route path="/onboarding-1" element={<OnboardingStep1 />} />
      <Route path="/onboarding-2" element={<OnboardingStep2 />} />
      <Route path="/onboarding-3" element={<OnboardingStep3 />} />

      {/* Voting */}
      <Route path="/voting" element={<QuorumVotingHome />} />
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="/categories/:label" element={<CategoryNomineesPage />} />
      <Route path="/nominees" element={<NomineesPage />} />
      <Route path="/nominees/:id" element={<NomineeDetailPage />} />
      <Route path="/nominees/:id/select-votes" element={<SelectVotes />} />
      <Route path="/nominees/:id/processing" element={<Processing />} />
      <Route
        path="/nominees/:id/campaign-paused"
        element={<CampaignPaused />}
      />
      <Route
        path="/nominees/:id/insufficient-coins"
        element={<InsufficientCoins />}
      />
      <Route path="/nominees/:id/vote-success" element={<VoteSuccess />} />
      <Route path="/nominees/:id/receipt" element={<VotingReceipt />} />

      {/* Wallet (with AppLayout) */}
      <Route element={<AppLayout />} />

      {/* Wallet Routes Wrapper */}
      <Route path="" element={<AppLayout />}>
        <Route path="/wallet" element={<WalletHome />} />
        <Route path="/wallet-coins" element={<WalletCoins />} />
        <Route path="/wallet-pay" element={<WalletPay />} />
      </Route>

      {/* General App Routes */}
      <Route path="/payment-process" element={<PaymentProcess />} />
      <Route path="/transaction-history" element={<TransactionHistory />} />
      <Route path="/voting-history" element={<VotingHistory />} />
      <Route path="/profile" element={<Profile />} />

      {/* Organizer */}
      {/* Admin Module Routes */}
      <Route path="/admin" element={<AdminHome />} />
      <Route path="/fraud-detect" element={<FraudDetect />} />
      <Route path="/user-mgt" element={<UserMgt />} />
      <Route path="/trans-monitor" element={<TransMonitor />} />
      <Route path="/platform" element={<Platform />} />

      {/* Authentication Routes */}
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      {/* Organizer Flow Module Base */}
      <Route path="/organizer/dashboard" element={<TestDash />} />
      <Route path="/organizer/create-event" element={<CreateEvent />} />
      <Route
        path="/organizer/manage-categories"
        element={<ManageCategories />}
      />
      <Route path="/organizer/add-nominee" element={<AddNominee />} />
      <Route
        path="/organizer/nominees-management"
        element={<NomineesManagement />}
      />
      <Route path="/organizer/revenue" element={<RevenueOverview />} />
    </Routes>
  );
}

export default App;
