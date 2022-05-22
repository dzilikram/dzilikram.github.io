import React from "react";
import html5Icon from "./icons/html5.png";
import css3Icon from "./icons/css3.png";
import javascriptIcon from "./icons/javascript.png";
import phpIcon from "./icons/php.png";
import laravelIcon from "./icons/laravel.png";
import codeigniterIcon from "./icons/codeigniter.png";
import nodejsIcon from "./icons/nodejs.png";
import mswordIcon from "./icons/msword.png";
import msexcelIcon from "./icons/msexcel.png";
import mspowerpointIcon from "./icons/mspowerpoint.png";

import Fade from "react-reveal/Fade";

export default function Skills() {
  return (
    <>
      <div className="row">
        <div className="col-auto mb-3">
          <Fade bottom delay={300}>
            <div className="card rounded-4 shadow border-0 p-4">
              <h6 className="fw-semibold mb-3">Programming</h6>
              <div>
                <img
                  src={html5Icon}
                  height="50"
                  alt="HTML5"
                  title="HTML5"
                  className="me-3 mb-2"
                />
                <img
                  src={css3Icon}
                  height="50"
                  alt="CSS3"
                  title="CSS3"
                  className="me-3 mb-2"
                />
                <img
                  src={javascriptIcon}
                  height="50"
                  alt="JavaScript"
                  title="JavaScript"
                  className="me-3 mb-2"
                />
                <img
                  src={phpIcon}
                  height="50"
                  alt="PHP"
                  title="PHP"
                  className="me-3 mb-2"
                />
                <img
                  src={laravelIcon}
                  height="50"
                  alt="Laravel"
                  title="Laravel"
                  className="me-3 mb-2"
                />
                <img
                  src={codeigniterIcon}
                  height="50"
                  alt="Codeigniter"
                  title="Codeigniter"
                  className="me-3 mb-2"
                />
                <img
                  src={nodejsIcon}
                  height="50"
                  alt="NodeJs"
                  title="NodeJs"
                  className="mb-2"
                />
              </div>
            </div>
          </Fade>
        </div>
        <div className="col-auto mb-3">
          <Fade bottom delay={600}>
            <div className="card rounded-4 shadow border-0 p-4">
              <h6 className="fw-semibold mb-3">Ms Office</h6>
              <div>
                <img
                  src={mswordIcon}
                  height="50"
                  alt="Ms Word"
                  title="Ms Word"
                  className="me-3 mb-2"
                />
                <img
                  src={msexcelIcon}
                  height="50"
                  alt="Ms Excel"
                  title="Ms Excel"
                  className="me-3 mb-2"
                />
                <img
                  src={mspowerpointIcon}
                  height="50"
                  alt="Ms Power Point"
                  title="Ms Power Point"
                  className="mb-2"
                />
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
}
