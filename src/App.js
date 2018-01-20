import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux'
import { logger } from 'redux-logger';
import createHistory from 'history/createBrowserHistory'
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './reducers';
import logo from './logo.svg';
import './App.css';
import { HelloWorld } from './components/common';

const getStore = () => {
  return createStore(reducer, {}, applyMiddleware(ReduxThunk, logger));
};

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={getStore()}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <HelloWorld />
        </div>
      </Provider>
    );
  }
}

export default App;
