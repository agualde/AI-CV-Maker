import React, {Fragment, useState, useEffect} from "react"
import InlineEdit from 'react-edit-inplace';
import { postDataToGpt, ajaxPut } from './../../utils/ajaxCalls'
import FetchableTextField from "./FetchableTextField";
import Loader from "../loader/Loader";



const Post = ({ id, header, sub_header, description, disabled, token, section }) => {
  const [headerValue, setHeaderValue] = useState(header)
  const [subHeaderValue, setSubHeaderValue] = useState(sub_header)
  
  const headerChanaged = async (data) => {
    if (disabled) {return}

    const putData = {
      data: data.message,
      resource_id: id
    }

    await ajaxPut('header', putData, token, endPoint);
    setHeaderValue(data.message)
  };

  const subHeaderChanged = async (data) => {
    if (disabled) {return}

    const putData = {
      data: data.message,
      resource_id: id
    }

    await ajaxPut('sub_header', putData, token, endPoint);
    setSubHeaderValue(data.message)
  };

  useEffect(() => {
    if (token == null) {
      return;
    }

    setHeaderValue(header)
    setSubHeaderValue(sub_header)
  }, [header, sub_header]);

  const endPointDictionary = {Experience: {url: '/api/v1/experiences_put'}, Education:  {url: '/api/v1/educations_put'}}
  const endPoint = endPointDictionary[section].url

  const dictionary = {Experience: {headerPlaceHolder: 'Where?', subheaderPlaceHolder: 'Role?'}, Education:  {headerPlaceHolder: 'Where?', subheaderPlaceHolder: 'Degree?'}}
  const {headerPlaceHolder, subheaderPlaceHolder} = dictionary[section]


  return( <Fragment>
      <div className="post">
          <InlineEdit
              text={headerValue}
              staticElement="h2"
              style={{  fontSize: '1.5rem',
              whiteSpace: 'nowrap'}}
              activeClassName="editing form-control"
              paramName="message"
              change={headerChanaged}
              validate={() => true}
              placeholder={headerPlaceHolder}/>

          <p>
            <InlineEdit
                        text={subHeaderValue}
                        activeClassName="editing form-control"
                        paramName="message"
                        change={subHeaderChanged}
                        validate={() => true}
                        placeholder={subheaderPlaceHolder} />
          </p>
          <FetchableTextField id={id} description={description} disabled={disabled} token={token} endPoint={endPoint}/>
        </div>
  </Fragment>
  )
};

export default Post