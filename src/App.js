import React, { Component } from 'react'
import './App.css'
import Layout from './components/Layout'
import Header from './components/Header'
import SideNav from './components/SideNav'
import MethodView from './components/MethodOutputView'
import sdkBle from './BLE_Schema'
import swiftObject from './Object_Swift_Schema'
import nodeObject from './Node_Package_Schema'
import { Container, Col, Row } from 'reactstrap'
import NodeMethodOutputView from './components/NodeMethodOutputView';

const kotlinBleProductState = sdkBle[0]
const swiftCoreObjectState = swiftObject[0]
const nodePkgObjectState = nodeObject[0]

console.log(kotlinBleProductState.modules)

const containerStyle = {
  marginTop: '6rem'
}

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      products: [kotlinBleProductState.id, swiftCoreObjectState.id, nodePkgObjectState.id],
      languages: [kotlinBleProductState.lang, swiftCoreObjectState.lang],
      methods: [],
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.setState({
      methods: kotlinBleProductState.modules
    })
  }

  // handleStateChange( targetId, event ) {
  //   if (targetId === event.id) {
  //     this.setState({
  //       methods: event.modules
  //     })
  //   }
  // }

  handleClick(e) {
    if (e.target.id === swiftCoreObjectState.id) {
      this.setState({
        methods: swiftCoreObjectState.modules
      })
    }

    if (e.target.id === kotlinBleProductState.id) {
      this.setState({
        methods: kotlinBleProductState.modules
      })
    }

    if (e.target.id === nodePkgObjectState.id) {
      this.setState({
        methods: nodePkgObjectState.modules
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
                {
                  this.state.methods === nodePkgObjectState.modules ? 
                    <NodeMethodOutputView
                      methods={this.state.methods}
                      language={this.state.language}
                    /> : 
                    <MethodView
                      methods={this.state.methods} 
                      language={this.state.languages}
                    />
                }
            </Col>
          </Row>  
        </Container>
      </Layout>
      </div>
    )
  }
}

export default App