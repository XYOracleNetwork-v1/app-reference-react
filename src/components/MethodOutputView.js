import React, { Component } from 'react'
import { Table, Container, Col, Row } from 'reactstrap'
import Prism from 'prismjs'

const outputStyle = {
  'backgroundColor': 'black',
  'color': 'white'
}

export default class MethodView extends Component {
  
  renderDescriptions = () => {
    const { methods } = this.props

    return methods.map(method =>
      <Col>
        <h4 className="text-success">{method.name}</h4>
        {method.desc}
        {method.objects.map(object => (
          <div>
            <br></br>
            <p className="text-primary">{object.name}</p>
            <h6 className="text-info">Super Class</h6>
            <p>{object.super}</p>
            <h6 className="text-info">What it does</h6>
            <p>{object.desc}</p>
            <h6 className="text-info">Properties</h6>
            <p>{(object.properties || []).map(property => (
              <div>
                <p><strong>Name</strong> {property.name}</p>
                <p><strong>Type</strong> {property.type}</p>
              </div>
            ))}</p>
          </div>
        ))}
      </Col> 
    )
  }

  renderOutputs = () => {
    const { methods } = this.props

    return methods.map(method => method.objects.map((object, i) => 
      <Col>
        {(object.enumerations || []).map(e => (
          <div>
            <p>Enumerations</p>
            <p>name</p>
            <code>{e.name}</code>
            <p>values</p>
            {(e.values || []).map(val => 
              <div>
                <code>{val.name}</code>
              </div>
            )}
          </div>
        ))}
        {(object.functions || []).map(f => (
          <div>
            <code>{f.name}</code>
            <br></br>
            {(f.parameters || []).map(param => 
              <div>
                <code>{JSON.stringify(param.async)}</code>
                <p>Parameter</p>
                <code>{param.name}</code>
                <p>Type</p>
                <code>{param.type}</code>
                {(f.returns || []).map(returns => (
                  <div>
                    <p>Returns</p>
                    <p>type</p>
                    <code>{returns.type}</code>
                    <p>description</p>
                    <code>{returns.desc}</code>
                  </div>
                ))}
              </div>
              )}
          </div>
        ))}
        <code>Code samples here as well</code>
      </Col>
      )
    )
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
                <td style={outputStyle}>{this.renderOutputs()}</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Container>
    )
  }
}