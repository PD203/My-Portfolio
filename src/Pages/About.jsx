import React from "react";
import "../App.css";
import Sidebar from "../components/Sidebar.jsx";
import Navbar from "../components/Navbar.jsx";
import Services from "../components/Services.jsx";

function About() {
  return (
    <>
      <main>
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <article className="about active" data-page="about">
            <header>
              <h2 className="h2 article-title">About me</h2>
            </header>

            <section className="about-text">
              <p>
                Hello! I'm Preeti Dalai, a Front-end Developer and UI Designer
                from Delhi, India, where creativity meets code. I’m obsessed
                with crafting jaw-dropping, user-friendly web experiences that
                feel as good as they look. Armed with HTML, CSS, JavaScript,
                React, and the magic of Tailwind CSS, I build responsive,
                pixel-perfect websites that are fast, intuitive, and bursting
                with personality.
              </p>

              <p>
                Whether it's coding pixel-perfect interfaces or designing sleek,
                accessible layouts, I love bringing ideas to life in ways that
                delight users and solve real-world problems. My work is driven
                by a commitment to clean code, seamless functionality, and
                thoughtful design that resonates with diverse audiences.
              </p>

              <p>
                When I'm not crafting interfaces or sketching wireframes, you
                can find me exploring the vibrant culture of Delhi, diving into
                the latest design trends, or sipping chai while planning my next
                creative project. Let’s collaborate to build something
                extraordinary!
              </p>
            </section>
            <Services />
            <section className="about-text">
              <h3 className="h3 service-title">Why to Hire Me</h3>
              <p>
                I create animated websites that captivate users and drive
                meaningful engagement, helping businesses make a lasting
                impression on their audience. My designs deliver immersive,
                interactive experiences that are visually stunning and optimized
                for seamless performance across all devices. Still have doubts?
                Check out my projects to see the impact for yourself. <br />
                <br />
                If you’re convinced—let’s build an unforgettable web experience
                together! Reach out at{" "}
                <a
                  href="mailto:preetidalai940@gmail.com"
                  className="text-blue-500 underline"
                >
                  preetidalai940@gmail.com
                </a>{" "}
                to bring your vision to life.
              </p>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}

export default About;
