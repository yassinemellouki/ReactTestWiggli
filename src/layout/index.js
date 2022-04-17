import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <header>Header</header>
      <div className="layout-content">
        {children}
      </div>
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
