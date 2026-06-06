import { Routes, Route } from "react-router-dom";
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


import WalletHome from "./pages/WALLET/WalletHome";
import AppLayout from "./Layouts/AppLayout";
import WalletCoins from "./pages/WALLET/WalletCoins";
import WalletPay from "./pages/WALLET/WalletPay";
import PaymentProcess from "./pages/WALLET/PaymentProcess";
import TransactionHistory from "./pages/WALLET/TransactionHistory";
import VotingHistory from "./pages/WALLET/VotingHistory";
import Profile from "./pages/WALLET/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<QuorumVotingHome />} />
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="/categories/:label" element={<CategoryNomineesPage />} />
      <Route path="/nominees" element={<NomineesPage />} />
      <Route path="/nominees/:id" element={<NomineeDetailPage />} />
      <Route path="/nominees/:id/select-votes" element={<SelectVotes />} />
      <Route path="/nominees/:id/processing" element={<Processing />} />
      <Route path="/nominees/:id/campaign-paused" element={<CampaignPaused />} />
      <Route path="/nominees/:id/insufficient-coins" element={<InsufficientCoins />} />
      <Route path="/nominees/:id/vote-success" element={<VoteSuccess />} />
      <Route path="/nominees/:id/receipt" element={<VotingReceipt />} />

      <Route path="" element={<AppLayout />}>
      <Route path="/wallet" element={<WalletHome />} />
      <Route path="/wallet-coins" element={<WalletCoins />} />
      <Route path="/wallet-pay" element={<WalletPay />} />
      </Route>
      <Route path="/payment-process" element={<PaymentProcess />} />
      <Route path="/transaction-history" element={<TransactionHistory />} />
      <Route path="/voting-history" element={<VotingHistory />} />
      <Route path="/profile" element={<Profile />} />



    </Routes>
  );
}

export default App;

      

