import React from "react";
<link rel="stylesheet" type="text/css" href="Header.css"></link>;

function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="Logo">
            <span>AL SKIN</span>
          </div>
          <div>
            <input
              type="text"
              placeholder="O que você está procurando?"
              className="seach-input"
            />
          </div>
        </div>
      </div>
      <nav className="header-nav"></nav>
    </header>
  );
}

export default Header;
