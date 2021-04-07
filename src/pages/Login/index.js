import React, { useState} from 'react'
import { Row, Col, Input, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { authenticate } from '../../services/userService'
import flamingo from '../../images/flamingo.jpg'
import Notification from '../../helper/Notification'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const dispatch = useDispatch()

  const onSubmit = async () => {
    try {
      const { data } = await authenticate(email, password)
      dispatch({type: 'LOGIN', user: data.user , token: data.token})
      Notification.success("Entrooou!", "Você esta dentro do flamingo!")
    } catch (error) {
      Notification.error("Erro!", error.message)
    }
  }

  return (
    <>
     { useSelector(state => state.authenticated) && <Redirect to="/home" />}
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
            <Row className="mt-5">
              <Col>
                <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </Col>
              <Col>
                <Input placeholder="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <Button type="button" style={{backgroundColor: "#ff409f"}} onClick={onSubmit}block>Entrar</Button>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col >
                <a href="/register" style={{color: "#ff409f"}} className="font-weight-bold">Não tem conta? Crie aqui!</a>
              </Col>
            </Row>
              
          </div>
        </Col>
      </Row>
    </>
  )
}

export default Login
