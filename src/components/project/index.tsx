import styles from "./styles.module.scss";
import Link from "next/link";
import { Container } from "reactstrap";
import { AiOutlineGithub } from "react-icons/ai";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { useState, useEffect } from "react";
import { BiLastPage } from "react-icons/bi";

interface IProject {
  name: string;
  subtitle: string;
  photo: string;
  description: string;
  link: string;
  github: boolean;
}
interface IApiResponse {
  projects: IProject[];
}

export const Project = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  useEffect(() => {
    getAllProjects();
  }, []);

  const getAllProjects = async () => {
    try {
      const request = await fetch("/api/projects");
      const response: IApiResponse = await request.json();

      console.log(response);

      setProjects(response.projects);
    } catch (error) {
      console.error("Error in skills api", error);
    }
  };

  return (
    <div className={styles.project} id="projetos">
      <Container>
        <p className="title">Projetos</p>
        <p className="subTitle">Trabalhos mais recente</p>
      </Container>
      <div className="d-flex flex-column align-items-center py-4">
        {projects.length > 0 && (
          <Splide
            options={{
              type: "loop",
              perPage: 4,
              perMove: 1,
              width: 4 * 300,
              focus: "center",
              pagination: false,
              arrows: true,
              drag: true,
              breakpoints: {
                1200: {
                  perPage: 2,
                  width: 600,
                  arrows: true,
                  drag: true,
                },
                600: {
                  perPage: 1,
                  width: 300,
                  arrows: true,
                  drag: true,
                },
                300: {
                  width: 250,
                  arrows: true,
                },
              },
            }}
          >
            {projects.map((project) => (
              <SplideSlide key={project.name}>
                <div className={styles.card}>
                  <img
                    src={project.photo}
                    alt={project.name}
                    className={styles.cardImg}
                  />
                  <div className={styles.cardText}>
                    <p className={styles.cardTitle}>{project.name}</p>
                    <p className={styles.cardSubtitle}>{project.subtitle}</p>

                    <p className={styles.cardDescription}>
                      {project.description}
                    </p>

                    <div className={styles.cardIcons}>
                      <Link
                        href={project.link}
                        title={project.name}
                        target="_blank"
                      >
                        {project.github ? (
                          <AiOutlineGithub size={24} className={styles.icon} />
                        ) : (
                          <div className={styles.wrapper_site}>
                            <BiLastPage  size={24} />
                            <p>Site</p>
                          </div>
                        )}
                      </Link>
                    </div>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        )}
      </div>
    </div>
  );
};
