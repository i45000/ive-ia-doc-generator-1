import React from "react";

import { Box } from "../Components/Box";
import { Header } from "../Components/Header";

export default class App extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Box>test</Box>
      </React.Fragment>
    );
  }
}
