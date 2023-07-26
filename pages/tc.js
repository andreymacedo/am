import Head from "next/head";
import Link from "next/link";
import Header from "/components/Header";
import Contact from "/components/Contact";
import ProjectCard from "/components/ProjectCard";
import About from "/components/About";
import { projects } from '/data/projectData';
import Image from 'next/image';


export default function LGMagenta() {
  const project = projects.find(p => p.href === "/tc"); // replace with dynamic route matching

  return (
    <div className="single">
      <Head>
        <title>{project.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header />

      <section id="landing">
        <h4>{project.title}</h4>
        <h1>{project.subtitle}</h1>
      </section>

      <Image className="cover"Ð
            src={project.coverImgSrc}
            alt="Project cover image"
            width={500} height={300}
        />

        <section id="project-content">
        {project.blocks.map((block, index) => {
            if (block.type === "text") {
            return <p key={index}>{block.content}</p>;
            } else if (block.type === "image") {
            return <Image key={index} src={block.src} alt="Project image" layout="responsive" width={500} height={300} />;
            } else {
            return null; // or handle other block types as needed
            }
        })}
        </section>

      <Contact/>

      <section id="work">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </section>
    </div>
  )
}
