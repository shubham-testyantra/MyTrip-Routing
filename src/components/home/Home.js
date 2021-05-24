import React from "react";

function Home() {
  return (
    <div>
      {/*--Main Section*/}
      <div className="container-fluid col-sg-12 bodySection">
        <div className="container headCards">
          <h3 className="text-center mt-4">Home</h3>
          <div className=" col-md-12 image-section d-flex mt-4">
            <div className="card col-md-3 col-sm-12 card-structure">
              <img
                src="./images/place-1.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center fw-bold ">
                  New York City
                </h5>
                <p className="card-text">
                  rating:
                  <span>
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </span>
                </p>
                <p>
                  Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod
                  tempor incididunt.
                </p>
                <p />
              </div>
            </div>
            <div className="card col-md-3 col-sm-12 card-structure">
              <img
                src="./images/place-2.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center fw-bold ">
                  Affrican Park
                </h5>
                <p className="card-text ">
                  rating:
                  <span>
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </span>
                </p>
                <p>
                  Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod
                  tempor incididunt.
                </p>
                <p />
              </div>
            </div>
            <div className="card  col-md-3 col-sm-12 card-structure">
              <img
                src="./images/place-3.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center fw-bold ">Vietnam</h5>
                <p className="card-text">
                  rating:
                  <span>
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half" />
                  </span>
                </p>
                <p>
                  Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod
                  tempor incididunt.
                </p>
                <p />
              </div>
            </div>
          </div>
          <div className=" col-md-12 image-section d-flex mt-5">
            <div className="card col-md-3 col-sm-12 card-structure">
              <img
                src="./images/place-4.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center fw-bold ">Netherlands</h5>
                <p className="card-text">
                  rating:
                  <span>
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </span>
                </p>
                <p>
                  Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod
                  tempor incididunt.
                </p>
                <p />
              </div>
            </div>
            <div className="card col-md-3 col-sm-12 card-structure">
              <img
                src="./images/place-5.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center fw-bold ">Australia</h5>
                <p className="card-text ">
                  rating:
                  <span>
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half" />
                  </span>
                </p>
                <p>
                  Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod
                  tempor incididunt.
                </p>
                <p />
              </div>
            </div>
            <div className="card  col-md-3 col-sm-12 card-structure">
              <img
                src="./images/place-6.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center fw-bold ">Costa Rica</h5>
                <p className="card-text">
                  rating:
                  <span>
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half" />
                  </span>
                </p>
                <p>
                  Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod
                  tempor incididunt.
                </p>
                <p />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
