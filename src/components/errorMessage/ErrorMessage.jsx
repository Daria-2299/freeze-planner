import classes from "./errorMessage.module.scss";

import img from "../../assets/icons/error.gif";

const ErrorMessage = () => {
  return (
    <div className={classes["wrapper"]}>
      <p className={classes["message"]}>Произошла ошибка.</p>
      <p className={classes["message"]}>Обновите страницу.</p>
      <img className={classes["image"]} src={img} alt="Error" />
    </div>
  );
};

export default ErrorMessage;
