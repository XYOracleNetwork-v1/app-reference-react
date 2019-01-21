import React, { Component } from 'react'
import { Table, Container, Col } from 'reactstrap'

const outputStyle = {
  'backgroundColor': 'black',
  'color': 'white'
}

export default class MethodView extends Component {
  render() {
    const descriptionOutput = this.props.description.map((description, i) => (
        <td key={i}>{this.props.description[i]}</td>
      )
    )

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
                {descriptionOutput}
                <td style={outputStyle}>diviner</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Container>
    )
  }
}