import React, { Component } from 'react'
import { Table, Container, Col, Row } from 'reactstrap'
import Prism from 'prismjs'

const outputStyle = {
  'backgroundColor': 'black',
  'color': 'white'
}

export default class MethodView extends Component {
  
  renderDescriptionsandOutputs = () => {
    const { methods } = this.props

    return methods.map(method =>
      <Container fluid>
            <h4 className="text-success">{method.name}</h4>
            <strong>{method.desc}</strong>
          {method.objects.map(object => (
            <Row>
            <Col>
              <br></br>
              <h2 key={`${method}`} className="text-primary">
                <a name={`${object.name}`}>{object.name}</a>
              </h2>
              <h6 className="text-info">Super Class</h6>
              <p key={`${object.name}`}>{object.super}</p>
              <h6 className="text-info">What it does</h6>
              <p key={`${object.super}`}>{object.desc}</p>
            </Col>
              <Col style={outputStyle}>
              <p className="text-info">Properties</p>
              {(object.properties || []).map(property => (
                <div>
                  <p key={`${object.property}`}><strong>Name</strong> <code>{property.name}</code></p>
                    <p key={`${object}`}><strong>Type</strong> <code>{property.type}</code></p>
                  <p key={`${object}`}><strong>Type</strong> <code>{property.desc}</code></p>
                </div>
              ))}
              {(object.enumerations || []).map(e => (
                <div>
                  <p>Enumerations</p>
                  <p>name</p>
                  <code><a name={`${object.name}`}>{e.name}</a></code>
                  <p>values</p>
                  {(e.values || []).map(val =>
                    <div>
                      <code>{val.name}</code>
                    </div>
                  )}
                </div>
              ))}
              {(object.functions || []).map(f => (
                <div style={outputStyle}>
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
            </Col>
        </Row>
      ))}
      </Container>
    )
  }

  render() {
    return (
      <div>
        {this.renderDescriptionsandOutputs()}
      </div>
    )
  }
}