import React, { useState } from 'react';

const SearchButton = () => {
    const [searchQuery, setSearchQuery] = useState('');
  
    const handleInputChange = (event) => {
      setSearchQuery(event.target.value);
    };
  
    const handleSearch = () => {
      // Perform the search operation with the searchQuery value
      console.log('Search Query:', searchQuery);
    };
  
    return (
      <div>
        <input type="text" value={searchQuery} onChange={handleInputChange} />
        <button onClick={handleSearch}>Search</button>
      </div>
    );
  };
  