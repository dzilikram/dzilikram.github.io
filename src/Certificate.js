import React from "react";
import fullStackJavascriptImage from "./certificate/full-stack-javascript-developer-website-travel-dzil-ikram.jpg";
import basicBackEndImage from "./certificate/sertifikat_basic_back_end.jpg";
import basicWebImage from "./certificate/sertifikat_basic_web_programming.jpg";
import skkniPwpImage from "./certificate/skkni_bpptik_2018_pwp.jpg";

function Item(props) {
  const { certificate } = props;
  return (
    <div className="col-sm-6 col-md-4 mb-3">
      <div className="card border-0 shadow p-3 text-center h-100">
        <img
          src={certificate.imageUrl}
          alt={certificate.name}
          className="rounded mb-3 w-100"
        />
        <div className="small fw-semibold">{certificate.name}</div>
        <div className="small text-secondary">{certificate.description}</div>
      </div>
    </div>
  );
}

export default function Certificate() {
  const listCertificate = [
    {
      name: "Belajar Dasar Pemrograman Web",
      imageUrl: basicWebImage,
      description: "2019",
    },
    {
      name: "Belajar Membuat Aplikasi Back-End Untuk Pemula",
      imageUrl: basicBackEndImage,
      description: "2021",
    },
    {
      name: "Full-Stack JavaScript Developer",
      imageUrl: fullStackJavascriptImage,
      description: "2022",
    },
    {
      name: "Junior Web Developer",
      imageUrl: skkniPwpImage,
      description: "2018",
    },
  ];

  return (
    <div className="row">
      {listCertificate.map((data) => (
        <Item certificate={data} />
      ))}
    </div>
  );
}
