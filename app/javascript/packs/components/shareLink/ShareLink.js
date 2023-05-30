import React, {Fragment, useState, useEffect} from "react";
import './shareLink.scss';
import axios from 'axios';

const ShareLink = ({token, disabled = false}) => {

  async function fetchData() {
    try {
      const baseUrl = 'http://localhost:3000'
      const endPoint = `/api/v1/generate_link/${token}`
      const url = `${baseUrl}${endPoint}`
      const response = await axios.post(url, { token: token });
      
      const copyUrl = response.data['url'];
      debugger
      navigator.clipboard.writeText(copyUrl)
    } catch (err) {
      window.location.href = '/forbidden';
    }
  }  


  const handleClick = () => {
    fetchData();
  };

  return (<Fragment>
      <div className="button-container">
        <button className="btn btn-primary button" onClick={handleClick} disabled={disabled}>COPY SHARE LINK</button>
      </div>
    </Fragment>
  );
}

export default ShareLink;
