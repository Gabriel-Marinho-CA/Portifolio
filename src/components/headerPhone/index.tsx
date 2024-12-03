import styles from "./styles.module.scss";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { AiOutlineFile } from "react-icons/ai";
import { BsCollection } from "react-icons/bs";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-scroll";
import { Container } from "../utils/Container";

export const HeaderPhone = () => {
  const [activeNav, setActiveNav] = useState("");

  const addActive = (value: string) => {
    setActiveNav(value);
  };

  return (
    <>
      <Container>
        <p className={styles.logo}>
          <span className={styles.color}>GM.</span>
        </p>
      </Container>
      <nav className={styles.nav}>
        <Link
          to="inicio"
          href="#inicio"
          title="inicio"
          smooth={true}
          offset={0}
          duration={500}
        >
          <p
            onClick={() => addActive("Menu")}
            className={
              activeNav === "Menu" ? styles.bgIconActive : styles.bgIcon
            }
          >
            <AiOutlineHome />
          </p>
        </Link>
        <Link
          to="sobre"
          href="#sobre"
          title="sobre"
          smooth={true}
          offset={0}
          duration={500}
        >
          <p
            onClick={() => addActive("User")}
            className={
              activeNav === "User" ? styles.bgIconActive : styles.bgIcon
            }
          >
            <AiOutlineUser />
          </p>
        </Link>
        <Link
          to="habilidade"
          href="#habilidade"
          title="habilidade"
          smooth={true}
          offset={0}
          duration={500}
        >
          <p
            onClick={() => addActive("Habilidades")}
            className={
              activeNav === "Habilidades" ? styles.bgIconActive : styles.bgIcon
            }
          >
            <BiBook />
          </p>
        </Link>
        <Link
          to="curriculo"
          href="#curriculo"
          title="curriculo"
          smooth={true}
          offset={0}
          duration={500}
        >
          <p
            onClick={() => addActive("Curriculo")}
            className={
              activeNav === "Curriculo" ? styles.bgIconActive : styles.bgIcon
            }
          >
            <AiOutlineFile />
          </p>
        </Link>
        <Link
          to="projetos"
          href="#projetos"
          title="projetos"
          smooth={true}
          offset={0}
          duration={500}
        >
          <p
            onClick={() => addActive("Projetos")}
            className={
              activeNav === "Projetos" ? styles.bgIconActive : styles.bgIcon
            }
          >
            <BsCollection />
          </p>
        </Link>
        <Link
          to="contato"
          href="#contato"
          title="contato"
          smooth={true}
          offset={0}
          duration={500}
        >
          <p
            onClick={() => addActive("Contato")}
            className={
              activeNav === "Contato" ? styles.bgIconActive : styles.bgIcon
            }
          >
            <BiMessageSquareDetail />
          </p>
        </Link>
      </nav>
    </>
  );
};
