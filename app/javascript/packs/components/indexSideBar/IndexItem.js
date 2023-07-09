import React, {Fragment, useContext} from "react";
import { TokenContext } from "../tokenContext/TokenContext";
import './IndexSideBar.scss'

const IndexItem = ({title, incomingToken}) => {
  const { token, setToken } = useContext(TokenContext);

  const classForItem = (token == incomingToken) ? "selected btn index-item" : "btn index-item";

  function handleItemClick(incomingToken) {
    setToken(incomingToken);
    console.log("Token set to: ", incomingToken)

  }

  return(<Fragment>
    <div onClick={()=>{handleItemClick(incomingToken)}} className={classForItem}>
        {title}
    </div>

  </Fragment>)
}

export default IndexItem