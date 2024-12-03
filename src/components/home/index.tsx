import styles from "./styles.module.scss";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { BsMouse } from "react-icons/bs";
import { AiOutlineArrowDown } from "react-icons/ai";
import Link from "next/link";
import { Header } from "../header";
import { HeaderPhone } from "../headerPhone";
import { Link as LinkScroll } from "react-scroll";
import Image from "next/image";
import { Container } from "../utils/Container";

export const HomePage = () => {
  return (
    <>
      <HeaderPhone />
      <Header />
      <div className={styles.home} id="inicio">
        <Container>
          <div className={styles.homeContainer}>
            <div className={styles.icons}>
              <Link
                href="https://www.linkedin.com/in/gabriel-mca/"
                target={"_blank"}
                title="Link linkedin"
              >
                <span className={styles.linkIcon}>
                  <FaLinkedinIn className={styles.icon} />
                </span>
              </Link>
              <Link
                href="https://github.com/Gabriel-Marinho-CA"
                className={styles.linkIcon}
                target={"_blank"}
                title="Link github"
              >
                <span className={styles.linkIcon}>
                  <FiGithub className={styles.icon} />
                </span>
              </Link>
            </div>
            <div className={styles.homeImage}>
              <Image
                width={500}
                height={500}
                src="/svg/profile-animate.svg"
                alt="profile-animate"
                className={styles.profileImg}
              />
            </div>

            <div className={styles.description}>
              <p className={styles.title}>
                Olá, me chamo <span className={styles.color}>Gabriel</span>
              </p>
              <p className={styles.subTitle}>Desenvolvedor Full Stack</p>
              <LinkScroll to="contato" smooth={true} offset={0} duration={500}>
                <button className="button">Contatar-me</button>
              </LinkScroll>
            </div>
          </div>
        </Container>
        <LinkScroll to="sobre" smooth={true} offset={0} duration={500}>
          <p className={styles.buttonDown}>
            <span>
              <BsMouse className={styles.iconDownMouse} />
            </span>
            Scroll down
            <span>
              <AiOutlineArrowDown className={styles.iconDown} />
            </span>
          </p>
        </LinkScroll>
      </div>
    </>
  );
};
