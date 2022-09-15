import React from "react";

export default function Post() {
  return (
    <div className="col-sm-6">
      <div className="card text-center">
        <img
          src="https://sm.ign.com/t/ign_in/screenshot/default/marvel-entertainment-marvel-studios-black-panther-wakanda-fo_gysh.1280.png"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" className="btn btn-primary">
            Continue reading
          </a>
        </div>
        <div className="card-footer text-muted">
          <div className="row justify-content-evenly">
            <span className="col-4">by :</span>
            <span className="col-4">Published : 2 Days ago</span>
            <span className="col-4">Updated : </span>
          </div>
        </div>
      </div>
    </div>
  );
}
