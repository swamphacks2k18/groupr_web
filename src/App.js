import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import UserAuth from './components/users/UserAuth';
import { SessionSelection } from './components/sessions/SessionMap';
import { Header } from './components/common'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Header />
            <Switch>
              <Route path="/map" component={SessionSelection}/>
              <Route path="/" component={UserAuth}/>
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
