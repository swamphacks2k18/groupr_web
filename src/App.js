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
import { GrouprButton } from './components/common';

const getStore = () => {
  return createStore(reducer, {}, applyMiddleware(ReduxThunk, logger));
};

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
      <Provider store={getStore()}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <GrouprButton text="btn1" onPress={this.clicked1}/>
          <GrouprButton text="btn2" onPress={this.clicked2} dark={true}/>
          <GrouprButton text="btn3" onPress={this.clicked3}/>
        </div>
      </Provider>
    );
  }
}

export default App;
