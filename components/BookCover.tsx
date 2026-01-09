
import React from 'react';

interface BookCoverProps {
  title: string;
  image: string;
  className?: string;
}

const BookCover: React.FC<BookCoverProps> = ({ title, image, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      {/* 
        Strictly renders the official cover image.
        Removed rounded corners and borders to ensure exact pixel representation of the provided asset.
      */}
      <div className="shadow-[0_25px_50px_-12px_rgba(0,0,0,0.9)] bg-transparent">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-auto block"
        />
      </div>
    </div>
  );
};

export default BookCover;
