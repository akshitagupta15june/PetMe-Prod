import React, { useState } from 'react';
import './SearchInput.css'; // Assuming custom styles are here

const SearchInput = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form className="search-form" onSubmit={handleSearch}>
            <input
                className="search-input"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for news and blogs..."
            />
            <button className="search-button" type="submit">Search</button>
        </form>
    );
};

export default SearchInput;
