import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout'
import Header from './components/Header'
import SideNav from './components/SideNav'
import MethodView from './components/MethodOutputView'
import sdkBle from './BLE_Schema'
import { Container, Col, Row } from 'reactstrap'

const productState = sdkBle.map(productId => (<li key={productId}>{productId.id}</li>))

const languageState = sdkBle[0].lang

const methodState = sdkBle[0].modules


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      products: productState,
      languages: languageState,
      methods: methodState,
    }
  }

  // componentDidMount() {
  //   this.setState( state => ({
  //     products: productState,
  //     languages: languageState, 
  //     methods: methodState
  // }))
// }

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
              />
            </Col>
            <Col>
              <MethodView
                methods={this.state.methods} 
                language={this.state.languages}
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
