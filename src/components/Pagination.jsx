import React from 'react';

const Pagination = ({ totalItems, itemsPerPage, currentPage, setCurrentPage }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) return null;

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      gap: '1.5rem', 
      marginTop: '2rem',
      marginBottom: '2rem'
    }}>
      <button 
        onClick={handlePrev} 
        disabled={currentPage === 1}
        style={{
          padding: '0.5rem 1rem',
          border: '1px solid var(--border-color)',
          borderRadius: '4px',
          backgroundColor: 'var(--surface-color)',
          color: currentPage === 1 ? 'var(--text-secondary)' : 'var(--text-primary)',
          cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
          opacity: currentPage === 1 ? 0.5 : 1,
          fontSize: '0.875rem',
          fontWeight: 500
        }}
      >
        Previous
      </button>
      
      <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
        Page {currentPage} of {totalPages}
      </span>

      <button 
        onClick={handleNext} 
        disabled={currentPage === totalPages}
        style={{
          padding: '0.5rem 1rem',
          border: '1px solid var(--border-color)',
          borderRadius: '4px',
          backgroundColor: 'var(--surface-color)',
          color: currentPage === totalPages ? 'var(--text-secondary)' : 'var(--text-primary)',
          cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
          opacity: currentPage === totalPages ? 0.5 : 1,
          fontSize: '0.875rem',
          fontWeight: 500
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
