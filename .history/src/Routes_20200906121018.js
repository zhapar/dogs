import React, { Component } from "react";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/dogs"
          render={() => <DogList dogs={this.props.dogs} />}
        />
        <Route exact path="/dogs/:name" render={getDog} />
      </Switch>
    );
  }
}

export default Routes;
