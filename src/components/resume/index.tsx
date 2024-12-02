import { Container } from "reactstrap";
import styles from "./styles.module.scss";
import { FaGraduationCap } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Resume = () => {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <div className={styles.resume} id="curriculo">
      <Container>
        <h2 className="title">Minhas Qualificações</h2>
        <p className="subTitle">Minha Trajetoria Pessoal</p>

        <div className={styles.resumeEducation}>
              <FaGraduationCap />
              Educação
        </div>
        <div className={styles.qualificationSections}>
          <div className={styles.qualificationContent}>
            <div className={styles.qualificationData}>
              <div 
              className={styles.ItensRight}
              data-aos="fade-right"
              data-aos-duration="1000">
                <h3 className={styles.title}>Desenvolvedor WEB Pleno</h3>
                <span className={styles.subTitle}>Resultate.</span>
                <div className={styles.calendar}>
                  <FaRegCalendarAlt className={styles.Icon} /> 2024 - atual
                </div>
              </div>

              <div>
                <span className={styles.rounder}></span>
                <span className={styles.line}></span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.qualificationSections}>
          <div className={styles.qualificationContent}>
            <div className={styles.qualificationData}>
                <div></div>
              <div>
                <span className={styles.rounder}></span>
                <span className={styles.line}></span>
              </div>
              <div className="mb-4"
              data-aos="fade-right"
              data-aos-duration="1000">
                <h3 className={styles.title}>Desenvolvedor WEB Junior</h3>
                <span className={styles.subTitle}>Resultate.</span>
                <div className={styles.calendar}>
                  <FaRegCalendarAlt className={styles.Icon} /> 2021
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.qualificationSections}>
          <div className={styles.qualificationContent}>
            <div className={styles.qualificationData}>
              <div 
              className={styles.ItensRight}
              data-aos="fade-right"
              data-aos-duration="1000">
                <h3 className={styles.title}>Estagiário de Desenvolvedor WEB</h3>
                <span className={styles.subTitle}>Resultate.</span>
                <div className={styles.calendar}>
                  <FaRegCalendarAlt className={styles.Icon} /> 2021
                </div>
              </div>

              <div>
                <span className={styles.rounder}></span>
                <span className={styles.line}></span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.qualificationSections}>
          <div className={styles.qualificationContent}>
            <div className={styles.qualificationData}>
                <div></div>
                <div>
                <span className={styles.rounder}></span>
              </div>
              <div data-aos="fade-right"
                    data-aos-duration="1000">
                <h3 className={styles.title}>
                  Sistema de Informação
                </h3>
                <span className={styles.subTitle}>Universidade FAESA</span>
                <div className={styles.calendar}>
                  <FaRegCalendarAlt className={styles.Icon} /> 2021 - Atual
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
