import React, { Component } from 'react'
import { Table, Container, Col } from 'reactstrap'

const outputStyle = {
  'backgroundColor': 'black',
  'color': 'white'
}

export default class MethodView extends Component {
  render() {
    return (
      <Container fluid>
        <Col sm='auto'>
          <Table responsive bordered>
            <thead>
              <tr>
                <th>Introduction</th>
                <th>Description</th>
                <th style={outputStyle}>english</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.props.name}</td>
                <th scope="row">{this.props.supers}</th>
                <td style={outputStyle}>sentinel</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td>{this.props.description}</td>
                <td style={outputStyle}></td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td>{this.props.description}</td>
                <td style={outputStyle}>diviner</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Container>
    )
  }
}