import React from "react";

function TripPackages() {
  return (
    <div>
      {/*--Main Section*/}
      <div className="container-fluid col-sg-12 bodySection">
        <div className="container">
          <h3 className="text-center mt-4">Trip Packages</h3>
          <div className="mt-4 col-md-8 col-lg-9 mx-auto">
            <div className="card mx-auto p-4">
              <table className="table table-hover text-center">
                <thead>
                  <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Package Name</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Highlights of East Europe</td>
                    <td className="price">
                      <span className="currency">$790</span>/person
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Port Blair Winter Package</td>
                    <td className="price">
                      <span className="currency">$545</span>/person
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Classical Italy and Switzerland (Europamundo)</td>
                    <td className="price">
                      <span className="currency">$960</span>/person
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Dubai Shopping Festival</td>
                    <td className="price">
                      <span className="currency">$815</span>/person
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TripPackages;
