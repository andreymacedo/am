import Link from 'next/link';
import Image from 'next/image';

export default function ProjectCard({ href, title, subtitle, thumbnailImgSrc }) {
  return (
    <Link className="project" href={href} key={href}> 
     
        <div className="title">
          <h2>{title}</h2>
          <h6>{subtitle}</h6>
        </div>
        <div className="image">
          <Image 
            src={thumbnailImgSrc} 
            alt={title}
            width={1280}
            height={800}
            priority
            placeholder="blur"
            quality={100}
            blurDataURL={`/public/img/?url=${thumbnailImgSrc}&w=16&q=1`}
          />
        </div>

    </Link>
  );
}
