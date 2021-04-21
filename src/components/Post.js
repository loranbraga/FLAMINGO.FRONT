import React from 'react';
import { Media, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import { AiFillLike, AiFillDislike } from "react-icons/ai"

import { url } from '../config/api'
import profile from '../images/profile.svg'
import { likePost, dislikePost, deletePost } from '../services/postService'
import Notification from '../helper/Notification'

const Post = ({ post, setUpdate, update }) => {

  const like = async () => {
    try {
      await likePost(post.id)
      setUpdate(!update)
    } catch (error) {
      Notification.error("Error!", error.message)
    }
  }

  const dislike = async () => {
    try {
      await dislikePost(post.id)
      setUpdate(!update)
    } catch (error) {
      Notification.error("Error!", error.message)
    }
  }

  const deleteClick = async () => {
    try {
      await deletePost(post.id)
      setUpdate(!update)
    } catch (error) {
      Notification.error("Error!", error.message)
    }
  }

  return (
      <div style={{borderBottom: '1px solid #dcdcdc'}} className="p-3">
        {
          (localStorage.getItem('role') === 'admin' || localStorage.getItem('username') === post.user.username)? 
            <button className="float-right font-size-10" onClick={() => deleteClick()} style={{border: "none", backgroundColor: "#f8f9fa", color: "#40b4ff"}}>
              Remover
            </button>
          :
            <button className="float-right" style={{border: "none", backgroundColor: "#f8f9fa", cursor: "default"}}></button>

        }
        
        <Row>
          <Media>
              <Media left href="#">
                { post.user.profile_url?
                  <img src={`${url}files/${post.user.profile_url}`} width="64" height="64" alt="" className="rounded-circle" />
                  :
                  <img src={profile} alt="" className="rounded-circle" />
                }
              </Media>
              <Media body className="ml-3">
                <Media heading style={{ fontSize: '18px'}}>
                  {post.user.name} <Link to={`/posts/${post.user.username}`} style={{color: "#40b4ff", textDecoration: 'none'}}>@{post.user.username}</Link>
                </Media>
                {post.content}
              </Media>
          </Media>
              
        </Row>
        <Row className="mt-3 d-flex justify-content-center">
          <div className="mr-5 d-flex align-items-center" >
            <button onClick={() => like()} style={{border: "none", backgroundColor: "#f8f9fa"}}>
              <AiFillLike style={post.liked? {color: "#ff409f"}: {}}/>
            </button>

            <span className="ml-2">{post.likes}</span>
          </div>
          <div className="d-flex align-items-center">
          <button onClick={() => dislike()} style={{border: "none", backgroundColor: "#f8f9fa"}}>
              <AiFillDislike style={post.disliked? {color: "#ff409f"}: {}}/>
            </button>
            
            <span className="ml-2">{post.dislikes}</span>
          </div>
          
        </Row>
      </div>
  );
};

export default Post;