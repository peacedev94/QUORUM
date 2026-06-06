import React, { useState, useEffect } from "react";
import { BackArrowIcon } from "../../assets/Icon";
import { CheckCircle, XCircle, Clock3, RefreshCw, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PaymentProcess = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState("processing");

  // Demo simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus("failed");

      // other possibilities:
      // setStatus("failed");
      // setStatus("pending");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const renderContent = () => {
    switch (status) {
      case "processing":
        return (
          <>
            <Loader2 size={70} className="animate-spin text-white mb-12" />

            <h2 className="text-3xl font-semibold text-center text-[#F8FAFC] mb-4">
              Payment Processing
            </h2>

            <p className="text-center text-gray-400 text-lg">
              Please do not close this window
              <br />
              while we verify your payment.
            </p>
          </>
        );

      case "success":
        return (
          <>
            <div
              className="absolute top-10 left-6 text-[#D1BCFF] cursor-pointer"
              onClick={() => navigate("/wallet")}
            >
              <BackArrowIcon />
            </div>
            <CheckCircle size={70} className="text-[#22C55E] mb-12" />

            <h2 className="text-[32px] font-semibold text-[#F8FAFC] mb-3">
              Payment Successful
            </h2>

            <p className="text-white/80 text-lg text-center mb-16">
              Your wallet has been updated <br />
              successfully.
            </p>

            <h3 className="text-[#4ADE80] text-[32px] font-semibold mb-12">
              +100 Coins
            </h3>

            <button
              className="w-full bg-[#7B3FF2] hover:bg-violet-800 transition-all py-3 rounded-lg text-[#F8FAFC] text-base font-medium"
              onClick={() => navigate("/wallet")}
            >
              Return to Wallet
            </button>
          </>
        );

      case "failed":
        return (
          <>
            <div
              className="absolute top-10 left-6 text-[#D1BCFF] cursor-pointer"
              onClick={() => navigate("/wallet")}
            >
              <BackArrowIcon />
            </div>
            <XCircle size={70} className="text-black  mb-12" fill="#EF4444" />

            <h2 className="text-3xl font-semibold text-[#F8FAFC] mb-3">
              Transaction Failed
            </h2>

            <p className="text-white/80 text-lg text-center mb-16">
              We could not complete your payment
              <br />
              at the moment.
            </p>

            <div className="w-full space-y-4">
              <button
                className="w-full bg-[#7B3FF2] hover:bg-violet-800 py-3 rounded-lg text-[#F8FAFC] text-base font-medium"
                onClick={() => navigate("/")}
              >
                Retry Payment
              </button>

              <button className="w-full border border-gray-500 py-3 rounded-lg hover:bg-gray-600 text-[#F8FAFC] text-base font-medium" onClick={() => navigate("/wallet-pay")}>
                Change Payment Method
              </button>
            </div>
          </>
        );

      case "pending":
        return (
          <>
            <div
              className="absolute top-10 left-6 text-[#D1BCFF] cursor-pointer"
              onClick={() => navigate()}
            >
              <BackArrowIcon />
            </div>
            <Clock3 size={70} className="text-black mb-12 fill-yellow-500" />

            <h2 className="text-[32px] font-semibold text-[#F8FAFC] mb-3">
              Verification Pending
            </h2>

            <p className="text-white/80 text-lg text-center mb-16">
              Your payment is being verified.
              <br />
              This may take a few minutes.
            </p>

            <button className="w-full bg-[#7B3FF2] hover:bg-violet-800 py-4 rounded-lg text-white/80 font-medium flex items-center text-xl justify-center gap-3">
              Refresh Status
              <RefreshCw size={18} />
            </button>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#0F172A] flex items-center justify-center px-6 relative">
      <div className="w-full max-w-md flex flex-col items-center">
        {renderContent()}
      </div>
    </div>
  );
};

export default PaymentProcess;
