import { useState } from "react";
import { useNavigate } from "react-router-dom";
import quorum from "../../assets/Images/quorum.png";

const RoleSelect = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState("");

  const handleContinue = () => {
    switch (selectedRole) {
      case "voter":
        navigate("/voting");
        break;
      case "admin":
        navigate("/admin");
        break;
      case "organizer":
        navigate("/organizer/dashboard");
        break;
      default:
        alert("Please select a role");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0A0A12] text-white px-6">
      <div className="flex items-center mb-10 justify-center gap-1">
  <img
    src={quorum}
    alt="Quorum Logo"
    className="w-24"
  />
  <p className="text-white text-4xl font-semibold">
    Quorum
  </p>
</div>
      <h2 className="text-2xl font-semibold mb-2">
        Who are you?
      </h2>

      <p className="text-gray-400 mb-10 text-center">
        Choose how you will use the app
      </p>

      <div className="flex flex-col  text-lg gap-3 w-full ">
        <button
          onClick={() => setSelectedRole("voter")}
          className={`py-3 rounded-lg border-2 transition ${
            selectedRole === "voter"
              ? "border-[#7B3FF2]"
              : "border-gray-600 hover:border-blue-500"
          }`}
        >
          Voter
        </button>

        <button
          onClick={() => setSelectedRole("admin")}
          className={`py-3 rounded-lg border-2 transition ${
            selectedRole === "admin"
              ? " border-[#7B3FF2]"
              : "border-gray-600 hover:border-blue-500"
          }`}
        >
          Admin
        </button>

        <button
          onClick={() => setSelectedRole("organizer")}
          className={`py-3 rounded-lg border-2 transition ${
            selectedRole === "organizer"
              ? "border-[#7B3FF2]"
              : "border-gray-600 hover:border-blue-500"
          }`}
        >
          Organizer
        </button>
      </div>

      <button
        onClick={handleContinue}
        className="mt-18 w-full text-lg bg-[#7B3FF2] hover:bg-violet-800 py-3 rounded-lg font-medium transition"
      >
        Continue
      </button>
    </div>
  );
};

export default RoleSelect;