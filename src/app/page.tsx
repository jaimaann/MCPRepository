'use client';

import { useState, useMemo } from 'react';
import { CardGrid } from '@/components/Card';
import { Search } from '@/components/Search';
import { Pagination } from '@/components/Pagination';
import { allCards } from './data';
import type { CardData } from '@/components/Card';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 12; // Increased from 6 to 12 cards per page since we have optimized the cards
  
  const filteredCards = useMemo(() => {
    if (!searchQuery.trim()) {
      return allCards;
    }
    
    const query = searchQuery.toLowerCase();
    
    return allCards.filter(card => {
      // Search in title and description
      if (
        card.title.toLowerCase().includes(query) ||
        card.description.toLowerCase().includes(query)
      ) {
        return true;
      }
      
      // Search in visible tags
      if (card.tags.some(tag => tag.toLowerCase().includes(query))) {
        return true;
      }
      
      // Search in metadata (if we add it later)
      if (card.metadata.Production_Status?.toLowerCase().includes(query) ||
          card.metadata.Deployment_Type?.toLowerCase().includes(query) ||
          card.metadata.Security_Review_Status?.toLowerCase().includes(query) ||
          card.metadata.Tags?.some(tag => tag.toLowerCase().includes(query))
      ) {
        return true;
      }
      
      return false;
    });
  }, [searchQuery]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredCards.length / cardsPerPage);
  
  // Get current cards for the page
  const currentCards = useMemo(() => {
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    return filteredCards.slice(indexOfFirstCard, indexOfLastCard);
  }, [filteredCards, currentPage, cardsPerPage]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to first page on new search
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top of results
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      {/* Search Component */}
      <Search onSearch={handleSearch} placeholder="Search MCP servers..." />
      
      {/* Display Results or No Results Message */}
      {filteredCards.length > 0 ? (
        <>
          <CardGrid cards={currentCards} />
          
          {/* Only show pagination if we have more than one page */}
          {totalPages > 1 && (
            <Pagination 
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
          
          <div className="results-count">
            Showing {currentCards.length} of {filteredCards.length} results
          </div>
        </>
      ) : (
        <div className="no-results">
          <h3>No results found</h3>
          <p>Try adjusting your search terms or filters</p>
        </div>
      )}
    </div>
  );
}
