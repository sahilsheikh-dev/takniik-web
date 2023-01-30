export default function Section({ id, title, description, img }) {
  return (
    <section id={id} className="nav-service-section mx-0 px-0">
      {/* {children} */}
      <h1 className="fw-bold" style={{ fontSize: "20px" }}>
        {title}
      </h1>
      <p className="text-secondary" style={{ fontSize: "16px" }}>
        {description}
      </p>
      <img className="img-fluid" src={img} alt="logo" />
      <hr className="my-5" />
    </section>
  );
}
