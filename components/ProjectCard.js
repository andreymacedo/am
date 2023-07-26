import Link from 'next/link';
import Image from 'next/image';

export default function ProjectCard({ href, title, subtitle, coverImgSrc }) {
  return (
    <Link className="project" href={href}>
     
        <div className="title">
          <h2>{title}</h2>
          <h6>{subtitle}</h6>
        </div>
        <div className="image">
          <Image 
            src={coverImgSrc} 
            alt={title}
            width={500}
            height={400}
          />
        </div>

    </Link>
  );
}
