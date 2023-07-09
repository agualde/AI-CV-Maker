import React, { useState, useEffect, useContext, Fragment} from "react";
import Loader from "../loader/Loader";
import Profile from "../profile/Profile";
import './../container/container.scss';
import { TokenContext } from "../tokenContext/TokenContext";



const TemporaryContainer = ({token}) => {

  if(!token) {return <Loader />}

  return (  <TokenContext.Provider  value={{token}}> 
              <div className="container">
                <Profile disabled={true} />
              </div>
              </TokenContext.Provider>
  );
}

export default TemporaryContainer;
