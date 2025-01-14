import React, { useState } from "react";
import "../App.css";
import blog1 from "../assets/images/blog-1.jpg";
import blog2 from "../assets/images/blog-2.jpg";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "JavaScript Modern Concepts",
      category: "Design",
      date: "2024-10-23",
      displayDate: "Oct 23, 2024",
      image: blog1,
      text: `1. Optional Chaining (?.): Access deep properties in objects without checking every level for validity.  
2. Nullish Coalescing (??): Use a default value when a variable is null or undefined.
3. BigInt: Work with integers of arbitrary size for precise calculations.
4. globalThis: Access the global object in a consistent, cross-environment way.
5. matchAll(): Extract all matches, including groups, from a string using a regular expression.
6. Promise.allSettled(): Handle results of multiple promises, regardless of their resolution or rejection.
7. String.prototype.at(): Retrieve a character from a string using positive or negative indices.
8. Error Cause: Add context to errors by specifying their underlying cause.`,
    },
    {
      id: 2,
      title: "Application Programming Interface",
      category: "Design",
      date: "2025-01-23",
      displayDate: "Jan 14, 2025",
      image: blog2,
      text: "Lets say, you went to a restaurant, the waiter comes to you and asks for your order, the waiter then sends the order to the Chef. The Chef start preparing the food, after the food is prepared. The Chef gives the food to the waiter and it comes to you, the waiter acts as a connection between you and the the chef. THE WAITER IS API. An API is a way for two or more computer programs to communicate with each other.",
    },
  ];

  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      <main>
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <article className="blog" data-page="blog">
            <header>
              <h2 className="h2 article-title">Blog</h2>
            </header>

            <section className="blog-posts">
              <ul className="blog-posts-list">
                {blogPosts.map((post) => (
                  <li key={post.id} className="blog-post-item">
                    {/* <a href="#"> */}
                      <figure className="blog-banner-box">
                        <img src={post.image} alt={post.title} loading="lazy" />
                      </figure>

                      <div className="blog-content">
                        <div className="blog-meta">
                          {/* <p className="blog-category">{post.category}</p> */}
                          <span className="dot"></span>
                          <time dateTime={post.date}>{post.displayDate}</time>
                        </div>

                        <h3 className="h3 blog-item-title">{post.title}</h3>
                        <p className="blog-text">
                          {expanded[post.id] || post.text.length <= 100
                            ? post.text
                            : `${post.text.slice(0, 100)}...`}
                        </p>
                        {post.text.length > 100 && (
                          <button
                            className="read-more-btn"
                            onClick={() => toggleExpand(post.id)}
                          >
                            {expanded[post.id] ? "Less" : "More"}
                          </button>
                        )}
                      </div>
                    {/* </a> */}
                  </li>
                ))}
              </ul>
            </section>
          </article>
        </div>
      </main>
    </>
  );
};

export default Blog;
