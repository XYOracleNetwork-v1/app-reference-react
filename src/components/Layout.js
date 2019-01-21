import React from 'react'

const layoutStyle = {
  'fontFamily': 'Titillium Web'
}

const Layout = (props) => {
  return (
    <div style={layoutStyle}>
      {props.children}
    </div>
  )
}

export default Layout