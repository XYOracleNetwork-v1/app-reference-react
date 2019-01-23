import React, { Component } from 'react'
import { Table, Container, Col, Row } from 'reactstrap'

const outputStyle = {
  'backgroundColor': 'black',
  'color': 'white'
}

export default class MethodView extends Component {
  
  renderDescriptions = () => {
    const { methods } = this.props

    return methods.map(method =>
      <Col>
        <p>{method.name}</p>
        {method.desc}
        {method.objects.map(object => (
          <div>
            <br></br>
            <p className="text-primary">{object.name}</p>
            <h6><strong>Super Class</strong></h6>
            <p>{object.super}</p>
          </div>
        ))}
      </Col> 
    )
  }

  renderOutputs = () => {
    const { methods } = this.props

    return methods.map(method => method.objects.map(object => 
    <Col>
      <p>{object.name}</p>
      <p>{object.super}</p>
    </Col>
      )
    )
  }

  render() {
    console.log(this.props.methods[1].objects[1].enumerations[0].values)
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
                <td style={outputStyle}>{this.renderOutputs()}</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Container>
    )
  }
}