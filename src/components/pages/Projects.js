import Message from "../layout/Message";
import { useLocation } from "react-router-dom";
import styles from "./Projects.module.css";
import LinkButton from "../layout/LinkButton";
import ProjectCard from "../project/ProjectCard";
import { useState, useEffect } from "react";
import Loading from "../layout/Loading";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false)

  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:5000/projects", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
          setProjects(data);
          setRemoveLoading(true);
        })
        .catch((err) => console.log(err));
    }, 300)
  }, []);

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/newproject" text="Criar Projeto" />
      </div>

      {message && <Message type="success" msg={message} />}
      <div className={styles.project_card_container}>
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              name={project.name}
              id={project.id}
              budget={project.budget}
              key={project.id}
              category={project.category.name}
            />
          ))}
          {!removeLoading && <Loading />}
          {removeLoading && projects.length === 0 && (
            <p>Não há projetos cadastrados!</p>
          )}
      </div>
    </div>
  );
};

export default Projects;
