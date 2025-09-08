export default function Projects(){
  const projects = [
    { title: "React App", desc: "Vite + React demo" },
    { title: "Node API", desc: "Simple Express backend" },
    { title: "JS ES6 Practice", desc: "Exercises & challenges" }
  ];

  const hasProjects = projects.length > 0;

  return (
    <section id="projects" className="section projects">
      <h2>Projects</h2>
      {hasProjects ? (
        <ul>
          {projects.map((p, i) => (
            <li key={i}>
              <strong>{p.title}</strong> — {p.desc}
            </li>
          ))}
        </ul>
      ) : (
        <p>No projects yet 😢</p>
      )}
    </section>
  );
}
