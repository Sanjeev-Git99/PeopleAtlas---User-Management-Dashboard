import React from 'react';
import { useUser } from '../context/UserContext';

const SearchBar = () => {
  const { searchQuery, setSearchQuery, setCurrentPage } = useUser();

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page on new search
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: '300px' }}>
      <label style={{ 
        fontSize: '0.75rem', 
        color: 'var(--text-secondary)', 
        textTransform: 'uppercase', 
        marginBottom: '0.5rem',
        fontWeight: 600
      }}>
        SEARCH BY NAME
      </label>
      <input
        type="text"
        placeholder="Start typing..."
        value={searchQuery}
        onChange={handleSearch}
        style={{ 
          padding: '0.75rem 1rem', 
          border: '1px solid var(--border-color)', 
          borderRadius: '8px',
          backgroundColor: 'var(--surface-color)',
          color: 'var(--text-primary)',
          fontSize: '1rem',
          outline: 'none',
          width: '100%'
        }}
      />
    </div>
  );
};

export default SearchBar;
