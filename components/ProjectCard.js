import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function ProjectCard({ href, title, subtitle, thumbnailImgSrc }) {
  const [blurredSrc, setBlurredSrc] = useState(null);

  useEffect(() => {
    async function fetchBlurredImage() {
      try {
        const response = await fetch(`/api/getBlurredImage?src=${thumbnailImgSrc}`);
        const data = await response.json();
        setBlurredSrc(data.base64);
      } catch (error) {
        console.error("Error fetching blurred image:", error);
      }
    }

    fetchBlurredImage();
  }, [thumbnailImgSrc]);

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
          placeholder={blurredSrc ? 'blur' : 'empty'}
          blurDataURL={blurredSrc}
          quality={100}
        />
      </div>
    </Link>
  );
}
