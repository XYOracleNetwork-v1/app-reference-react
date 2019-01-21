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
      languages: [],
      methods: [],
      superClasses: [],
      descriptions: [],
      mainNames: []
    }
  }

  componentDidMount() {
    this.setState( state => ({
      products: sdkBle.map((productId, i) => (
        <p key={i}>{productId.id}</p>)
      ),
      languages: sdkBle.map((lang, i) => (
      <p key={i}>{lang.lang[i]}</p>)
      ), 
      methods: sdkBle.map((method, i) => (
      <p key={i}>{method.modules[i].objects[i].name}</p>)
      ), 
      superClasses: sdkBle.map((superClass, i) => (
        <p key={i}>{superClass.modules[i].objects[i].super}</p>)
      ),
      descriptions: sdkBle.map((desc, i) => (
        <p key={i}>{desc.modules[i].objects[i].desc}</p>)
      ),
      mainNames: sdkBle.map((method, i) => (
        <p key={i}>{method.modules[i].name}</p>)
      )    
  }))
}

  render() {
    return (
      <div className='app'>
      <Layout>
        <Header methods={this.state.methods} language={this.state.languages} product={this.state.products}/>
        <SideNav 
          methods={this.state.methods} 
          supers={this.state.superClasses} 
          functionNames={this.state.methods}
        />
        <MethodOutputView 
          language={this.state.languages}
          name={this.state.methods}
          description={this.state.descriptions}
          startName={this.state.mainNames}
          output=''
        />
      </Layout>
      </div>
    );
  }
}

export default App;
