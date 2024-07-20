import React, { useState } from 'react';
import SearchInput from './SearchInput';
import PostsList from './PostsList';
import { filterPosts } from './FilterPosts';
import './SearchPage.css'; // Assuming custom styles are here

const SearchPage = ({ posts }) => {
    const [filteredPosts, setFilteredPosts] = useState(posts);

    const handleSearch = (query) => {
        setFilteredPosts(filterPosts(posts, query));
    };

    return (
        <div className="search-page">
            <SearchInput onSearch={handleSearch} />
            <PostsList posts={filteredPosts} />
        </div>
    );
};

export default SearchPage;
