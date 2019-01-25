import React from 'react'

const Layout = (props) => {
  return (
    <div style={layoutStyle}>
      {props.children}
    </div>
  )
}

export default Layout

const layoutStyle = {
  'fontFamily': 'Titillium Web'
}