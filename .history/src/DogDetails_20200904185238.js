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
              <div className="card-body">
                <h2 className="card-title">{dog.name}</h2>
                <h4 className="card-subtitle text-muted">
                  {dog.age} years old
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DogDetails;
