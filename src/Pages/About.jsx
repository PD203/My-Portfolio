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
                I am a MERN Stack Developer and UI Designer from Raipur, India.
                I enjoy building modern web applications that seamlessly blend
                functionality with aesthetics, transforming complex challenges
                into simple, beautiful and intuitive designs.
              </p>

              <p>
                I make sure the websites are not only user-friendly but also
                visually appealing. My goal is to ensure your site is
                functional, attractive, and clearly communicates your message.
              </p>
            </section>
            <Services />
          </article>
        </div>
      </main>
    </>
  );
}

export default About;
