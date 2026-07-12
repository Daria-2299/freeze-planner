import classes from "./feedbackForm.module.scss";

const FeedbackForm = () => {
  return (
    <div className={classes["feedback-block"]}>
      <h2 className={classes["feedback-block__title"]}>Обратная связь</h2>
      <p className={classes["feedback-block__subtitle"]}>
        Поделитесь своим рецептом, предложением или отзывом.
      </p>
      <form className={classes["feedback-form"]}>
        <div className={classes["feedback-form__block"]}>
          <label className={classes["feedback-form__title"]} htmlFor="name">
            Имя
          </label>
          <input
            className={classes["feedback-form__input"]}
            type="text"
            id="name"
            placeholder="Ivan"
          />
        </div>
        <div className={classes["feedback-form__block"]}>
          <label className={classes["feedback-form__title"]} htmlFor="email">
            E-mail
          </label>
          <input
            className={classes["feedback-form__input"]}
            type="email"
            id="email"
            placeholder="ivanivanovich@yandex.ru"
          />
        </div>
        <div className={classes["feedback-form__block"]}>
          <label className={classes["feedback-form__title"]} htmlFor="feedback">
            Предложение
          </label>
          <textarea
            className={classes["feedback-form__textarea"]}
            id="feedback"
            placeholder="Расскажите подробнее..."
          />
        </div>
        <button className={classes["feedback-form__btn"]}>Отправить</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
