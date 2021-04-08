import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineSearch } from "react-icons/ai";
import { useHistory } from "react-router-dom"
import {
  Container,
  Navbar,
  NavbarBrand,
  Input,
  Button,
  Row
} from 'reactstrap';
import { Link } from 'react-router-dom'

const Menu = () => {

  const [search, setSearch] = useState('')

  const isMobile = useMediaQuery({ query: '(max-width: 700px)' });

  const dispatch = useDispatch()
  const history = useHistory()

  const logout = () => {
    dispatch({type:'LOGOUT'})
  }

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Container >
          <NavbarBrand href="/home" style={{color: "#ff409f"}} className={isMobile ? "font-weight-bold mx-auto" : "font-weight-bold" }>Flamingo</NavbarBrand>

          <Row className={isMobile ? "mx-auto" : "" }>
            <Input type="text" style={{width:"85%"}} value={search}
              onChange={ (e) => setSearch(e.target.value)}></Input>
            <Button 
              style={{width:"15%", backgroundColor: "#ff409f", borderColor: "#ff409f"}}
              className="text-white" 
              onClick={() => history.push(`/posts/${search?search:'_'}`)}
              ><AiOutlineSearch /></Button>
          </Row>
          <Row className={isMobile ? "mx-auto" : "" }>
            <Link to={`/posts/${useSelector(state => state.username)}`} style={{color: "#ff409f"}} className="font-weight-bold mr-3">Meu Perfil</Link>
            <Link to="/home" style={{color: "#ff409f"}} className="font-weight-bold" onClick={() => logout()}>Sair</Link>
          </Row>

        </Container>
      </Navbar>
    </div>
  );
}

export default Menu;