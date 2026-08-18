import { Link } from "react-router-dom";

import classes from "./404Page.module.scss";

const Page404 = () => {
  return (
    <div className={classes["error-container"]}>
      <div className={classes["error-container__top"]}>404</div>
      <h1 className={classes["error-container__title"]}>Страница не найдена</h1>

      <Link to={"/"} className={classes["error-container__button"]}>
        Вернуться на главную
      </Link>
    </div>
  );
};

export default Page404;
