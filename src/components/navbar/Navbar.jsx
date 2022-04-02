import React from 'react'
import {
  MobileIcon,
  Nav,
  NavbarLogo,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLinks,
  NavMenu,
} from './style'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  return (
    <>
      <Nav>
        <div className="container">
          <NavbarLogo to="/">Prac</NavbarLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover">Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup">Sign Up</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </div>
      </Nav>
    </>
  )
}

export default Navbar
