import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header style={{ 
      backgroundColor: 'var(--surface-color)', 
      borderBottom: '1px solid var(--border-color)',
      padding: '1rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 50
    }}>
      <div className="container flex items-center justify-between">
        <h1 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>
          <span style={{ color: 'var(--text-primary)' }}>People</span>
          <span style={{ color: '#0d9488' }}>Atlas</span>
        </h1>
        
        <button 
          onClick={toggleTheme} 
          style={{
            padding: '0.4rem 1rem',
            border: '1px solid var(--border-color)',
            borderRadius: '4px',
            backgroundColor: 'var(--surface-color)',
            color: 'var(--text-primary)',
            fontSize: '0.875rem',
            fontWeight: 500,
            cursor: 'pointer'
          }}
        >
          {isDarkMode ? 'Light' : 'Dark'}
        </button>
      </div>
    </header>
  );
};

export default Header;
