import styles from './styles.module.scss'
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import Link from 'next/link'

export const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerInfo}>
          <p className="title"><span className={styles.spanColor}>GM.</span></p>
          <div className={styles.footerIcon}>
            <Link href={'https://www.linkedin.com/in/gabriel-mca/'} target={'_blank'}>
                <FaLinkedinIn className={styles.icon}/>
            </Link>
            <Link href={'https://github.com/Gabriel-Marinho-CA'} target={'_blank'}>
                <AiOutlineGithub className={styles.icon}/>
            </Link>
          </div>
        </div>
        <p className={styles.copy}>
          © 2024. All right reserved
        </p>
      </footer>
    </>
  )
}