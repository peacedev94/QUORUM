import { Routes, Route } from "react-router-dom";
import QuorumVotingHome from "./Pages/Voting/QuorumVotingHome";
import CategoriesPage from "./Pages/Voting/CategoriesPage";
import CategoryNomineesPage from "./Pages/Voting/CategoryNomineesPage";
import NomineesPage from "./Pages/Voting/NomineesPage";
import NomineeDetailPage from "./Pages/Voting/NomineeDetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<QuorumVotingHome />} />
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="/categories/:label" element={<CategoryNomineesPage />} />
      <Route path="/nominees" element={<NomineesPage />} />
      <Route path="/nominees/:id" element={<NomineeDetailPage />} />
    </Routes>
  );
}

export default App;

