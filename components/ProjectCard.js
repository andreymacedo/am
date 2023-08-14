import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function ProjectCard({ href, title, subtitle, thumbnailImgSrc }) {
  
  const [loaded, setLoaded] = useState(false);

  

  // Function to handle image load event
  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <Link href={href} key={href} className="project">
      <div className="title">
        <h2>{title}</h2>
        <h6>{subtitle}</h6>
      </div>
      <div className={`image ${loaded ? 'fade-in' : ''}`}>
        <Image
          src={thumbnailImgSrc}
          alt={title}
          width={1280}
          height={800}
          priority
          quality={100}
          onLoad={handleImageLoad}
        />
      </div>

    </Link>
  );
}
