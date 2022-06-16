import React from "react";
import { PageHeader } from "antd";
import "../styles/Navbar.scss";
import { Link, useLocation } from "react-router-dom";


export default function Navbar() {

  const location = useLocation();

  return (
    <div className="navbar">
      <PageHeader
        className="site-page-header"
        title="Book Store"
        extra={[
          <div key={1} className="add-book-button"><Link to="/addbook">Add book</Link></div>,
          <div key={2} className="add-book-button"><Link to="/">{location.pathname === "/home"? "Refresh" : "Back"}</Link></div>
        ]}
      />
    </div>
  );
}
