import React, {Fragment, useEffect, useState, useContext} from "react";
import UserFunction from "./UserFunctions";
import Index from "./Index";
import Loader from "../loader/Loader";
import { TokenContext } from "../tokenContext/TokenContext";
import './IndexSideBar.scss'
import axios from 'axios';

const IndexSideBar = () => {
  const { setToken } = useContext(TokenContext);
  const [indexData, setIndexData] = useState(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    async function fetchData() {
      try {
        const baseUrl = 'http://localhost:3000'
        const endPoint = `/core_infos`
        const url = `${baseUrl}${endPoint}`

        setLoading(true)
        const response = await axios.get(url);

        setIndexData(response.data);
        setToken(response.data[0].id)
        console.log("Token set to: ", response.data[0].id)
        setLoading(false)
      } catch (err) {
        console.log(err)
        // window.location.href = '/forbidden';
      }
    }

    fetchData();
  }, []);

  if(loading || indexData === null) {
    return(<div className="index-loader-wrapper">
            <Loader/>
           </div>
      );
  }

  return(<Fragment>
    <div className="index-side-bar">
      <Index data={indexData}/>

      <UserFunction data={indexData}/>
    </div>
  </Fragment>)
}

export default IndexSideBar