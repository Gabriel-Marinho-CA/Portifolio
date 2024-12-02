import { Col, Container, Row } from "reactstrap";
import styles from "./styles.module.scss";
import { BsWhatsapp } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import process from "process";

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailService = String(process.env.NEXT_PUBLIC_EMAIL_SERVICE);
    const emailTemplate = String(process.env.NEXT_PUBLIC_EMAIL_TEMPLATE);
    const publicKey = String(process.env.NEXT_PUBLIC_PUBLIC_KEY);

    emailjs
      .sendForm(emailService, emailTemplate, form.current!, publicKey)
      .then(
        () => {
          const resetForm = e.target as HTMLFormElement;
          resetForm.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className={styles.contact} id="contato">
        <Container>
          <p className="title">Contato</p>
          <p className="subTitle">Entrar em contato</p>

          <div className={styles.containerContact}>
            <div className={styles.contactList}>
              <div className={styles.contactListItem}>
                <Link
                  href="https://wa.me/5511960693921?text=Ol%C3%A1+Guilherme%2C+tudo+bem+%3F"
                  target={"_blank"}
                >
                  <BsWhatsapp className={styles.icon} />
                  <div className={styles.contactData}>
                    <p className={styles.titleContact}>WhatsApp</p>
                    <p className={styles.subContact}>(+55) 27 99977-4257</p>
                  </div>
                </Link>
              </div>

              <div className={styles.contactListItem}>
                <Link href="mailto:gabrielmca7@gmail.com" target={"_blank"}>
                  <HiOutlineMail className={styles.icon} />
                  <div className={styles.contactData}>
                    <p className={styles.titleContact}>Email</p>
                    <p className={styles.subContact}>gabrielmca7@gmail.com</p>
                  </div>
                </Link>
              </div>

              <div className={styles.contactListItem}>
                <Link
                  href="https://www.linkedin.com/in/gabriel-mca/"
                  target={"_blank"}
                >
                  <FaLinkedinIn className={styles.icon} />
                  <div className={styles.contactData}>
                    <p className={styles.titleContact}>LinkedIn</p>
                    <p className={styles.subContact}>Gabriel Marinho</p>
                  </div>
                </Link>
              </div>
            </div>
            <form ref={form} onSubmit={sendEmail} className={styles.form}>
              <Container>
                <Row className={styles.row_space}>
                  <Col sm={12} lg={6}>
                    <div className={styles.input_group}>
                      <label htmlFor="input_name">Seu nome*</label>
                      <input
                        id="input_name"
                        type="text"
                        name="name"
                        placeholder="Nome"
                        required
                        className={styles.input}
                      />
                    </div>
                  </Col>
                  <Col className={styles.col_gap}>
                    <div className={styles.input_group}>
                      <label htmlFor="enterprise">Empresa*</label>
                      <input
                        type="text"
                        id="enterprise"
                        name="enterprise"
                        placeholder="Empresa"
                        required
                        className={styles.input}
                      />
                    </div>
                  </Col>
                </Row>
                <Row className={styles.row_space}>
                  <Col>
                    <div className={styles.input_group}>
                      <label htmlFor="email">Email*</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        className={styles.input}
                      />
                    </div>
                  </Col>
                </Row>
                <Row className={styles.row_space}>
                  <Col>
                    <textarea
                      name="message"
                      placeholder="Mensagem"
                      rows={7}
                      required
                      className={styles.textarea}
                    ></textarea>
                  </Col>
                </Row>

                <Row className={styles.row_space}>
                  <Col>
                    <button type="submit" className="button button-lg">
                      Enviar
                    </button>
                  </Col>
                </Row>
              </Container>
            </form>
          </div>
        </Container>
      </div>
    </>
  );
};
