import React from "react";

export default function Write() {
  return (
    <>
      <div className="container-fluid">
        <img
          src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          className="img-fluid"
          alt="..."
          style={{
            margin: "20px 00px 10px 20px",
            width: "95%",
            height: "250px",
            borderRadius: "10px",
            objectFit: "cover",
          }}
        ></img>
      </div>

      <div className="container">
        <>
          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="inputGroupFile01">
              <i className="fa-solid fa-upload" />
            </label>
            <input type="file" className="form-control" id="inputGroupFile01" />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Title
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Title"
              autoFocus={true}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Write your story
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={12}
              defaultValue={""}
            />
          </div>
        </>

        <button className="btn btn-primary" type="submit">
          Publish
        </button>
      </div>
    </>
  );
}
