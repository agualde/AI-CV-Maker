import React, {Fragment, useState, useEffect} from "react";
import './shareLink.scss';
import axios from 'axios';

const ShareLink = ({token, disabled = false}) => {

  const [url, setUrl] = useState(null);

  useEffect(() => {
    if (!disabled) {
      async function fetchData() {
        try {
          const baseUrl = 'http://localhost:3000'
          const endPoint = `/api/v1/generate_link/${token}`
          const url = `${baseUrl}${endPoint}`
          const response = await axios.post(url, { token: token });
  
          setUrl(response.data['url']);
        } catch (err) {
          window.location.href = '/forbidden';
        }
      }
  
      fetchData();
    }

  }, [disabled]);

  const handleClick = () => {
    navigator.clipboard.writeText(url)
  };

  return (<Fragment>
      <div className="button-container">
        <button className="btn btn-primary button" onClick={handleClick} disabled={disabled}>COPY SHARE LINK</button>
      </div>
    </Fragment>
  );
}

export default ShareLink;
