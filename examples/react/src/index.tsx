import React from "react";
import ReactDOM from "react-dom";

import { Button } from "@oracle/web";

import "./styles.css";

import "@oracle/scss/lib/Button.css";

ReactDOM.render(
  <div>
    <Button size="md" isLoading>
      Button
    </Button>
    <br />
    <Button size="md">Button</Button>
    <br />
  </div>,
  document.querySelector("#root")
);
