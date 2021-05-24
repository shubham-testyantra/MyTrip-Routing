import React from "react";

function Contact() {
  return (
    <div>
      {/*--Main Section*/}
      <div className="container-fluid col-sg-12 bodySection">
        <div className="container">
          <h3 className="text-center mt-4">Contact Us</h3>
          <div className="mt-4">
            <div className="card mx-auto" style={{ width: "36rem" }}>
              <img
                src="./images/contact-photo.jpg"
                className="card-img-top mx-auto profile"
                alt="..."
              />
              <div className="card-body ">
                <p className="card-text"></p>
                <div className="py-3">
                  <div className="float-start fw-bold px-5 ">
                    <span>
                      <i className="fas fa-user" />
                    </span>
                    Name
                  </div>
                  <div className="float-start px-4 text-end text-muted">
                    Axel Blaze
                  </div>
                </div>
                <div className="py-3">
                  <div className="float-start fw-bold px-5">
                    <span>
                      <i className="fas fa-user" />
                    </span>
                    Contact
                  </div>
                  <div className="float-start px-1 text-end text-muted">
                    +1 666 888 0001
                  </div>
                </div>
                <div className="py-3">
                  <div className="float-start fw-bold px-5">
                    <span>
                      <i className="fas fa-user" />
                    </span>
                    Email
                  </div>
                  <div className="float-start px-4 text-end text-muted">
                    info@example.com
                  </div>
                </div>
                <div className="py-3">
                  <div className="float-start fw-bold px-5">
                    <span>
                      <i className="fas fa-user" />
                    </span>
                    Address
                  </div>
                  <div className="float-start  text-end text-muted">
                    3134 Doctors Drive, Los Angeles, California, USA.
                  </div>
                </div>
                <p />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
