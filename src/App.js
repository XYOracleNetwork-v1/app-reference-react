import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import SideNav from './components/SideNav'
import MethodView from './components/MethodView'
import OutputView from './components/OutputView'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <SideNav />
        <MethodView />
        <OutputView />
      </div>
    );
  }
}

export default App;
