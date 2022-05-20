import React from "react";
import zaidaRentalImage from "./projectImages/zaidaRental.png";
import littleAngleImage from "./projectImages/littleAngle.png";
import bermaknaImage from "./projectImages/bermakna.png";
import weddIncImage from "./projectImages/weddInc.png";
import screeningPHBSImage from "./projectImages/screeningPHBS.png";

function Item(props) {
  const { project } = props;
  return (
    <div className="col-sm-6 col-md-4 mb-3">
      <div className="card border-0 shadow p-3 text-center h-100">
        <img
          src={project.imageUrl}
          alt={project.name}
          className="rounded mb-3 w-100"
        />
        <div className="fw-semibold">{project.name}</div>
        <div className="small text-secondary">{project.description}</div>
        {/* <div className="small">{project.description}</div> */}
      </div>
    </div>
  );
}

export default function Projects() {
  const listProject = [
    {
      name: "WeddInc",
      imageUrl: weddIncImage,
      description: "Built with Laravel, Bootstrap, MySQL",
    },
    {
      name: "Screening PHBS",
      imageUrl: screeningPHBSImage,
      description: "Built with Laravel, Bootstrap, MySQL",
    },
    {
      name: "Litle Angle Dashboard",
      imageUrl: littleAngleImage,
      description: "Built with Laravel, Bootstrap, MySQL",
    },
    {
      name: "Zaida Rental Admin",
      description: "Built with Laravel, Bootstrap, MySQL",
      imageUrl: zaidaRentalImage,
      processingTime: "Nov 2020 - Jun 2021",
    },
    {
      name: "Crowdfunding Apps",
      imageUrl: bermaknaImage,
      description: "Built with Reactjs, Bootstrap",
    },
  ];

  return (
    <div className="row">
      {listProject.map((data) => (
        <Item project={data} />
      ))}
    </div>
  );
}
