import React, {Fragment, useEffect, useState} from "react"
import InlineEdit from 'react-edit-inplace';
import Loader from "../loader/Loader";
import './profile.scss'
import { postDataToGpt, ajaxPut } from './../../utils/ajaxCalls'

const SideBar = ({ about, className, disabled, token }) => {
  const [waiting, setWaiting] = useState(false);
  const [data, setData] = useState(about);

  const endPoint = '/api/v1/core_infos_put/'

  const handleClick = async (about) => {
    setWaiting(true);
  
    try {
        const response = await postDataToGpt('about', about);
        ajaxPut('about_text', response.data['data'], token, endPoint);
        setData(response.data['data']);
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

    setData(about)
  }, [about]);

  const dataChanged = async (data) => {
    if(disabled){return data.message}

    setWaiting(true)

    await ajaxPut('about_text', data.message, token, endPoint)
    setData(data.message)

    setWaiting(false)
  };

  if (waiting) {
    return ( <Fragment>
      <div className="mt-5 loading-about-info">
        <Loader className={'section-loader'}/>
      </div>
    </Fragment>
    )
  }

  const disabledFunction = about === ""
  const buttonClass = disabledFunction ? 'chat-gpt btn btn-warning hidden-button' : 'chat-gpt btn btn-warning'

  return ( <Fragment>
            <div className={className}>
              <div style={{display:'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
                <h3>About</h3>
          
                </div>
                <div style={{minHeight: '8rem'}}>
                    <InlineEdit
                      text={data}
                      activeClassName="editing form-control"
                      paramName="message"
                      change={dataChanged}
                      editingElement="textarea"
                      validate={() => true}
                      editing={false}
                      placeholder={'Tell us about yourself!'}
                    />
                </div>


                  <div style={{ paddingRight: '1rem' }}>
                    {!disabled && <button onClick={() => {handleClick(data)}} className={buttonClass} disabled={disabledFunction}> GENERATE TEXT </button> }
                  </div>
              </div>
            <div/>
          </Fragment>
  )
};

export default SideBar