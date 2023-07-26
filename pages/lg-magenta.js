import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Header from '/components/Header';

export default function Project() {
  return (
    <div className="single">
      <Head>
        <title>Project Name</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header />

      <section id="landing">
        <h4>TC</h4>
        <h1>The largest investor's company in Latin America.</h1>
      </section>

      <Image className="cover" src="/img/lg-magenta-0.png" alt="Project cover image" layout="responsive" width={500} height={300} />

      <section id="project-content">
        <div>
          <p>
            I'm a designer passionate about turning complex ideas into simple solutions that makes people's lives better.
          </p>
          <p>
            With the collaboration of studios, agencies, tech companies and startups, I've helped to create amazing products used by thousands.
          </p>
        </div>

        <Image src="/img/lg-magenta-1.png" alt="Project image" layout="responsive" width={500} height={300} />
        {/* Add more images as needed */}
        
        <p>
          Through a solid design process, I'm always looking to push the boundaries of technology to create better human-centered experiences.
        </p>

        {/* Add more content as needed */}
      </section>

      <section id="contact">
        <div className="col a">
          <h1>Have a project?<br />Let's talk.</h1>
        </div>

        <div className="col b">
          <ul>
            <li><a href="">andrey.rm@gmail.com</a></li>
            <li><a href="">+5511959122402</a></li>
          </ul>
        </div>
      </section>

      <section id="work" className="single">
        {/* Add project cards as needed */}
        <div className="project">
          <div className="title">
            <h2>LG Magenta</h2>
            <h4>Connecting architects, designers and engineers.</h4>
          </div>
          <div className="image">
            <Image src="/img/1.png" alt="Project image" layout="responsive" width={500} height={300} />
          </div>
        </div>
      </section>
    </div>
  )
}
