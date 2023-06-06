import React, { useState, useEffect, useContext} from "react";
import Loader from "../loader/Loader";
import Profile from "../profile/Profile";
import './../container/container.scss';
import { TokenContext } from "../tokenContext/TokenContext";


const TemporaryContainer = ({token}) => {
debugger
  const { setToken } = useContext(TokenContext);

  useEffect(() => {
    if(!token) {return;}

    setToken(token)
  }, [token])

  // if (!token) return <Loader/>
  return ( <TokenContext.Provider value={{ temporaryToken }}>
            <div className="container">
              <Profile disabled={true}/>
            </div>
           </TokenContext.Provider>
  );
}

export default TemporaryContainer;
