import React, {Fragment} from "react"
import Post from "./Post";

const PostFeed = ({ header, posts, token, endPoint, disabled }) => {

return( <Fragment>
          <h1 className="mb-4">{header}</h1>
          {posts.map((post, index) => (
            <Post key={index} {...post} token={token} disabled={disabled} endPoint={endPoint}/>
          ))}
      </Fragment>)
  };

  export default PostFeed