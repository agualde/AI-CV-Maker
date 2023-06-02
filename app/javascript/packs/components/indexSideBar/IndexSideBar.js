import React, {Fragment} from "react";
import UserFunction from "./UserFunctions";
import Index from "./Index";
import './IndexSideBar.scss'

const IndexSideBar = ({data}) => {

  const coreInfos = [
    {title: 'Ruby on Rails Developer', selected: true},
    {title: 'Marketing Specialist'},
    {title: 'Ruby on Rails Developer'},
    {title: 'Marketing Specialist'},
    {title: 'Ruby on Rails Developer'},
    {title: 'Marketing Specialist'},
    {title: 'Ruby on Rails Developer'},
    {title: 'Marketing Specialist'},
    {title: 'Ruby on Rails Developer'},
    {title: 'Marketing Specialist'},
    {title: 'Ruby on Rails Developer'},
    {title: 'Marketing Specialist'},
    {title: 'Ruby on Rails Developer'},
    {title: 'Marketing Specialist'},
    {title: 'Ruby on Rails Developer'},
    {title: 'Marketing Specialist'},
    {title: 'Ruby on Rails Developer'},
    {title: 'Marketing Specialist'},
    {title: 'Ruby on Rails Developer'},
    {title: 'Marketing Specialist'},
    {title: 'Ruby on Rails Developer'},
    {title: 'Marketing Specialist'},
    {title: 'Ruby on Rails Developer'},
    {title: 'Marketing Specialist'},
    {title: 'Ruby on Rails Developer'},
    {title: 'Marketing Specialist'},
    {title: 'Ruby on Rails Developer'},
    {title: 'Marketing Specialist'},
    {title: 'Ruby on Rails Developer'},
    {title: 'Marketing Specialist'},
    {title: 'Ruby on Rails Developer'},
    {title: 'Marketing Specialist'},
    {title: 'Ruby on Rails Developer'},
    {title: 'Marketing Specialist'},
    {title: 'Ruby on Rails Developer'},
    {title: 'Marketing Specialist'},
    {title: 'Ruby on Rails Developer'},
    {title: 'Marketing Specialist'},
    {title: 'Ruby on Rails Developer'},
    {title: 'Marketing Specialist'},
    {title: 'Ruby on Rails Developer'},
    {title: 'Marketing Specialist'},
    {title: 'Ruby on Rails Developer'},
    {title: 'Marketing Specialist'},
    {title: 'Ruby on Rails Developer'},
    {title: 'Marketing Specialist'}
  ]


  return(<Fragment>
    <div className="index-side-bar">
      <Index coreInfos={coreInfos}/>

      <UserFunction data={data}/>
    </div>
  </Fragment>)
}

export default IndexSideBar