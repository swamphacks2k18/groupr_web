import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import UserAuth from './components/users/UserAuth';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Groupr</h1>
          </header>
          <UserAuth />
        </div>
      </Provider>
    );
  }
}

export default App;
