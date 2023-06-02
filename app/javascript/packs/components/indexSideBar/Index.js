import React, {Fragment, useState} from "react";
import IndexItem from "./IndexItem";
import POSTButton from "./POSTButton";
import './IndexSideBar.scss'

const Index = ({coreInfos}) => {

  return(<Fragment>
    <div className="index-tower">

        <POSTButton />

        <div className="index-list">
          {coreInfos.map((info, index) => (
            <IndexItem key={index} info={info} />
          ))}
        </div>
    </div>
  </Fragment>)
}

export default Index