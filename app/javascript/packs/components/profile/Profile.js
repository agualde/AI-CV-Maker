import React, {Fragment} from "react";
import ProfileHeader from "./ProfileHeader";
import PostFeed from "./PostFeed";
import SideBar from "./SideBar";
import './profile.scss';


const Profile = ({data, token, disabled }) => {
  const postData = [
    { author: "John Doe", content: "Just got my new job at Google! #newjob" },
    { author: "John Doe", content: "Learning more about artificial intelligence every day! #AI #learning" },
    { author: "John Doe", content: "Coding, coding, coding.." },
    // more posts...
  ];
debugger
  const  {about} = data

  return (<Fragment>
    <div className="profile-page">
      <ProfileHeader {...data} token={token} disabled={disabled}/>
      <div className="post-feed">
        <PostFeed posts={postData} header={'Experience'}/>
        <br />
        <br />
        <PostFeed posts={postData} header={'Education'}/>
      </div>
      <SideBar about={about} className={'sidebar'}/>
    </div>
  </Fragment>
  );
}

export default Profile;
