import React, {Fragment} from "react"
import Post from "./Post";

const PostFeed = ({ posts }) => {

return( <Fragment>
        <div className="post-feed">
          {posts.map((post, index) => (
            <Post key={index} {...post} />
          ))}
        </div>
      </Fragment>)
  };

  export default PostFeed