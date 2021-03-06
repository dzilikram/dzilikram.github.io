import React from "react";
import About from "./About";
import Resume from "./Resume";
import Skills from "./Skills";
import Projects from "./Projects";
import Certificate from "./Certificate";

import Fade from "react-reveal/Fade";

function Item(props) {
  return (
    <Fade bottom>
      <div className={"p-4 p-md-5 " + (props.outerClass ?? "")}>
        <Fade bottom>
          <h1 className="h4 fw-semibold mb-3">{props.title}</h1>
        </Fade>
        <Fade bottom>
          <div>{props.children}</div>
        </Fade>
      </div>
    </Fade>
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
      <Item title="Projects" outerClass="bg-light">
        <Projects />
      </Item>
      <Item title="Certificate">
        <Certificate />
      </Item>
    </div>
  );
}
