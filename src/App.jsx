import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import RecipesPage from "./pages/recipesPage/RecipesPage";
import PlannerPage from "./pages/plannerPage/PlannerPage";
import FeedbackPage from "./pages/FeedbackPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<RecipesPage />} />
        <Route path="/planner" element={<PlannerPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
      </Routes>
    </>
  );
}

export default App;
