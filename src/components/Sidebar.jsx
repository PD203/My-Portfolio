import React, { useEffect, useState } from "react";
import "../App.css";
import myavatar from "../assets/images/my-avatar.jpg";
import { IoIosMail } from "react-icons/io";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

function Sidebar() {
  const [isSidebarActive, setSidebarActive] = useState(false);

  // Toggle the sidebar visibility
  const toggleSidebar = () => {
    setSidebarActive((prev) => !prev);
  };

  return (
    <aside
      className={`sidebar ${isSidebarActive ? "active" : ""}`}
      data-sidebar
    >
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={myavatar} alt="Om Kharche" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Preeti Dalai">
            Preeti Dalai
          </h1>
          <h1 className="title">Frontend Developer</h1>
        </div>

        <button
          className="info_more-btn"
          data-sidebar-btn
          onClick={toggleSidebar}
        >
          <span>Show Contacts</span>
          <IoMdArrowDropdown />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <IoIosMail />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:omtestmail@gmail.com" className="contact-link">
                preetidalai940@gmail.com
              </a>
            </div>
          </li>

          {/* <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+12133522795" className="contact-link">
                +91 8319590628
              </a>
            </div>
          </li> */}

          <li className="contact-item">
            <div className="icon-box">
              <LiaBirthdayCakeSolid />
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="1982-06-23">20 October, 2003</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <MdOutlineLocationOn />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Delhi, India</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
        <li className="social-item">
            <a href="https://github.com/PD203" className="social-link">
            <FaGithub />
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://www.linkedin.com/in/preeti-dalai-06303b273?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="social-link"
            >
              <FaLinkedin />
            </a>
          </li>
          <li className="social-item">
            <a href="https://x.com/Preetidalai20?t=ZAoRkiLq4AhP6Ogji50gOQ&s=09">
              <FaTwitter />
            </a>
          </li>
          
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
