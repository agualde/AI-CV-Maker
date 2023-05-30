import React, {Fragment} from "react";
import ShareLink from "../shareLink/ShareLink";
import SideBar from "./SideBar";
import './profile.scss';

const ProfileHeader = ({ name, title, location, avatar, token, disabled, about }) => {

  return( <Fragment>
    <div className="profile-header">
      <img src={avatar} alt={`${name}'s avatar`} />
      <h1>{name}</h1>
      <h3>{title}</h3>
      <p>{location}</p>
      <ShareLink token={token} disabled={disabled}/>
      <SideBar about={about} className={'mt-5 info'}/>
    </div>
  </Fragment>
  );
}

export default ProfileHeader;