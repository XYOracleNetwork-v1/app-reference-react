import React from 'react'
import PrismCode from 'react-prism'
import '../newPrism.css'

const CodeGrid = props => (
  <pre>
    <PrismCode>
      {props.children}
    </PrismCode>
  </pre>
)

export default CodeGrid