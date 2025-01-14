import React, { useEffect } from "react";
import "../App.css";
import { FaEye } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.png";
import project3 from "../assets/images/project-3.png";
import project4 from "../assets/images/project-4.gif";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "GoDrive",
      category: "Web development",
      image: project1,
      link: "https://github.com/PD203/GoDrive",
      description: "A real-time ride-booking platform with live tracking.",
    },
    {
      id: 2,
      title: "CineScope",
      category: "Web development",
      image: project2,
      link: "https://movie-streaming-green.vercel.app/",
      description: "A platform to explore and discover movies effortlessly.",
    },
    {
      id: 3,
      title: "Ecommerce Cosmetics",
      category: "Web development",
      image: project3,
      link: "https://github.com/PD203/Ecommerce-cosmetics",
      description: "A full-stack e-commerce for beauty products.",
    },
    {
      id: 4,
      title: "Git Clone",
      category: "Developer Tools",
      image: project4,
      link: "https://brawlhalla.example.com",
      description:
        "A simplified version of Git, focusing on core version control concepts and functionality.",
    },
  ];

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
              {["All", "Web design", "Web development", "Developer Tools"].map(
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
                {["All", "Web design", "Web development", "Developer Tools"].map(
                  (filter, index) => (
                    <li key={index} className="select-item">
                      <button data-select-item>{filter}</button>
                    </li>
                  )
                )}
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
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <figure className="project-img">
                      <div className="project-item-icon-box">
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
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </article>
      </div>
    </main>
  );
};

export default Portfolio;
