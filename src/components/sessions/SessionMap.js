import React, { Component } from "react";
import ReactGoogleMaps from '../common/GoogleMap';
import { bindActionCreators } from "redux";
import { Marker, InfoWindow } from 'react-google-maps'
import {connect} from "react-redux";
import { getInRadius, getLocations } from "../../actions";
import { FormField, GrouprButton, GoogleMapMarker } from '../common';

class SessionSelection extends Component {
  componentWillMount() {
    this.props.getInRadius(200);
    this.props.getLocations();
  }
  renderLoader() {
    return (
      <p className="loading-txt">Loading...</p>
    );
  }

  generateMarkers(sessions) {
    return sessions.map((session) => {
      console.log('tw session', session)
      return (
        <GoogleMapMarker history={this.props.history} key={session._id} session={session} />
      );
    })
  }
  render() {
    const { sessions, longitude, latitude } = this.props;
    const { push, pop } = this.props.history;
    console.log(longitude, latitude);

    if (longitude === 0 && latitude === 0) return this.renderLoader();

    return (
      <div>
        <ReactGoogleMaps
          lat={latitude}
          long={longitude}
          markers={this.generateMarkers(sessions)}
        />
        <div className="btn-group">
          <GrouprButton text="Create Group" onPress={() => push('/groups/create')}/>
          <GrouprButton text="View Your Groups" dark  onPress={() => push('/groups')}/>
        </div>
      </div>
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

SessionSelection = connect(mapStateToProps, mapDispatchToProps)(SessionSelection);

export { SessionSelection };