import React, {Fragment} from "react";
import ProfileHeader from "./ProfileHeader";
import PostFeed from "./PostFeed";
import Icons from "./Icons";
import TearDropButton from "./TearDropButton";
import './profile.scss';


const Profile = ({data, token, disabled }) => {

  const postData = [
    { author: "John Doe", content: "Just got my new job at Google! #newjob" },
    { author: "John Doe", content: "Learning more about artificial intelligence every day! #AI #learning" },
    { author: "John Doe", content: "Coding, coding, coding.." },
    // more posts...
  ];

  const  {about} = data

  return (<Fragment>
    {/* <div style={{position:'sticky', top:'0px'}}>
      <TearDropButton text="🤖" disabled={disabled} padding={'18rem'} color={'#ffce00'} token={token} fontSize={'30px'}/>
    </div>

    <div style={{position:'sticky', top:'0px'}}>
      <TearDropButton text="Save" disabled={disabled} padding={'12rem'} color={'green'} token={token} />
    </div> */}

    <div className="profile-page">
      <ProfileHeader {...data} token={token} disabled={disabled}/>
      <div className="post-feed">
        <PostFeed header={'Experience'} posts={postData} />
        <br />
        <br />
        <PostFeed header={'Education'} posts={postData} />
      </div>
      <Icons/>
    </div>
  </Fragment>
  );
}

export default Profile;
