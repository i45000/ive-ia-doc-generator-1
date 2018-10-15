// @flow strict

import "./style.css";

import favicon from "assets/favicon.ico";
import React from "react";
import { render } from "react-dom";
import { Helmet } from "react-helmet";
import { MediaProvider } from "react-screen-size";

import { App } from "./App";

const root = document.getElementById("root");

const medias = {
  xs: "(max-width: 600px)",
  sm: "(max-width: 960px) and (min-width: 601px)",
  md: "(max-width: 1280px) and (min-width: 961px)",
  lg: "(max-width: 1920px) and (min-width: 1281px)",
  gtXs: "(min-width: 601px)",
  gtSm: "(min-width: 961px)",
  gtMd: "(min-width: 1281px)",
  gtLg: "(min-width: 1921px)"
};

if (root) {
  render(
    <React.Fragment>
      <Helmet>
        <link rel="shortcut icon" href={favicon} />
      </Helmet>
      <MediaProvider medias={medias}>
        <App />
      </MediaProvider>
    </React.Fragment>,
    root
  );
}
