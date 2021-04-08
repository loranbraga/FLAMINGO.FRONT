import React from 'react';
import { Media, Row } from 'reactstrap';
import { AiFillLike, AiFillDislike } from "react-icons/ai";

import profile from '../images/profile.svg'
import { likePost, dislikePost } from '../services/postService'

const Post = ({ post, setUpdate, update }) => {

  const like = async () => {
    try {
      await likePost(post.id)
      setUpdate(!update)
    } catch (error) {
      console.log(error.message)
    }
  }

  const dislike = async () => {
    try {
      await dislikePost(post.id)
      setUpdate(!update)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
      <div style={{borderBottom: '1px solid #dcdcdc'}} className="p-4">
        <Row>
          <Media>
              <Media left href="#">
                <img src={profile} alt="" className="rounded-circle" />
              </Media>
              <Media body className="ml-3">
                <Media heading style={{ fontSize: '18px'}}>
                  {post.user.name} <span style={{color: "#40b4ff"}}>@{post.user.username}</span>
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