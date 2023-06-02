import React, {Fragment, useState} from "react";
import './IndexSideBar'
import UseAnimations from "react-useanimations";
import menu2 from "react-useanimations/lib/menu2";

const UserFunction = ({data}) => {

  return(<Fragment>
    <div className="index-links btn">
      <div class="index-avatar">
        <img src="" alt="" />
      </div>
      <button className="btn" style={{color: 'white'}}> {data['email']} </button>
      <UseAnimations animation={menu2} size={56} strokeColor={'#FFFFFF'}/>
    </div>
  </Fragment>)
}

export default UserFunction