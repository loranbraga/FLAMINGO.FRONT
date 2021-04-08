import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useHistory } from 'react-router-dom'
import { Card, CardBody, Row, Input, Label, Button } from 'reactstrap'
import Notification from '../../helper/Notification'

import { registerUser } from '../../services/userService'


function Register() {

  const history = useHistory()

  const isMobile = useMediaQuery({ query: '(max-width: 1000px)' })

  const [email,setEmail] = useState('')
  const [username,setUsername] = useState('')
  const [name,setName] = useState('')
  const [password,setPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const validateUsername = (username) => {
    const re = /^[a-z0-9_-]{3,16}$/;
    return re.test(String(username).toLowerCase());
  }

  

  const register = async () => {
    if(!validateEmail(email)) {
      Notification.error("Erro!", "Email inválido!" )
      return
    }
    if(!validateUsername(username)) {
      Notification.error("Erro!", "Username inválido!" )
      return
    }
    if(password !== confirmPassword){
      Notification.error("Erro!", "Senhas não conferem!" )
      return
    }
    if(password.length < 6){
      Notification.error("Erro!", "Senha deve conter mais de 6 caracteres!")
      return
    }
    if( email || name || username || password){
      try {
        await registerUser({email: email.toLowerCase(), username:username.toLowerCase(), password, name})
        Notification.success("Sucesso", "Agora você é um flamingo no bando!")
        history.push('/')
      } catch (error) {
        console.log(error)
        Notification.error("Erro!", error.message)
      }
    }else {
      Notification.error("Erro!", "Todos os campos são obrigatórios!")
    }
  }


  return (
    <div style={{ width: '100%', height: '100vh', backgroundColor: '#40b4ff'}}
     className="d-flex justify-content-center">
      <Card style={isMobile? { minHeight: '600px', width: '90%'} : { height: '600px', width: '50%'}} className="align-self-center">
        <CardBody>
          <Row>
            <h1 className="mx-auto font-weight-bold" style={{ color: '#ff409f' }}>FLAMINGO</h1>
          </Row>
          <Row className="mb-2 mt-5 mx-5">
            <Label for="email" >Email</Label>
            <Input  placeholder="flamingo@fla.com" id="email" name="email" value={email} onChange={
              (e) => setEmail(e.target.value)
            }/>
          </Row>
          <Row className="mb-2 mx-5">
            <Label for="email" >Username</Label>
            <Input  placeholder="flamingo" id="username" name="username" value={username} onChange={
              (e) => setUsername(e.target.value)
            }/>
          </Row>
          <Row className="mb-2 mx-5">
            <Label for="email" >Nome</Label>
            <Input  placeholder="Flamingo da Silva" id="name" name="name" value={name} onChange={
              (e) => setName(e.target.value)
            }/>
          </Row>
          <Row className="mb-2 mx-5">
            <Label for="email" >Senha</Label>
            <Input  type="password" id="password" name="password" value={password} onChange={
              (e) => setPassword(e.target.value)
            }/>
          </Row>
          <Row className="mb-2 mx-5">
            <Label for="email" >Confirmação de senha</Label>
            <Input type="password" id="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={
              (e) => setConfirmPassword(e.target.value)
            }/>
          </Row>

          <Row>
            <Button 
              style={{ backgroundColor: '#ff409f', borderColor: '#ff409f' }}
              className="mx-auto mt-4 px-5"
              type="button"
              onClick={() => register()}
              >Cadastrar</Button>
          </Row>
        </CardBody>
      </Card>
    </div>
  )
}

export default Register
