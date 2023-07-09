import React, {Fragment, useState} from "react";
import IndexItem from "./IndexItem";
import POSTButton from "./POSTButton";
import './IndexSideBar.scss'

const Index = ({data}) => {

  return(<Fragment>
        <POSTButton />

        <div className="index-tower">
            <div className="index-list">
              {data.map((info, index) => (
                <IndexItem key={index} title={info.title} incomingToken={info.id}/>
              ))}
            </div>
        </div>
  </Fragment>)
}

export default Index