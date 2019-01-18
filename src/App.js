import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout'
import Header from './components/Header'
import SideNav from './components/SideNav'
import MethodOutputView from './components/MethodOutputView'
import functionNames from './products'
import sdkBle from './BLE_Schema'

console.log(sdkBle[0].modules[0])

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      supers: [],
      methods: [],
      languages: []
    }
  }

  componentDidMount() {
    this.setState( state => ({supers: sdkBle.map((name, i) => (
      <ul><li key={i}>{sdkBle[i].modules[i]}</li></ul>))
  }))
  }

  render() {
    return (
      <div className='app'>
      <Layout>
        <Header/>
        <SideNav superClass={this.state.supers}/>
        <MethodOutputView language={this.state.language}/>
      </Layout>
      </div>
    );
  }
}

export default App;
