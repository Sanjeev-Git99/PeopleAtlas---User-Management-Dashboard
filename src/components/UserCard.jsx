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
      className="user-card-row"
      style={{ cursor: 'pointer' }}
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
