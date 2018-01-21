import React, { Component } from "react";
import ReactGoogleMaps from '../common/GoogleMap';
import { bindActionCreators } from "redux";
import {connect} from "react-redux";
import { getInRadius, getLocations } from "../../actions";
import { FormField, GrouprButton } from '../common';

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
  render() {
    const { sessions, longitude, latitude } = this.props;
    console.log(longitude, latitude);

    if (longitude === 0 && latitude === 0) return this.renderLoader();

    return (
      <div>
        <ReactGoogleMaps lat={latitude} long={longitude} />
        <div className="btn-group">
          <GrouprButton text="Create Group" />
          <GrouprButton text="View Your Groups" dark />
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