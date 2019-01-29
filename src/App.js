import React, { Component } from 'react'
import './App.css'
import Layout from './components/Layout'
import Header from './components/Header'
import SideNav from './components/SideNav'
import MethodView from './components/MethodOutputView'
import sdkBle from './BLE_Schema'
import swiftObject from './Object_Swift_Schema'
import { Container, Col, Row } from 'reactstrap'

const productState = sdkBle[0].id
const swiftState = swiftObject[0].id

const kotlinState = sdkBle[0].lang
const swiftLangState = swiftObject[0].lang

const methodState = sdkBle[0].modules

const swiftMethodState = swiftObject[0].modules


console.log(swiftState)

const containerStyle = {
  marginTop: '6rem'
}

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      products: [productState, swiftState],
      languages: [kotlinState, swiftLangState],
      methods: [],
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.setState({
      methods: methodState
    })
  }

  handleClick(e) {
    if (e.target.id === swiftState) {
      this.setState({
        methods: swiftMethodState
      })
    }

    if (e.target.id === productState) {
      this.setState({
        methods: methodState
      })
    }
  }

  

  render() {
    return (
      <div className='app'>
      <Layout>
        <Header 
          methods={this.state.methods} 
          language={this.state.languages} 
          product={this.state.products} 
          onClick={this.handleClick}
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