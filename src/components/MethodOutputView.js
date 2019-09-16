import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'

const CodeGrid = props => {
  return (
    <code style={codePad}> {props.children} </code>
  )
}

const outputStyle = {
  backgroundColor: "black",
  color: "white",
  padding: "25px"
}

const colAppStyle = {
  padding: "25px"
}

const xyoBlueText = {
  color: "#58a0d7",
  padding: "10px"
}

const xyoPinkText = {
  color: "#ec417b",
  fontSize: "16px",
  paddingTop: "10px",
  paddingBottom: "5px"
}

const xyoOrangeText = {
  color: "#f37047"
}

const classPadding = {
  paddingBottom: "15px",
}

const smallPadding = {
  paddingTop: "15px"
}

const codePad = {
  paddingBottom: "30px"
}

const returnGrid = {
  paddingTop: "40px"
}

const superText = {
  paddingTop: "0px",
  paddingBottom: "20px"
}

const negativeMargin = {
  marginBottom: "-1em"
}

export default class MethodView extends Component {
  
  renderDescriptionsandOutputs = () => {
    const { methods } = this.props
  
    return methods.map(method =>
      <div>
        <Row className="pb-3 my-0 bg-dark text-light">
          <Col className="col-12 col-sm-6 bg-light text-dark pb-2" style={negativeMargin}>
            <h3 className="font-weight-bold mt-3">{method.name}</h3>
            <strong><i>{method.desc}</i></strong>
          </Col>
            <Col className="col-12 col-sm-6 bg-dark text-light">
          </Col>
        </Row>
        <div>
          {method.objects.map(object => (
            <Row className="border-bottom">
              <Col className="col-12 col-sm-6" style={colAppStyle}>
                <div>
                  <h5 key={`${method}`} style={classPadding}><a name={`${object.name}`} href='https://reference.xyo.network/'> {object.name} </a> </h5>
                  {object.super ? <h6 style={xyoPinkText}>Super Class</h6> : <p></p>}
                  <p key={`${object.name}`} style={superText}>{object.super}</p>
                  {object.desc ? <h6 className="text-info">What it does</h6> : <p></p>}
                  <p key={`${object.super}`} style={codePad}>{object.desc}</p>
                  {object.properties ? <h5 style={xyoOrangeText}>Properties</h5> : <div></div>}
                  <div>
                    {(object.properties || []).map(property => (
                      <div>
                        <h4 style={{paddingTop: '20px', paddingBottom: '20px', fontWeight: 'bold'}}>{property.name}</h4>
                        <h5 style={xyoPinkText}>Type</h5>
                        <p style={{paddingLeft: '20px'}}>{property.type}</p>
                        {property.desc ? <h5 style={xyoPinkText}>Description</h5> : <p></p>}
                        <p style={{ paddingLeft: '20px', paddingBottom: '30px' }}>{property.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Col>
              <Col className="bg-dark" style={outputStyle}>
                <div style={smallPadding}>
                  {object.enumerations ? <h5>Enumerations</h5> : <p></p>}
                  {(object.enumerations || []).map(e => (
                    <div style={xyoBlueText}>
                      <CodeGrid><a name={`${object.name}`} href='https://reference.xyo.network/'>{e.name}</a></CodeGrid>
                      {(e.values || []).map(val =>
                        <div>
                          <CodeGrid>{val.name}</CodeGrid>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div style={smallPadding}>
                {object.functions ? <h5>Functions</h5> : <p></p>}
                  {(object.functions || []).map(f => (
                    <div style={outputStyle}>
                      <div>
                        <CodeGrid>{f.name}</CodeGrid>
                        ({(f.parameters || []).map((param) => <CodeGrid>{param.name} {param.type}</CodeGrid>)})
                        <br></br>
                        {f.desc}
                        <br></br>
                          <div style={returnGrid}> 
                              {(f.returns || []).map(returns => (
                                <div>
                                  <h6>returns</h6>
                                  <CodeGrid>{returns.desc}</CodeGrid>
                                  <CodeGrid>{returns.type}</CodeGrid>
                                </div>
                              ))}
                          </div>
                        </div>
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
        {this.renderDescriptionsandOutputs()}
      </div>
    )
  }
}