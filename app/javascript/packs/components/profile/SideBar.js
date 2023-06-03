import React, {Fragment, useState} from "react"
import InlineEdit from 'react-edit-inplace';
import Loader from "../loader/Loader";
import axios from 'axios';
import './profile.scss'

import myImage from '../../../../assets/images/refresh';

const SideBar = ({ about, className, disabled, token }) => {
  const [waiting, setWaiting] = useState(false);
  const [data, setData] = useState(about);



  const getCsrfToken = () => {
    const metas = document.getElementsByTagName('meta');
    for (let i = 0; i < metas.length; i++) {
      if (metas[i].getAttribute('name') === 'csrf-token') {
        return metas[i].getAttribute('content');
      }
    }
    return '';
  };

  const ajaxPut = async (putData, token) => {
    try {
      setWaiting(true)
      const response = await axios.put('/api/v1/put/', {putData, token: token}, {
        headers: {
          'X-CSRF-Token': getCsrfToken(),
          'Content-Type': 'application/json',
        },
      });

      setWaiting(false)
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  };

  const postData = async (about) => {
    try {
      setWaiting(true)
      const response = await axios.post('/api/v1/p/', about, {
        headers: {
          'X-CSRF-Token': getCsrfToken(),
          'Content-Type': 'application/json',
        },
      });

      ajaxPut(response.data['data'], token)
      setData(response.data['data'])
      setWaiting(false)
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  };

  const handleClick = (about) => {
    postData(about);
  }

  const dataChanged = (data) => {
    ajaxPut(data.message, token)
    setData(data.message)
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
                  <div>
                    {!disabled && <img src={myImage} className={'chat-gpt'} alt="" onClick={() => {handleClick(data)}} /> }
                  </div>
                </div>
                  <InlineEdit
                    text={data}
                    activeClassName="editing form-control"
                    paramName="message"
                    change={dataChanged}
                    editingElement="textarea"
                  />
              </div>
            <div/>
          </Fragment>
  )
};

export default SideBar