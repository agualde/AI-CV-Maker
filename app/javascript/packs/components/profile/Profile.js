import React, {Fragment, useState, useEffect, useContext} from "react";
import ProfileHeader from "./ProfileHeader";
import PostFeed from "./PostFeed";
import Loader from "../loader/Loader";
import axios from "axios";
import Icons from "./Icons";
import { TokenContext } from "../tokenContext/TokenContext";
import './profile.scss';


const Profile = ({ disabled }) => {
  const [data, setData] = useState(null);
  const { token } = useContext(TokenContext);

  useEffect(() => {
    async function fetchData() {
      if (!token) return
      console.log("Token in Profile component: ", token);
      try {
        const baseUrl = 'http://localhost:3000'
        const endPoint = `/api/v1/core_infos/${token}`
        const url = `${baseUrl}${endPoint}`
        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        console.log(err)
        // window.location.href = '/forbidden';
      }
    }

    fetchData();
  }, [token]);

  useEffect(()=>{
    setData(data);
  }, [data])

  if (!data) return <Loader/>

  const experiences = data.experiences;
  const educations = data.educations
  delete data.experiences
  delete data.educationHistory
  const coreInfo = data

  return (<Fragment>
    <div className="profile-page">
      <ProfileHeader {...data} token={token} disabled={disabled}/>
      <div className="post-feed">
        {/* <PostFeed header={'Experience'} posts={experiences} token={token} disabled={disabled} /> */}
        <br />
        <br />
        <PostFeed header={'Education'} posts={educations} token={token} disabled={disabled} />
      </div>
      <Icons/>
    </div>
  </Fragment>
  );
}

export default Profile;
