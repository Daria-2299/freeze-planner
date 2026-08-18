import classes from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes["footer"]}>
      <p className={classes["footer__content"]}>© 2026 • Freeze-planner</p>
    </footer>
  );
};

export default Footer;
