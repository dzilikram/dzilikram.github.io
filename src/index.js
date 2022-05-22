import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

import Fade from "react-reveal/Fade";

import PersonalData from "./PersonalData";
import Main from "./Main";

function Index() {
  return (
    <div className="p-3 p-md-5">
      <div className="row gx-5">
        <div className="col-md-3 mb-3">
          <Fade>
            <PersonalData />
          </Fade>
        </div>
        <div className="col">
          <Fade>
            <Main />
          </Fade>
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);
