const projects = [
  {
    name: "Northwind Commerce",
    detail: "Modular storefront that cut build time in half and raised conversion by 18%."
  },
  {
    name: "Beacon Care App",
    detail: "Patient-first mobile experience with accessible typography and motion." 
  },
  {
    name: "Signal Data Desk",
    detail: "Interactive election dashboard styled like a print feature story." 
  }
];

export default function Projects() {
  return (
    <section className="section">
      <header className="section__header">
        <h2>Projects</h2>
        <p>Highlighted case files.</p>
      </header>
      <div className="section__content section__content--grid">
        {projects.map((project) => (
          <article key={project.name} className="card">
            <h3>{project.name}</h3>
            <p>{project.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
