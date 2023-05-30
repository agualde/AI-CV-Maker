import React, {Fragment} from "react"

const SideBar = ({ about, className }) => {
  debugger
  return ( <Fragment>
            <div className={className}>
              <h3>About</h3>
              <p>{about}</p>
            </div>
          </Fragment>
  )
};

export default SideBar