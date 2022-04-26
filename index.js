import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import "./index.css";

function Cup() {
  return (
  <>
    <App/>
  </>
  );
}

ReactDOM.render(<Cup />, document.getElementById("root"));
