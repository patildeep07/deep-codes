import React from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const menu1 = [
    {
      name: "About",
      link: "/",
    },
    {
      name: "Work",
      link: "/work",
    },
  ];

  const redirectToResume = () => {
    window.open("https://flowcv.com/resume/s28lvbsm7g", "_blank");
  };

  return (
    <>
      <header className="header">
        <h2 className="secondary pointer" onClick={() => navigate("/")}>
          Deep Patil
        </h2>

        <nav className="web-menu">
          {menu1.map(({ name, link }) => {
            return (
              <p
                onClick={() => navigate(link)}
                key={name}
                className="menu-links"
              >
                {name}
              </p>
            );
          })}

          <button className="resume-btn secondary" onClick={redirectToResume}>
            Resume
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
