import { useState, useEffect } from 'react';

interface ImageWithLazyProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

const ImageWithLazy = ({ src, alt, className = '', width, height }: ImageWithLazyProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSrc, setCurrentSrc] = useState('data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7');

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoading(false);
      setCurrentSrc(src);
    };
  }, [src]);

  return (
    <div className={`relative ${className}`}>
      <img
        src={currentSrc}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        className={`transition-opacity duration-300 ${isLoading ? 'opacity-50' : 'opacity-100'
          } ${className}`}
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default ImageWithLazy; 