import React, {Fragment} from "react";
import ProfileHeader from "./ProfileHeader";
import PostFeed from "./PostFeed";
import Icons from "./Icons";
import './profile.scss';


const Profile = ({data, token, disabled }) => {

  debugger
  const experiences = data.experiences;
  const educations = data.educations
  delete data.experiences
  delete data.educationHistory
  const coreInfo = data

  return (<Fragment>
    <div className="profile-page">
      <ProfileHeader {...data} token={token} disabled={disabled}/>
      <div className="post-feed">
        <PostFeed header={'Experience'} posts={experiences} />
        <br />
        <br />
        <PostFeed header={'Education'} posts={educations} />
      </div>
      <Icons/>
    </div>
  </Fragment>
  );
}

export default Profile;
