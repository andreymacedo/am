import Link from 'next/link';
import Image from 'next/image';

function ProjectCard({ href, title, subtitle, imgSrc }) {
  return (
    <Link href={href} className="project">
      
        <div className="title">
          <h2>{title}</h2>
          <h4>{subtitle}</h4>
        </div>
        <div className="image">
          <Image src={imgSrc} alt={title} layout="responsive" width={500} height={300} />
        </div>
      
    </Link>
  );
}

export default ProjectCard;
