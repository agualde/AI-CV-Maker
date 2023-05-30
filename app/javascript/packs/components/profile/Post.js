import React, {Fragment} from "react"

const Post = ({ content, author }) => {

  return( <Fragment>
    <div className="post">
      <h2>{author}</h2>
      <p>{content}</p>
    </div>
  </Fragment>
  )}

export default Post