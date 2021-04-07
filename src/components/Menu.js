import React from 'react'
import { useDispatch } from 'react-redux'

import {
  Container,
  Navbar,
  NavbarBrand,
} from 'reactstrap';
import { Link } from 'react-router-dom'

const Menu = () => {

  const dispatch = useDispatch()

  const logout = () => {
    dispatch({type:'LOGOUT'})
  }

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand href="/home" style={{color: "#ff409f"}} className="font-weight-bold">Flamingo</NavbarBrand>


          <div className="d-flex row">
            <Link to="/home" style={{color: "#ff409f"}} className="font-weight-bold mr-3">Meu Perfil</Link>
            <Link to="/home" style={{color: "#ff409f"}} className="font-weight-bold" onClick={() => logout()}>Sair</Link>
          </div>

        </Container>
      </Navbar>
    </div>
  );
}

export default Menu;