import React, { useState } from 'react';
import Image from 'next/image';

// Define the type for our card data
export type CardData = {
  id: string;
  imgUrl: string;
  title: string;
  description: string;
  url?: string; // Optional URL for clickable cards
  tags: string[];
  metadata: {
    Production_Status: string;
    Tags: string[];
    Deployment_Type: string;
    Security_Review_Status: string;
  };
};

interface CardProps {
  data: CardData;
}

const Card: React.FC<CardProps> = ({ data }) => {
  const [imageError, setImageError] = useState(false);
  
  const handleCardClick = () => {
    if (data.url) {
      window.open(data.url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div 
      className={`card ${data.url ? 'card-clickable' : ''}`} 
      onClick={data.url ? handleCardClick : undefined}
    >
      <div className="card-image-container" style={{ height: '150px', overflow: 'hidden' }}>
        {!imageError ? (
          <Image 
            src={data.imgUrl} 
            alt={data.title}
            width={200}
            height={150}
            className="card-image"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            onError={handleImageError}
            style={{ objectFit: 'cover' }}
          />
        ) : (
          <div
            className="card-image-fallback"
            style={{ 
              width: '100%', 
              height: '150px', 
              backgroundColor: '#f0f0f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#888',
              fontSize: '14px'
            }}
          >
            Image unavailable
          </div>
        )}
      </div>
      <div className="card-content">
        <h3 className="card-title">{data.title}</h3>
        <p className="card-description" style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>
          {data.description.length > 100 ? `${data.description.substring(0, 100)}...` : data.description}
        </p>
        <div className="card-tags">
          {data.tags.map((tag, index) => (
            <span key={index} className="card-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
