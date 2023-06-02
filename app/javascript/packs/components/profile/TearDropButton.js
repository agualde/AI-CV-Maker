import React, { Fragment } from 'react';
import './tearDropButton.scss';
import axios from 'axios';

const TearDropButton = ({ text, disabled = false, padding, color, token, fontSize }) => {

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
    return( <Fragment/>
    );
  }

  return (
    <div className="tearDropContainer" style={{paddingRight: padding}}>
      <button className="tearDropButton" style={{backgroundColor: color, fontSize:fontSize}}  onClick={handleClick}>
        {text}
      </button>
    </div>
  );
};

export default TearDropButton;