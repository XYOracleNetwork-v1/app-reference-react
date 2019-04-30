import React from 'react'
import { Helmet } from 'react-helmet'
import './Layout.css'

const Layout = props => {
  return (
    <div>
    <Helmet>
      <title>XYO Reference Portal</title>
      <meta name="description" content="XYO Reference"/>
    </Helmet>
      {props.children}
    </div>
  )
}

export default Layout
