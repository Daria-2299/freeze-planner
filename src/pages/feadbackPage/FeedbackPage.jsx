import { useState } from "react";
import FeedbackForm from "../../components/feedbackForm/FeedbackForm";

import classes from "./feedbackPage.module.scss";
import ModalWindow from "../../components/modalWindow/ModalWindow";

const FeedbackPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmited = (result) => {
    setIsSubmitted(result);
  };

  return (
    <div className={classes["feedback-block"]}>
      <h2 className={classes["feedback-block__title"]}>Обратная связь</h2>
      <p className={classes["feedback-block__subtitle"]}>
        Поделитесь своим рецептом, предложением или отзывом.
      </p>
      <FeedbackForm handleSubmited={handleSubmited} />
      {isSubmitted && <ModalWindow handleSubmited={handleSubmited} />}
    </div>
  );
};

export default FeedbackPage;
