import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

import PersonalData from "./PersonalData";
import Main from "./Main";

function Index() {
  return (
    <div className="p-3 p-md-5">
      <div className="row gx-5">
        <div className="col-md-3 mb-3">
          <PersonalData />
        </div>
        <div className="col">
          <Main />
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
