export const filterPosts = (posts, query) => {
    if (!query) return posts;
    return posts.filter(post =>
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.content.toLowerCase().includes(query.toLowerCase())
    );
};
