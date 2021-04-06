import React from 'react'
import { Row, Col, Input, Button } from 'reactstrap'
import { useHistory } from 'react-router-dom'

import flamingo from '../../images/flamingo.jpg'

function Login() {

  const history = useHistory()

  return (
    <>
      <Row className="m-0">
        <Col lg={5} md={0} className="p-0">
          <img src={flamingo} alt="Home" style={{display: 'block', width: "150%", height: "981px"}}/>
        </Col>
        <Col lg={7} md={12} style={{ backgroundColor: "#40b4ff"  }} className=" d-flex align-items-center">
          <div className="mx-auto">
            <Row>
              <h1 className="text-white mx-auto font-weight-bold">FLAMINGO</h1>
            </Row>
            <Row>
              <h2 className="text-white mx-auto ">Somos a cópia do Twitter</h2>
            </Row>
            <form action="submit">
            <Row className="mt-5">
              <Col>
                <Input placeholder="Email" />
              </Col>
              <Col>
                <Input placeholder="Senha" />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <Button type="submit" style={{backgroundColor: "#ff409f"}} onClick={() => history.push('/home')} block>Entrar</Button>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col >
                <a href="/register" style={{color: "#ff409f"}} className="font-weight-bold">Não tem conta? Crie aqui!</a>
              </Col>
            </Row>

            </form>
              
          </div>
        </Col>
      </Row>
    </>
  )
}

export default Login
