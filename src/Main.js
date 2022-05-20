import React from "react";
import About from "./About";
import Resume from "./Resume";
import Skills from "./Skills";

function Item(props) {
  return (
    <div className={"p-4 p-md-5 " + (props.outerClass ?? "")}>
      <h1 className="h4 fw-semibold mb-3">{props.title}</h1>
      <div>{props.children}</div>
    </div>
  );
}

export default function Main() {
  return (
    <div className="card rounded-4 border-0 shadow-lg overflow-hidden">
      <Item title="About Me">
        <About />
      </Item>
      <Item title="Resume" outerClass="bg-light">
        <Resume />
      </Item>
      <Item title="Skills">
        <Skills />
      </Item>
      {/* <Item title="Projects" outerClass="bg-light">
        tes
      </Item>
      <Item title="Certificate">
        tes
      </Item> */}
    </div>
  );
}
