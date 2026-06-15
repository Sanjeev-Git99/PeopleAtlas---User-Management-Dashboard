import React, { useMemo } from 'react';
import { useUser } from '../context/UserContext';
import SearchBar from '../components/SearchBar';
import SortDropdown from '../components/SortDropdown';
import UserCard from '../components/UserCard';
import Pagination from '../components/Pagination';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';

const ITEMS_PER_PAGE = 4; // Display 4 users per page as requested

const HomePage = () => {
  const { 
    users, 
    loading, 
    error, 
    searchQuery, 
    sortOrder, 
    currentPage, 
    setCurrentPage 
  } = useUser();

  const filteredAndSortedUsers = useMemo(() => {
    let result = [...users];

    // Filter by search query
    if (searchQuery) {
      const lowerCaseQuery = searchQuery.toLowerCase();
      result = result.filter((user) => 
        user.name.toLowerCase().includes(lowerCaseQuery)
      );
    }

    // Sort by name
    result.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (sortOrder === 'asc') {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });

    return result;
  }, [users, searchQuery, sortOrder]);

  // Pagination logic
  const paginatedUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredAndSortedUsers.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredAndSortedUsers, currentPage]);

  return (
    <main className="container" style={{ paddingBottom: '4rem', maxWidth: '1000px' }}>
      <div style={{ marginTop: '3rem', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
          Directory
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
          Search and sort persist while you browse a profile (session).
        </p>
      </div>

      <div className="filter-row">
        <SearchBar />
        <SortDropdown />
      </div>

      {loading && <Loader />}
      
      {error && <ErrorMessage message={error} />}

      {!loading && !error && filteredAndSortedUsers.length === 0 && (
        <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
          No users found
        </div>
      )}

      {!loading && !error && filteredAndSortedUsers.length > 0 && (
        <>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {paginatedUsers.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>

          <Pagination 
            totalItems={filteredAndSortedUsers.length} 
            itemsPerPage={ITEMS_PER_PAGE} 
            currentPage={currentPage} 
            setCurrentPage={setCurrentPage} 
          />
        </>
      )}
    </main>
  );
};

export default HomePage;
