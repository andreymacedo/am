import Link from 'next/link';
import Image from 'next/image';

export default function ProjectCard({ href, title, subtitle, coverImgSrc }) {
  return (
    <Link className="project" href={href} key={href}> 
     
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
            placeholder="blur"
            blurDataURL={`/public/img/image?url=${coverImgSrc}&w=16&q=1`}
          />
        </div>

    </Link>
  );
}
