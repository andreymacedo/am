import Head from "next/head";
import { useRouter } from 'next/router';
import Image from 'next/image';
import Header from "/components/Header";
import Contact from "/components/Contact";
import ProjectCard from "/components/ProjectCard";
import { projects } from '/data/projectData';

export default function Project({ project }) {
  const router = useRouter();
  const { asPath } = useRouter();


  return (
    <div className="main single" key={router.asPath}>
      <Head>
        <title>{`${project.title} ― Andrey Macedo`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Designer based in São Paulo." />
        <meta name="keywords" content="Andrey Macedo, Product Designer, UX Design, UI Design, Visual Design, Interaction Design" />
        <meta name="author" content="Andrey Macedo" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.andreymacedo.com/" />
        <meta property="og:title" content="Andrey Macedo" />
        <meta property="og:description" content="Designer based in São Paulo." />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <Header />

      <section id="landing">
        <h4>{project.title}</h4>
        <h1>{project.subtitle}</h1>
      </section>

      <Image
        className="cover"
        src={project.coverImgSrc}
        alt="Project cover image"
        width={1920}
        height={1080}
        priority
        quality={100}
      />

      <section id="project-content">
        {project.blocks.map((block, index) => {
          if (block.type === "text") {
            return <p key={index} data-aos="example-anim3">{block.content}</p>;
          
          } else if (block.type === "video") {
            return (
              <video
                key={index}
                src={block.src}
                width="1280"
                height="auto"
                controls
                autoPlay
                muted
                playsInline
                loop
              ></video>
            );
} else if (block.type === "image") {
            return (
              <Image
                key={index}
                src={block.src}
                alt="Project image"
                width={1280}
                height={800}
                quality={100}
                data-aos="example-anim3"
              />
            );
          } else {
            return null; // or handle other block types as needed
          }
        })}
      </section>

      <Contact />


      <section id="work">
        {projects.filter(proj => proj.href !== asPath).map((proj, index) => (
          <ProjectCard key={index} {...proj} />
        ))}
      </section>

    </div>
  );
}

export async function getStaticPaths() {
  const paths = projects.map((project) => ({
    params: {
      slug: project.href.replace("/", ""),
    },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const project = projects.find((p) => p.href === `/${params.slug}`);

  return { props: { project } };
}
