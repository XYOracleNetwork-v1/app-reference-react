import React, { Component } from 'react'
import './App.css'
import Layout from './components/Layout'
import Header from './components/Header'
import SideNav from './components/SideNav'
import MethodView from './components/MethodOutputView'
import sdkBle from './BLE_Schema'
import { Container, Col, Row } from 'reactstrap'

const productState = sdkBle[0].id

const languageState = sdkBle[0].lang

const methodState = sdkBle[0].modules

const containerStyle = {
  'margin-top': '6rem'
}

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      products: productState,
      languages: languageState,
      methods: methodState,
    }

    this.handleProductChange = this.handleProductChange.bind(this)
  }

  handleProductChange(e) {
    this.setState({
      products: e.target.value
    })
  }

  render() {
    return (
      <div className='app'>
      <Layout>
        <Header 
          methods={this.state.methods} 
          language={this.state.languages} 
          product={this.state.products} 
          onclick={this.handleProductChange}
        />
        <Container fluid style={containerStyle}>
          <Row>
            <Col xs='auto'>
              <SideNav 
                methods={this.state.methods} 
              />
            </Col>
            <Col className="border-left">
              <MethodView
                methods={this.state.methods} 
                language={this.state.languages}
              />
            </Col>
          </Row>  
        </Container>
      </Layout>
      </div>
    )
  }
}

export default App