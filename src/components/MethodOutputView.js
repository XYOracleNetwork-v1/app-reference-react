import React, { Component } from 'react'
import { Table, Container, Col, Row } from 'reactstrap'
import Prism from 'prismjs'

const outputStyle = {
  'backgroundColor': 'black',
  'color': 'white'
}

const xyoBlueText = {
  'color': '#58a0d7'
}

const xyoPinkText = {
  'color': '#ec417b'
}

const xyoOrangeText = {
  'color': '#f37047'
}

export default class MethodView extends Component {
  
  renderDescriptionsandOutputs = () => {
    const { methods } = this.props

    return methods.map(method =>
      <Container fluid>
        <h4 style={xyoPinkText}>{method.name}</h4>
            <strong>{method.desc}</strong>
          {method.objects.map(object => (
            <Row>
            <Col>
              <div>
                <h2 key={`${method}`} style={xyoBlueText}>
                  <a name={`${object.name}`}>{object.name}</a>
                </h2>
                  <h6 style={xyoOrangeText}>Super Class</h6>
                <p key={`${object.name}`}>{object.super}</p>
                <h6 className="text-info">What it does</h6>
                <p key={`${object.super}`}>{object.desc}</p>
              </div>
            </Col>
              <Col style={outputStyle}>
                {object.properties ? <h3 style={xyoOrangeText}>Properties</h3> : <div></div>}
                <div>
                  {(object.properties || []).map(property => (
                    <div>
                      <p>Name</p> 
                      <code>{property.name}</code>
                      <p>Type</p> 
                      <code>{property.type}</code>
                      <p>Description</p> 
                      <code>{property.desc}</code>
                    </div>
                  ))}
                </div>
              {(object.enumerations || []).map(e => (
                <div style={xyoBlueText}>
                  <h3>Enumerations</h3>
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
                      <p>Functions</p>
                      <code>{JSON.stringify(param.async)}</code>
                      {(f.returns || []).map(returns => (
                        <div>
                          <code> async ({param.name}: {param.type}) => {returns.desc}</code>
                          <p>Returns</p>
                          <code>{returns.type}</code>
                          <p>description</p>
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