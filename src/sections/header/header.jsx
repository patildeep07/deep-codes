import React from "react";
import "./header.css";

const Header = () => {
  const menu = ["About", "Work"];

  return (
    <>
      <header className="header">
        <h2>Deep Patil</h2>

        <nav className="web-menu">
          {menu.map((item) => {
            return (
              <a href={`#`} key={item}>
                {item}
              </a>
            );
          })}

          <button className="resume-btn">Resume</button>
        </nav>
      </header>
    </>
  );
};

export default Header;
