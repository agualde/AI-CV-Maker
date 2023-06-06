import React, {Fragment} from "react"
import Post from "./Post";
import PlaceHolderPost from "./PlaceHolderPost";

const PostFeed = ({ header, posts, token, disabled }) => {
debugger
if(posts === undefined){return(<Fragment>
  <h1 className="mb-4">{header}</h1>
<PlaceHolderPost/>
</Fragment>
)}

return( <Fragment>
          <h1 className="mb-4">{header}</h1>
          {posts.map((post, index) => (
            <Post key={index} {...post} token={token} disabled={disabled} section={header}/>
          ))}
      </Fragment>)
  };

  export default PostFeed