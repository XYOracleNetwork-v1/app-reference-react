import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout'
import Header from './components/Header'
import SideNav from './components/SideNav'
import MethodOutputView from './components/MethodOutputView'
import sdkBle from './BLE_Schema'
import { Container, Col, Row } from 'reactstrap'

const productState = sdkBle.map(productId => (<li key={productId}>{productId.id}</li>))

const languageState = sdkBle.map(lang => (<li key={lang}>{lang.lang}</li>))

const methodState = sdkBle.map((method, i) => method.modules.map(mod => <p>{mod.name}</p>))

const classState = sdkBle.map((method, i) => method.modules.map(mod => mod.objects.map(obj => <p>{obj.name}</p>)))

const superClassState = sdkBle.map((method, i) => method.modules.map(mod => mod.objects.map(obj => <p>{obj.super}</p>)))

const descriptionState = sdkBle.map((method, i) => (method.modules.map(mod => <p>{mod.desc}</p>)))

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
      products: productState,
      languages: languageState, 
      methods: methodState, 
      classes: classState,
      superClasses: superClassState,
      descriptions: descriptionState   
  }))
}

  render() {

    return (
      <div className='app'>
      <Layout>
        <Header methods={this.state.methods} language={this.state.languages} product={this.state.products}/>
        <Container fluid>
          <Row>
            <Col xs='auto'>
              <SideNav 
                methods={this.state.methods} 
                classes={this.state.classes}
                functionNames={this.state.methods}
                />
            </Col>
            <Col>
              <MethodOutputView 
                language={this.state.languages}
                name={this.state.methods}
                supers={this.state.superClasses} 
                description={this.state.descriptions}
                startName={this.state.mainNames}
                output=''
                />
            </Col>
          </Row>  
        </Container>
      </Layout>
      </div>
    );
  }
}

export default App;
