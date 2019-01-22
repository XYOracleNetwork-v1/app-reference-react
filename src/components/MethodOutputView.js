import React, { Component } from 'react'
import { Table, Container, Col } from 'reactstrap'

const outputStyle = {
  'backgroundColor': 'black',
  'color': 'white'
}

export default class MethodView extends Component {
  
  renderDescriptions = () => {
    return this.props.methods.map(method => 
      method.descriptions.map((desc, i) => (
        <tr>
          <td key={`${i}`}>{desc}</td>
        </tr>
      )))
  }

  render() {
    return (
      <Container fluid>
        <Col sm='auto'>
          <Table responsive bordered>
            <thead>
              <tr>
                <th>Description</th>
                <th style={outputStyle}>Output</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {this.renderDescriptions()}
                <td style={outputStyle}>This is where the ouptut and enumerations should go</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Container>
    )
  }
}