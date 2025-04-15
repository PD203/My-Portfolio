import React, { useState, useEffect } from "react";
import "../App.css";
import { FaEye } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.png";
import project3 from "../assets/images/project-3.png";
import project4 from "../assets/images/project-4.gif";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Modal from "../components/Modal";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "GoDrive",
      category: "Web development",
      image: project1,
      link: "https://github.com/PD203/GoDrive",
      description: "A real-time ride-booking platform with live tracking.",
      FullDes: `GoDrive is a ride-sharing platform connecting users with captains for seamless transportation.<br><br>
      It features ride booking, real-time tracking, and route optimization using Google Maps for efficient travel.<br><br>
    
      <strong>Tech Stack:</strong><br>
      Frontend: React.js, Tailwind CSS<br>
      Backend: Node.js, Express.js, Socket io<br>
      Database: MongoDB<br>
      Maps Integration: Google Maps API<br><br>
    
      <strong>How It Works:</strong><br>
      - Ride Booking: Users can request a ride by entering their pickup and destination locations.<br>
      - Captain Matching: The platform matches users with nearby captains who can accept or decline the request.<br>
      - Real-Time Tracking: Both the user and captain can track each other's live locations and routes using Google Maps.<br>
      - Navigation: Captains receive optimized routes to reach the user's location efficiently.<br>
      - Journey Completion: Once the ride is completed, the platform updates the status and records the trip details.`,
    },
    {
      id: 2,
      title: "CineScope",
      category: "Web development",
      image: project2,
      link: "https://movie-streaming-green.vercel.app/",
      description: "A platform to explore and discover movies effortlessly.",
      FullDes: `CineScope is a movie discovery platform built using the TMDB (The Movie Database) API, offering users an easy way to explore trending, popular, and top-rated movies. It features detailed movie information, such as overviews, ratings, and genres, as well as real-time search functionality.<br><br>

<strong>Tech Stack:</strong><br>
Frontend: React.js, Tailwind CSS<br>
Backend: Node.js, Express.js<br>
API: TMDB API<br><br>

<strong>How It Works:</strong><br>

- Movie Details: Clicking on a movie displays detailed information such as plot, ratings, release date, and genre.<br>
- Trending and Popular Lists: The platform also displays lists of trending, popular, and top-rated movies based on TMDB's real-time data.<br>
- User-Friendly UI: The design offers an easy-to-navigate interface, making it simple for users to discover their next movie.`,
    },
    {
      id: 3,
      title: "Ecommerce Cosmetics",
      category: "Web development",
      image: project3,
      link: "https://github.com/PD203/Ecommerce-cosmetics",
      description: "A full-stack e-commerce for beauty products.",
      FullDes: `A full-stack e-commerce website provides a seamless shopping experience, from browsing products to secure payments and user account management..<br><br>

<strong>Tech Stack:</strong><br><br>

Frontend: React.js, Styled Components, Tailwind CSS<br>
Backend: Node.js, Express.js<br>
Database: MongoDB<br>
Cloud Storage: Cloudinary for image storage<br>
Payment Integration: Stripe<br><br>

<strong>Features:</strong><br><br>

Product Images: High-quality product images stored and served via Cloudinary for optimized performance.<br>
Search & Filters: Users can search and filter products by categories, price range, and ratings.<br>
User Authentication: Secure user sign-up and login with token-based authentication.<br>
Admin Panel: Admins can manage products, track orders, update stock, and view customer data.<br>
Add to Cart: Users can add items to their cart and review their selections before proceeding to checkout.<br>
Add to Wishlist: Users can save their favorite items to their wishlist for easy access later.<br>
Forgot Password: A secure password recovery feature, allowing users to reset their password via email.<br>
Secure Payment: Integration with Stripe ensures secure payment transactions.<br>
Order History: Users can view their past orders and track the status of current ones.<br>
Product Reviews & Ratings: Customers can leave reviews and ratings for products they’ve purchased.<br>
Mobile Responsive: The website is fully responsive, providing an optimal experience on mobile devices.<br>
Real-Time Stock Updates: Product availability is updated in real-time to prevent over-ordering.`,
    },
    {
      id: 4,
      title: "Git Clone",
      category: "Developer Tools",
      image: project4,
      link: "https://github.com/PD203/GitCLoneJS",
      description:
        "A simplified version of Git, focusing on core version control concepts and functionality.",
      FullDes: `This project is a custom command-line tool that mimics some core Git functionalities. It includes several commands to interact with repositories, such as creating a Git directory, hashing objects, viewing commit trees, and cloning repositories. Each command is designed to handle specific Git operations, enabling users to simulate basic Git workflows.<br><br>
       <strong>Implemented Commands</strong><br><br>

 - init: Initializes a new Git directory.<br>
 - cat-file: Displays object contents from the repository.<br>
 - hash-object: Generates a hash for a given object.<br>
 - ls-tree: Lists the tree structure of a repository.<br>
 - write-tree: Writes the current tree to an object.<br>
 - commit-tree: Commits the tree to the repository.<br>
 - clone: Clones a repository to a new location.
        `,
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  console.log(isModalOpen); // Debugging

  useEffect(() => {
    const select = document.querySelector("[data-select]");
    const selectItems = document.querySelectorAll("[data-select-item]");
    const selectValue = document.querySelector("[data-select-value]");
    const filterItems = document.querySelectorAll("[data-filter-item]");
    const filterButtons = document.querySelectorAll("[data-filter-btn]");

    const toggleElement = (element) => element.classList.toggle("active");

    const filterProjects = (selectedValue) => {
      filterItems.forEach((item) => {
        const isActive =
          selectedValue === "all" || item.dataset.category === selectedValue;
        item.classList.toggle("active", isActive);
      });
    };

    // Handle dropdown selection
    select?.addEventListener("click", () => toggleElement(select));

    selectItems.forEach((item) =>
      item.addEventListener("click", function () {
        const value = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        toggleElement(select);
        filterProjects(value);
      })
    );

    // Handle filter buttons
    let lastActiveButton = filterButtons[0];
    filterButtons.forEach((btn) =>
      btn.addEventListener("click", function () {
        const value = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        filterProjects(value);
        lastActiveButton.classList.remove("active");
        this.classList.add("active");
        lastActiveButton = this;
      })
    );

    return () => {
      select?.removeEventListener("click", () => toggleElement(select));
      selectItems.forEach((item) =>
        item.removeEventListener("click", function () {})
      );
      filterButtons.forEach((btn) =>
        btn.removeEventListener("click", function () {})
      );
    };
  }, []);

  return (
    <main>
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <article className="portfolio" data-page="portfolio">
          <header>
            <h2 className="h2 article-title">Portfolio</h2>
          </header>

          <section className="projects">
            {/* Filter Buttons */}
            <ul className="filter-list">
              {["All", "Web design", "Web development", "Frontend Showcase", "Developer Tools"].map(
                (filter, index) => (
                  <li key={index} className="filter-item">
                    <button
                      className={index === 0 ? "active" : ""}
                      data-filter-btn
                    >
                      {filter}
                    </button>
                  </li>
                )
              )}
            </ul>

            {/* Custom Select Dropdown */}
            <div className="filter-select-box">
              <button className="filter-select" data-select>
                <div className="select-value" data-select-value>
                  Select category
                </div>
                <IoMdArrowDropdown />
              </button>

              <ul className="select-list">
                {[
                  "All",
                  "Web design",
                  "Web development",
                  "Developer Tools",
                ].map((filter, index) => (
                  <li key={index} className="select-item">
                    <button data-select-item>{filter}</button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Projects List */}
            <ul className="project-list">
              {projects.map((project) => (
                <li
                  key={project.id}
                  className="project-item active"
                  data-filter-item
                  data-category={project.category.toLowerCase()}
                >
                  <figure className="project-img">
                    <div
                      className="project-item-icon-box"
                      onClick={() => openModal(project)}
                    >
                      <FaEye />
                    </div>
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                    />
                  </figure>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-category">{project.description}</p>
                </li>
              ))}
            </ul>
          </section>
        </article>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </main>
  );
};

export default Portfolio;
