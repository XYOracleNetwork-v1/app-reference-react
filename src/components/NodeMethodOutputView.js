import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'
import { Helmet } from 'react-helmet'

const negativeMargin = {
  'marginBottom': '-1em'
}

export default class NodeMethodOutputView extends Component {
  
  renderDescriptionsandOutputs = () => {
    const { methods } = this.props

    return methods.map(method =>
      <div><Row className="pb-3 my-0 bg-dark text-light">
        <Col className="col-6 bg-light text-dark pb-2" style={negativeMargin}>
          <h3 className="font-weight-bold mt-3">{method.name}</h3>
          <strong><i>{method.desc}</i></strong>
        </Col>
        <Col className="col-6 bg-dark text-light">
        </Col>
      </Row>
        <div>
          {method.objects.map(object => (
            <Row className="border-bottom">
              <Col style={colAppStyle}>
                <div>
                  <h5 key={`${method}`} style={{ color: 'grey' }}> Object <a name={`${object.name}`}> {object.name} </a> </h5>
                  <h6 style={xyoPinkText}>Super Class</h6>
                  <p key={`${object.name}`} style={codePad}>{object.super}</p>
                  {object.desc ? <h6 className="text-info">What it does</h6> : <p></p>}
                  <p key={`${object.super}`} style={codePad}>{object.desc}</p>
                </div>
              </Col>
              <Col className="bg-dark" style={outputStyle}>
                {object.properties ? <h5 style={xyoOrangeText}>Properties</h5> : <div></div>}
                <div>
                  {(object.properties || []).map(property => (
                    <div>
                      <p>Name</p>
                      <CodeGrid>{property.name}</CodeGrid>
                      <p>Type</p>
                      <CodeGrid>{property.type}</CodeGrid>
                      {property.desc ? <p>Description</p> : <p></p>}
                      <CodeGrid>{property.desc}</CodeGrid>
                    </div>
                  ))}
                </div>
                <div style={smallPadding}>
                  <Helmet>
                    <script>
                      {`((window.gitter = {}).chat = {}).options = {room: 'XYOracleNetwork/Dev', preLoad: true}`}
                    </script>
                    <script src="https://sidecar.gitter.im/dist/sidecar.v1.js" async defer></script>
                  </Helmet>
                  <h5>Enumerations</h5>
                  {(object.enumerations || []).map(e => (
                    <div style={xyoBlueText}>
                      <p>name</p>
                      <CodeGrid><a name={`${object.name}`}>{e.name}</a></CodeGrid>
                      <p>values</p>
                      {(e.values || []).map(val =>
                        <div>
                          <CodeGrid>{val.name}</CodeGrid>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div style={smallPadding}>
                  {object.functions ? <p>Functions</p> : <p></p>}
                  {(object.functions || []).map(f => (
                    <div style={outputStyle}>
                      <p>name</p>
                      <CodeGrid>{f.name}</CodeGrid>
                      {(f.parameters || []).map(param =>
                        <div>
                          <CodeGrid>{JSON.stringify(param.async)}</CodeGrid>
                          {(f.returns || []).map(returns => (
                            <div>
                              <CodeGrid> ({param.name} {param.type}) => {returns.desc}</CodeGrid>
                              <p>Returns</p>
                              <CodeGrid>{returns.type}</CodeGrid>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          ))}
        </div>
      </div>
    )
  }
  render() {
    return (
      <div>
        <div>
          {this.renderDescriptionsandOutputs()}
        </div>
        <div>
          <iframe title="nodeSandbox" src="https://codesandbox.io/s/github/pllearns/lorenzo-site" style={sandboxStyle} sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
        </div>
      </div>
    )
  }
}

const CodeGrid = props => {
  return (
    <code style={codePad}> {props.children} </code>
  )
}

const sandboxStyle = {
  "width":"100%",
  "height":"500px",
  "border":"0", 
  "border-radius": "4px",
  "overflow": "hidden"
}

const outputStyle = {
  backgroundColor: 'black',
  color: 'white',
  padding: '25px'
}

const colAppStyle = {
  padding: '25px'
}

const xyoBlueText = {
  color: '#58a0d7'
}

const xyoPinkText = {
  color: '#ec417b'
}

const xyoOrangeText = {
  color: '#f37047'
}

const smallPadding = {
  paddingTop: '15px'
}

const codePad = {
  paddingLeft: '25px',
  paddingBottom: '10px'
}