import React, { useState } from 'react';
import {
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavLink,
} from 'reactstrap';

const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand href="/home" style={{color: "#ff409f"}} className="font-weight-bold">Flamingo</NavbarBrand>
          <NavbarToggler onClick={toggle} />

          <NavLink href="/home" style={{color: "#ff409f"}} className="font-weight-bold">Meu Perfil</NavLink>

        </Container>
      </Navbar>
    </div>
  );
}

export default Menu;