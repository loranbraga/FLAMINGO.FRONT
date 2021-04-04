import React from 'react'
import { Container, Input, Button, Row, Col } from 'reactstrap'

import Menu from '../../components/Menu'
import Post from '../../components/Post'
import profile from '../../images/profile.svg'

function index() {
  return (
    <>
      <Menu />
      <Container style={
        {
          borderRight: '1px solid #dcdcdc',
          borderLeft: '1px solid #dcdcdc',
          borderTop: '1px solid #dcdcdc',
          minHeight: '900px',
        }
      } className="mt-3 p-0" >
        <div className="mt-2 p-3" style={
        {
          borderBottom: '1px solid #dcdcdc',
        }}>
          <Row className="p-0 m-0">
            <Col  md={1} className="p-0 m-0">
              <img src={profile} alt="" className="rounded-circle" />
            </Col>
            <Col md={11} className="p-0 m-0">
              <Input placeholder="O que você está pensando?" type="textarea" name="text" id="exampleText"/>
            </Col>
          </Row>
          <Row className="my-2">
            <Col md={9}></Col>
            <Col md={3}>
              <Button type="button"  style={{backgroundColor: "#40b4ff", borderColor: "#40b4ff"}} block>Publicar</Button> 
            </Col>
          </Row>
        </div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        
      </Container>
    </>
  )
}

export default index
