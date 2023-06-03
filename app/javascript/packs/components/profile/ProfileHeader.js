import React, {Fragment} from "react";
import ShareLink from "../shareLink/ShareLink";
import InlineEdit from 'react-edit-inplace';
import SideBar from "./SideBar";
import './profile.scss';

const ProfileHeader = ({ name, title, location, avatar, token, disabled, about }) => {

  const dataChanged = (data) => {
    debugger
  };


  return( <Fragment>
    <div className="profile-header">
      <img src={avatar} alt={`${name}'s avatar`} />
      <h1>{name}</h1>
      <div>
      <InlineEdit
                    text={title}
                    activeClassName="profile-role editing form-control"
                    paramName="message"
                    change={dataChanged}
                    validate={() => true}
                    editMode={false}
                    staticElement="h3"
                    placeholder={'Tell us more!'}
                    style={{  fontSize: '1.5rem',
                    textAlign: 'center',
                    whiteSpace: 'nowrap'}}
                  />
      </div>
      <p>{location}</p>
      <ShareLink token={token} disabled={disabled}/>
      <SideBar about={about} className={'mt-5 info'} disabled={disabled} token={token}/>
    </div>
  </Fragment>
  );
}

export default ProfileHeader;