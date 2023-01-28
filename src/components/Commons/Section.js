export default function Section({ id, color, children }) {
  return (
    <section
      id={id}
      className="section"
      style={{ background: color, minHeight: "100vh" }}
    >
      {children}
    </section>
  );
}
