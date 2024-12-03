import styles from "./styles.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Container } from "../utils/Container";
import { useSkillsData } from "../hooks/useSkills";

export const Skills = () => {
  const { skills } = useSkillsData();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className={styles.skill} id="habilidade">
        <Container>
          <h2 className="title">Habilidades</h2>
          <ul className={styles.listSkills}>
            {skills?.map((skill) => {
              const icon_path_formatted = skill.icon_path.toLowerCase();
              return (
                <li className={styles.skillsData} key={skill.name}>
                  <div className={styles.skillsTitle}>
                    <img
                      src={icon_path_formatted}
                      width={"85"}
                      height={"85"}
                      alt={skill.name}
                    />
                    <h3 className={styles.skillsName}>{skill.name}</h3>
                  </div>
                </li>
              );
            })}
          </ul>
        </Container>
      </div>
    </>
  );
};
