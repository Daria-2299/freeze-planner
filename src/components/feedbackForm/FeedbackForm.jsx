import "./feedbackForm.scss";

const FeedbackForm = () => {
  return (
    <div className="feedback-block">
      <h2 className="feedback-block__title">Обратная связь</h2>
      <p className="feedback-block__subtitle">
        Поделитесь своим рецептом, предложением или отзывом.
      </p>
      <form className="feedback-form">
        <div className="feedback-form__block">
          <label className="feedback-form__title" htmlFor="name">
            Имя
          </label>
          <input
            className="feedback-form__input"
            type="text"
            id="name"
            placeholder="Ivan"
          />
        </div>
        <div className="feedback-form__block">
          <label className="feedback-form__title" htmlFor="email">
            E-mail
          </label>
          <input
            className="feedback-form__input"
            type="email"
            id="email"
            placeholder="ivanivanovich@yandex.ru"
          />
        </div>
        <div className="feedback-form__block">
          <label className="feedback-form__title" htmlFor="feedback">
            Предложение
          </label>
          <textarea
            className="feedback-form__textarea"
            id="feedback"
            placeholder="Расскажите подробнее..."
          />
        </div>
        <button className="feedback-form__btn">Отправить</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
