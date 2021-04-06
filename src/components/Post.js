import React from 'react';
import { Media, Row } from 'reactstrap';
import { AiFillLike, AiFillDislike } from "react-icons/ai";

import profile from '../images/profile.svg'

const Post = () => {
  return (
      <div style={{borderBottom: '1px solid #dcdcdc'}} className="p-4">
        <Row>
          <Media>
              <Media left href="#">
                <img src={profile} alt="" className="rounded-circle" />
              </Media>
              <Media body className="ml-3">
                <Media heading style={{ fontSize: '18px'}}>
                  Loran Braga <span style={{color: "#40b4ff"}}>@loranbraga</span>
                </Media>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </Media>
          </Media>
        </Row>
        <Row className="mt-3 d-flex justify-content-center">
          <div className="mr-5 d-flex align-items-center" >
            <AiFillLike style={{color: "#ff409f"}}/> 
            <span className="ml-2">12</span>
          </div>
          <div className="d-flex align-items-center">
            <AiFillDislike />
            <span className="ml-2">12</span>
          </div>
          
        </Row>
      </div>
  );
};

export default Post;