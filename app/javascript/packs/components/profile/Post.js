import React, {Fragment, useState} from "react"
import InlineEdit from 'react-edit-inplace';
import { postDataToGpt, ajaxPut } from './../../utils/ajaxCalls'
import Loader from "../loader/Loader";



const Post = ({ id, header, sub_header, description, disabled, endPoint, token }) => {

  const [headerValue, setHeaderValue] = useState(header)
  const [subHeaderValue, setSubHeaderValue] = useState(sub_header)
  const [descriptionValue, setDescriptionValue] = useState(description)
  
  const headerChanaged = (data) => {
    if (disabled) {return}

    const putData = {
      data: data.message,
      resource_id: id
    }

    ajaxPut('header', putData, token, endPoint);
    setHeaderValue(data.message)
  };

  const subHeaderChanged = (data) => {
    if (disabled) {return}

    const putData = {
      data: data.message,
      resource_id: id
    }
    debugger
    ajaxPut('sub_header', putData, token, endPoint);
    setSubHeaderValue(data.message)
  };

  const descriptionChanged = (data) => {
    if (disabled) {return}

    const putData = {
      data: data.message,
      resource_id: id
    }

    ajaxPut('description', putData, token, endPoint);
    setDescriptionValue(data.message)
  };

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
              placeholder={'Tell us more!'}/>

          <p>
            <InlineEdit
                        text={subHeaderValue}
                        activeClassName="editing form-control"
                        paramName="message"
                        change={subHeaderChanged}
                        validate={() => true}
                        placeholder={'Tell us more!'} />
          </p>

        <InlineEdit
                    text={descriptionValue}
                    activeClassName="editing form-control"
                    paramName="message"
                    change={descriptionChanged}
                    editingElement="textarea"
                    validate={() => true}
                    placeholder={'Tell us more!'} />
      </div>
  </Fragment>
  )}

export default Post