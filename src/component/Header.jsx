import React from "react";

function Header({ text, bgColor, textColor }) {
  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={headerStyle} /*style={{ backgroundColor: 'blue', color: 'red' }}*/>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

export default Header;
