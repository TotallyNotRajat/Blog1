import React from "react";

export default function Settings() {
  return (
    <>
      <div className="container">
        <div className="settingsWrapper">
          <div className="settingTitle">
            <div className="d-flex justify-content-between">
              <span
                className="settingupdateTitle"
                style={{ fontSize: "30px", color: "teal" }}
              >
                Update Account
              </span>
              <span
                className="settingupdateTitle"
                style={{ fontSize: "15px", color: "tomato" }}
              >
                Delete Account
              </span>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <img
              src="https://i.pinimg.com/originals/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg"
              className="img-thumbnail"
              alt="..."
              style={{ height: "250px" }}
            />

            <div
              className="input-group mb-3 p-2 flex-shrink-1"
              style={{ height: "50px" }}
            >
              <input
                type="file"
                className="form-control"
                id="inputGroupFile02"
                style={{ display: "none" }}
              />
              <label className="input-group-text" htmlFor="inputGroupFile02">
                <i className="fa-regular fa-circle-user" />
              </label>
            </div>
          </div>

          <form>
            <label htmlFor="exampleInputEmail1" className="form-label">
              Username
            </label>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                @
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
