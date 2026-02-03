const roles = [
  {
    title: "Lead Product Designer",
    place: "Northwind Studio",
    time: "2021 — Present",
    summary:
      "Guided multi-brand redesigns, built a typography-led design system, and mentored six designers."
  },
  {
    title: "Senior UX Designer",
    place: "Beacon Health",
    time: "2018 — 2021",
    summary:
      "Shipped patient onboarding flows, reduced drop-off by 32%, and launched a mobile-first portal."
  },
  {
    title: "Visual Designer",
    place: "Daily Signal",
    time: "2015 — 2018",
    summary:
      "Created editorial layouts and interactive data stories for a national newsroom."
  }
];

export default function Experience() {
  return (
    <section className="section">
      <header className="section__header">
        <h2>Experience</h2>
        <p>Selected roles and notable beats.</p>
      </header>
      <div className="section__content section__content--list">
        {roles.map((role) => (
          <article key={role.title} className="role">
            <div>
              <h3>{role.title}</h3>
              <p className="role__meta">
                {role.place} • {role.time}
              </p>
            </div>
            <p>{role.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
