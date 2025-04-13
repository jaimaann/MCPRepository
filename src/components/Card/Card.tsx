import React from 'react';
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
  const handleCardClick = () => {
    if (data.url) {
      window.open(data.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      className={`card ${data.url ? 'card-clickable' : ''}`} 
      onClick={data.url ? handleCardClick : undefined}
    >
      <div className="card-image-container">
        <Image 
          src={data.imgUrl} 
          alt={data.title}
          width={400}
          height={250}
          className="card-image"
        />
      </div>
      <div className="card-content">
        <h3 className="card-title">{data.title}</h3>
        <p className="card-description">{data.description}</p>
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
