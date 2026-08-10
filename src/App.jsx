import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import RecipesPage from "./pages/recipesPage/RecipesPage";
import PlannerPage from "./pages/plannerPage/PlannerPage";
import FeedbackPage from "./pages/feadbackPage/FeedbackPage";
import RecipePage from "./pages/recipePage/RecipePage";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<RecipesPage />} />
        <Route path="/planner" element={<PlannerPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/recipes/:recipeId" element={<RecipePage />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default App;
