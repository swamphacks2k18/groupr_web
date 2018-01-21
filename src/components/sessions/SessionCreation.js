import React, { Component } from "react";

class SessionSelection extends Component {
  componentWillMount() {

  }
  render() {
    navigator.geolocation.getCurrentPosition(function(location) {
      console.log(location.coords.latitude);
      console.log(location.coords.longitude);
      console.log(location.coords.accuracy);
    });
    return (
      <div>

      </div>
    );
  }
}

export { SessionSelection };