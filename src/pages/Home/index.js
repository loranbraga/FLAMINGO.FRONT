import React, { useState, useEffect } from 'react'
import { Container, Input, Button, Row, Col } from 'reactstrap'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { createPost, getPosts } from '../../services/postService'

import {url} from '../../config/api'
import Menu from '../../components/Menu'
import Post from '../../components/Post'
import profile from '../../images/profile.svg'
import Notification from '../../helper/Notification'
import Loader from '../../helper/Loader'

function Home() {

  const [content, setContent] = useState('')
  const [posts, setPosts] = useState([])
  const [update, setUpdate] = useState(false)
  const [loading, setLoading] = useState(false)


  const publish = async () => {
    try {
      if(!content){
        Notification.error("Error!", "A postagem deve conter um conteudo!")
        return
      }
      const { data } = await createPost({content});
      setPosts([data, ...posts])
      setContent('')
      Notification.success("Sucesso!", "Post publicado")
    } catch (error) {
      Notification.error("Error!", error.message)
      
    }
  }

  const get = async () => {
    try {
      setLoading(true)
      const { data } = await getPosts();
      setPosts(data)
    } catch (error) {
      Notification.error("Error!", error.message)
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    get()
  }, [update])

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
        <div className="mt-2 p-3" style={
        {
          borderBottom: '1px solid #dcdcdc',
        }}>
          <Row className="p-0 m-0">
            <Col  md={1} className="p-0 m-0">
              { localStorage.getItem('profile_url') != 'null' ?
                  <img src={`${url}files/${localStorage.getItem('profile_url')}`} width="64" height="64" alt="" className="rounded-circle" />
                  :
                  <img src={profile} alt="" className="rounded-circle" />
              }
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
        { 
          posts && posts.map((post) => {
            return <Post key={post.id} post={post} setUpdate={setUpdate} update={update}/>
          })
        }
        
      </Container>
    </>
  )
}

export default Home
