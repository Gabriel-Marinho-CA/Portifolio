import styles from "./styles.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Container } from "../utils/Container";

interface ISkills {
  name: string;
  icon_path: string;
}

interface IApiResponse {
  skills: ISkills[];
}

export const Skills = () => {
  const [skills, setSkills] = useState<ISkills[]>([]);
  useEffect(() => {
    getSkillsData();
    AOS.init();
  }, []);
 
  const getSkillsData = async () => {
    try {
      const request = await fetch("/api/skills");
      const response: IApiResponse = await request.json();

      setSkills(response.skills);
    } catch (error) {
      console.error("Error in skills api", error);
    }
  };

  return (
    <>
      <div className={styles.skill} id="habilidade">
        <Container>
          <h2 className="title">Habilidades</h2>
          <ul className={styles.listSkills}>
            {skills.map((skill) => {
              const icon_path_formatted = skill.icon_path.toLowerCase();
              return (
                <li className={styles.skillsData} key={skill.name}>
                  <div className={styles.skillsTitle}>
                    <img src={icon_path_formatted} width={'85'} height={'85'} alt={skill.name} />
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
