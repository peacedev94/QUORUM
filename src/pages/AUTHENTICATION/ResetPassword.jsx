import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const getStrength = () => {
    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (!password) return null;

    if (score <= 1)
      return {
        text: "Weak Password",
        color: "text-red-500",
      };

    if (score <= 5)
      return {
        text: "Medium Strength",
        color: "text-yellow-400",
      };

    return {
      text: "Strong Password",
      color: "text-green-500",
    };
  };

  const strength = getStrength();

  const handleResetPassword = () => {
    setError("");
    setSuccess("");

    if (!password || !confirmPassword) {
      setError("Please fill in all required fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match. Please try again.");
      return;
    }

    setSuccess("Password reset successfully! Redirecting to login...");

    setTimeout(() => {
      navigate("/sign-in");
    }, 2500);
  };

  const isFormComplete =
    password.trim() !== "" && confirmPassword.trim() !== "";

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A0A12] text-white px-4">
      <div className="w-full max-w-md text-center">
        {/* Title */}
        <h1 className="text-4xl font-semibold mb-3">
          Reset Your <br /> Password
        </h1>

        <p className="text-[#B8B8B8] text-base mb-8">
          Forgot password? Reset now to continue
          <br />
          voting.
        </p>

        {/* Success */}
        {success && (
          <div className="mb-5 rounded-lg border border-green-500/30 bg-green-500/10 p-4 text-sm text-green-500">
            {success}
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="mb-5 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-500">
            {error}
          </div>
        )}

        <div className="space-y-3">
          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-4 px-5 rounded-lg bg-transparent border-2 border-white/20 pl-12 pr-12 text-sm outline-none focus:border-[#833BFA]"
            />

            {/* Lock Icon */}
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60"
              width="22"
              height="22"
              viewBox="0 0 32 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.6323 19.9776V18.6457C30.6323 17.1807 29.4336 15.9821 27.9686 15.9821C26.5036 15.9821 25.3049 17.1807 25.3049 18.6457V19.9776C24.5724 19.9776 23.9731 20.5769 23.9731 21.3094V25.3049C23.9731 26.0374 24.5724 26.6368 25.3049 26.6368H30.6323C31.3648 26.6368 31.9641 26.0374 31.9641 25.3049V21.3094C31.9641 20.5769 31.3648 19.9776 30.6323 19.9776ZM29.3005 19.9776H26.6368V18.6457C26.6368 17.9132 27.2361 17.3139 27.9686 17.3139C28.7011 17.3139 29.3005 17.9132 29.3005 18.6457V19.9776ZM31.9641 6.63256L29.1406 9.46937C25.7711 6.0865 21.1096 3.99552 15.9821 3.99552C10.8545 3.99552 6.19305 6.0865 2.8235 9.46937L0 6.63256C4.08875 2.53049 9.73574 0 15.9821 0C22.2284 0 27.8754 2.53049 31.9641 6.63256ZM15.9821 7.99103C20.0175 7.99103 23.6801 9.6292 26.3171 12.2796L23.4936 15.1031C22.5079 14.1153 21.3371 13.3317 20.0481 12.7969C18.7592 12.2621 17.3775 11.9868 15.9821 11.9865C13.052 11.9865 10.3883 13.1852 8.4705 15.1164L5.647 12.2929C8.28404 9.62919 11.9466 7.99103 15.9821 7.99103ZM20.6835 17.9265L15.9821 22.6413L11.2807 17.9265C12.4793 16.7279 14.1441 15.9821 15.9821 15.9821C17.82 15.9821 19.4848 16.7279 20.6835 17.9265Z"
                fill="#94A3B8"
              />
            </svg>

            {/* Eye */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 cursor-pointer"
            >
              {showPassword ? (
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
                <svg
                  width="14"
                  height="12"
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
            </button>
          </div>

          {/* Password Strength */}
          {strength && (
            <p className={`text-left text-sm ${strength.color}`}>
              {strength.text}
            </p>
          )}

          {/* Confirm Password */}
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full py-4 px-5 rounded-lg bg-transparent border-2 border-white/20 pl-12 pr-12 text-sm outline-none focus:border-[#833BFA]"
            />

            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60"
              width="22"
              height="22"
              viewBox="0 0 32 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.6323 19.9776V18.6457C30.6323 17.1807 29.4336 15.9821 27.9686 15.9821C26.5036 15.9821 25.3049 17.1807 25.3049 18.6457V19.9776C24.5724 19.9776 23.9731 20.5769 23.9731 21.3094V25.3049C23.9731 26.0374 24.5724 26.6368 25.3049 26.6368H30.6323C31.3648 26.6368 31.9641 26.0374 31.9641 25.3049V21.3094C31.9641 20.5769 31.3648 19.9776 30.6323 19.9776ZM29.3005 19.9776H26.6368V18.6457C26.6368 17.9132 27.2361 17.3139 27.9686 17.3139C28.7011 17.3139 29.3005 17.9132 29.3005 18.6457V19.9776ZM31.9641 6.63256L29.1406 9.46937C25.7711 6.0865 21.1096 3.99552 15.9821 3.99552C10.8545 3.99552 6.19305 6.0865 2.8235 9.46937L0 6.63256C4.08875 2.53049 9.73574 0 15.9821 0C22.2284 0 27.8754 2.53049 31.9641 6.63256ZM15.9821 7.99103C20.0175 7.99103 23.6801 9.6292 26.3171 12.2796L23.4936 15.1031C22.5079 14.1153 21.3371 13.3317 20.0481 12.7969C18.7592 12.2621 17.3775 11.9868 15.9821 11.9865C13.052 11.9865 10.3883 13.1852 8.4705 15.1164L5.647 12.2929C8.28404 9.62919 11.9466 7.99103 15.9821 7.99103ZM20.6835 17.9265L15.9821 22.6413L11.2807 17.9265C12.4793 16.7279 14.1441 15.9821 15.9821 15.9821C17.82 15.9821 19.4848 16.7279 20.6835 17.9265Z"
                fill="#94A3B8"
              />
            </svg>

            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 cursor-pointer"
            >
              {showConfirmPassword ? (
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
                <svg
                  width="14"
                  height="12"
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
            </button>
          </div>

          <p className="text-left text-base text-[#B8B8B8] mt-4 mb-28">
            You will receive an email to complete your password reset in your
            registered email account.
          </p>

          {/* Continue */}
          <button
            onClick={handleResetPassword}
            disabled={!isFormComplete}
            className={`w-full py-3 text-xl font-medium rounded-lg transition
              ${
                isFormComplete
                  ? "bg-[#7B3FF2] hover:bg-purple-500"
                  : "bg-[#7B3FF2] opacity-60 cursor-not-allowed"
              }`}
          >
            Continue
          </button>

          {/* Back to Login */}
          <button
            type="button"
            onClick={() => navigate("/sign-in")}
            className="w-full py-3 text-xl rounded-lg border border-[#7B3FF2] hover:bg-white/10 transition"
          >
            Back to Log In
          </button>
        </div>
      </div>
    </div>
  );
}
