import React from 'react';
import SearchPage from './components/SearchPage';  // or SearchPopup if you choose the alternative solution
import posts from './data/posts';  // Your posts data
import './App.css';  // Assuming custom styles are here

const App = () => {
    return (
        <div className="app">
            <h1 className="app-title">Welcome to PetMe News and Blogs</h1>
            <SearchPage posts={posts} />  {/* Use SearchPopup if you choose the alternative solution */}
        </div>
    );
};

export default App;
