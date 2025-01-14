import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";

function Navbar() {
  const location = useLocation();

  useEffect(() => {
    // Get all the navigation links
    const navigationLinks = document.querySelectorAll("[data-nav-link]");

    // Reset active class for all links
    navigationLinks.forEach(link => link.classList.remove("active"));

    // Find the link that matches the current route and add 'active' class
    navigationLinks.forEach(link => {
      if (link.getAttribute("href") === location.pathname) {
        link.classList.add("active");
      }
    });
  }, [location]);

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link" data-nav-link>
            About
          </Link>
        </li>

        <li className="navbar-item">
          <Link to="/resume" className="navbar-link" data-nav-link>
            Resume
          </Link>
        </li>

        <li className="navbar-item">
          <Link to="/portfolio" className="navbar-link" data-nav-link>
            Portfolio
          </Link>
        </li>

        <li className="navbar-item">
          <Link to="/blog" className="navbar-link" data-nav-link>
            Blog
          </Link>
        </li>

        {/* <li className="navbar-item">
          <Link to="/contact" className="navbar-link" data-nav-link>
            Contact
          </Link>
        </li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
