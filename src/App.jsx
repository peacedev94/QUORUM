import { Routes, Route } from "react-router-dom";
import WalletHome from "./pages/WALLET/WalletHome";
import AppLayout from "./Layouts/AppLayout";
import WalletCoins from "./pages/WALLET/WalletCoins";
import WalletPay from "./pages/WALLET/WalletPay";
import PaymentProcess from "./pages/WALLET/PaymentProcess";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/wallet" element={<WalletHome />} />
        <Route path="/wallet-coins" element={<WalletCoins />} />
        <Route path="/wallet-pay" element={<WalletPay />} />
      </Route>
      <Route path="/payment-process" element={<PaymentProcess />} />
    </Routes>
  );
}
export default App;
