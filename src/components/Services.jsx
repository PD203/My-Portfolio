import React from "react";
import '../App.css'
import webdesign from "../assets/images/icon-design.png"
import webdevelopment from "../assets/images/icon-dev.png"
import mobileApp from "../assets/images/icon-app.svg"
import photoGraphy from "../assets/images/icon-photo.svg"


function Services() {
  return (
    <section className="service">
      <h3 className="h3 service-title">What I'm doing</h3>

      <ul className="service-list">

      <li className="service-item">
          <div className="service-icon-box">
            <img
              src={webdevelopment}
              alt="Web development icon"
              width="40"
            />
          </div>
          <div className="service-content-box">
            <h4 className="h4 service-item-title">Frontend Development</h4>
            <p className="service-item-text">
            Building functional websites to meet your business needs.
            </p>
          </div>
        </li>

        <li className="service-item">
          <div className="service-icon-box">
            <img
              src={webdesign}
              alt="design icon"
              width="40"
            />
          </div>
          <div className="service-content-box">
            <h4 className="h4 service-item-title">Web design</h4>
            <p className="service-item-text">
              High-quality designs with Figma for a seamless user experience.
            </p>
          </div>
        </li>


        {/* <li className="service-item">
          <div className="service-icon-box">
            <img
              src={mobileApp}
              alt="mobile app icon"
              width="40"
            />
          </div>
          <div className="service-content-box">
            <h4 className="h4 service-item-title">Mobile apps</h4>
            <p className="service-item-text">
              Professional development of applications for iOS and Android.
            </p>
          </div>
        </li> */}

        {/* <li className="service-item">
          <div className="service-icon-box">
            <img
              src={photoGraphy}
              alt="camera icon"
              width="40"
            />
          </div>
          <div className="service-content-box">
            <h4 className="h4 service-item-title">Photography</h4>
            <p className="service-item-text">
              I make high-quality photos of any category at a professional
              level.
            </p>
          </div>
        </li> */}
      </ul>
    </section>
  );
}

export default Services;
