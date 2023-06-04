import React, {Fragment} from "react";
import ProfileHeader from "./ProfileHeader";
import PostFeed from "./PostFeed";
import Icons from "./Icons";
import './profile.scss';


const Profile = ({data, token, disabled }) => {

  const experiences = data.experiences;
  const educations = data.educations
  delete data.experiences
  delete data.educationHistory
  const coreInfo = data

  return (<Fragment>
    <div className="profile-page">
      <ProfileHeader {...coreInfo} token={token} disabled={disabled}/>
      <div className="post-feed">
        <PostFeed header={'Experience'} posts={experiences} token={token} disabled={disabled} endPoint={'/api/v1/experiences_put'} />
        <br />
        <br />
        <PostFeed header={'Education'} posts={educations} token={token} disabled={disabled} endPoint={'/api/v1/educations_put'}/>
      </div>
      <Icons/>
    </div>
  </Fragment>
  );
}

export default Profile;
