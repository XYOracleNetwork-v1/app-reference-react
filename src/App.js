import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout'
import Header from './components/Header'
import SideNav from './components/SideNav'
import MethodOutputView from './components/MethodOutputView'
import sdkBle from './BLE_Schema'

console.log(sdkBle[0].modules)

class App extends Component {
  constructor(props) {
    super(props)
    // the only state that should be managed is the products and languages, but not there yet
    this.state = {
      products: [],
      languages: [],
      methods: [],
      classes: [],
      superClasses: [],
      descriptions: []
    }
  }

  componentDidMount() {
    this.setState( state => ({
      products: sdkBle.map(productId => (
        <li key={productId}>{productId.id}</li>)
      ),
      languages: sdkBle.map(lang => (
      <li key={lang}>{lang.lang}</li>)
      ), 
      methods: sdkBle.map((method, i) => method.modules.map(mod => <p>{mod.name}</p>)
      ), 
      classes: sdkBle.map((method, i) => method.modules.map(mod => mod.objects.map(obj => <p>{obj.name}</p>))
      ),
      superClasses: sdkBle.map((method, i) => method.modules.map(mod => mod.objects.map(obj => <p>{obj.super}</p>))
      ),
      descriptions: sdkBle.map((method, i) => ( method.modules.map(mod => <p>{mod.desc}</p>))
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
          classes={this.state.classes}
          functionNames={this.state.methods}
          />
        <MethodOutputView 
          language={this.state.languages}
          name={this.state.methods}
          supers={this.state.superClasses} 
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
