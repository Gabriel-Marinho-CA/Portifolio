import styles from "./styles.module.scss";
import Link from "next/link";
import { AiOutlineGithub } from "react-icons/ai";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { BiLastPage } from "react-icons/bi";
import { Container } from "../utils/Container";
import { useProject } from "../hooks/useProjects";

export const Project = () => {
  const { projects } = useProject();
  return (
    <div className={styles.project} id="projetos">
      <Container>
        <p className="title">Projetos</p>
        <p className="subTitle">Trabalhos mais recente</p>
      </Container>
      <Container>
        <div className={styles.wrapper_splide}>
          {projects && projects.length > 0 && (
            <Splide
              className={styles.splide_custom_class}
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
                    width: 320,
                    arrows: true,
                    drag: true,
                  },
                  300: {
                    width: 280,
                    arrows: true,
                  },
                },
              }}
            >
              {projects.map((project) => (
                <SplideSlide key={project.name}>
                  <div className={styles.card}>
                    <img
                      width={275}
                      height={150}
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
                            <AiOutlineGithub
                              size={24}
                              className={styles.icon}
                            />
                          ) : (
                            <div className={styles.wrapper_site}>
                              <BiLastPage size={24} />
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
      </Container>
    </div>
  );
};
