import Link from 'next/link';

function ProjectCard({ href, title, subtitle, imgSrc }) {
  return (
    <section id="about">
        <div className="col a">
          <h4>About</h4>
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
          <h4>Worked with</h4>
          <ul>
            <li><Link href="/lg">LG</Link></li>
            {/*... rest of your links ...*/}
          </ul>
        </div>
      </section>
  );
}

export default ProjectCard;
