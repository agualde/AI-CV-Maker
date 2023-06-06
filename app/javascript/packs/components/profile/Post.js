import React, {Fragment, useState, useEffect} from "react"
import InlineEdit from 'react-edit-inplace';
import { postDataToGpt, ajaxPut } from './../../utils/ajaxCalls'
import Loader from "../loader/Loader";



const Post = ({ id, header, sub_header, description, disabled, token, section }) => {

  const [headerValue, setHeaderValue] = useState(header)
  const [subHeaderValue, setSubHeaderValue] = useState(sub_header)
  const [descriptionValue, setDescriptionValue] = useState(description)
  const [waiting, setWaiting] = useState(false)

  const endPointDictionary = {Experience: {url: '/api/v1/experiences_put'}, Education:  {url: '/api/v1/educations_put'}}
  const endPoint = endPointDictionary[section].url
  
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

  const handleDescriptionFetch = async (description) => {
      setWaiting(true);
      try {
          const response = await postDataToGpt('experiences', description);
          const putData = {
            data: response.data['data'],
            resource_id: id
          }

          ajaxPut('description', putData, token, endPoint);
          setDescriptionValue(response.data['data']);
      } catch (error) {
          console.log(error);
      } finally {
          setWaiting(false);
      }
  }

  useEffect(() => {
    if (token == null) {
      return;
    }

    setHeaderValue(header)
    setSubHeaderValue(sub_header)
    setDescriptionValue(description)
  }, [header, sub_header, description]);

  const disabledFunction = descriptionValue === ""
  const buttonClass = disabledFunction ? 'hidden-button' : ''

  const dictionary = {Experience: {headerPlaceHolder: 'Where?', subheaderPlaceHolder: 'Role?'}, Education:  {headerPlaceHolder: 'Where?', subheaderPlaceHolder: 'Degree?'}}
  const {headerPlaceHolder, subheaderPlaceHolder} = dictionary[section]

  if (waiting) {
    return <Loader/>
  }

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

          <div style={{minHeight: '8rem'}}>
            <InlineEdit
                    text={descriptionValue}
                    activeClassName="editing form-control"
                    paramName="message"
                    change={descriptionChanged}
                    editingElement="textarea"
                    validate={() => true}
                    placeholder={'Tell us more!'} />
          </div>
          <div>
            {!disabled && <button onClick={()=>{handleDescriptionFetch(description)}} className={`btn btn-warning chat-gpt ${buttonClass}`} style={{color: 'white'}} disabled={disabledFunction}>GENERATE TEXT</button>}
          </div>

      </div>
  </Fragment>
  )}

export default Post