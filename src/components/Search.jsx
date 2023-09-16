import React, { useState } from 'react';

const Search = ({ onSearch, onReset }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    // Split the input into an array of tags, assuming tags are separated by spaces
    const tags = searchInput.split(' ');
    onSearch(tags);
  };
  const handleReset = () => {
    setSearchInput('');
    onReset();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter tags to search..."
        value={searchInput}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch} className='btn'>Search</button>
      <button onClick={handleReset} className='btn'>Reset</button>
    </div>
  );
};

export default Search;