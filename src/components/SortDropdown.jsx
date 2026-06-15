import React from 'react';
import { useUser } from '../context/UserContext';

const SortDropdown = () => {
  const { sortOrder, setSortOrder } = useUser();

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <label style={{ 
        fontSize: '0.75rem', 
        color: 'var(--text-secondary)', 
        textTransform: 'uppercase',
        fontWeight: 600,
        marginTop: '1.5rem' // align with input visually because the input has a label above it, but here the label is inline
      }}>
        SORT
      </label>
      <div style={{ position: 'relative', marginTop: '1.5rem' }}>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          style={{ 
            padding: '0.75rem 2.5rem 0.75rem 1rem', 
            border: '1px solid var(--border-color)', 
            borderRadius: '8px',
            backgroundColor: 'var(--surface-color)',
            color: 'var(--text-primary)',
            fontSize: '1rem',
            appearance: 'none',
            outline: 'none',
            cursor: 'pointer'
          }}
        >
          <option value="asc">Name A &rarr; Z</option>
          <option value="desc">Name Z &rarr; A</option>
        </select>
        <div style={{ 
          position: 'absolute', 
          right: '1rem', 
          top: '50%', 
          transform: 'translateY(-50%)', 
          pointerEvents: 'none', 
          color: 'var(--text-primary)' 
        }}>
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SortDropdown;
