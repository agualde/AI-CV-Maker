import React, {Fragment, useState} from "react";
import { postData } from './../../utils/ajaxCalls'
import './IndexSideBar.scss'

const POSTButton = () => {

  const handlePost = async () => {
    try {
        await postData();
    } catch (error) {
        console.log(error);
    } finally {
      window.location.reload();
    }
  }


  return(<Fragment>
        <div className="btn post-button" >
          <div onClick={()=>{handlePost()}}>
          + New CV
          </div>
        </div>
  </Fragment>)
}

export default POSTButton