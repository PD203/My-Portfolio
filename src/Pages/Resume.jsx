import React from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import { FaBookOpen } from "react-icons/fa";
import Sidebar from "../components/Sidebar";

function Resume() {
  return (
    <>
      <main>
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <article className="resume" data-page="resume">
            <header>
              <h2 className="h2 article-title">Resume</h2>
            </header>

            {/* Education Section */}
            <section className="timeline">
              <div className="title-wrapper">
                <div className="icon-box">
                  <FaBookOpen />
                </div>
                <h3 className="h3">Education</h3>
              </div>

              <ol className="timeline-list">
                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">
                    Sant Gahira Guru Vishwavidyalaya, Sarguja, Ambikapur (C.G.)
                  </h4>
                  <span>2021 — 2024</span>
                  <p className="timeline-text">
                    Bachelor of Computer Applications (BCA)
                  </p>
                </li>

                {/* <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">
                    High School of Art and Design
                  </h4>
                  <span>2017 — 2018</span>
                  <p className="timeline-text">
                    Duis aute irure dolor in reprehenderit in voluptate, quila
                    voluptas mag odit aut fugit, sed consequuntur magni dolores
                    eos.
                  </p>
                </li> */}
              </ol>
            </section>

            {/* Skills Section */}
            <section className="skill">
              <h3 className="h3 skills-title">My Skills</h3>

              <ul className="skills-list content-card">
                <li className="skills-item">
                  <div className="title-wrapper">
                    <h5 className="h5">HTML</h5>
                    <data value="90">90%</data>
                  </div>
                  <div className="skill-progress-bg">
                    <div
                      className="skill-progress-fill"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </li>

                <li className="skills-item">
                  <div className="title-wrapper">
                    <h5 className="h5">CSS</h5>
                    <data value="80">80%</data>
                  </div>
                  <div className="skill-progress-bg">
                    <div
                      className="skill-progress-fill"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </li>

                <li className="skills-item">
                  <div className="title-wrapper">
                    <h5 className="h5">Tailwind CSS</h5>
                    <data value="75">75%</data>
                  </div>
                  <div className="skill-progress-bg">
                    <div
                      className="skill-progress-fill"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </li>

                <li className="skills-item">
                  <div className="title-wrapper">
                    <h5 className="h5">Javascript</h5>
                    <data value="80">80%</data>
                  </div>
                  <div className="skill-progress-bg">
                    <div
                      className="skill-progress-fill"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </li>

                <li className="skills-item">
                  <div className="title-wrapper">
                    <h5 className="h5">React JS</h5>
                    <data value="70">70%</data>
                  </div>
                  <div className="skill-progress-bg">
                    <div
                      className="skill-progress-fill"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </li>

                <li className="skills-item">
                  <div className="title-wrapper">
                    <h5 className="h5">Node JS</h5>
                    <data value="60">60%</data>
                  </div>
                  <div className="skill-progress-bg">
                    <div
                      className="skill-progress-fill"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </li>

                <li className="skills-item">
                  <div className="title-wrapper">
                    <h5 className="h5">Restful APIs</h5>
                    <data value="60">60%</data>
                  </div>
                  <div className="skill-progress-bg">
                    <div
                      className="skill-progress-fill"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </li>

                <li className="skills-item">
                  <div className="title-wrapper">
                    <h5 className="h5">Express</h5>
                    <data value="60">60%</data>
                  </div>
                  <div className="skill-progress-bg">
                    <div
                      className="skill-progress-fill"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </li>

                <li className="skills-item">
                  <div className="title-wrapper">
                    <h5 className="h5">Mongo Db</h5>
                    <data value="60">60%</data>
                  </div>
                  <div className="skill-progress-bg">
                    <div
                      className="skill-progress-fill"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </li>

                <li className="skills-item">
                  <div className="title-wrapper">
                    <h5 className="h5">Figma</h5>
                    <data value="50">50%</data>
                  </div>
                  <div className="skill-progress-bg">
                    <div
                      className="skill-progress-fill"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                </li>

                <li className="skills-item">
                  <div className="title-wrapper">
                    <h5 className="h5">Git & Github</h5>
                    <data value="50">50%</data>
                  </div>
                  <div className="skill-progress-bg">
                    <div
                      className="skill-progress-fill"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                </li>
              </ul>
            </section>

            {/* Experience Section */}
            <section style={{ marginTop: "20px" }}  className="timeline">
              <div className="title-wrapper">
                <div className="icon-box">
                  <FaBookOpen />
                </div>
                <h3 className="h3">Experience</h3>
              </div>

              <ol className="timeline-list">
                {/* <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">Creative Director</h4>
                  <span>2015 — Present</span>
                  <p className="timeline-text">
                    Nemo enim ipsam voluptatem blanditiis praesentium voluptum
                    delenit atque corrupti, quos dolores et qvuas molestias
                    exceptur.
                  </p>
                </li> */}

                {/* <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">Art Director</h4>
                  <span>2013 — 2015</span>
                  <p className="timeline-text">
                    Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
                    delenit atque corrupti, quos dolores et quas molestias
                    exceptur.
                  </p>
                </li> */}

                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">Fresher</h4>
                  {/* <span>2010 — 2013</span> */}
                  {/* <p className="timeline-text">
                    Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
                    delenit atque corrupti, quos dolores et quas molestias
                    exceptur.
                  </p> */}
                </li>
              </ol>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}

export default Resume;
