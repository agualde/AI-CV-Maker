import React, {Fragment} from "react";
import ShareLink from "../shareLink/ShareLink";
import InlineEdit from 'react-edit-inplace';
import { ajaxPut } from './../../utils/ajaxCalls'
import SideBar from "./SideBar";
import './profile.scss';

const ProfileHeader = ({ name, last_name, title, location, avatar, token, disabled, about }) => {

  const endPoint = '/api/v1/core_infos_put/'

  const nameChanged = async (data) => {
    await ajaxPut('name', data.message, token, endPoint);
  };

  const titleChanged = async (data) => {
    await ajaxPut('title', data.message, token, endPoint);
  };

  const countryChanged = async (data) => {
    await ajaxPut('country', data.message, token, endPoint);
  };

  return( <Fragment>
    <div className="profile-header">
      <img src={avatar} alt={`${name}'s avatar`} />      
      <InlineEdit text={name}
                  activeClassName="editing form-control"
                  paramName="message"
                  change={nameChanged}
                  validate={() => true}
                  editMode={false}
                  staticElement="h1"
                  placeholder={'Name'}
                  style={{textAlign: 'center',
                          whiteSpace: 'nowrap',
                          margin: '22px 0px 10px'}}
                  />


    <div>
      <InlineEdit text={title}
                  activeClassName="profile-role editing form-control"
                  paramName="message"
                  change={titleChanged}
                  validate={() => true}
                  editMode={false}
                  // staticElement="h3"
                  placeholder={'Tell us more!'}
                  style={{textAlign: 'center',
                          whiteSpace: 'nowrap'}}
                  />
    </div>
    <div>
      <InlineEdit text={location}
                  staticElement="p"
                  activeClassName="editing form-control"
                  paramName="message"
                  change={countryChanged}
                  validate={() => true}
                  editMode={false}
                  style={{textAlign: 'center'}}
                  placeholder={"Tell us where you're from!"}/>
      </div>

      <ShareLink token={token} disabled={disabled}/>
      <SideBar about={about} className={'mt-5 info'} disabled={disabled} token={token}/>
    </div>
  </Fragment>
  );
}

export default ProfileHeader;