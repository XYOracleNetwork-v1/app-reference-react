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

  // renderNavPlatformItems = () => {
  //   const { platform, onClick } = this.props

  //   return platform.map(platform => (
  //     <DropdownItem key={platform} onClick={onClick} id={platform}>{platform}</DropdownItem>
  //     )
  //   )
  // }

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
        <Navbar className="container navbar-light" expand="md">
          <button onClick={this.toggle} className="btn text-white d-md-none d-lg-none" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="text-dark">OPTIONS  <i className="fa fa-angle-down text-dark"></i></span>
          </button>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar className="navbar-inverse">
              <UncontrolledDropdown nav inNavbar setActiveFromChild>
                <DropdownToggle nav caret className="text-dark">
                  Products
                </DropdownToggle>
                <DropdownMenu right>
                  {this.renderNavProductItems()}
                </DropdownMenu>
              </UncontrolledDropdown>
                {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="text-dark">
                  LOCALE
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    ENGLISH
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    SPANISH
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    PORTUGUESE
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
              <NavItem>
                <NavLink href="https://github.com/XYOracleNetwork" className="text-dark" target="_blank">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

const xyoNav = {
  backgroundColor: '#ecf0f1',
  boxShadow: '2px 2px 8px -2px #3f3b3b',
  margin: '0'
}
