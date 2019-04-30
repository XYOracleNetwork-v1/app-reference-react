import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'

export default class Header extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }

  toggle(e) {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  renderNavPlatformItems = () => {
    const { platform, onClick } = this.props

    return platform.map(platform => (
      <DropdownItem key={platform} onClick={onClick} id={platform}>{platform}</DropdownItem>
      )
    )
  }

  renderNavProductItems = () => {
    const { product, onClick } = this.props

    return product.map(prod => (
        <DropdownItem key={prod} onClick={onClick} id={prod}>{prod}</DropdownItem>
      )
    )
  }

  render() {
    return (
      <div style={xyoNav}>
        <Navbar className="container navbar-dark" expand="md">
          <button onClick={this.toggle} className="btn text-white d-md-none d-lg-none" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="">OPTIONS  <i className="fa fa-angle-down text-white"></i></span>
          </button>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar className="navbar-inverse bg-inverse">
              <UncontrolledDropdown nav inNavbar setActiveFromChild>
                <DropdownToggle nav caret className="text-white">
                  Products
                </DropdownToggle>
                <DropdownMenu right>
                  {this.renderNavProductItems()}
                </DropdownMenu>
              </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="text-white">
                  Platforms
                </DropdownToggle>
                <DropdownMenu right>
                  {this.renderNavPlatformItems()}
                </DropdownMenu>
              </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="text-white">
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
                <NavLink href="https://github.com/XYOracleNetwork" className="text-white" target="_blank">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

const xyoNav = {
  backgroundColor: '#232756',
  boxShadow: '2px 2px 8px -2px #3f3b3b',
  margin: '0'
}
