import ProfileImage from "./profile_image.png";
import moment from "moment";

function ListData(props) {
  return (
    <div className="d-flex align-items-center mb-2">
      <div className="fs-5 me-3">
        <i className={props.iconClass}></i>
      </div>
      <div style={{ fontSize: ".83em" }}>{props.value}</div>
    </div>
  );
}

function App() {
  const data = {
    nickName: "Ikram Lubis",
    fullName: "Muhammad Fadhli Dzil Ikram Lubis",
    email: "dzilikram989@gmail.com",
    phoneNumber: "+6285212461453",
    phoneNumber_: "+62 852-1246-1453",
    address: "Sukabumi, West Java, Indonesia",
    birthDate: "1998-03-09",
    profession: "Web Developer",
  };

  const imgStyle = {
    backgroundColor: "#f5f8f9",
    backgroundImage: "linear-gradient(to bottom right, #e2fee3, #f5f8f9)",
  };

  return (
    <div className="card rounded-4 border-0 shadow-lg overflow-hidden">
      <div className="text-center p-3">
        <img
          src={ProfileImage}
          alt="Profile"
          width="180"
          className="mt-3 rounded-5"
          style={imgStyle}
        />
        <h1 className="h4 mt-3">{data.nickName}</h1>
        <div
          className="px-3 py-1 rounded-pill d-inline-block"
          style={{ backgroundColor: "#fafafa" }}
        >
          <small>{data.profession}</small>
        </div>
        <div className="mt-3">
          <a href="facebook.com" target="_blank">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="facebook.com" target="_blank" className="mx-3">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="facebook.com" target="_blank">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="py-3 px-4" style={{ backgroundColor: "#f5f8f9" }}>
        <ListData iconClass="bi bi-person" value={data.fullName} />
        <ListData
          iconClass="bi bi-calendar3"
          value={`${moment(data.birthDate).format("MMMM D, YYYY")} (${moment(
            data.birthDate
          ).fromNow(true)} old)`}
        />
        <ListData iconClass="bi bi-envelope" value={data.email} />
        <ListData iconClass="bi bi-phone" value={data.phoneNumber_} />
        <ListData iconClass="bi bi-geo-alt" value={data.address} />
      </div>
    </div>
  );
}

export default App;
