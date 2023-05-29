import React, {Fragment, useState, useEffect} from "react";
import Loader from "../loader/Loader";
import './container.scss';
import axios from 'axios';

const Container = ({token}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const baseUrl = 'http://localhost:3000'
        const endPoint = `/api/v1/authors/${token}`
        const url = `${baseUrl}${endPoint}`
        const response = await axios.get(url);

        setData(response.data);
      } catch (err) {
        console.error('There was an error fetching the data!', err);
      }
    }

    fetchData();
  }, []);

  if (!data) return <Loader/>

  const handleClick = () => {
    
  }

  return (<Fragment>
    <div className="container">
      <div className="info-container">
      <div className="author-info">
        {data['name']} is {data['age']} from {data['country']}
        <br />
        contact at: {data['email']}
      </div>
      <div className="button-container">
        <button className="btn btn-primary button" onClick={handleClick}>POST</button>
      </div>
      </div>
    </div>
    </Fragment>
  );
}

export default Container;



