import React, {Fragment, useState} from "react";
import './IndexSideBar.scss'

const IndexItem = ({info}) => {

  let classForItem = info['selected'] ? "btn index-item selected" : "btn index-item";

  return(<Fragment>
    <div className={classForItem} >
        {info['title']}
    </div>

  </Fragment>)
}

export default IndexItem