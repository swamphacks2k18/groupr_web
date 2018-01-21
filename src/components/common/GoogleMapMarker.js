import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { Marker, InfoWindow } from 'react-google-maps'
import { getInRadius, getLocations } from "../../actions";

class GoogleMapMarker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  onToggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  infoWindowCard(session) {
    const { name, description, owner, endTime, startTime } = session;
    const _class = session.class;
    return (
      <InfoWindow>
        <div className="info-window">
          <div className="info-window-row">
            <label>Class:</label>
            <p>{_class}</p>
          </div>
          <div className="info-window-row">
            <label>Name:</label>
            <p>{name}</p>
          </div>
          <div className="info-window-row">
            <label>Description:</label>
            <p>{description}</p>
          </div>
          <div className="info-window-row">
            <label>Owner:</label>
            <p>{owner}</p>
          </div>
        </div>
      </InfoWindow>
    );
  }

  generateMarkers(sessions) {
    return sessions.map((session) => {
      const {latitude, longitude } = session;
      return (
        <Marker key={`${latitude}${longitude}`} position={{ lat: latitude, lng: longitude }}>
          { this.infoWindowCard(session) }
        </Marker>
      );
    })
  }
  render() {
    const {latitude, longitude} = this.props.session;
    const { isOpen } = this.state;
    return (
      <Marker
        key={`${latitude}${longitude}`}
        position={{lat: latitude, lng: longitude}}
        onClick={this.onToggleOpen}
      >
        {isOpen && this.infoWindowCard(this.props.session)}
      </Marker>
    );
  }
}

const mapStateToProps = (state) => {
  const { latitude, longitude, sessions } = state.sessions;
  return {
    latitude,
    longitude,
    sessions
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getInRadius,
  getLocations
}, dispatch);

export { GoogleMapMarker };