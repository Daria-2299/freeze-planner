import classes from "./loading.module.scss";

const Loading = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.loading}></div>
    </div>
  );
};

export default Loading;
