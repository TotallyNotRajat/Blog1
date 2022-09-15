import React from "react";

export default function Header() {
  return (
    <div className="container-fluid">
      <div
        className="headerTitle"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "#934",
        }}
      >
        <span
          className="hs"
          style={{
            position: "absolute",
            top: "7%",
            fontSize: "20px",
          }}
        >
          React
        </span>
        <span
          className="hl"
          style={{
            position: "absolute",
            top: "6%",
            fontSize: "100px",
          }}
        >
          Blog
        </span>
      </div>
      <img
        src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt=""
        className=""
        style={{
          width: "100%",
          height: "450px",
          objectFit: "cover",
          marginTop: "50px",
        }}
      />
    </div>
  );
}
