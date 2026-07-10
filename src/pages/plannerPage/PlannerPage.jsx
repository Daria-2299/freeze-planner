import "./plannerPage.scss";

import PlannerProductList from "../../components/plannerProductList/PlannerProductList";
import PlannerRecipeList from "../../components/plannerRecipeList/PlannerRecipeList";

const PlannerPage = () => {
  return (
    <div className="container">
      <PlannerRecipeList />
      <PlannerProductList />
    </div>
  );
};

export default PlannerPage;
