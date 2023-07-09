import React, {Fragment, useState, useEffect} from "react";
import './IndexSideBar'

const UserFunction = ({email}) => {
  const [emailState, setEmailState] = useState(email)

  useEffect(()=>{
    setEmailState(email)
  },[email])

  return(<Fragment>
    <div className="index-links btn" style={{margin: '1rem 0px 0px 0px', padding: '0px', width:'100%'}}>
      <button className="btn index-item" style={{color: 'white'}}> {emailState}</button>
      <div>
        ...
      </div>
    </div>
  </Fragment>)
}

export default UserFunction