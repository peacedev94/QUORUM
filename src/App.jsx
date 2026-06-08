import { Routes, Route } from "react-router-dom";
import WalletHome from "./pages/WALLET/WalletHome";
import AppLayout from "./Layouts/AppLayout";
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
import ResetPassword from "./pages/AUTHENTICATION/ResetPassword"

function App() {
  return (
    <Routes>
      <Route path="" element={<AppLayout />}>
        <Route path="/wallet" element={<WalletHome />} />
        <Route path="/wallet-coins" element={<WalletCoins />} />
        <Route path="/wallet-pay" element={<WalletPay />} />
      </Route>
      <Route path="/payment-process" element={<PaymentProcess />} />
      <Route path="/transaction-history" element={<TransactionHistory />} />
      <Route path="/voting-history" element={<VotingHistory />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/admin" element={<AdminHome />} />
      <Route path="/fraud-detect" element={<FraudDetect />} />
      <Route path="/user-mgt" element={<UserMgt />} />
      <Route path="trans-monitor" element={<TransMonitor />} />
      <Route path="platform" element={<Platform />} />
      <Route path="sign-in" element={<SignIn />} />
      <Route path="sign-up" element={<SignUp/>}/>
    <Route path = "reset-password" element={<ResetPassword/>}/>
    </Routes>

  );
}
export default App;
