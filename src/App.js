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
    // the only state that should be managed is the products and languages
    this.state = {
      products: [],
      languages: []
    }
  }

  componentDidMount() {
    this.setState( state => ({languages: sdkBle.map((name, i) => (
      <ul><li key={i}>{sdkBle[i].lang[i]}</li></ul>))
  }))
  }

  render() {
    return (
      <div className='app'>
      <Layout>
        <Header methods={this.state.methods} language={this.state.languages}/>
        <SideNav 
          methods={this.state.languages.methods} 
          supers={this.state.languages.supers} 
          functionNames={this.state.languages.functionNames}
        />
        <MethodOutputView 
          language={this.state.languages}
          output={this.state.languages.functionNames.output}
        />
      </Layout>
      </div>
    );
  }
}

export default App;
