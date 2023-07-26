import { projects } from '../data/projectData';

export default function Project() {
  const project = projects.find(p => p.href === "/lg-magenta"); // replace with dynamic route matching

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

      <Image className="cover"
            src={project.coverImgSrc}
            alt="Project cover image"
            width={500} height={300}
        />

      <section id="project-content">
        <div>
          {project.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {project.projectImgs.map((imgSrc, index) => (
          <Image key={index} src={imgSrc} alt="Project image" layout="responsive" width={500} height={300} />
        ))}
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
