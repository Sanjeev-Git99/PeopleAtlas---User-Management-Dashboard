import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';

const UserDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { users, loading: contextLoading, error: contextError } = useUser();
  
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // If we already have the users in context, find it locally
    if (users && users.length > 0) {
      const foundUser = users.find(u => u.id === parseInt(id));
      if (foundUser) {
        setUser(foundUser);
        setLoading(false);
      } else {
        setError('User not found');
        setLoading(false);
      }
    } else if (!contextLoading) {
      // If context finished loading but no users, or we hit page directly
      // Fetch the specific user
      const fetchUser = async () => {
        try {
          setLoading(true);
          const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
          if (!response.ok) {
            if (response.status === 404) throw new Error('User not found');
            throw new Error('Failed to fetch user data');
          }
          const data = await response.json();
          setUser(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
      
      fetchUser();
    } else {
      // Wait for context to finish loading
      setLoading(true);
    }
  }, [id, users, contextLoading]);

  const handleGoBack = () => {
    navigate(-1);
  };

  if (loading || contextLoading) return <main className="container" style={{ padding: '4rem 2rem' }}><Loader /></main>;
  
  if (error || contextError) return <main className="container"><ErrorMessage message={error || contextError} /></main>;

  if (!user) return null;

  return (
    <main className="container" style={{ paddingBottom: '4rem', paddingTop: '3rem', maxWidth: '800px', margin: '0 auto' }}>
      <button 
        onClick={handleGoBack}
        style={{ 
          color: '#0d9488', 
          fontSize: '0.875rem', 
          fontWeight: 600, 
          marginBottom: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}
      >
        <span style={{ fontSize: '1.25rem', lineHeight: 1 }}>&larr;</span> Go back
      </button>

      <div style={{ 
        backgroundColor: 'var(--surface-color)', 
        borderRadius: '16px', 
        overflow: 'hidden',
        border: '1px solid var(--border-color)',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
      }}>
        {/* Top Header Section */}
        <div className="detail-banner" style={{ 
          backgroundColor: '#10b981', // Solid green/teal matching the image
          color: 'white'
        }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, margin: 0, marginBottom: '0.25rem' }}>
            {user.name}
          </h2>
          <p style={{ fontSize: '1rem', margin: 0, opacity: 0.9 }}>
            {user.email}
          </p>
        </div>

        {/* Details Section */}
        <div className="detail-body">
          <div className="detail-grid">
            
            <DetailItem label="PHONE" value={user.phone} />
            <DetailItem label="CITY" value={user.address.city} />
            
            <DetailItem label="COMPANY" value={user.company.name} />
            <DetailItem 
              label="WEBSITE" 
              value={user.website} 
              isLink
            />
            
          </div>
        </div>
      </div>
    </main>
  );
};

// Helper component for displaying detail items
const DetailItem = ({ label, value, isLink }) => (
  <div>
    <div style={{ 
      fontSize: '0.75rem', 
      color: 'var(--text-secondary)', 
      textTransform: 'uppercase', 
      fontWeight: 600, 
      marginBottom: '0.5rem' 
    }}>
      {label}
    </div>
    {isLink ? (
      <a 
        href={`http://${value}`} 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ color: '#0d9488', fontWeight: 500 }}
      >
        {value}
      </a>
    ) : (
      <div style={{ color: 'var(--text-primary)', fontWeight: 500, fontSize: '0.95rem' }}>
        {value}
      </div>
    )}
  </div>
);

export default UserDetailPage;
