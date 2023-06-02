import React, {Fragment, useState, useEffect} from "react";
import Loader from "../loader/Loader";
import Profile from "../profile/Profile";
import './container.scss';
import axios from 'axios';
import IndexSideBar from "../indexSideBar/IndexSideBar";

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
        console.log(err)
        window.location.href = '/forbidden';
      }
    }

    fetchData();
  }, []);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
  };
  
  const indexStyle = {
    flex: 2,
    backgroundColor: "#202123",
    overflowY: 'auto',
    height: '100vh'
  };
  
  const showStyle = {
    flex: 12,
    overflowY: 'auto',
    height: '100vh'
  };

  if (!data) return <Loader/>

  return (<Fragment>
    <div className="custom-container" style={containerStyle}>
      <div style={indexStyle}>
        <IndexSideBar data={data}/>
      </div>
      <div style={showStyle}>
        <Profile data={data} token={token} disabled={false}/>
      </div>
    </div>
    </Fragment>
  );
}



export default Container;
