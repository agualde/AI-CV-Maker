import React, {Fragment} from "react"

const PlaceHolderPost = () => {

  return (
    <Fragment>
      <div className="post">
          <div className="placeholder-text" >
        <h2 style={{ fontSize: '1.5rem' }}>
          Where?
        </h2>
            
            </div>
          <p>
            <div className="placeholder-text">Role?</div>
          </p>
          <div style={{minHeight: '8rem'}}>
            <div className="placeholder-text">Tell us more!</div>
          </div>
          <div>
            <button className="btn btn-warning chat-gpt hidden-button" style={{color: 'white'}} disabled>GENERATE TEXT</button>
          </div>
      </div>
    </Fragment>
  );}

export default PlaceHolderPost