import React, { Component } from "react";
import ReactGoogleMaps from '../common/GoogleMap';
import { bindActionCreators } from "redux";
import {connect} from "react-redux";
import { getInRadius } from "../../actions";
class SessionSelection extends Component {
  componentWillMount() {
    this.props.getInRadius(1);
  }
  renderLoader() {
    return (
      <p className="loading-txt">Loading...</p>
    );
  }
  render() {
    const { sessions, longitude, latitude } = this.props;
    console.log(longitude, latitude)

    if (longitude === 0 && latitude === 0) return this.renderLoader();

    return (
      <ReactGoogleMaps lat={latitude} long={longitude} />
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
  getInRadius
}, dispatch);

SessionSelection = connect(mapStateToProps, mapDispatchToProps)(SessionSelection);

export { SessionSelection };