import Head from 'next/head';
import Link from 'next/link';
import Header from '/components/Header';
import Contact from '/components/Contact';
import ProjectCard from '/components/ProjectCard';

export default function Home() {
  return (
    <div style={{background: "#050505"}}>
      <Head>
        <title>Document</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header />

      <section id="landing">
        <h1>Hi, I'm a designer based in São Paulo.</h1>
      </section>

      <section id="work">
        
      <ProjectCard
            href="/lg-magenta"
            title="LG Magenta"
            subtitle="Connecting architects, designers and engineers."
            imgSrc="/img/lg-magenta-cover.png"
        />

        <ProjectCard
            href="/tc"
            title="TC"
            subtitle="Connecting architects, designers and engineers."
            imgSrc="/img/tc-cover.png"
        />
        
        {/*... rest of your projects ...*/}
      </section>

      <section id="about">
        <div className="col a">
          <h2>About</h2>
          <p>
            I'm a designer passionate about turning complex ideas into simple solutions that makes people's lives better.
          </p>
  
          <p>
            With the collaboration of studios, agencies, tech companies and startups, I've helped to create amazing products used by thousands.
          </p>
  
          <p>
            Through a solid design process, I'm always looking to push the boundaries of technology to create better human-centered experiences.
          </p>
        </div>

        <div className="col b">
          <h2>Worked with</h2>
          <ul>
            <li><Link href="/lg">LG</Link></li>
            {/*... rest of your links ...*/}
          </ul>
        </div>
      </section>

    <Contact />

    </div>
  )
}
