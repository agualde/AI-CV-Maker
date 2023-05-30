import React, {Fragment} from "react"
import Post from "./Post";

const PostFeed = ({ header, posts }) => {

return( <Fragment>
          <h1 className="mb-3">{header}</h1>
          {posts.map((post, index) => (
            <Post key={index} {...post} />
          ))}
      </Fragment>)
  };

  export default PostFeed