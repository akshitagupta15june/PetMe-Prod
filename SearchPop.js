import React, { useState } from 'react';
import Modal from 'react-modal';
import SearchInput from './SearchInput';
import PostsList from './PostsList';
import { filterPosts } from './FilterPosts';
import './SearchPopup.css'; // Assuming custom styles are here

const SearchPopup = ({ posts }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [filteredPosts, setFilteredPosts] = useState(posts);

    const handleSearch = (query) => {
        setFilteredPosts(filterPosts(posts, query));
        setModalIsOpen(false);
    };

    return (
        <div className="search-popup">
            <button className="open-popup-button" onClick={() => setModalIsOpen(true)}>Search</button>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                <SearchInput onSearch={handleSearch} />
            </Modal>
            <PostsList posts={filteredPosts} />
        </div>
    );
};

export default SearchPopup;
