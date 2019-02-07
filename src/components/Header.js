import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'

import logo from '../XYODevelopers_XYO_Logo.png'

export default class Header extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  renderNavPlatformItems = () => {
    const { platform, onClick } = this.props

    return platform.map(platform => (
        <DropdownItem onClick={onClick} id={platform}>{platform}</DropdownItem>
      )
    )
  }

  renderNavProductItems = () => {
    const { product, onClick } = this.props

    return product.map(prod => (
        <DropdownItem onClick={onClick} id={prod}>{prod}</DropdownItem>
      )
    )
  }

  render() {
    return (
      <div className='navbar fixed-top' style={xyoColor}>
        <Navbar expand="md">
          <NavbarBrand href="http://dev-developers.xyo.network.s3-website-us-east-1.amazonaws.com/" style={navTextStyle}><img src={logo} alt="XYO Dev Portal"/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret style={navTextStyle}>
                  Products
                </DropdownToggle>
                <DropdownMenu right>
                  {this.renderNavProductItems()}
                </DropdownMenu>
              </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret style={navTextStyle}>
                  Platforms
                </DropdownToggle>
                <DropdownMenu right>
                  {this.renderNavPlatformItems()}
                </DropdownMenu>
              </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret style={navTextStyle}>
                  Locale
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    English
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Spanish
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Portuguese
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="https://github.com/XYOracleNetwork" style={navTextStyle} target="_blank">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

const navTextStyle = {
  color: 'white',
}

const xyoColor = {
  backgroundImage: 'linear-gradient(to right, #8A2BE2, #8d8fc6, #58a0d7)',
  boxShadow: '2px 2px 8px -2px #3f3b3b'
}
