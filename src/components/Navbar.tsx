import React from 'react'
import * as Styled from './Navbar.styles';

const Navbar = () => {
  return (
    <Styled.NavbarContainer>
      <Styled.LinkItem to="/" className="site-title">Home</Styled.LinkItem>
      <Styled.LinkItem to="/universities">Universities</Styled.LinkItem>
      <Styled.LinkItem to="/postalLookup">Postal Lookup</Styled.LinkItem>
  </Styled.NavbarContainer>
  )
}

export default Navbar