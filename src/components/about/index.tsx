// import styles from "../../../styles/about.module.scss";
import styles from "./styles.module.scss";
import { MdOutlineFileDownload } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";
import { Container } from "../utils/Container";

export const About = () => {
  useEffect(() => { 
    AOS.init();
  }, []);
  return (
    <>
      <div className={styles.about} id="sobre">
        <Container>
          <div className={styles.wrapper_title_about}>
            <h2 className="title">Sobre mim</h2>
            <p className="subTitle">Introdução</p>
          </div>
          <div className={styles.containerAbout}>
            <Image
              className={styles.imageAbout}
              width={450}
              height={350}
              src="/images/code-coffe.jpg"
              alt="foto"
              data-aos="fade-right"
              data-aos-duration="1000"
            />
            <div className={styles.aboutDescription}>
              <p
                className={styles.description}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Atualmente estou no meu último ano estudando Sistema de
                informação na Universidade FAESA. Minha paixão por criar
                soluções eficazes e inovadoras para WEB me levaram a explorar
                diversas linguagens como ReactJs, NodeJs, NestJs, TypeScript,
                JavaScript e NextJs. Atualmente, atuo como desenvolvedor
                full-stack com ênfase em Front-end, lidando com questões
                relacionadas às plataformas VTEX, Shopify e e-commerces em
                geral.
              </p>
              <a
                download="true"
                href="/curriculo.pdf"
                className="button buttonFlex"
              >
                Download CV <MdOutlineFileDownload className="buttonIcon" />
              </a>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
