import React from 'react';
import './PostsList.css'; // Assuming custom styles are here

const PostsList = ({ posts }) => {
    return (
        <div className="posts-list">
            {posts.length > 0 ? (
                posts.map((post, index) => (
                    <div className="post-item" key={index}>
                        <h2 className="post-title">{post.title}</h2>
                        <p className="post-content">{post.content}</p>
                    </div>
                ))
            ) : (
                <p className="no-posts">No posts found.</p>
            )}
        </div>
    );
};

export default PostsList;
