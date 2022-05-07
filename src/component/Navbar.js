import React from "react";
import { PageHeader } from "antd";
import "../styles/Navbar.scss";



export default function Navbar() {
  return (
    <div className="navbar">
      <PageHeader
        className="site-page-header"
        title="Book Store"
        extra={[
          <div key={1} className="add-book-button">Add Book</div>,
        ]}
      />
    </div>
  );
}
