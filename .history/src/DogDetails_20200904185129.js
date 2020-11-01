import React, { Component } from "react";

class DogDetails extends Component {
  render() {
    const { dog } = this.props;
    return (
      <div className="container">
        <div className="DogDetails row justify-content-center">
          <div className="col-11 col-lg-5">
            <div className="DogDetails-card card">
              <img src={dog.src} alt={dog.name} className="card-img-top" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DogDetails;
