import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '/components/Header';
import Contact from "/components/Contact";
import ProjectCard from "/components/ProjectCard";
import About from "/components/About";
import { projects } from '/data/projectData';


export default function Home() {
  return (
    <div className="main">
      <Head>
        <title>Andrey Macedo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header />

      <section id="landing">
        <h1>Hi, I'm a designer based in São Paulo.</h1>
      </section>

      

      <section id="work"> 
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </section>

      <About/>
      <Contact/>
    </div>
  )
}
