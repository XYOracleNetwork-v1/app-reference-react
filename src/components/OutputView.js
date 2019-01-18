import React, { Component } from 'react'
import { Container, Table, Col } from 'reactstrap'

export default class OutputView extends Component {
  render() {
    return (
    <Container>
        <Col sm={{ size: '4', offset: 10 }}>
        <Table responsive dark>
          <thead>
            <tr>
              <th>Method Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">XYOGetSentinel</th>
            </tr>
            <tr>
              <th scope="row">XYOGetArchivist</th>
            </tr>
            <tr>
              <th scope="row">XYOGetDiviner</th>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Container>
    )
  }
}