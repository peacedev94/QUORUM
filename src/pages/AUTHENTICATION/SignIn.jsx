import{ React, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [errors, setError] = useState({});
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSignIn = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = "Please enter your email address.";
    } else if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!password) {
      newErrors.password = "Please fill in all required fields.";
    } else if (password.length < 4) {
      newErrors.password = "Incorrect password. Please try again.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setLoading(true);

    setSuccess("Welcome back! Redirecting...");

    setTimeout(() => {
      navigate("/voting");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A0A12] text-white px-3">
      <div className="w-full max-w-md text-center">
        {/* Title */}
        <h1 className="text-4xl mt-16 font-semibold">Welcome Back</h1>

        <p className="text-[#94A3B8] text-base mb-8">
          Sign in to continue voting and tracking <br />
          your favorite nominees.
        </p>

        {/* Messages */}
        {success && (
          <div className="mb-4 p-3 rounded-lg border border-green-500/30 bg-green-500/10 text-green-400 text-sm">
            {success}
          </div>
        )}

        {/* FORM */}
        <div className="space-y-4">
          {/* EMAIL */}
          <div className="relative">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full h-12 pl-12 pr-4 rounded-lg bg-transparent border-2 outline-none text-base
      ${errors.email ? "border-red-500" : "border-[#334155] focus:border-purple-500"}
    `}
            />

            {/* icon */}
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 "
              width="24"
              height="22"
              viewBox="0 0 27 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.6368 2.66368C26.6368 1.19865 25.4381 0 23.9731 0H2.66368C1.19865 0 0 1.19865 0 2.66368V18.6457C0 20.1108 1.19865 21.3094 2.66368 21.3094H23.9731C25.4381 21.3094 26.6368 20.1108 26.6368 18.6457V2.66368ZM23.9731 2.66368L13.3184 9.32287L2.66368 2.66368H23.9731ZM23.9731 18.6457H2.66368V5.32736L13.3184 11.9865L23.9731 5.32736V18.6457Z"
                fill="#94A3B8"
              />
            </svg>

            {/* ERROR UNDER INPUT */}
            {errors.email && (
              <p className="text-red-400 text-sm mt-1 flex text-[#EF4444] items-center gap-2">
                {errors.email}
              </p>
            )}
          </div>

          {/* PASSWORD */}

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full h-12 pl-12 pr-10 rounded-lg bg-transparent border-2 outline-none text-base
      ${errors.password ? "border-red-500" : "border-[#334155] focus:border-purple-500"}
    `}
            />

            {/* lock icon */}
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60"
              width="26"
              height="26"
              viewBox="0 0 32 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.6323 19.9776V18.6457C30.6323 17.1807 29.4336 15.9821 27.9686 15.9821C26.5036 15.9821 25.3049 17.1807 25.3049 18.6457V19.9776C24.5724 19.9776 23.9731 20.5769 23.9731 21.3094V25.3049C23.9731 26.0375 24.5724 26.6368 25.3049 26.6368H30.6323C31.3648 26.6368 31.9641 26.0375 31.9641 25.3049V21.3094C31.9641 20.5769 31.3648 19.9776 30.6323 19.9776ZM29.3005 19.9776H26.6368V18.6457C26.6368 17.9132 27.2361 17.3139 27.9686 17.3139C28.7011 17.3139 29.3005 17.9132 29.3005 18.6457V19.9776ZM31.9641 6.63256L29.1406 9.46937C25.7711 6.0865 21.1096 3.99552 15.9821 3.99552C10.8545 3.99552 6.19305 6.0865 2.8235 9.46937L0 6.63256C4.08875 2.53049 9.73574 0 15.9821 0C22.2284 0 27.8754 2.53049 31.9641 6.63256ZM15.9821 7.99103C20.0175 7.99103 23.6801 9.6292 26.3171 12.2796L23.4936 15.1031C22.5079 14.1153 21.3371 13.3317 20.0481 12.7969C18.7592 12.2621 17.3775 11.9868 15.9821 11.9866C13.052 11.9866 10.3883 13.1852 8.4705 15.1164L5.647 12.2929C8.28404 9.62919 11.9466 7.99103 15.9821 7.99103ZM20.6835 17.9266L15.9821 22.6413L11.2807 17.9266C12.4793 16.7279 14.1441 15.9821 15.9821 15.9821C17.82 15.9821 19.4848 16.7279 20.6835 17.9266Z"
                fill="#94A3B8"
              />
            </svg>

            {/* eye toggle */}
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
            >
              {showPassword ? (
                //  Eye OFF (password visible)
                <svg
                  width="18"
                  height="16"
                  viewBox="0 0 30 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.6502 2.66368C17.0991 2.65554 19.5006 3.33863 21.5786 4.63443C23.6566 5.93024 25.3268 7.78614 26.397 9.98879C24.1995 14.4771 19.7112 17.3139 14.6502 17.3139C9.58924 17.3139 5.10094 14.4771 2.90341 9.98879C3.9737 7.78614 5.64384 5.93024 7.72184 4.63443C9.79984 3.33863 12.2013 2.65554 14.6502 2.66368ZM14.6502 0C7.99103 0 2.30408 4.14202 0 9.98879C2.30408 15.8356 7.99103 19.9776 14.6502 19.9776C21.3094 19.9776 26.9964 15.8356 29.3005 9.98879C26.9964 4.14202 21.3094 0 14.6502 0ZM14.6502 6.65919C15.5333 6.65919 16.3802 7.00999 17.0046 7.63441C17.629 8.25883 17.9798 9.10573 17.9798 9.98879C17.9798 10.8719 17.629 11.7188 17.0046 12.3432C16.3802 12.9676 15.5333 13.3184 14.6502 13.3184C13.7672 13.3184 12.9203 12.9676 12.2958 12.3432C11.6714 11.7188 11.3206 10.8719 11.3206 9.98879C11.3206 9.10573 11.6714 8.25883 12.2958 7.63441C12.9203 7.00999 13.7672 6.65919 14.6502 6.65919ZM14.6502 3.99552C11.3473 3.99552 8.65695 6.68583 8.65695 9.98879C8.65695 13.2918 11.3473 15.9821 14.6502 15.9821C17.9532 15.9821 20.6435 13.2918 20.6435 9.98879C20.6435 6.68583 17.9532 3.99552 14.6502 3.99552Z"
                    fill="#94A3B8"
                  />
                </svg>
              ) : (
                //  Eye ON (password hidden)
                <svg
                  width="26"
                  height="18"
                  viewBox="0 0 30 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.6502 2.66368C17.0991 2.65554 19.5006 3.33863 21.5786 4.63443C23.6566 5.93024 25.3268 7.78614 26.397 9.98879C24.1995 14.4771 19.7112 17.3139 14.6502 17.3139C9.58924 17.3139 5.10094 14.4771 2.90341 9.98879C3.9737 7.78614 5.64384 5.93024 7.72184 4.63443C9.79984 3.33863 12.2013 2.65554 14.6502 2.66368ZM14.6502 0C7.99103 0 2.30408 4.14202 0 9.98879C2.30408 15.8356 7.99103 19.9776 14.6502 19.9776C21.3094 19.9776 26.9964 15.8356 29.3005 9.98879C26.9964 4.14202 21.3094 0 14.6502 0ZM14.6502 6.65919C15.5333 6.65919 16.3802 7.00999 17.0046 7.63441C17.629 8.25883 17.9798 9.10573 17.9798 9.98879C17.9798 10.8719 17.629 11.7188 17.0046 12.3432C16.3802 12.9676 15.5333 13.3184 14.6502 13.3184C13.7672 13.3184 12.9203 12.9676 12.2958 12.3432C11.6714 11.7188 11.3206 10.8719 11.3206 9.98879C11.3206 9.10573 11.6714 8.25883 12.2958 7.63441C12.9203 7.00999 13.7672 6.65919 14.6502 6.65919ZM14.6502 3.99552C11.3473 3.99552 8.65695 6.68583 8.65695 9.98879C8.65695 13.2918 11.3473 15.9821 14.6502 15.9821C17.9532 15.9821 20.6435 13.2918 20.6435 9.98879C20.6435 6.68583 17.9532 3.99552 14.6502 3.99552Z"
                    fill="#94A3B8"
                  />
                </svg>
              )}
            </span>

            {/* ERROR UNDER INPUT */}
            {errors.password && (
              <p className="text-red-400 text-sm mt-1 flex items-center gap-2">
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.268 19.5953C14.5228 19.3396 14.6502 19.0231 14.6502 18.6457C14.6502 18.2684 14.5224 17.9523 14.2667 17.6975C14.0109 17.4426 13.6949 17.3148 13.3184 17.3139C12.9419 17.313 12.6258 17.4409 12.3701 17.6975C12.1144 17.9541 11.9866 18.2702 11.9866 18.6457C11.9866 19.0213 12.1144 19.3379 12.3701 19.5953C12.6258 19.8528 12.9419 19.9802 13.3184 19.9776C13.6949 19.9749 14.0114 19.8484 14.268 19.5953ZM11.9866 14.6502H14.6502V6.65919H11.9866V14.6502ZM13.3184 26.6368C11.476 26.6368 9.74462 26.2869 8.12422 25.5873C6.50382 24.8876 5.09429 23.9389 3.89563 22.7411C2.69698 21.5434 1.74826 20.1339 1.04949 18.5126C0.350719 16.8913 0.000889578 15.1599 1.68587e-06 13.3184C-0.000886207 11.4769 0.348944 9.74551 1.04949 8.12422C1.75004 6.50293 2.69875 5.0934 3.89563 3.89563C5.09251 2.69786 6.50204 1.74915 8.12422 1.04949C9.7464 0.34983 11.4778 0 13.3184 0C15.159 0 16.8904 0.34983 18.5126 1.04949C20.1347 1.74915 21.5443 2.69786 22.7412 3.89563C23.938 5.0934 24.8872 6.50293 25.5886 8.12422C26.2901 9.74551 26.6394 11.4769 26.6368 13.3184C26.6341 15.1599 26.2843 16.8913 25.5873 18.5126C24.8903 20.1339 23.9416 21.5434 22.7412 22.7411C21.5407 23.9389 20.1312 24.8881 18.5126 25.5886C16.8939 26.2892 15.1625 26.6386 13.3184 26.6368Z"
                    fill="#EF4444"
                  />
                </svg>
                {errors.password}
              </p>
            )}
          </div>

          {/* RESET PASSWORD */}
          <div className="text-right">
            <span
              onClick={() => navigate("/reset-password")}
              className="text-yellow-400 text-base underline"
            >
              Reset Password
            </span>
          </div>

          {/* BUTTON */}
          <button
            onClick={handleSignIn}
            disabled={loading}
            className={`w-full py-3 mt-20 rounded-lg font-semibold transition
    ${
      email && password && Object.keys(errors).length === 0
        ? "bg-[#7B3FF2] hover:bg-purple-700"
        : "bg-[#7B3FF2] cursor-not-allowed opacity-60"
    }
  `}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </div>

        {/* DIVIDER */}
        <div className="flex items-center gap-5 my-3">
          <div className="h-px flex-1 bg-[#94A3B8]" />
          <span className="text-white/50 text-base">Or</span>
          <div className="h-px flex-1 bg-[#94A3B8]" />
        </div>

        {/* GOOGLE BUTTON */}
        <button className="w-full py-2 border border-[#7B3FF2] rounded-lg flex items-center justify-center gap-3 hover:bg-white/25 transition">
          <img src="/Images/google.png" alt="google" className="w-7 h-7" />
          Continue with Google
        </button>

        {/* SIGN UP */}
        <p className="text-gray-400 mt-4 text-base">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/sign-up")}
            className="text-yellow-400 underline cursor-pointer"
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}
