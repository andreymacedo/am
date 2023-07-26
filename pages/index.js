import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{background: "#050505"}}>
      <Head>
        <title>Document</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/styles.css" />
      </Head>

      <header>
        <h3>Andrey Macedo</h3>
        <Link href="/contact" className="button">
          Contact
        </Link>
      </header>

      <section id="landing">
        <h1>Hi, I'm a designer based in São Paulo.</h1>
      </section>

      <section id="work">
        <Link href="/lg-magenta" className="project">
          <div className="title">
            <h2>LG Magenta</h2>
            <h4>Connecting architects, designers and engineers.</h4>
          </div>
          <div className="image">
            <img src="/img/1.png" alt="LG Magenta" />
          </div>
        </Link>
        
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

      <section id="contact">
        <div className="col a">
          <h1>Ready to talk about your project?</h1>
        </div>

        <div className="col b">
          <ul>
            <li><a href="mailto:andrey.rm@gmail.com">andrey.rm@gmail.com</a></li>
            <li><a href="tel:+5511959122402">+5511959122402</a></li>
          </ul>
        </div>
      </section>

    </div>
  )
}
