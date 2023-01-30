export default function Section({ id, children }) {
  return (
    <section id={id} className="nav-service-section">
      {children}
    </section>
  );
}
