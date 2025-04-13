import React, { useEffect, useState } from 'react';
import Card, { CardData } from './Card';

interface CardGridProps {
  cards: CardData[];
}

const CardGrid: React.FC<CardGridProps> = ({ cards }) => {
  const [visibleCards, setVisibleCards] = useState<CardData[]>([]);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    // Initial load of visible cards (first 20 cards or all if less than 20)
    const initialLoad = cards.slice(0, 20);
    setVisibleCards(initialLoad);

    // If there are more cards, set up scroll detection for lazy loading
    if (cards.length > 20) {
      const handleScroll = () => {
        if (isScrolling) return;

        setIsScrolling(true);
        
        // Use setTimeout to throttle scroll events
        setTimeout(() => {
          const scrollPosition = window.scrollY + window.innerHeight;
          const pageHeight = document.documentElement.scrollHeight;
          
          // If we're near the bottom of the page, load more cards
          if (scrollPosition > pageHeight * 0.75) {
            const loadedCount = visibleCards.length;
            const nextBatch = cards.slice(loadedCount, loadedCount + 10);
            
            if (nextBatch.length > 0) {
              setVisibleCards(prev => [...prev, ...nextBatch]);
            }
          }
          
          setIsScrolling(false);
        }, 100);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [cards, isScrolling, visibleCards.length]);

  return (
    <div className="card-grid" style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '20px',
    }}>
      {visibleCards.map((card) => (
        <Card key={card.id} data={card} />
      ))}
      {visibleCards.length < cards.length && (
        <div style={{ 
          gridColumn: '1 / -1', 
          textAlign: 'center', 
          padding: '20px',
          color: '#666'
        }}>
          Scroll down to load more...
        </div>
      )}
    </div>
  );
};

export default CardGrid;
