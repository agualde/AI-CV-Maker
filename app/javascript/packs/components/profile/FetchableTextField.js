import React, {Fragment, useState, useEffect} from "react"
import InlineEdit from 'react-edit-inplace';
import { postDataToGpt, ajaxPut } from './../../utils/ajaxCalls'
import Loader from "../loader/Loader";

const FetchableTextField = ({ id, description, disabled, token, endPoint }) => {
  const [descriptionValue, setDescriptionValue] = useState(description)
  const [waiting, setWaiting] = useState(false)

  const descriptionChanged = async (data) => {
    if (disabled) {return}

    const putData = {
      data: data.message,
      resource_id: id
    }

    await ajaxPut('description', putData, token, endPoint);
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

        await ajaxPut('description', putData, token, endPoint);
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

    setDescriptionValue(description)
  }, [description]);

  const disabledFunction = (descriptionValue === "" || descriptionValue === null) 
  const buttonClass = disabledFunction ? 'hidden-button' : ''

  if (waiting) {
    return (
      <div className="post-loader">
        <Loader/>
      </div>
    )}


  return( <Fragment>
          <div style={{minHeight: '8rem'}}>
          {/* <InlineEditCustomTextareaExample/>
          <InlineEditableTextfieldDefault description={descriptionValue}/> */}
            <InlineEdit
                    text={descriptionValue}
                    activeClassName="editing-textfield form-control"
                    paramName="message"
                    change={descriptionChanged}
                    editingElement="textarea"
                    validate={() => true}
                    placeholder={'Tell us more!'} />
          </div>
          <div>
            {!disabled && <button onClick={()=>{handleDescriptionFetch(descriptionValue)}} className={`btn btn-warning chat-gpt ${buttonClass}`} style={{color: 'white'}} disabled={disabledFunction}>GENERATE TEXT</button>}
          </div>
  </Fragment>
  )}

export default FetchableTextField