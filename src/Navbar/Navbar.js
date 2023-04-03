import React from "react";
import { BrowserRouter, Route, Link, Router, Routes } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">React Blog</a>

          <form className="d-flex" role="search">
            <img
              src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              className="rounded-circle"
              alt="..."
              style={{
                width: "40px",
                height: "40px",
                margin: "0px 20px 0px 0px",
              }}
            />
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Write">Write</Link>
              </li>
              <li>
                <Link to="/Blog">Blog</Link>
              </li>
            </ul>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}
