import Link from 'next/link';

function ProjectCard({ href, title, subtitle, imgSrc }) {
  return (
    <section id="about">
        <div className="col a" data-aos="example-anim3">
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

        <div className="col b" data-aos="example-anim3" data-aos-delay="200">
          <h4>Worked with</h4>
          <ul>
            <li><a href="https://www.lg.com/br" target='_blank'>LG</a></li>
            <li><a href="https://www.abbottbrasil.com.br/" target='_blank'>Abbot</a></li>
            <li><a href="https://www.chaleao.com.br/" target='_blank'>Leão</a></li>
            <li><a href="https://www.janssen.com/" target='_blank'>Janssen</a></li>
            <li><a href="https://wearemci.com/" target='_blank'>MCI</a></li>
            <li><a href="https://casafy.com.br/" target='_blank'>Casafy</a></li>
            <li><a href="https://economatica.com/" target='_blank'>Economatica</a></li>
            <li><a href="https://www.riprisma.com/" target='_blank'>Prisma</a></li>
            
          </ul>
        </div>
      </section>
  );
}

export default ProjectCard;
