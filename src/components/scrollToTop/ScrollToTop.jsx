import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import classes from "./scrollToTop.module.scss";

const ScrollToTop = ({ threshold = 400 }) => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      setIsVisible(scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  if (!isVisible) return null;

  return (
    <button className={classes.button} onClick={scrollToTop} type="button">
      ↑
    </button>
  );
};

export default ScrollToTop;
