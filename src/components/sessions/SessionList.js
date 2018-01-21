import React, { Component } from "react";
import { bindActionCreators } from "redux";
import {connect} from "react-redux";
import { sessionGetServiceCall } from "../../actions";

class SessionList extends Component {
  componentWillMount() {
    this.props.sessionGetServiceCall();
  }
  onLeave = (sessionId) => () => {
    console.log(sessionId)
  };
  renderCards(sessions) {
    sessions.map((session) => {
      const { name, description, owner, _id } = session;
      const _class = session.class;
      return (
        <div className="list-info-window">
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
            <button onClick={this.onLeave(_id)}>Leave</button>
          </div>
        </div>
      );
    });
  }
  render() {
    const { sessions = [] } = this.props;
    return (
      <div>
        {sessions.length > 0 && this.renderCards(sessions) }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { sessions } = state.user;
  return {
    sessions
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  sessionGetServiceCall
}, dispatch);

SessionList = connect(mapStateToProps, mapDispatchToProps)(SessionList);

export { SessionList };