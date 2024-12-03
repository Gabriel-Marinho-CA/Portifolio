import Head from "next/head";
import { HomePage } from "../src/components/home";
import { About } from "../src/components/about";
import { Skills } from "../src/components/skills";
import { Resume } from "../src/components/resume";
import { Project } from "../src/components/project";
import { Contact } from "../src/components/contact";
import { Footer } from "../src/components/footer";
export default function Home() {
  return (
    <>
      <Head>
      <html lang="pt-br" />
        <title>Gabriel</title>
        <meta name="description" content="Potifolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-gm.png" /> 

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,700;0,800;0,900;1,600;1,700;1,800;1,900&display=swap"
        />
      </Head>
      <main>
        <HomePage />
        <About />
        <Skills />
        <Resume />
        <Project />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
