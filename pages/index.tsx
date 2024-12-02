import Head from 'next/head'
import { HomePage } from '../src/components/home'
import { About } from '../src/components/about'
import { Skills } from '../src/components/skills'
import { Resume } from '../src/components/resume'
import { Project } from '../src/components/project'
import { Contact } from '../src/components/contact'
import { Footer } from '../src/components/footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>GM.</title>
        <meta name="description" content="Potifolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomePage/>
        <About/>
        <Skills/>
        <Resume/>
        <Project/>
        <Contact/>
        <Footer/>
      </main>
    </>
  )
}
