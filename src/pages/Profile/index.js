/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { Container, Input, Button, Row, Col } from 'reactstrap'
import { useSelector } from 'react-redux'
import { Redirect, useParams } from 'react-router-dom'

import { createPost, getPostsByUser } from '../../services/postService'

import Menu from '../../components/Menu'
import Post from '../../components/Post'
import profile from '../../images/profile.svg'
import Notification from '../../helper/Notification'
import Loader from '../../helper/Loader'

function Profile() {

  const { username } = useParams()

  const [content, setContent] = useState('')
  const [posts, setPosts] = useState([])
  const [update, setUpdate] = useState(false)
  const [loading, setLoading] = useState(false)


  const publish = async () => {
    try {
      setLoading(true)
      const { data } = await createPost({content});
      setPosts([data, ...posts])
      setContent('')
      Notification.success("Sucesso!", "Post publicado")
    } catch (error) {
      Notification.error("Error!", error.message)
    } finally {
      setLoading(false)
    }
  }

  const get = async () => {
    try {
      const { data } = await getPostsByUser(username);
      setPosts(data)    
    } catch (error) {
      Notification.error("Error!", "Usuário não encotrado")
      setPosts([])
    }
  }

  useEffect(() => {
    get()
  }, [update, username])

  return (
    <>
      { loading && <Loader />}
      { !useSelector(state => state.authenticated) && <Redirect to="/" />}
      <Menu />
      <Container style={
        {
          borderRight: '1px solid #dcdcdc',
          borderLeft: '1px solid #dcdcdc',
          borderTop: '1px solid #dcdcdc',
          minHeight: '900px',
        }
      } className="mt-3 p-0" >
        {
          localStorage.getItem('username') === username &&
          <div className="mt-2 p-3" style={
            {
              borderBottom: '1px solid #dcdcdc',
            }}>
              <Row className="p-0 m-0">
                <Col  md={1} className="p-0 m-0">
                  <img src={profile} alt="" className="rounded-circle" />
                </Col>
                <Col md={11} className="p-0 m-0">
                  <Input placeholder="O que você está pensando?"  value={content} type="textarea" name="text" id="exampleText" onChange={ (e) => setContent(e.target.value)}/>
                </Col>
              </Row>
              <Row className="my-2">
                <Col md={9}></Col>
                <Col md={3}>
                  <Button type="button"  style={{backgroundColor: "#40b4ff", borderColor: "#40b4ff"}} block onClick={ () => publish()}>Publicar</Button> 
                </Col>
              </Row>
            </div>
        }
        { 
          posts && posts.map((post) => {
            return <Post key={post.id} post={post} setUpdate={setUpdate} update={update}/>
          })
        }
        
      </Container>
    </>
  )
}

export default Profile
