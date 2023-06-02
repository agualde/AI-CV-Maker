import React, {Fragment, useState} from "react"
import UseAnimations from "react-useanimations";
import Loader from "../loader/Loader";
import activity from "react-useanimations/lib/activity";
import axios from 'axios';

const SideBar = ({ about, className, disabled }) => {
  const [waiting, setWaiting] = useState(false);
  const [data, setData] = useState(null);


  const getCsrfToken = () => {
    const metas = document.getElementsByTagName('meta');
    for (let i = 0; i < metas.length; i++) {
      if (metas[i].getAttribute('name') === 'csrf-token') {
        return metas[i].getAttribute('content');
      }
    }
    return '';
  };



  const postData = async (data) => {
    try {

      setWaiting(true)

      const response = await axios.post('/api/v1/p/', data, {
        headers: {
          'X-CSRF-Token': getCsrfToken(),
          'Content-Type': 'application/json',
        },
      });

      setWaiting(false)
      setData(response.data['data']);
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  };

  const handleClick = (data) => {
    postData(data);
  }

  if (waiting) {
    return ( <Fragment>
      <Loader className={'section-loader'}/>
    </Fragment>
    )
  }
  return ( <Fragment>
            <div className={className}>
              <div style={{display:'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
                <h3>About</h3>
                {!disabled && <UseAnimations className="chat-gpt" animation={activity} size={25} strokeColor={'black'} onClick={() => handleClick(about)}/>}
                </div>
              </div>

              <p>{data || about}</p>
            <div/>
          </Fragment>
  )
};

export default SideBar