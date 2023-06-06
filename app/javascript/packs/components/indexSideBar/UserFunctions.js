import React, {Fragment, useState} from "react";
import './IndexSideBar'
import UseAnimations from "react-useanimations";
import menu2 from "react-useanimations/lib/menu2";

const UserFunction = (props) => {
  const [animationKey, setAnimationKey] = useState(0);
  const { email } = props.data[0]

  return(<Fragment>
    <div className="index-links btn">
      <button onClick={() => setAnimationKey(prevKey => prevKey + 1)} className="btn" style={{color: 'white'}}> {email} </button>
      <UseAnimations key={animationKey} animation={menu2} size={25} strokeColor={'#FFFFFF'}/>
    </div>
  </Fragment>)
}

export default UserFunction