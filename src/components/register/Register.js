import React from "react";

function Register() {
  return (
    <div>
      {/*--Main Section*/}
      <div className="container-fluid col-sg-12 bodySection">
        <div className="container">
          <h3 className="text-center mt-4">Register</h3>
          <div className="mt-4 col-md-8 col-lg-7 mx-auto">
            <div className="card mx-auto p-4 registerCard">
              <form action="/login.html">
                <div className="mb-3">
                  <label htmlFor="Name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="uname"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="pnum"
                    name="phone"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="pass"
                    name="password"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label pe-3"
                  >
                    Gender
                  </label>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="male"
                  />
                  <label className="form-check-label" htmlFor="male">
                    {" "}
                    Male{" "}
                  </label>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="female"
                  />
                  <label className="form-check-label" htmlFor="female">
                    {" "}
                    Female{" "}
                  </label>
                </div>
                <div className="mb-3">
                  <label htmlFor="Name" className="form-label">
                    Address
                  </label>
                  <textarea
                    className="form-control"
                    aria-label="With textarea"
                    id="address"
                    name="address"
                    defaultValue={""}
                  />
                </div>
                <div className="mb-3">
                  {/* <label for="Name" class="form-label"></label> */}
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected disabled>
                      Favourites Places
                    </option>
                    <option value={1}>New York City</option>
                    <option value={2}>Mont Blanc</option>
                    <option value={3}>Norway Lake</option>
                    <option value={4}>Affrican Park</option>
                    <option value={5}>Vietnam</option>
                    <option value={6}>Netherlands</option>
                    <option value={7}>Greece</option>
                    <option value={8}>Australia</option>
                    <option value={9}>Costa Rica</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="btn btn-danger d-flex mx-auto mt-4 px-4"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
