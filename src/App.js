import React, { Component } from 'react'
import './App.css'
import Layout from './components/Layout'
import Header from './components/Header'
import MainHeader from './components/MainHeader'
import SideNav from './components/SideNav'
import MethodView from './components/MethodOutputView'
import sdkBle from './BLE_Schema'
import swiftObject from './Object_Swift_Schema'
import nodeObject from './Node_Package_Schema'

import kotlinObject from './Core_Kotlin_Schema'
import { Container, Col, Row } from 'reactstrap'
import NodeMethodOutputView from './components/NodeMethodOutputView'

const kotlinBleProductState = sdkBle[0]
const swiftCoreObjectState = swiftObject[0]
const nodePkgObjectState = nodeObject[0]
const kotlinObjectState = kotlinObject[0]


// think about adding hooks...

// look at matrix project


class App extends Component {
  
  // something like const [methods] = useState(kotlinBleProductState.modules) ???

  constructor(props) {
    super(props)
    this.state = {
      products: [kotlinBleProductState.id, swiftCoreObjectState.id, nodePkgObjectState.id, kotlinObjectState.id],
      platforms: [kotlinBleProductState.platform, swiftCoreObjectState.platform, nodePkgObjectState.platform, kotlinObjectState.platform],
      platformViews: [],
      methods: []
    }
    
    this.handleClick = this.handleClick.bind(this)
  }
  
  componentDidMount() {
    this.setState({
      methods: kotlinBleProductState.modules
    })
  }
  
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
    if (e.target.id === kotlinObjectState.id) {
      this.setState({
        methods: kotlinObjectState.modules
      })
    }
    
    if (e.target.id === 'Android') {
      this.setState({
        methods: kotlinBleProductState.modules
      })
    }

    if (e.target.id === 'iOS') {
      this.setState({
        methods: swiftCoreObjectState.modules
      })
    }

    if (e.target.id === 'web') {
      this.setState({
        methods: nodePkgObjectState.modules
      })
    }

    if (e.target.id === 'java') {
      this.setState({
        methods: kotlinObjectState.modules
      })
    }
  }
  
  render() {
    return (
      <div className='app'>
      <Layout>
        <div className="fixed-top">
          <MainHeader />
          <Header 
            methods={this.state.methods} 
            platform={this.state.platforms} 
            product={this.state.products} 
            onClick={this.handleClick}
            />
        </div>
        <Container fluid style={containerStyle}>
          <Row>
              <Col xs="auto" className="d-none d-sm-block">
              <SideNav 
                methods={this.state.methods} 
                product={this.state.products}
                />
            </Col>
            <Col className="xs-6 border-left">
                {
                  this.state.methods === nodePkgObjectState.modules ? 
                  <NodeMethodOutputView
                  methods={this.state.methods}
                  platform={this.state.platforms}
                  /> : 
                  <MethodView
                  methods={this.state.methods} 
                  platform={this.state.platforms}
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

const containerStyle = {
  marginTop: '5rem'
}

export default App