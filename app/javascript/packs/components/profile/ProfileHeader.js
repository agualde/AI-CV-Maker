import React, {Fragment} from "react";
import ShareLink from "../shareLink/ShareLink";
import InlineEdit from 'react-edit-inplace';
import { ajaxPut } from './../../utils/ajaxCalls'
import SideBar from "./SideBar";
import './profile.scss';

const ProfileHeader = ({ name, title, location, avatar, token, disabled, about }) => {

  const endPoint = '/api/v1/core_infos_put/'

  const titleChanged = (data) => {
    ajaxPut('title', data.message, token, endPoint);
  };

  const countryChanged = (data) => {
    ajaxPut('country', data.message, token, endPoint);
  };

  //   useEffect(() => {
  //   if (token == null) {
  //     return;
  //   }

  //   setData(about)
  // }, [about]);

  return( <Fragment>
    <div className="profile-header">
      <img src={avatar} alt={`${name}'s avatar`} />
      <h1>{name}</h1>
      <div>
      <InlineEdit
                    text={title}
                    activeClassName="profile-role editing form-control"
                    paramName="message"
                    change={titleChanged}
                    validate={() => true}
                    editMode={false}
                    staticElement="h3"
                    placeholder={'Tell us more!'}
                    style={{  fontSize: '1.5rem',
                    textAlign: 'center',
                    whiteSpace: 'nowrap'}}
                  />
      </div>

<div>

      <InlineEdit
                text={location}
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