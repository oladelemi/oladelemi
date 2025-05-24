import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import BlogPost from '../components/Blog/BlogPost';
import posts from '../data/blog/posts';

const POSTS_PER_PAGE = 5;

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter posts based on search term
  const filteredPosts = useMemo(() => posts.filter((post) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      post.title.toLowerCase().includes(searchLower)
      || post.content.toLowerCase().includes(searchLower)
      || post.tags.some((tag) => tag.toLowerCase().includes(searchLower))
    );
  }), [searchTerm]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  return (
    <Main
      title="Blog"
      description="Abdulateef Oladelemi's Blog - Thoughts on Software Engineering, AI, and Technology"
    >
      <article className="post" id="blog">
        <header>
          <div className="title">
            <h2>
              <Link to="/blog">Blog</Link>
            </h2>
            <p>
              My thoughts on software, AI, and technology, served with a side of chaos, and the
              occasional quesadilla technical analogy.
            </p>
          </div>
        </header>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
        </div>

        <div className="blog-posts">
          {paginatedPosts.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="pagination">
            <button
              type="button"
              className="button"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span className="page-info">
              Page {currentPage} of {totalPages}
            </span>
            <button
              type="button"
              className="button"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}

        {filteredPosts.length === 0 && (
          <p className="no-results">No posts found matching your search.</p>
        )}
      </article>
    </Main>
  );
};

export default Blog;
