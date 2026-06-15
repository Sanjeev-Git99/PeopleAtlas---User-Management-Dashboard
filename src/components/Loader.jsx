import React from 'react';

const Loader = () => {
  return (
    <div className="user-grid">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="card shimmer" style={{ height: '160px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ width: '60%', height: '24px', backgroundColor: 'var(--surface-color-hover)', borderRadius: '4px' }}></div>
          <div style={{ width: '40%', height: '16px', backgroundColor: 'var(--surface-color-hover)', borderRadius: '4px' }}></div>
          <div style={{ width: '80%', height: '16px', backgroundColor: 'var(--surface-color-hover)', borderRadius: '4px', marginTop: 'auto' }}></div>
        </div>
      ))}
    </div>
  );
};

export default Loader;
