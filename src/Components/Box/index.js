import * as React from "react";

import classes from "./index.css";

type Props = {
  children: React.Node
};

export const Box = (props: Props) => (
  <div className={classes.flexWrapper}>
    <div className={classes.box}>{props.children}</div>
  </div>
);
