import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import RecipesPage from "./pages/recipesPage/RecipesPage";
import PlannerPage from "./pages/plannerPage/PlannerPage";
import FeedbackPage from "./pages/feadbackPage/FeedbackPage";
import RecipePage from "./pages/recipePage/RecipePage";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import Page404 from "./pages/404Page/404Page";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<RecipesPage />} />
        <Route path="/planner" element={<PlannerPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/recipes/:recipeId" element={<RecipePage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <ScrollToTop />
    </Layout>
  );
}

export default App;
