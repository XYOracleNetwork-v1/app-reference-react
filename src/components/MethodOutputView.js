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
                <th scope="row"></th>
                <td>sentinel</td>
                <td style={outputStyle}>sentinel</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td>archivist</td>
                <td style={outputStyle}></td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td>diviner</td>
                <td style={outputStyle}>diviner</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Container>
    )
  }
}