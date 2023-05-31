import React, {Fragment} from "react"

const Icons = () => {

  return ( <Fragment>
            <div className={'sidebar'}>
              <a href="" className="invisible-link" target="_blank"> 
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="" style={{height:'4rem', cursor:'pointer'}}/>
              </a>

              <a href="" className="invisible-link" target="_blank">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="" style={{height:'4rem', marginTop:'1rem', cursor:'pointer'}}/>
              </a>

              <a href="" className="invisible-link" target="_blank"> 
                <img src="https://www.citypng.com/public/uploads/preview/upwork-square-logo-icon-png-11662556513ra2hytunnx.png" alt="" style={{height:'4rem', marginTop:'1rem', cursor:'pointer'}}/>
              </a>

              <a href="" className="invisible-link" target="_blank">
                <img src="https://cdn.dribbble.com/users/1161517/screenshots/7200525/dribbble.gif" alt="" style={{height:'3rem', marginTop:'1rem', cursor:'pointer'}}/>
              </a>
            </div>
          </Fragment>
  )
};

export default Icons