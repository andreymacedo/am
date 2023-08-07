import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function ProjectCard({ href, title, subtitle, thumbnailImgSrc }) {
  const [blurredSrc, setBlurredSrc] = useState(null);
  const [loaded, setLoaded] = useState(false);

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
      <div className="image-container">
        <div className={`image ${loaded ? 'fade-in' : ''}`}>
          <Image
            src={thumbnailImgSrc}
            alt={title}
            width={1280}
            height={800}
            priority
            placeholder={blurredSrc ? 'blur' : 'empty'}
            blurDataURL={blurredSrc}
            quality={100}
            onLoad={handleImageLoad}
          />
        </div>
      </div>
      <style jsx>{`
        .project {
          /* Add any default styles for the project card */
        }

        .title {
          /* Add any default styles for the title */
        }

        .image-container {
          /* Add any default styles for the image container */
        }

        .image {
          opacity: 0; /* Set default image's opacity to 0 */
        }

        .fade-in {
          /* Define the fade-in animation styles for the image */
          animation: fadeIn 1s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </Link>
  );
}
