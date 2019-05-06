import React from 'react'
const SideNavLayout = props => {
  return (
    <div className="side-nav">
      <div style={sideNavStyle} className="px-3">
        <div>
          {props.children}
        </div>
      </div>
    </div>
  )
}

const sideNavStyle = {
  boxShadow: '2px 2px 6px - 2px #3f3b3b',
  listStyle: 'none'
}

export default SideNavLayout