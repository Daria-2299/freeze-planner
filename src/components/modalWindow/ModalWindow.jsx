import classes from "./modalWindow.module.scss";

const ModalWindow = ({ handleSubmited }) => {
  const closeModal = () => {
    handleSubmited(false);
  };

  const closeModalOutside = (event) => {
    if (event.target === event.currentTarget) closeModal();
  };

  return (
    <div
      className={`${classes["modal-overlay"]} ${classes["modal-overlay--open"]}`}
      id="myModal"
      onClick={closeModalOutside}
    >
      <div className={classes["modal"]}>
        <button className={classes["modal__close"]} onClick={closeModal}>
          ✕
        </button>
        <div className={classes["modal__content"]}>
          <p>
            Спасибо за Ваше сообщение. Мы свяжемся с Вами в ближайшее время.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
