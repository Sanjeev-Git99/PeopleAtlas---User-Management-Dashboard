import React from 'react';
import { AlertCircle } from 'lucide-react';

const ErrorMessage = ({ message }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '3rem',
      textAlign: 'center',
      color: 'var(--text-secondary)'
    }}>
      <AlertCircle size={48} style={{ color: '#ef4444', marginBottom: '1rem' }} />
      <h3 style={{ marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Oops! Something went wrong</h3>
      <p>{message}</p>
      <button 
        className="btn btn-outline" 
        style={{ marginTop: '1.5rem' }}
        onClick={() => window.location.reload()}
      >
        Try Again
      </button>
    </div>
  );
};

export default ErrorMessage;
