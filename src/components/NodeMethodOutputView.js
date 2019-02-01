import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'
import { Helmet } from 'react-helmet'

const negativeMargin = {
  'marginBottom': '-1em'
}

export default class NodeMethodOutputView extends Component {
  render() {
    return (
      <div>
        <iframe style={ negativeMargin } title="nodeSandbox" src="https://codesandbox.io/embed/new?codemirror=1" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
      </div>
    )
  }
}