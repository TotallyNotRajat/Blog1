import React from "react";
import Comments from "./Comments";

export default function SinglePost() {
  return (
    <div className="">
      <div className="card text-center">
        <div className="card-header">Featured</div>
        <img
          src="https://sm.ign.com/t/ign_in/screenshot/default/marvel-entertainment-marvel-studios-black-panther-wakanda-fo_gysh.1280.png"
          className=""
          alt="..."
        />
        <div className="card-body">
          <h2 className="card-title">Special title treatment</h2>
        </div>
        <div className="card-footer text-muted">
          <div className="row justify-content-evenly">
            <span className="col-4">by :</span>
            <span className="col-4">Published : 2 Days ago</span>
            <span className="col-4">Updated : </span>
          </div>
          <div className="row justify-content-end">
            <div className="col-1">
              <i className="fa-solid fa-trash" style={{ color: "tomato" }}></i>
            </div>
            <div className="col-1">
              <i
                className="fa-regular fa-pen-to-square"
                style={{ color: "teal" }}
              ></i>
            </div>
          </div>
        </div>
      </div>
      <p className="card-text" style={{ margin: "50px" }}>
        With supporting text below as a natural lead-in to additional content.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam numquam
        consequatur laboriosam ex eaque accusantium, voluptatibus tempora omnis
        quae temporibus reiciendis doloribus, excepturi perspiciatis nulla,
        nesciunt voluptatem quaerat blanditiis dicta? Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Veritatis reprehenderit possimus nam
        impedit minus blanditiis, sint atque tenetur. Iste velit quibusdam
        consequuntur explicabo porro. Neque dolor recusandae libero odio
        earum?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
        quidem veritatis neque optio hic nesciunt? Eligendi necessitatibus porro
        doloribus soluta magni. Recusandae, id est voluptates autem totam
        doloremque architecto facere.With supporting text below as a natural
        lead-in to additional content. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Nam numquam consequatur laboriosam ex eaque
        accusantium, voluptatibus tempora omnis quae temporibus reiciendis
        doloribus, excepturi perspiciatis nulla, nesciunt voluptatem quaerat
        blanditiis dicta? Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Veritatis reprehenderit possimus nam impedit minus blanditiis,
        sint atque tenetur. Iste velit quibusdam consequuntur explicabo porro.
        Neque dolor recusandae libero odio earum?Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Fugiat quidem veritatis neque optio hic
        nesciunt? Eligendi necessitatibus porro doloribus soluta magni.
        Recusandae, id est voluptates autem totam doloremque architecto
        facere.With supporting text below as a natural lead-in to additional
        content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
        numquam consequatur laboriosam ex eaque accusantium, voluptatibus
        tempora omnis quae temporibus reiciendis doloribus, excepturi
        perspiciatis nulla, nesciunt voluptatem quaerat blanditiis dicta? Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
        reprehenderit possimus nam impedit minus blanditiis, sint atque tenetur.
        Iste velit quibusdam consequuntur explicabo porro. Neque dolor
        recusandae libero odio earum?Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Fugiat quidem veritatis neque optio hic nesciunt?
        Eligendi necessitatibus porro doloribus soluta magni. Recusandae, id est
        voluptates autem totam doloremque architecto facere.With supporting text
        below as a natural lead-in to additional content. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Nam numquam consequatur laboriosam ex
        eaque accusantium, voluptatibus tempora omnis quae temporibus reiciendis
        doloribus, excepturi perspiciatis nulla, nesciunt voluptatem quaerat
        blanditiis dicta? Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Veritatis reprehenderit possimus nam impedit minus blanditiis,
        sint atque tenetur. Iste velit quibusdam consequuntur explicabo porro.
        Neque dolor recusandae libero odio earum?Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Fugiat quidem veritatis neque optio hic
        nesciunt? Eligendi necessitatibus porro doloribus soluta magni.
        Recusandae, id est voluptates autem totam doloremque architecto
        facere.With supporting text below as a natural lead-in to additional
        content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
        numquam consequatur laboriosam ex eaque accusantium, voluptatibus
        tempora omnis quae temporibus reiciendis doloribus, excepturi
        perspiciatis nulla, nesciunt voluptatem quaerat blanditiis dicta? Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
        reprehenderit possimus nam impedit minus blanditiis, sint atque tenetur.
        Iste velit quibusdam consequuntur explicabo porro. Neque dolor
        recusandae libero odio earum?Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Fugiat quidem veritatis neque optio hic nesciunt?
        Eligendi necessitatibus porro doloribus soluta magni. Recusandae, id est
        voluptates autem totam doloremque architecto facere.
      </p>

      <div className="d-flex justify-content-center">
        <div className="d-flex flex-column mb-3">
          <>
            <div className="me-auto p-2">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="p-2">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Comment
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={3}
                defaultValue={""}
              />
            </div>
            <div>
              <button type="submit" className="btn btn-primary">
                Comment
              </button>
            </div>
          </>
        </div>
      </div>
      <div className="flex-column">
        <div className="me-auto p-2">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="p-2">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Comment
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={3}
            defaultValue={""}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            Comment
          </button>
        </div>
        <div className="d-flex justify-content-center">
          <div class="flex-column">
            <Comments />
          </div>
        </div>
      </div>
    </div>
  );
}
