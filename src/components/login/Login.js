import React from "react";

function Login() {
  return (
    <div>
      {/*--Main Section*/}
      <div className="container-fluid col-sg-12 bodySection">
        <div className="container">
          <h3 className="text-center mt-4">Login</h3>
          <div className="mt-4 col-md-8 col-lg-5 mx-auto">
            <div className="card mx-auto p-4">
              <form action="/index.html">
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
                    id="pass"
                    name="password"
                    required
                  />
                </div>
                <div className="mb-3 text-end">
                  <div className="float-start ps-3" />
                  <a className="nav-link-register" href="./register.html">
                    Please Register
                  </a>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary d-flex mx-auto mt-4 px-4"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
