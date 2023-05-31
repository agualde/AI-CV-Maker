import React, {Fragment, useState, useEffect} from "react";
import Loader from "../loader/Loader";
import Profile from "../profile/Profile";
import './container.scss';
import axios from 'axios';

const Container = ({token}) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const baseUrl = 'http://localhost:3000'
        const endPoint = `/api/v1/core_infos/${token}`
        const url = `${baseUrl}${endPoint}`
        const response = await axios.get(url);

        setData(response.data);
      } catch (err) {
        window.location.href = '/forbidden';
      }
    }

    fetchData();
  }, []);

  if (!data) return <Loader/>
  return (<Fragment>

    <div className="container">
      <Profile data={data} token={token} disabled={false}/>
    </div>
    </Fragment>
  );
}

export default Container;
