import { useEffect, useState } from "react";

import Layout from "../components/layout";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/assets/data/projects.json")
      .then((data) => data.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);

  const githubIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="feather feather-github"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  );

  const linkIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="feather feather-link-2"
    >
      <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path>
      <line x1="8" y1="12" x2="16" y2="12"></line>
    </svg>
  );

  return (
    <Layout title="Projects">
      <h3
        style={{
          textAlign: "center",
        }}
      >
        Here are some of the projects that I have worked on.
      </h3>
      <div className="projects">
        {projects ? (
          projects.map((project) => {
            return (
              <div className="project" key={project.name}>
                <h1 className="project__name">{project.name}</h1>
                <p className="project__description">{project.description}</p>
                <div className="project__tags">
                  {project.tags.map((tag) => {
                    return <div className="project__tag">{tag}</div>;
                  })}
                </div>
                <a className="project__github" href={project.github}>
                  {githubIcon}
                </a>
                {project.site ? (
                  <a className="project__site" href={project.site}>
                    {linkIcon}
                  </a>
                ) : null}
              </div>
            );
          })
        ) : (
          <div></div>
        )}
      </div>
    </Layout>
  );
};
export default Projects;
