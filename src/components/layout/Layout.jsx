import Header from "../Header/Header";
import Footer from "../footer/Footer";

import classes from "./layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={classes["layout"]}>
      <Header />
      <main className={classes["layout__context"]}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
