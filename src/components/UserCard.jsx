import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserCard = ({ user }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/user/${user.id}`);
  };

  return (
    <div 
      onClick={handleCardClick} 
      style={{ 
        cursor: 'pointer', 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.5rem',
        backgroundColor: 'var(--surface-color)',
        border: '1px solid var(--border-color)',
        borderRadius: '8px',
        marginBottom: '1rem',
        transition: 'all 0.2s ease',
        boxShadow: '0 1px 3px 0 rgba(0,0,0,0.05)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0,0,0,0.05)';
      }}
    >
      <div>
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
          {user.name}
        </h3>
        <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
          {user.email}
        </span>
      </div>
      
      <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
        {user.address.city}
      </div>
    </div>
  );
};

export default UserCard;
