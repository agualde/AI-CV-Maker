import React, {Fragment} from "react"

const Post = ({ content, author }) => {

  return( <Fragment>
    <a href="" className="invisible-link"> 
      <div className="post">
        <h2>{author}</h2>
        <p>{content}</p>
      </div>
    </a>
  </Fragment>
  )}

export default Post