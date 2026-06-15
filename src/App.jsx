import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import UserDetailPage from './pages/UserDetailPage';

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <Router>
          <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/user/:id" element={<UserDetailPage />} />
            </Routes>
          </div>
        </Router>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
