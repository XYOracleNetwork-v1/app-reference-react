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
                <th>Description</th>
                <th style={outputStyle}>english</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{this.props.supers}</th>
                <td style={outputStyle}>This will be the container for any object that gets returned from the particular method</td>
              </tr>
              <tr>
                <td>{this.props.description}</td>
                <td style={outputStyle}></td>
              </tr>
              <tr>
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