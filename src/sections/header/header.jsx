import React from "react";
import "./header.css";

const Header = () => {
  const menu = ["About", "Projects", "Experience", "Skills", ""];

  return (
    <>
      <header className="header">
        <h2>Deep Patil</h2>

        <div className="web-menu">
          {menu.map((item) => {
            return <h3 key={item}>{item}</h3>;
          })}
        </div>
      </header>
    </>
  );
};

export default Header;
