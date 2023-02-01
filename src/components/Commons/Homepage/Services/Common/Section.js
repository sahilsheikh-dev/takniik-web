import { Link } from "react-router-dom";

export default function Section({ id, title, description, img, url }) {
  return (
    <section id={id} className="nav-service-section mx-0 px-0">
      <h1 className="fw-bold" style={{ fontSize: "20px" }}>
        {title}
      </h1>
      <p className="text-secondary mb-2" style={{ fontSize: "16px" }}>
        {description}
      </p>
      <Link
        className="text-decoration-none hero-title-gradient"
        to={url}
        style={{ fontSize: "18px" }}
      >
        Click to know more
      </Link>
      <img className="img-fluid mt-5" src={img} alt="logo" />
      <hr className="my-5" />
    </section>
  );
}
