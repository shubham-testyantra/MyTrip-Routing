import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import TripPackages from "./components/trip-packages/TripPackages";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

function App() {
  return (
    <Router>
      {/*-Header Section*/}
      <div className="header">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link className="navbar-brand col-md-2" to="/">
              <span className="sitelogo">
                My<span style={{ color: "#ff7c5b" }}>Trip.</span>
              </span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav col-md-10 me-auto mb-2 mb-lg-0">
                <li className="nav-item col-md-2">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item col-md-2">
                  <Link className="nav-link" to="/contactus">
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item col-md-8">
                  <Link className="nav-link" to="/trippackages">
                    Trip Packages
                  </Link>
                </li>
                <li className="nav-item col-md-1">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item col-md-1">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contactus" component={Contact} />
        <Route path="/trippackages" component={TripPackages} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
