import React, {Fragment} from "react";
import robot from './robot-with-a-gear.png'
import './forbidden.scss';

const Forbidden = () => {

return (<Fragment>
        <div className="forbidden-container">
          <div className="forbidden-items-wrapper">
            <img src={robot} alt="" />
            <br/>
            <div style={{textAlign: 'center'}}>
              404
              <br/>
              You are not authorized to access this page.
            </div>
          </div>
        </div>
        </Fragment>

      )}

export default Forbidden