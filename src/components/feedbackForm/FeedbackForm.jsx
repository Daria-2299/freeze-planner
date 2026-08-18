import { useState } from "react";

import classes from "./feedbackForm.module.scss";

const FeedbackForm = ({ handleSubmited }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [suggestionError, setSuggestionError] = useState("");

  const nameValidation = (value) => {
    const trimmedValue = value.trim();
    const nameRegex = /^[A-Za-zА-Яа-яёЁ\s]*$/;
    if (!trimmedValue) {
      setNameError("Это обязательное поле для заполнения.");
      return false;
    } else if (!nameRegex.test(trimmedValue)) {
      setNameError("Имя должно содержать только буквы.");
      return false;
    } else {
      setNameError("");
      return true;
    }
  };

  const emailValidation = (value) => {
    const trimmedValue = value.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!trimmedValue) {
      setEmailError("Это обязательное поле для заполнения.");
      return false;
    } else if (!emailRegex.test(trimmedValue)) {
      setEmailError("Некорректный ввод email.");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };

  const suggestionValidation = (value) => {
    if (!value.trim()) {
      setSuggestionError("Это обязательное поле для заполнения.");
      return false;
    } else {
      setSuggestionError("");
      return true;
    }
  };

  const handleFieldChange = (event, field) => {
    const value = event.target.value;
    switch (field) {
      case "name":
        setName(value);
        nameValidation(value);
        break;
      case "email":
        setEmail(value);
        emailValidation(value);
        break;
      case "suggestion":
        setSuggestion(value);
        suggestionValidation(value);
        break;
    }
  };

  const handleValidation = (event) => {
    event.preventDefault();

    const isNameValid = nameValidation(name);
    const isEmailValid = emailValidation(email);
    const isSuggestionValid = suggestionValidation(suggestion);

    if (isNameValid && isEmailValid && isSuggestionValid) {
      handleSubmited(true);
      setName("");
      setEmail("");
      setSuggestion("");
    }
  };

  return (
    <form className={classes["feedback-form"]} onSubmit={handleValidation}>
      <div className={classes["feedback-form__block"]}>
        <label className={classes["feedback-form__title"]} htmlFor="name">
          Имя
        </label>
        <input
          value={name}
          type="text"
          id="name"
          placeholder="Ivan"
          onChange={(event) => handleFieldChange(event, "name")}
          className={classes["feedback-form__input"]}
        />
      </div>
      <p
        className={`${classes["error"]}  ${nameError && `${classes["error--visible"]}`}`}
      >
        {nameError}
      </p>
      <div className={classes["feedback-form__block"]}>
        <label className={classes["feedback-form__title"]} htmlFor="email">
          E-mail
        </label>
        <input
          value={email}
          type="email"
          id="email"
          placeholder="ivanivanovich@yandex.ru"
          onChange={(event) => handleFieldChange(event, "email")}
          className={classes["feedback-form__input"]}
        />
      </div>
      <p
        className={`${classes["error"]}  ${emailError && `${classes["error--visible"]}`}`}
      >
        {emailError}
      </p>
      <div className={classes["feedback-form__block"]}>
        <label className={classes["feedback-form__title"]} htmlFor="feedback">
          Предложение
        </label>
        <textarea
          value={suggestion}
          id="feedback"
          placeholder="Расскажите подробнее..."
          onChange={(event) => handleFieldChange(event, "suggestion")}
          className={classes["feedback-form__textarea"]}
        />
      </div>
      <p
        className={`${classes["error"]}  ${suggestionError && `${classes["error--visible"]}`}`}
      >
        {suggestionError}
      </p>
      <button className={classes["feedback-form__btn"]}>Отправить</button>
    </form>
  );
};

export default FeedbackForm;
