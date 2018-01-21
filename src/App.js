import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import logo from './logo.svg';
import './App.css';
import { HelloWorld } from './components/common';
import {SessionSelection} from "./components/sessions/SessionSelection";

class App extends Component {
  constructor(props) {
    super(props);
  }

  clicked1 = () => {
    console.log('clicked1')
  };

  clicked2 = () => {
    console.log('clicked2')
  };

  clicked3 = () => {
    console.log('clicked3')
  };

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <SessionSelection />
        </div>
      </Provider>
    );
  }
}

export default App;
