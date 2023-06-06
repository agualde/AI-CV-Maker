import React, {Fragment, useState, useEffect, useContext} from "react";
import './shareLink.scss';
import axios from 'axios';
import { TokenContext } from "../tokenContext/TokenContext";

const ShareLink = ({disabled = false}) => {

  const { token } = useContext(TokenContext);


  async function fetchData() {
    try {
      const baseUrl = 'http://localhost:3000'
      const endPoint = `/api/v1/generate_link/${token}`
      const url = `${baseUrl}${endPoint}`
      const response = await axios.post(url, { token: token });
      
      const copyUrl = response.data['url'];
      navigator.clipboard.writeText(copyUrl)
    } catch (err) {
      window.location.href = '/forbidden';
    }
  }  


  const handleClick = () => {
    fetchData();
  };

  if (disabled) {
    return ( <Fragment />
  );
  }

  return (<Fragment>
      <div className="button-container">
        {!disabled && <button className="btn btn-primary button" onClick={handleClick} disabled={disabled}>COPY SHARE LINK</button>}
      </div>
    </Fragment>
  );
}

export default ShareLink;
