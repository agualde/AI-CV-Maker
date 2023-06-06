import React, {Fragment, useContext} from "react";
import { TokenContext } from "../tokenContext/TokenContext";
import './IndexSideBar.scss'

const IndexItem = ({title, token}) => {
  let classForItem = "btn index-item";
  const { setToken } = useContext(TokenContext);

  function handleItemClick(token) {
    setToken(token);
    console.log("Token set to: ", token)

  }

  return(<Fragment>
    <div onClick={()=>{handleItemClick(token)}} className={classForItem}>
        {title}
    </div>

  </Fragment>)
}

export default IndexItem