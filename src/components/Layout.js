import React from 'react'
import { Helmet } from 'react-helmet'

const Layout = props => {
  return (
    <div style={layoutStyle}>
    <Helmet>
      <title>XYO Reference Portal</title>
      <meta name="description" content="XYO Reference"/>
    </Helmet>
      {props.children}
    </div>
  )
}

export default Layout

const layoutStyle = {
  fontFamily: 'Titillium Web'
}