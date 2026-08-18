import classes from "./plannerProductList.module.scss";

import cartIcon from "../../assets/icons/shopping-cart-icon.png";
import copyIcon from "../../assets/icons/copy-icon.png";
import downloadIcon from "../../assets/icons/download-icon.png";

const PlannerProductList = ({ ingredients }) => {
  const pritierProductList = (ingredients) => {
    return [...ingredients]
      .sort((a, b) => b.weight - a.weight)
      .map(
        (ingredient, index) =>
          `${index + 1}. ${ingredient.title} ${ingredient.weight} ${ingredient.measure}`,
      )
      .join("\n");
  };

  const handleCopyList = () => {
    const listText = pritierProductList(ingredients);
    navigator.clipboard.writeText(listText);
  };

  const handleSaveAsFile = () => {
    const listText = pritierProductList(ingredients);
    const blob = new Blob([listText], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `список_продуктов_${new Date().toLocaleDateString()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
  };

  return (
    <div className={classes["products-block"]}>
      <div className={classes["products-block__top"]}>
        <h3 className={classes["products-block__title"]}>
          <img src={cartIcon} className={classes["products-block__icon"]} />
          Список продуктов
        </h3>
        {ingredients.length > 0 && (
          <div className={classes["buttons"]}>
            <button
              onClick={handleCopyList}
              className={classes["buttons__item"]}
            >
              <img src={copyIcon} className={classes["buttons__icon"]} />
            </button>
            <button
              onClick={handleSaveAsFile}
              className={classes["buttons__item"]}
            >
              <img src={downloadIcon} className={classes["buttons__icon"]} />
            </button>
          </div>
        )}
      </div>
      {ingredients.length > 0 ? (
        <div className={classes["products-block__table"]}>
          <div className={classes["headlines"]}>
            <p className={classes["headlines__item"]}>Продукт</p>
            <p className={classes["headlines__item"]}>Объем</p>
          </div>

          <div className={classes["products-table"]}>
            {[...ingredients]
              .sort((a, b) => b.weight - a.weight)
              .map((ingredient, index) => {
                return (
                  <div key={index} className={classes["products-table__row"]}>
                    <p>{ingredient.title}</p>
                    <p>{ingredient.weight + " " + ingredient.measure}</p>
                  </div>
                );
              })}
          </div>
        </div>
      ) : (
        <div className={classes["products-block__empty-table"]}>
          <p>Вы не добавили рецепты в планировщик.</p>
        </div>
      )}
    </div>
  );
};

export default PlannerProductList;
