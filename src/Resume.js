import React from "react";
import Fade from "react-reveal/Fade";

export default function Resume() {
  return (
    <div className="row">
      <div className="col-md-6">
        <Fade bottom delay={500}>
          <h2 className="h5 fw-bold">Education</h2>
          <ul className="timeline">
            <li>
              <div className="fw-bold">UIN Syarif Hidayatullah Jakarta</div>
              <div>Informatics Engineering</div>
              <div className="text-secondary">2017 - 2022</div>
            </li>
            <li>
              <div className="fw-bold">SMK Terpadu Al-Ittihad Cianjur</div>
              <div>Software Engineering</div>
              <div className="text-secondary">2013 - 2016</div>
            </li>
          </ul>
        </Fade>
        <Fade bottom delay={1000}>
          <h2 className="h5 fw-bold">Organizations</h2>
          <ul className="timeline">
            <li>
              <div className="fw-bold">HIMTI UIN Syarif Hidayatullah</div>
              <div>Member</div>
              <div className="text-secondary">Jan 2018 - Jan 2019</div>
            </li>
            <li>
              <div className="fw-bold">
                IP3A (Ikatan Pelajar Pondok Pesantren Al-Ittihad)
              </div>
              <div>Secretary</div>
              <div className="text-secondary">Jan 2015 - Jan 2016</div>
            </li>
            <li>
              <div className="fw-bold">KAPROGSIS SMK (RPL) Al-Ittihad</div>
              <div>Member</div>
              <div className="text-secondary">Jul 2014 - Jun 2015</div>
            </li>
          </ul>
        </Fade>
      </div>
      <div className="col-md-6">
        <Fade bottom delay={1500}>
          <h2 className="h5 fw-bold">Experience</h2>
          <ul className="timeline">
            <li>
              <div className="fw-bold">Web Developer</div>
              <div>Nusantara Beta Studio (Full Time)</div>
              <div className="text-secondary">Jun 2022 - Present</div>
            </li>
            <li>
              <div className="fw-bold">Web Developer</div>
              <div>Freelance</div>
              <div className="text-secondary">Oct 2020 - 2022</div>
              <div className="small">
                Working on various projects. Usually work as Fullstack Web
                developer with PHP (Laravel, Codeigniter) and some projects as
                Front End developer with (Reactjs, Vanilla Javascript)
              </div>
            </li>
            <li>
              <div className="fw-bold">Web Developer</div>
              <div>CV. Internal Media (Part-time)</div>
              <div className="text-secondary">Nov 2019 - Apr 2020</div>
            </li>
            <li>
              <div className="fw-bold">Web Developer</div>
              <div>PT. Tracon Industri (Internship)</div>
              <div className="text-secondary">Jan 2020 - Feb 2020</div>
            </li>
            <li>
              <div className="fw-bold">Web Developer</div>
              <div>Nusantara Beta Studio (Internship)</div>
              <div className="text-secondary">Jul 2019 - Aug 2019</div>
            </li>
          </ul>
        </Fade>
      </div>
    </div>
  );
}
