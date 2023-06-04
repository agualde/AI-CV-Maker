import React, {Fragment, useState} from "react"
import InlineEdit from 'react-edit-inplace';
import Loader from "../loader/Loader";
import './profile.scss'
import { postDataToGpt, ajaxPut } from './../../utils/ajaxCalls'

const SideBar = ({ about, className, disabled, token }) => {
  const [waiting, setWaiting] = useState(false);
  const [data, setData] = useState(about);

  const endpoint = '/api/v1/core_infos_put/'

  const handleClick = async (about) => {
    setWaiting(true);
  
    try {
        const response = await postDataToGpt(about);
        ajaxPut('about_text', response.data['data'], token, endpoint);
        setData(response.data['data']);
    } catch (error) {
        console.log(error);
    } finally {
        setWaiting(false);
    }
  }

  const dataChanged = (data) => {
    if(disabled){return data.message}

    setWaiting(true)

    ajaxPut('about_text', data.message, token, endpoint)
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

  return ( <Fragment>
            <div className={className}>
              <div style={{display:'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
                <h3>About</h3>
          
                </div>
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

                  <div style={{ paddingRight: '1rem' }}>
                    {!disabled &&   <div onClick={() => {handleClick(data)}} className={'chat-gpt btn btn-warning'}> GENERATE TEXT </div> }
                  </div>
              </div>
            <div/>
          </Fragment>
  )
};

export default SideBar