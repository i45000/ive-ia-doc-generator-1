import React from "react";

import logo from "../../assets/logo.svg";
import classes from "./index.css";

export const Header = () => {
  return (
    <header className={classes.header}>
      <img src={logo} className={classes.logo} alt="logo" />
      <div className={classes.title}>IVE IA Document Generator</div>
    </header>
  );
};
