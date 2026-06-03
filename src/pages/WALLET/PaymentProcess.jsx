import React, { useState, useEffect } from "react";
import { CheckCircle, XCircle, Clock3, RefreshCw, Loader2 } from "lucide-react";

const PaymentProcess = () => {
  const [status, setStatus] = useState("processing");

  // Demo simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus("pending"); 

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

            <h2 className="text-2xl font-semibold text-[#F8FAFC] mb-4">
              Payment Processing
            </h2>

            <p className="text-center text-gray-400 text-sm">
              Please do not close this window
              <br />
              while we verify your payment.
            </p>
          </>
        );

      case "success":
        return (
          <>
            <CheckCircle size={70} className="text-[#22C55E] mb-12" />

            <h2 className="text-2xl font-semibold text-[#F8FAFC] mb-3">
              Payment Successful
            </h2>

            <p className="text-gray-400 text-sm text-center mb-16">
              Your wallet has been updated successfully.
            </p>

            <h3 className="text-[#4ADE80] text-[32px] font-semibold mb-12">
              +100 Coins
            </h3>

            <button className="w-full bg-[#7B3FF2] hover:bg-violet-800 transition-all py-4 rounded-lg text-[#F8FAFC] text-xl font-medium">
              Return to Wallet
            </button>
          </>
        );

      case "failed":
        return (
          <>
            <XCircle size={80} className="text-black  mb-12"  fill="red" />

            <h2 className="text-2xl font-semibold text-[#F8FAFC] mb-3">
              Transaction Failed
            </h2>

            <p className="text-gray-400 text-sm text-center mb-16">
              We could not complete your payment
              <br />
              at the moment.
            </p>

            <div className="w-full space-y-4">
              <button className="w-full bg-[#7B3FF2] hover:bg-violet-800 py-4 rounded-lg text-[#F8FAFC] text-base font-medium">
                Retry Payment
              </button>

              <button className="w-full border border-gray-500 py-4 rounded-lg text-[#F8FAFC] text-basefont-medium">
                Change Payment Method
              </button>
            </div>
          </>
        );

      case "pending":
        return (
          <>
            <Clock3 size={70} className="text-black mb-12 fill-yellow-500" />

            <h2 className="text-2xl font-semibold text-[#F8FAFC] mb-3">
              Verification Pending
            </h2>

            <p className="text-gray-400 text-sm text-center mb-16">
              Your payment is being verified.
              <br />
              This may take a few minutes.
            </p>

            <button className="w-full bg-[#7B3FF2] hover:bg-violet-800 py-4 rounded-lg text-[#F8FAFC] font-medium flex items-center text-xl justify-center gap-3">
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
    <div className="min-h-screen bg-[#050816] flex items-center justify-center px-6">
      <div className="w-full max-w-md flex flex-col items-center">
        {renderContent()}
      </div>
    </div>
  );
};

export default PaymentProcess;
